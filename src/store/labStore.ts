import { create } from "zustand";
import type { StateCreator } from "zustand";
import { equipmentCatalog } from "../data/equipment";
import { chemicalCatalog } from "../data/chemicals";
import { experimentsByCategory } from "../data/experiments";
import type { EquipmentDefinition } from "../types/equipment";
import type { ChemicalDefinition } from "../types/chemical";
import type { Experiment, ExperimentCategory, ExperimentStep } from "../types/experiment";

export interface LabEquipmentInstance {
  id: string;
  definitionId: string;
  position: [number, number, number];
}

export interface ExperimentProgress {
  currentStepIndex: number;
  completedStepIds: number[];
  observations: string[];
  startedAt: number | null;
  completedAt: number | null;
}

export interface LabState {
  equipmentCatalog: EquipmentDefinition[];
  chemicalCatalog: ChemicalDefinition[];
  chemicalInventory: Record<string, number>;
  experimentsByCategory: ExperimentCategory[];
  experimentById: Record<string, Experiment>;
  selectedExperimentId: string | null;
  experimentProgress: Record<string, ExperimentProgress>;
  placedEquipment: LabEquipmentInstance[];
  addEquipment: (definitionId: string) => void;
  updateEquipmentPosition: (id: string, position: [number, number, number]) => void;
  removeEquipment: (id: string) => void;
  selectExperiment: (experimentId: string) => void;
  markCurrentStepComplete: () => void;
  recordObservation: (observation: string) => void;
  resetCurrentExperiment: () => void;
  adjustChemicalInventory: (chemicalId: string, delta: number) => void;
  getSelectedExperiment: () => Experiment | undefined;
  getCurrentStep: () => ExperimentStep | undefined;
}

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `equipment-${Math.random().toString(36).slice(2, 10)}`;
};

// Distribute spawned equipment across a simple grid so meshes do not overlap.
const computeSpawnPosition = (index: number): [number, number, number] => {
  const spacing = 1.8;
  const columns = 3;
  const xOffset = ((columns - 1) * spacing) / 2;
  const x = (index % columns) * spacing - xOffset;
  const z = Math.floor(index / columns) * spacing * -1;
  return [x, 1.5, z - spacing];
};

const createInitialProgress = (): ExperimentProgress => ({
  currentStepIndex: 0,
  completedStepIds: [],
  observations: [],
  startedAt: null,
  completedAt: null
});

const experimentList = experimentsByCategory.flatMap((category) => category.experiments);

const experimentById = experimentList.reduce<Record<string, Experiment>>((acc, experiment) => {
  acc[experiment.id] = experiment;
  return acc;
}, {});

const initialProgress = experimentList.reduce<Record<string, ExperimentProgress>>((acc, experiment) => {
  acc[experiment.id] = createInitialProgress();
  return acc;
}, {});

const initialChemicalInventory = chemicalCatalog.reduce<Record<string, number>>((acc, chemical) => {
  acc[chemical.id] = chemical.defaultAmount ?? 0;
  return acc;
}, {});

const initialExperimentId = experimentList[0]?.id ?? null;

if (initialExperimentId && initialProgress[initialExperimentId]) {
  initialProgress[initialExperimentId] = {
    ...initialProgress[initialExperimentId],
    startedAt: Date.now()
  };
}

const labStore: StateCreator<LabState> = (set, get) => ({
  equipmentCatalog,
  chemicalCatalog,
  chemicalInventory: initialChemicalInventory,
  experimentsByCategory,
  experimentById,
  selectedExperimentId: initialExperimentId,
  experimentProgress: initialProgress,
  placedEquipment: [],
  addEquipment: (definitionId: string) => {
    set((state) => {
      const id = `${definitionId}-${generateId()}`;
      const index = state.placedEquipment.length;
      const position = computeSpawnPosition(index);
      return {
        placedEquipment: [
          ...state.placedEquipment,
          {
            id,
            definitionId,
            position
          }
        ]
      };
    });
  },
  updateEquipmentPosition: (id: string, position: [number, number, number]) => {
    set((state) => ({
      placedEquipment: state.placedEquipment.map((item) =>
        item.id === id ? { ...item, position } : item
      )
    }));
  },
  removeEquipment: (id: string) => {
    set((state) => ({
      placedEquipment: state.placedEquipment.filter((item) => item.id !== id)
    }));
  },
  selectExperiment: (experimentId: string) => {
    const experiment = get().experimentById[experimentId];
    if (!experiment) {
      return;
    }

    set((state) => {
  const existingProgress = state.experimentProgress[experimentId] ?? createInitialProgress();
      const updatedProgress =
        existingProgress.startedAt === null
          ? { ...existingProgress, startedAt: Date.now() }
          : existingProgress;

      return {
        selectedExperimentId: experimentId,
        experimentProgress: {
          ...state.experimentProgress,
          [experimentId]: updatedProgress
        }
      };
    });
  },
  markCurrentStepComplete: () => {
    const experimentId = get().selectedExperimentId;
    if (!experimentId) {
      return;
    }

    const experiment = get().experimentById[experimentId];
    if (!experiment) {
      return;
    }

    set((state) => {
  const currentProgress = state.experimentProgress[experimentId] ?? createInitialProgress();
      const currentStep = experiment.steps[currentProgress.currentStepIndex];

      if (!currentStep) {
        return state;
      }

      const completedStepIds = currentProgress.completedStepIds.includes(currentStep.id)
        ? currentProgress.completedStepIds
        : [...currentProgress.completedStepIds, currentStep.id];

      const nextIndex = currentProgress.currentStepIndex + 1;
      const isExperimentComplete = nextIndex >= experiment.steps.length;

      const updatedProgress: ExperimentProgress = {
        ...currentProgress,
        completedStepIds,
        currentStepIndex: nextIndex,
        completedAt: isExperimentComplete
          ? currentProgress.completedAt ?? Date.now()
          : currentProgress.completedAt
      };

      return {
        experimentProgress: {
          ...state.experimentProgress,
          [experimentId]: updatedProgress
        }
      };
    });
  },
  recordObservation: (observation: string) => {
    const experimentId = get().selectedExperimentId;
    if (!experimentId) {
      return;
    }

    const experiment = get().experimentById[experimentId];
    if (!experiment) {
      return;
    }

    const trimmed = observation.trim();
    if (!trimmed) {
      return;
    }

    set((state) => {
  const currentProgress = state.experimentProgress[experimentId] ?? createInitialProgress();
      return {
        experimentProgress: {
          ...state.experimentProgress,
          [experimentId]: {
            ...currentProgress,
            observations: [...currentProgress.observations, trimmed]
          }
        }
      };
    });
  },
  resetCurrentExperiment: () => {
    const experimentId = get().selectedExperimentId;
    if (!experimentId) {
      return;
    }

    const experiment = get().experimentById[experimentId];
    if (!experiment) {
      return;
    }

    set((state) => ({
      experimentProgress: {
        ...state.experimentProgress,
        [experimentId]: {
          ...createInitialProgress(),
          startedAt: Date.now()
        }
      }
    }));
  },
  adjustChemicalInventory: (chemicalId: string, delta: number) => {
    set((state) => {
      const currentAmount = state.chemicalInventory[chemicalId] ?? 0;
      const updatedAmount = Math.max(0, Math.round((currentAmount + delta) * 100) / 100);
      return {
        chemicalInventory: {
          ...state.chemicalInventory,
          [chemicalId]: updatedAmount
        }
      };
    });
  },
  getSelectedExperiment: () => {
    const experimentId = get().selectedExperimentId;
    if (!experimentId) {
      return undefined;
    }
    return get().experimentById[experimentId];
  },
  getCurrentStep: () => {
    const experiment = get().getSelectedExperiment();
    if (!experiment) {
      return undefined;
    }
  const progress = get().experimentProgress[experiment.id] ?? createInitialProgress();
    return experiment.steps[progress.currentStepIndex];
  }
});

export const useLabStore = create<LabState>(labStore);
