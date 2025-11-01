import { useMemo } from "react";
import { ScrollText, ShieldAlert, Sparkle } from "lucide-react";
import { experimentsByCategory } from "../data/experiments";

function ExperimentPanel() {
  const currentExperiment = useMemo(() => {
    const firstCategory = experimentsByCategory[0];
    return firstCategory?.experiments[0];
  }, []);

  if (!currentExperiment) {
    return (
      <aside className="w-64 border-l border-gray-800 bg-gray-950 p-4 text-sm text-gray-400">
        Select an experiment to begin.
      </aside>
    );
  }

  return (
    <aside className="flex w-72 flex-col border-l border-gray-800 bg-gray-950">
      <div className="border-b border-gray-800 p-4">
        <h2 className="text-lg font-semibold text-gray-100">{currentExperiment.title}</h2>
        <p className="mt-1 text-xs uppercase tracking-wide text-primary">
          {currentExperiment.category} • {currentExperiment.difficulty.toUpperCase()}
        </p>
      </div>

      <section className="flex-1 space-y-4 overflow-y-auto p-4 text-sm">
        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <Sparkle className="h-4 w-4" />
            Steps
          </header>
          <ol className="mt-2 space-y-2">
            {currentExperiment.steps.map((step) => (
              <li key={step.id} className="rounded-md bg-gray-900 px-3 py-2 text-gray-200">
                {step.instruction}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ScrollText className="h-4 w-4" />
            Theory
          </header>
          <p className="mt-2 whitespace-pre-line text-gray-300">{currentExperiment.theory}</p>
        </div>

        <div>
          <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ShieldAlert className="h-4 w-4" />
            Safety
          </header>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
            {currentExperiment.safetyPrecautions.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>
    </aside>
  );
}

export default ExperimentPanel;
