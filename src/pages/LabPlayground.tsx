import { useState } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import DroppableWorkspace from '../components/DroppableWorkspace';
import EquipmentPanel from '../components/EquipmentPanel';

interface PlacedEquipment {
  id: string;
  equipmentId: string;
  name: string;
  icon: string;
  x: number;
  y: number;
}

const LabPlayground = () => {
  const [placedEquipment, setPlacedEquipment] = useState<PlacedEquipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    
    if (!active) return;

    const equipmentData = active.data.current;
    
    if (equipmentData?.isNew) {
      // Adding new equipment to workspace
      const newEquipment: PlacedEquipment = {
        id: `placed-${Date.now()}`,
        equipmentId: equipmentData.id,
        name: equipmentData.name,
        icon: equipmentData.icon,
        x: 400 + delta.x,
        y: 200 + delta.y,
      };
      setPlacedEquipment([...placedEquipment, newEquipment]);
    } else {
      // Moving existing equipment
      setPlacedEquipment(
        placedEquipment.map((item) =>
          item.id === active.id
            ? { ...item, x: item.x + delta.x, y: item.y + delta.y }
            : item
        )
      );
    }
  };

  const handleRemoveEquipment = (id: string) => {
    setPlacedEquipment(placedEquipment.filter((item) => item.id !== id));
    if (selectedEquipment === id) {
      setSelectedEquipment(null);
    }
  };

  const handleClearWorkspace = () => {
    setPlacedEquipment([]);
    setSelectedEquipment(null);
  };

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Lab Playground
          </h1>
          <p className="text-gray-600">
            Drag and drop lab equipment to create your own experiments
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center"
        >
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">
              Equipment on workspace: {placedEquipment.length}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleClearWorkspace}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear Workspace
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Save Setup
            </button>
          </div>
        </motion.div>

        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-12 gap-6">
            {/* Equipment Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-3"
            >
              <EquipmentPanel />
            </motion.div>

            {/* Workspace */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="col-span-12 lg:col-span-9"
            >
              <DroppableWorkspace
                placedEquipment={placedEquipment}
                selectedEquipment={selectedEquipment}
                onSelectEquipment={setSelectedEquipment}
                onRemoveEquipment={handleRemoveEquipment}
              />
            </motion.div>
          </div>
        </DndContext>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            💡 How to use the Lab Playground
          </h3>
          <ul className="space-y-1 text-gray-700">
            <li>• Drag equipment from the left panel to the workspace</li>
            <li>• Move equipment around by dragging them in the workspace</li>
            <li>• Click on equipment to select it</li>
            <li>• Use the Clear button to remove all equipment</li>
            <li>• Save your setup for later use</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default LabPlayground;
