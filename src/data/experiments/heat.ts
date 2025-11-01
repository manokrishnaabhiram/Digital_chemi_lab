import type { Experiment } from "../../types/experiment";

export const heatExperiments: Experiment[] = [
  {
    id: "heat-01",
    title: "Heat and Cold",
    category: "Heat",
    difficulty: "easy",
    duration: 15,
    requiredEquipment: ["beaker", "thermometer"],
    requiredChemicals: ["water"],
    steps: [
      {
        id: 1,
        instruction: "Take a beaker and fill it with 100 ml of water.",
        requiredActions: ["add-beaker", "pour-water"],
        validationKey: "waterVolume",
        expectedValue: 100
      },
      {
        id: 2,
        instruction: "Place the thermometer in the beaker.",
        requiredActions: ["add-thermometer"],
        validationKey: "thermometerInBeaker",
        expectedValue: true
      },
      {
        id: 3,
        instruction: "Record the initial temperature.",
        requiredActions: ["record-temperature"],
        validationKey: "initialTempRecorded",
        expectedValue: true
      }
    ],
    theory:
      "Heat flows from hotter objects to cooler ones until both reach the same temperature. Water is an excellent medium for observing temperature changes because it absorbs heat slowly.",
    safetyPrecautions: [
      "Handle the thermometer gently to avoid breakage.",
      "Do not fill the beaker to the brim to prevent spills."
    ],
    learningOutcomes: [
      "Identify the direction of heat flow between objects.",
      "Measure temperature accurately using a thermometer."
    ]
  }
];
