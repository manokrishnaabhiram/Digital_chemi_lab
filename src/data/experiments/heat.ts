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
    ],
    observationPrompts: [
      "Record the initial temperature of water.",
      "Describe the temperature change after adding ice.",
      "Note the final temperature once equilibrium is reached."
    ]
  },
  {
    id: "heat-02",
    title: "Specific Heat of Water",
    category: "Heat",
    difficulty: "medium",
    duration: 25,
    requiredEquipment: ["beaker", "tripod-stand", "spirit-lamp", "thermometer", "glass-rod"],
    requiredChemicals: ["water"],
    steps: [
      {
        id: 1,
        instruction: "Measure 200 ml of water using the measuring cylinder and pour into the beaker.",
        requiredActions: ["measure-volume", "pour-water"],
        validationKey: "waterVolume",
        expectedValue: 200
      },
      {
        id: 2,
        instruction: "Place the beaker on the tripod stand with the spirit lamp below.",
        requiredActions: ["position-beaker", "place-spirit-lamp"],
        validationKey: "setupCompleted",
        expectedValue: true
      },
      {
        id: 3,
        instruction: "Heat the water for 5 minutes while stirring gently with the glass rod.",
        requiredActions: ["heat", "stir"],
        validationKey: "heatingDuration",
        expectedValue: 5
      },
      {
        id: 4,
        instruction: "Record the temperature rise and calculate heat absorbed using Q = m c ΔT.",
        requiredActions: ["record-temperature", "calculate"],
        validationKey: "calculationCompleted",
        expectedValue: true
      }
    ],
    theory:
      "The specific heat capacity of a substance is the amount of heat required to raise the temperature of 1 gram of the substance by 1°C. Water has a high specific heat capacity, making it effective for thermal regulation.",
    safetyPrecautions: [
      "Ensure the spirit lamp flame is stable before heating.",
      "Use tongs to adjust equipment while heating.",
      "Do not leave the flame unattended."
    ],
    learningOutcomes: [
      "Apply the heat equation to determine specific heat.",
      "Observe the effect of continuous heating on temperature rise.",
      "Practice safe heating techniques in the laboratory."
    ],
    observationPrompts: [
      "Record initial and final temperatures.",
      "Note any heat losses observed during the process.",
      "Summarize the calculated specific heat value."
    ]
  },
  {
    id: "heat-03",
    title: "Latent Heat of Fusion of Ice",
    category: "Heat",
    difficulty: "medium",
    duration: 30,
    requiredEquipment: ["beaker", "thermometer", "glass-rod", "measuring-cylinder"],
    requiredChemicals: ["water", "ice"],
    steps: [
      {
        id: 1,
        instruction: "Measure 150 ml of warm water (about 40°C) and pour into the beaker.",
        requiredActions: ["measure-volume", "pour-water"],
        validationKey: "waterInitialTemp",
        expectedValue: 40
      },
      {
        id: 2,
        instruction: "Record the initial temperature of the water.",
        requiredActions: ["record-temperature"],
        validationKey: "initialTempRecorded",
        expectedValue: true
      },
      {
        id: 3,
        instruction: "Add 50 g of crushed ice and stir gently until it melts completely.",
        requiredActions: ["add-ice", "stir"],
        validationKey: "iceMass",
        expectedValue: 50
      },
      {
        id: 4,
        instruction: "Record the final equilibrium temperature and compute the latent heat absorbed by ice.",
        requiredActions: ["record-temperature", "calculate"],
        validationKey: "latentHeatCalculated",
        expectedValue: true
      }
    ],
    theory:
      "Latent heat of fusion is the heat energy required to convert a solid into a liquid at constant temperature. When ice melts in water, it absorbs heat without changing temperature until the phase change is complete.",
    safetyPrecautions: [
      "Wipe any spilled water immediately to avoid slipping.",
      "Avoid direct contact with ice for prolonged periods to prevent skin irritation.",
      "Handle glassware carefully when it becomes cold."
    ],
    learningOutcomes: [
      "Differentiate between sensible heat and latent heat.",
      "Calculate latent heat using energy balance.",
      "Understand energy conservation in phase change processes."
    ],
    observationPrompts: [
      "Record initial and final temperatures.",
      "Note the time taken for ice to melt completely.",
      "Describe how the temperature changed during melting."
    ]
  }
];
