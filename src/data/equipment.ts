import type { EquipmentDefinition } from "../types/equipment";

export const equipmentCatalog: EquipmentDefinition[] = [
  {
    id: "beaker",
    name: "Beaker",
    type: "glassware",
    model3D: "assets/models/beaker.glb",
    properties: {
      capacity: "250 ml",
      material: "glass",
      interactable: true
    },
    interactions: ["drag", "pour", "rotate"]
  },
  {
    id: "thermometer",
    name: "Thermometer",
    type: "measuring",
    model3D: "assets/models/thermometer.glb",
    properties: {
      material: "glass",
      interactable: true
    },
    interactions: ["drag", "measure"]
  }
];
