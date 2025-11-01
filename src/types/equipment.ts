export type EquipmentType =
  | "glassware"
  | "heating"
  | "measuring"
  | "optical"
  | "electrical"
  | "chemicals"
  | "support";

export type EquipmentInteraction = "drag" | "rotate" | "pour" | "heat" | "measure" | "connect";

export interface EquipmentDefinition {
  id: string;
  name: string;
  type: EquipmentType;
  model3D: string;
  properties: {
    capacity?: string;
    material?: string;
    temperature?: number;
    interactable: boolean;
  };
  interactions: EquipmentInteraction[];
}
