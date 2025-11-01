import { create } from "zustand";
import type { StateCreator } from "zustand";
import { equipmentCatalog } from "../data/equipment";
import type { EquipmentDefinition } from "../types/equipment";

export interface LabEquipmentInstance {
  id: string;
  definitionId: string;
  position: [number, number, number];
}

export interface LabState {
  equipmentCatalog: EquipmentDefinition[];
  placedEquipment: LabEquipmentInstance[];
  addEquipment: (definitionId: string) => void;
  updateEquipmentPosition: (id: string, position: [number, number, number]) => void;
  removeEquipment: (id: string) => void;
}

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `equipment-${Math.random().toString(36).slice(2, 10)}`;
};

const labStore: StateCreator<LabState> = (set) => ({
  equipmentCatalog,
  placedEquipment: [],
  addEquipment: (definitionId: string) => {
    const id = `${definitionId}-${generateId()}`;
  set((state: LabState) => ({
      placedEquipment: [
        ...state.placedEquipment,
        {
          id,
          definitionId,
          position: [0, 1.5, 0]
        }
      ]
    }));
  },
  updateEquipmentPosition: (id: string, position: [number, number, number]) => {
    set((state: LabState) => ({
      placedEquipment: state.placedEquipment.map((item: LabEquipmentInstance) =>
        item.id === id ? { ...item, position } : item
      )
    }));
  },
  removeEquipment: (id: string) => {
    set((state: LabState) => ({
      placedEquipment: state.placedEquipment.filter((item: LabEquipmentInstance) => item.id !== id)
    }));
  }
});

export const useLabStore = create<LabState>(labStore);
