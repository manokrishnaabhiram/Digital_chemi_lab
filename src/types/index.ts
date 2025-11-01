export interface Experiment {
  id: string;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: number; // in minutes
  description: string;
  objective: string;
  materials: string[];
  procedure: string[];
  observations: string[];
  conclusion: string;
  safetyPrecautions: string[];
  theoryConcepts: string[];
}

export interface LabEquipment {
  id: string;
  name: string;
  type: 'glassware' | 'heating' | 'measurement' | 'safety' | 'chemical';
  icon: string;
  description: string;
  capacity?: string;
  draggable: boolean;
}

export interface ChemicalReaction {
  reactants: string[];
  products: string[];
  conditions?: string[];
  observations: string[];
  equation: string;
}
