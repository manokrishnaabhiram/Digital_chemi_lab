import type { ExperimentCategory } from "../../types/experiment";
import { heatExperiments } from "./heat";

export const experimentsByCategory: ExperimentCategory[] = [
  {
    id: "heat",
    name: "Heat",
    experiments: heatExperiments
  }
];
