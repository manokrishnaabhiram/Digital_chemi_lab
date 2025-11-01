import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  ListTodo,
  PackageSearch,
  ScrollText,
  ShieldAlert,
  Sparkle
} from "lucide-react";
import { useLabStore } from "../store/labStore";

function ExperimentPanel() {
  const experiment = useLabStore((state) => {
    const id = state.selectedExperimentId;
    return id ? state.experimentById[id] : undefined;
  });
  const progress = useLabStore((state) => {
    const id = state.selectedExperimentId;
    return id ? state.experimentProgress[id] : undefined;
  });
  const currentStep = useLabStore((state) => state.getCurrentStep());
  const chemicalCatalog = useLabStore((state) => state.chemicalCatalog);
  const chemicalInventory = useLabStore((state) => state.chemicalInventory);
  const markCurrentStepComplete = useLabStore((state) => state.markCurrentStepComplete);
  const recordObservation = useLabStore((state) => state.recordObservation);
  const adjustChemicalInventory = useLabStore((state) => state.adjustChemicalInventory);

  const [observationDraft, setObservationDraft] = useState("");

  const chemicalMap = useMemo(() => {
    return chemicalCatalog.reduce<Record<string, (typeof chemicalCatalog)[number]>>((acc, chemical) => {
      acc[chemical.id] = chemical;
      return acc;
    }, {});
  }, [chemicalCatalog]);

  if (!experiment) {
    return (
      <aside className="w-72 border-l border-gray-800 bg-gray-950 p-4 text-sm text-gray-400">
        Select an experiment to begin.
      </aside>
    );
  }

  const totalSteps = experiment.steps.length;
  const completedSteps = progress?.completedStepIds.length ?? 0;

  const handleSaveObservation = () => {
    if (!observationDraft.trim()) {
      return;
    }
    recordObservation(observationDraft);
    setObservationDraft("");
  };

  return (
    <aside className="flex w-80 flex-col border-l border-gray-800 bg-gray-950">
      <div className="border-b border-gray-800 p-4">
        <h2 className="text-lg font-semibold text-gray-100">{experiment.title}</h2>
        <p className="mt-1 text-xs uppercase tracking-wide text-primary">
          {experiment.category} • {experiment.difficulty.toUpperCase()} • {experiment.duration} min
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Step {Math.min(progress?.currentStepIndex ?? 0 + 1, totalSteps)} of {totalSteps} • {completedSteps} completed
        </p>
      </div>

      <section className="flex-1 space-y-5 overflow-y-auto p-4 text-sm">
        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <Sparkle className="h-4 w-4" />
            Steps
          </header>
          <ol className="mt-2 space-y-2">
            {experiment.steps.map((step, index) => {
              const isCompleted = progress?.completedStepIds.includes(step.id) ?? false;
              const isCurrent = !isCompleted && index === (progress?.currentStepIndex ?? 0);
              const statusClass = isCompleted
                ? "border-green-500 bg-green-900/30"
                : isCurrent
                  ? "border-primary bg-blue-900/30"
                  : "border-gray-800 bg-gray-900";

              return (
                <li key={step.id} className={`rounded-md border px-3 py-2 text-gray-100 ${statusClass}`}>
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide">
                    <span>Step {index + 1}</span>
                    {isCompleted && (
                      <span className="flex items-center gap-1 text-green-400">
                        <CheckCircle2 className="h-3 w-3" /> Done
                      </span>
                    )}
                    {isCurrent && !isCompleted && <span className="text-xs text-primary">In Progress</span>}
                  </div>
                  <p className="mt-1 text-sm text-gray-200">{step.instruction}</p>
                </li>
              );
            })}
          </ol>
          <button
            className="mt-3 w-full rounded-md border border-primary px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:border-gray-700 disabled:text-gray-500"
            onClick={() => markCurrentStepComplete()}
            disabled={!currentStep}
          >
            {currentStep ? "Mark Current Step Complete" : "Experiment Completed"}
          </button>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <PackageSearch className="h-4 w-4" />
            Required Equipment
          </header>
          <ul className="mt-2 space-y-1 text-gray-300">
            {experiment.requiredEquipment.map((equipmentId) => (
              <li key={equipmentId} className="rounded border border-gray-800 bg-gray-900 px-3 py-2">
                {equipmentId.replace(/-/g, " ")}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <FlaskConical className="h-4 w-4" />
            Required Chemicals
          </header>
          <ul className="mt-2 space-y-2 text-gray-300">
            {experiment.requiredChemicals.map((chemicalId) => {
              const chemical = chemicalMap[chemicalId];
              const available = chemicalInventory[chemicalId] ?? 0;
              const unit = chemical?.unit ? ` ${chemical.unit}` : "";
              const usage = chemical?.unit === "drops" ? 1 : 5;

              return (
                <li key={chemicalId} className="rounded-md border border-gray-800 bg-gray-900 px-3 py-2">
                  <div className="flex items-center justify-between text-sm text-gray-100">
                    <span>{chemical?.name ?? chemicalId}</span>
                    <span className="text-xs text-gray-400">Available: {available}{unit}</span>
                  </div>
                  {chemical?.hazards && chemical.hazards.length > 0 && (
                    <div className="mt-1 text-xs text-red-400">
                      Hazards: {chemical.hazards.join(", ")}
                    </div>
                  )}
                  <div className="mt-2 flex gap-2">
                    <button
                      className="rounded border border-blue-500 px-2 py-1 text-xs text-blue-400 hover:bg-blue-500/10"
                      onClick={() => adjustChemicalInventory(chemicalId, -usage)}
                    >
                      Use {usage}{unit}
                    </button>
                    <button
                      className="rounded border border-green-500 px-2 py-1 text-xs text-green-400 hover:bg-green-500/10"
                      onClick={() => adjustChemicalInventory(chemicalId, usage)}
                    >
                      Refill {usage}{unit}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ScrollText className="h-4 w-4" />
            Theory
          </header>
          <p className="mt-2 whitespace-pre-line text-gray-300">{experiment.theory}</p>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ShieldAlert className="h-4 w-4" />
            Safety
          </header>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
            {experiment.safetyPrecautions.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ClipboardList className="h-4 w-4" />
            Learning Outcomes
          </header>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
            {experiment.learningOutcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>

        {experiment.observationPrompts && experiment.observationPrompts.length > 0 && (
          <div>
            <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              <ListTodo className="h-4 w-4" />
              Observation Prompts
            </header>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
              {experiment.observationPrompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ListTodo className="h-4 w-4" />
            Observations
          </header>
          <textarea
            value={observationDraft}
            onChange={(event) => setObservationDraft(event.target.value)}
            placeholder="Record observations, readings, or notes..."
            className="mt-2 w-full rounded-md border border-gray-800 bg-gray-900 p-2 text-sm text-gray-200 focus:border-primary focus:outline-none"
            rows={3}
          />
          <div className="mt-2 flex items-center justify-between">
            <button
              className="rounded border border-primary px-3 py-1 text-xs text-primary hover:bg-primary/10 disabled:cursor-not-allowed disabled:border-gray-700 disabled:text-gray-500"
              onClick={handleSaveObservation}
              disabled={!observationDraft.trim()}
            >
              Save Observation
            </button>
            <span className="text-xs text-gray-500">
              {progress?.observations.length ?? 0} saved
            </span>
          </div>
          {progress?.observations.length ? (
            <ul className="mt-2 space-y-2 text-gray-300">
              {progress.observations.map((item, index) => (
                <li key={`${item}-${index}`} className="rounded border border-gray-800 bg-gray-900 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </aside>
  );
}

export default ExperimentPanel;
