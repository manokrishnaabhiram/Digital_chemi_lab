import type { Experiment } from "../../types/experiment";

export const chemistryExperiments: Experiment[] = [
  {
    id: "chem-01",
    title: "Neutralization of Acid and Base",
    category: "Acids, Bases and Salts",
    difficulty: "medium",
    duration: 20,
    requiredEquipment: ["beaker", "burette", "glass-rod", "measuring-cylinder"],
    requiredChemicals: ["hydrochloric-acid", "sodium-hydroxide", "phenolphthalein"],
    steps: [
      {
        id: 1,
        instruction: "Measure 25 ml of sodium hydroxide solution using the measuring cylinder and pour into a beaker.",
        requiredActions: ["measure-volume", "pour-base"],
        validationKey: "baseVolume",
        expectedValue: 25
      },
      {
        id: 2,
        instruction: "Add 2 drops of phenolphthalein indicator to the base and note the color.",
        requiredActions: ["add-indicator", "observe-color"],
        validationKey: "indicatorAdded",
        expectedValue: true
      },
      {
        id: 3,
        instruction: "Fill the burette with hydrochloric acid and record the initial reading.",
        requiredActions: ["fill-burette", "record-volume"],
        validationKey: "acidInitialReading",
        expectedValue: true
      },
      {
        id: 4,
        instruction: "Titrate the acid into the base slowly while stirring until the solution just turns colorless.",
        requiredActions: ["titrate", "stir"],
        validationKey: "neutralizationReached",
        expectedValue: true
      },
      {
        id: 5,
        instruction: "Record the final burette reading and calculate the volume of acid used.",
        requiredActions: ["record-volume", "calculate"],
        validationKey: "acidVolumeUsed",
        expectedValue: true
      }
    ],
    theory:
      "During neutralization, hydrogen ions from acids combine with hydroxide ions from bases to form water. The heat released during this reaction depends on the strength of the acid and base.",
    safetyPrecautions: [
      "Wear gloves and safety goggles when handling acids and bases.",
      "Clean acid spills immediately using plenty of water.",
      "Never pipette acids or bases by mouth."
    ],
    learningOutcomes: [
      "Perform titration to determine the equivalence point.",
      "Distinguish between indicators used in acid-base reactions.",
      "Calculate concentration using titration data."
    ],
    observationPrompts: [
      "Record the color changes observed during titration.",
      "Note the temperature change, if any, after neutralization.",
      "Compute the molarity of the acid using the titration readings."
    ]
  },
  {
    id: "chem-02",
    title: "Displacement of Copper by Iron",
    category: "Chemical Reactions and Equations",
    difficulty: "easy",
    duration: 15,
    requiredEquipment: ["test-tube", "glass-rod"],
    requiredChemicals: ["copper-sulfate-solution", "iron-nail"],
    steps: [
      {
        id: 1,
        instruction: "Pour 10 ml of copper sulfate solution into a clean test tube.",
        requiredActions: ["measure-volume", "pour-solution"],
        validationKey: "solutionVolume",
        expectedValue: 10
      },
      {
        id: 2,
        instruction: "Clean the iron nail with sandpaper and immerse it fully in the solution.",
        requiredActions: ["clean-metal", "immerse"],
        validationKey: "nailImmersed",
        expectedValue: true
      },
      {
        id: 3,
        instruction: "Leave the setup undisturbed for 10 minutes and observe the changes.",
        requiredActions: ["wait", "observe"],
        validationKey: "waitDuration",
        expectedValue: 10
      },
      {
        id: 4,
        instruction: "Remove the nail and record the color of the solution and the nail.",
        requiredActions: ["record-observation"],
        validationKey: "observationsLogged",
        expectedValue: true
      }
    ],
    theory:
      "In a displacement reaction, a more reactive metal displaces a less reactive metal from its compound. Iron, being more reactive than copper, displaces copper from copper sulfate solution.",
    safetyPrecautions: [
      "Wear gloves when handling copper sulfate as it is toxic.",
      "Dispose the used solution according to the lab guidelines.",
      "Wash hands after handling the iron nail and solution."
    ],
    learningOutcomes: [
      "Identify displacement reactions and their observable changes.",
      "Relate the activity series of metals to reaction feasibility.",
      "Record qualitative observations accurately."
    ],
    observationPrompts: [
      "Describe the color of the solution before and after the reaction.",
      "Note the appearance of the iron nail after displacement.",
      "Write the balanced chemical equation for the reaction."
    ]
  }
];
