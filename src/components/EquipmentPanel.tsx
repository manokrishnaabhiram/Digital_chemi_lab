import { useState } from 'react';
import { labEquipment, getEquipmentByType } from '../data/equipment';
import DraggableEquipment from './DraggableEquipment';

const EquipmentPanel = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEquipment =
    selectedType === 'all'
      ? labEquipment
      : getEquipmentByType(selectedType as any);

  const types = [
    { id: 'all', name: 'All Equipment', icon: '📦' },
    { id: 'glassware', name: 'Glassware', icon: '🧪' },
    { id: 'heating', name: 'Heating', icon: '🔥' },
    { id: 'measurement', name: 'Measurement', icon: '📏' },
    { id: 'safety', name: 'Safety', icon: '🥽' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-[calc(100vh-300px)] flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Lab Equipment
      </h2>

      {/* Type Filter */}
      <div className="mb-4 space-y-2">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
              selectedType === type.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{type.icon}</span>
            <span className="text-sm font-medium">{type.name}</span>
          </button>
        ))}
      </div>

      {/* Equipment List */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {filteredEquipment.map((equipment) => (
          <DraggableEquipment
            key={equipment.id}
            id={equipment.id}
            name={equipment.name}
            icon={equipment.icon}
            isNew={true}
          />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Drag equipment to the workspace to use
        </p>
      </div>
    </div>
  );
};

export default EquipmentPanel;
