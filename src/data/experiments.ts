import type { Experiment } from '../types';

export const experiments: Experiment[] = [
  {
    id: 'exp-001',
    title: 'Reaction of Zinc with Dilute Sulphuric Acid',
    category: 'Chemical Reactions',
    difficulty: 'Easy',
    duration: 30,
    description: 'Observe the reaction between zinc metal and dilute sulphuric acid to understand displacement reactions and hydrogen gas evolution.',
    objective: 'To study the reaction between zinc granules and dilute sulphuric acid and test the gas evolved.',
    materials: [
      'Zinc granules (5g)',
      'Dilute sulphuric acid (H₂SO₄)',
      'Test tube',
      'Test tube holder',
      'Delivery tube',
      'Match box',
      'Soap solution',
      'Beaker'
    ],
    procedure: [
      'Take about 5g of zinc granules in a clean, dry test tube.',
      'Add about 10ml of dilute sulphuric acid to the test tube.',
      'Observe the reaction and note any changes.',
      'Fit the test tube with a delivery tube.',
      'Pass the gas evolved through soap solution in a beaker.',
      'Bring a burning match stick near the gas bubbles.',
      'Observe and record the observations.'
    ],
    observations: [
      'Zinc granules start dissolving with evolution of a colorless, odorless gas.',
      'The solution becomes warm, indicating an exothermic reaction.',
      'Gas bubbles form in the soap solution.',
      'When a burning match stick is brought near the gas bubbles, they burn with a "pop" sound.',
      'This confirms the presence of hydrogen gas.'
    ],
    conclusion: 'Zinc reacts with dilute sulphuric acid to form zinc sulphate and hydrogen gas. The reaction is: Zn + H₂SO₄ → ZnSO₄ + H₂↑. Hydrogen gas burns with a pop sound.',
    safetyPrecautions: [
      'Handle dilute acid with care.',
      'Wear safety goggles and gloves.',
      'Keep inflammable materials away from the experiment.',
      'Perform the experiment in a well-ventilated area.',
      'Do not touch the test tube during the reaction as it gets hot.'
    ],
    theoryConcepts: [
      'Displacement reactions',
      'Activity series of metals',
      'Hydrogen gas test',
      'Exothermic reactions',
      'Metal-acid reactions'
    ]
  },
  {
    id: 'exp-002',
    title: 'Reaction Between Sodium Sulphate and Barium Chloride',
    category: 'Chemical Reactions',
    difficulty: 'Easy',
    duration: 20,
    description: 'Study the double displacement reaction and formation of a white precipitate.',
    objective: 'To observe a double displacement reaction and identify the precipitate formed.',
    materials: [
      'Sodium sulphate solution (Na₂SO₄)',
      'Barium chloride solution (BaCl₂)',
      'Test tubes (2)',
      'Dropper',
      'Glass rod'
    ],
    procedure: [
      'Take about 5ml of sodium sulphate solution in a clean test tube.',
      'Add barium chloride solution drop by drop using a dropper.',
      'Shake the test tube gently.',
      'Observe the changes in the solution.',
      'Let the solution stand for a few minutes and observe the precipitate.'
    ],
    observations: [
      'A white precipitate is formed immediately upon mixing the two solutions.',
      'The precipitate settles at the bottom of the test tube.',
      'The precipitate is insoluble in water.',
      'The reaction is instantaneous.'
    ],
    conclusion: 'Sodium sulphate reacts with barium chloride to form barium sulphate (white precipitate) and sodium chloride. The reaction is: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. This is a double displacement reaction.',
    safetyPrecautions: [
      'Handle chemicals carefully.',
      'Avoid contact with skin and eyes.',
      'Wear safety goggles.',
      'Wash hands after the experiment.'
    ],
    theoryConcepts: [
      'Double displacement reactions',
      'Precipitate formation',
      'Solubility',
      'Ionic compounds',
      'Chemical equations'
    ]
  },
  {
    id: 'exp-003',
    title: 'Testing pH of Different Solutions',
    category: 'Acids, Bases and Salts',
    difficulty: 'Easy',
    duration: 25,
    description: 'Determine the pH of various solutions using pH paper or universal indicator.',
    objective: 'To test the pH of different solutions and classify them as acidic, basic, or neutral.',
    materials: [
      'pH paper / Universal indicator',
      'Test tubes (6-8)',
      'Test tube stand',
      'Dropper',
      'Distilled water',
      'Sample solutions: Lemon juice, Vinegar, Soap solution, Baking soda solution, Milk, Salt solution, Hydrochloric acid (dilute), Sodium hydroxide (dilute)'
    ],
    procedure: [
      'Take small amounts of each test solution in separate test tubes.',
      'Dip a strip of pH paper into each solution one by one.',
      'Compare the color change with the pH color chart.',
      'Record the pH value of each solution.',
      'Classify each solution as acidic (pH < 7), neutral (pH = 7), or basic (pH > 7).'
    ],
    observations: [
      'Lemon juice and vinegar show pH around 2-3 (strongly acidic).',
      'Dilute HCl shows pH around 1-2 (very strongly acidic).',
      'Milk shows pH around 6-7 (slightly acidic to neutral).',
      'Salt solution shows pH around 7 (neutral).',
      'Baking soda solution shows pH around 8-9 (weakly basic).',
      'Soap solution shows pH around 9-10 (basic).',
      'Dilute NaOH shows pH around 12-14 (strongly basic).'
    ],
    conclusion: 'Different substances have different pH values. Acids have pH less than 7, bases have pH greater than 7, and neutral substances have pH equal to 7. pH measurement helps identify the acidic or basic nature of a solution.',
    safetyPrecautions: [
      'Do not taste any chemical solutions.',
      'Handle acids and bases with care.',
      'Wear safety goggles.',
      'Wash hands thoroughly after the experiment.',
      'Do not touch pH paper with wet fingers.'
    ],
    theoryConcepts: [
      'pH scale',
      'Acids and bases',
      'Neutral solutions',
      'Indicators',
      'Hydrogen ion concentration'
    ]
  },
  {
    id: 'exp-004',
    title: 'Preparation of Soap',
    category: 'Acids, Bases and Salts',
    difficulty: 'Medium',
    duration: 45,
    description: 'Prepare soap through the saponification process using oil and sodium hydroxide.',
    objective: 'To prepare soap by the saponification of oil and study its properties.',
    materials: [
      'Castor oil or vegetable oil (20ml)',
      'Sodium hydroxide solution (20% - 20ml)',
      'Sodium chloride (common salt)',
      'Beaker (250ml)',
      'Glass rod',
      'Funnel',
      'Filter paper',
      'Spirit lamp',
      'Tripod stand',
      'Wire gauze'
    ],
    procedure: [
      'Take 20ml of castor oil in a beaker.',
      'Add 20ml of 20% sodium hydroxide solution to the oil.',
      'Heat the mixture gently with constant stirring using a glass rod.',
      'Continue heating for about 15-20 minutes until the mixture thickens.',
      'Add a saturated solution of common salt (about 5-10ml) to the mixture.',
      'Allow the mixture to cool.',
      'Soap separates out as a solid.',
      'Filter the soap and dry it.',
      'Test the soap by washing your hands with it.'
    ],
    observations: [
      'On heating with NaOH, the oil forms a thick, sticky mixture.',
      'Addition of salt solution causes the soap to separate and float on top.',
      'The soap formed is soft and can lather with water.',
      'The soap has cleansing properties.'
    ],
    conclusion: 'Soap is prepared by the saponification process, which is the reaction between oil (fat) and sodium hydroxide. The reaction is: Oil + NaOH → Soap + Glycerol. The soap formed can be used for cleaning purposes.',
    safetyPrecautions: [
      'Handle sodium hydroxide with extreme care as it is corrosive.',
      'Wear safety goggles and gloves.',
      'Heat the mixture gently to avoid splashing.',
      'Do not let the mixture boil.',
      'Keep inflammable materials away.',
      'Wash hands thoroughly if NaOH comes in contact with skin.',
      'Perform the experiment in a well-ventilated area.'
    ],
    theoryConcepts: [
      'Saponification',
      'Esters',
      'Hydrolysis',
      'Soap formation',
      'Cleansing action of soap',
      'Salting out'
    ]
  },
  {
    id: 'exp-005',
    title: 'Action of Water on Quicklime',
    category: 'Metals and Non-metals',
    difficulty: 'Easy',
    duration: 20,
    description: 'Observe the exothermic reaction when water is added to quicklime (calcium oxide).',
    objective: 'To study the reaction of quicklime with water and identify the products formed.',
    materials: [
      'Quicklime (Calcium oxide - CaO) - small pieces',
      'Water',
      'Beaker (250ml)',
      'Glass rod',
      'Red litmus paper',
      'Thermometer (optional)'
    ],
    procedure: [
      'Take a small piece of quicklime in a beaker.',
      'Add water slowly to the quicklime.',
      'Stir the mixture carefully with a glass rod.',
      'Touch the beaker to feel the temperature change.',
      'Allow the reaction to complete.',
      'Test the solution with red litmus paper.',
      'Note all observations.'
    ],
    observations: [
      'When water is added to quicklime, vigorous reaction occurs.',
      'The beaker becomes hot, indicating an exothermic reaction.',
      'White powder (slaked lime) is formed.',
      'Hissing sound may be heard during the reaction.',
      'Red litmus paper turns blue, indicating the solution is basic.',
      'The solution is called lime water or calcium hydroxide solution.'
    ],
    conclusion: 'Quicklime (CaO) reacts with water to form slaked lime (calcium hydroxide). The reaction is: CaO + H₂O → Ca(OH)₂ + Heat. This is an exothermic reaction producing a basic solution.',
    safetyPrecautions: [
      'Add water slowly to avoid splashing.',
      'Do not touch quicklime with bare hands.',
      'Wear safety goggles.',
      'Be careful as the beaker gets very hot.',
      'Perform the experiment on a heat-resistant surface.',
      'Do not inhale the dust from quicklime.'
    ],
    theoryConcepts: [
      'Exothermic reactions',
      'Metal oxides',
      'Base formation',
      'Calcium compounds',
      'Heat evolution in chemical reactions'
    ]
  },
  {
    id: 'exp-006',
    title: 'Study of Properties of Ethanoic Acid',
    category: 'Carbon Compounds',
    difficulty: 'Medium',
    duration: 30,
    description: 'Investigate the acidic properties and reactions of ethanoic acid (acetic acid).',
    objective: 'To study various properties of ethanoic acid including its acidic nature, reaction with bases and carbonates.',
    materials: [
      'Ethanoic acid (acetic acid) solution',
      'Sodium hydroxide solution',
      'Sodium bicarbonate (NaHCO₃)',
      'Litmus paper (red and blue)',
      'pH paper',
      'Test tubes (4-5)',
      'Droppers',
      'Beaker',
      'Glass rod'
    ],
    procedure: [
      'Test 1: Take ethanoic acid in a test tube and test with blue litmus paper.',
      'Test 2: Add a few drops of ethanoic acid to pH paper and note the pH.',
      'Test 3: Take ethanoic acid in a test tube and add sodium hydroxide solution drop by drop.',
      'Test 4: Take sodium bicarbonate in a test tube and add ethanoic acid. Observe gas evolution.',
      'Test 5: Note the odor of ethanoic acid (from a distance).',
      'Record all observations.'
    ],
    observations: [
      'Blue litmus paper turns red, confirming acidic nature.',
      'pH is around 2-3, indicating it is a weak acid.',
      'Reaction with NaOH produces sodium ethanoate and water (neutralization).',
      'Reaction with sodium bicarbonate produces effervescence (CO₂ gas evolution).',
      'Ethanoic acid has a characteristic pungent, vinegar-like odor.',
      'The acid is corrosive in concentrated form.'
    ],
    conclusion: 'Ethanoic acid exhibits typical properties of an acid. It turns blue litmus red, reacts with bases to form salt and water, and reacts with carbonates to produce carbon dioxide gas. The reaction with NaHCO₃ is: CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑',
    safetyPrecautions: [
      'Use dilute ethanoic acid; concentrated acid is corrosive.',
      'Smell the acid from a distance, do not inhale directly.',
      'Wear safety goggles.',
      'Avoid contact with skin and eyes.',
      'Wash hands after the experiment.',
      'Work in a well-ventilated area.'
    ],
    theoryConcepts: [
      'Carboxylic acids',
      'Weak acids',
      'Neutralization reactions',
      'Acid-carbonate reactions',
      'Organic acids',
      'Functional groups'
    ]
  }
];

export const getExperimentById = (id: string): Experiment | undefined => {
  return experiments.find(exp => exp.id === id);
};

export const getExperimentsByCategory = (category: string): Experiment[] => {
  return experiments.filter(exp => exp.category === category);
};

export const categories = Array.from(new Set(experiments.map(exp => exp.category)));
