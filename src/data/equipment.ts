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
  },
  {
    id: "burette",
    name: "Burette",
    type: "measuring",
    model3D: "assets/models/burette.glb",
    properties: {
      capacity: "50 ml",
      material: "glass",
      interactable: true
    },
    interactions: ["drag", "pour", "measure"]
  },
  {
    id: "glass-rod",
    name: "Glass Stirring Rod",
    type: "glassware",
    model3D: "assets/models/glass-rod.glb",
    properties: {
      material: "glass",
      interactable: true
    },
    interactions: ["drag"]
  },
  {
    id: "tripod-stand",
    name: "Tripod Stand",
    type: "support",
    model3D: "assets/models/tripod-stand.glb",
    properties: {
      material: "iron",
      interactable: true
    },
    interactions: ["drag"]
  },
  {
    id: "spirit-lamp",
    name: "Spirit Lamp",
    type: "heating",
    model3D: "assets/models/spirit-lamp.glb",
    properties: {
      material: "brass",
      interactable: true
    },
    interactions: ["drag", "heat"]
  },
  {
    id: "test-tube",
    name: "Test Tube",
    type: "glassware",
    model3D: "assets/models/test-tube.glb",
    properties: {
      capacity: "25 ml",
      material: "glass",
      interactable: true
    },
    interactions: ["drag", "pour"]
  },
  {
    id: "measuring-cylinder",
    name: "Measuring Cylinder",
    type: "measuring",
    model3D: "assets/models/measuring-cylinder.glb",
    properties: {
      capacity: "100 ml",
      material: "glass",
      interactable: true
    },
    interactions: ["drag", "measure"]
  }
];
