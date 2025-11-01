import { useMemo } from "react";
import { ListChecks, RefreshCcw, TimerReset } from "lucide-react";
import { useLabStore } from "../store/labStore";

function StatusBar() {
  const experiment = useLabStore((state) => {
    const id = state.selectedExperimentId;
    return id ? state.experimentById[id] : undefined;
  });
  const progress = useLabStore((state) => {
    const id = state.selectedExperimentId;
    return id ? state.experimentProgress[id] : undefined;
  });
  const currentStep = useLabStore((state) => state.getCurrentStep());
  const resetCurrentExperiment = useLabStore((state) => state.resetCurrentExperiment);
  const markCurrentStepComplete = useLabStore((state) => state.markCurrentStepComplete);

  const timerLabel = useMemo(() => {
    if (!progress?.startedAt) {
      return "Not started";
    }
    if (progress.completedAt) {
      return "Completed";
    }
    return new Date(progress.startedAt).toLocaleTimeString();
  }, [progress?.startedAt, progress?.completedAt]);

  const stepStatus = useMemo(() => {
    if (!experiment || !progress) {
      return "Select an experiment";
    }
    if (progress.completedAt) {
      return "All steps completed";
    }
    const currentIndex = progress.currentStepIndex < experiment.steps.length ? progress.currentStepIndex + 1 : experiment.steps.length;
    return `Step ${currentIndex} of ${experiment.steps.length}`;
  }, [experiment, progress]);

  return (
    <footer className="flex h-12 items-center justify-between border-t border-gray-800 bg-gray-950 px-4 text-sm">
      <div className="flex items-center gap-6 overflow-hidden">
        <span className="truncate font-semibold text-gray-200">
          Experiment: {experiment?.title ?? "--"}
        </span>
        <span className="flex items-center gap-1 text-gray-400">
          <TimerReset className="h-4 w-4" />
          {timerLabel}
        </span>
        <span className="hidden items-center gap-1 text-gray-400 sm:flex">
          <ListChecks className="h-4 w-4" />
          {stepStatus}
        </span>
        {currentStep && !progress?.completedAt ? (
          <span className="hidden max-w-xs truncate text-xs text-gray-400 lg:block">
            Current: {currentStep.instruction}
          </span>
        ) : null}
        {progress ? (
          <span className="hidden items-center gap-1 text-gray-400 sm:flex">
            Notes: {progress.observations.length}
          </span>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        <button
          className="rounded-md border border-gray-700 px-3 py-1 text-gray-200 hover:bg-gray-800"
          onClick={() => resetCurrentExperiment()}
        >
          Reset
        </button>
        <button
          className="rounded-md border border-primary px-3 py-1 text-primary hover:bg-primary/10 disabled:cursor-not-allowed disabled:border-gray-700 disabled:text-gray-500"
          onClick={() => markCurrentStepComplete()}
          disabled={!currentStep}
        >
          <RefreshCcw className="mr-1 inline h-4 w-4" />
          Complete Step
        </button>
      </div>
    </footer>
  );
}

export default StatusBar;
