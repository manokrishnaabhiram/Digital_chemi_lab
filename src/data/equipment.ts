import type { LabEquipment } from '../types';

export const labEquipment: LabEquipment[] = [
  // Glassware
  {
    id: 'beaker-50',
    name: 'Beaker 50ml',
    type: 'glassware',
    icon: '🧪',
    description: 'Small glass beaker for holding liquids',
    capacity: '50ml',
    draggable: true
  },
  {
    id: 'beaker-100',
    name: 'Beaker 100ml',
    type: 'glassware',
    icon: '🧪',
    description: 'Medium glass beaker for holding liquids',
    capacity: '100ml',
    draggable: true
  },
  {
    id: 'beaker-250',
    name: 'Beaker 250ml',
    type: 'glassware',
    icon: '🧪',
    description: 'Large glass beaker for holding liquids',
    capacity: '250ml',
    draggable: true
  },
  {
    id: 'test-tube',
    name: 'Test Tube',
    type: 'glassware',
    icon: '🧫',
    description: 'Glass test tube for small-scale experiments',
    capacity: '20ml',
    draggable: true
  },
  {
    id: 'conical-flask',
    name: 'Conical Flask',
    type: 'glassware',
    icon: '🧴',
    description: 'Conical flask for mixing and reactions',
    capacity: '250ml',
    draggable: true
  },
  {
    id: 'measuring-cylinder',
    name: 'Measuring Cylinder',
    type: 'measurement',
    icon: '📏',
    description: 'For precise volume measurements',
    capacity: '100ml',
    draggable: true
  },
  {
    id: 'petri-dish',
    name: 'Petri Dish',
    type: 'glassware',
    icon: '🫙',
    description: 'Shallow dish for observations',
    capacity: 'N/A',
    draggable: true
  },
  {
    id: 'funnel',
    name: 'Funnel',
    type: 'glassware',
    icon: '🔻',
    description: 'For transferring liquids',
    draggable: true
  },
  {
    id: 'glass-rod',
    name: 'Glass Rod',
    type: 'glassware',
    icon: '📍',
    description: 'For stirring solutions',
    draggable: true
  },
  {
    id: 'dropper',
    name: 'Dropper',
    type: 'measurement',
    icon: '💧',
    description: 'For adding liquids drop by drop',
    draggable: true
  },
  
  // Heating Equipment
  {
    id: 'bunsen-burner',
    name: 'Bunsen Burner',
    type: 'heating',
    icon: '🔥',
    description: 'Gas burner for heating',
    draggable: true
  },
  {
    id: 'spirit-lamp',
    name: 'Spirit Lamp',
    type: 'heating',
    icon: '🕯️',
    description: 'Alcohol lamp for gentle heating',
    draggable: true
  },
  {
    id: 'tripod-stand',
    name: 'Tripod Stand',
    type: 'heating',
    icon: '⚒️',
    description: 'Stand for supporting apparatus during heating',
    draggable: true
  },
  {
    id: 'wire-gauze',
    name: 'Wire Gauze',
    type: 'heating',
    icon: '〰️',
    description: 'Mesh for distributing heat evenly',
    draggable: true
  },
  
  // Measurement Tools
  {
    id: 'thermometer',
    name: 'Thermometer',
    type: 'measurement',
    icon: '🌡️',
    description: 'For measuring temperature',
    draggable: true
  },
  {
    id: 'ph-paper',
    name: 'pH Paper',
    type: 'measurement',
    icon: '📄',
    description: 'For testing pH of solutions',
    draggable: true
  },
  {
    id: 'litmus-paper-red',
    name: 'Red Litmus Paper',
    type: 'measurement',
    icon: '🔴',
    description: 'Turns blue in basic solution',
    draggable: true
  },
  {
    id: 'litmus-paper-blue',
    name: 'Blue Litmus Paper',
    type: 'measurement',
    icon: '🔵',
    description: 'Turns red in acidic solution',
    draggable: true
  },
  {
    id: 'weighing-balance',
    name: 'Weighing Balance',
    type: 'measurement',
    icon: '⚖️',
    description: 'For measuring mass of substances',
    draggable: false
  },
  
  // Safety Equipment
  {
    id: 'safety-goggles',
    name: 'Safety Goggles',
    type: 'safety',
    icon: '🥽',
    description: 'Protect eyes during experiments',
    draggable: true
  },
  {
    id: 'gloves',
    name: 'Safety Gloves',
    type: 'safety',
    icon: '🧤',
    description: 'Protect hands from chemicals',
    draggable: true
  },
  {
    id: 'tongs',
    name: 'Tongs',
    type: 'safety',
    icon: '🔧',
    description: 'For handling hot objects',
    draggable: true
  },
  {
    id: 'test-tube-holder',
    name: 'Test Tube Holder',
    type: 'safety',
    icon: '🗜️',
    description: 'For holding hot test tubes',
    draggable: true
  }
];

export const getEquipmentByType = (type: LabEquipment['type']): LabEquipment[] => {
  return labEquipment.filter(equipment => equipment.type === type);
};

export const getEquipmentById = (id: string): LabEquipment | undefined => {
  return labEquipment.find(equipment => equipment.id === id);
};
