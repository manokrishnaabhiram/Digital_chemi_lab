import type { ExperimentCategory } from "../../types/experiment";
import { heatExperiments } from "./heat";
import { chemistryExperiments } from "./chemistry";

export const experimentsByCategory: ExperimentCategory[] = [
  {
    id: "heat",
    name: "Heat",
    experiments: heatExperiments
  },
  {
    id: "chemistry",
    name: "Chemistry Reactions",
    experiments: chemistryExperiments
  }
];
