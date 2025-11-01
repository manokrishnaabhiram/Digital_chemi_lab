import { useDroppable } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface PlacedEquipment {
  id: string;
  equipmentId: string;
  name: string;
  icon: string;
  x: number;
  y: number;
}

interface DroppableWorkspaceProps {
  placedEquipment: PlacedEquipment[];
  selectedEquipment: string | null;
  onSelectEquipment: (id: string) => void;
  onRemoveEquipment: (id: string) => void;
}

const WorkspaceEquipment = ({
  equipment,
  isSelected,
  onSelect,
  onRemove,
}: {
  equipment: PlacedEquipment;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: equipment.id,
    data: {
      isNew: false,
    },
  });

  const style = {
    position: 'absolute' as const,
    left: equipment.x,
    top: equipment.y,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onSelect}
      className={`
        flex flex-col items-center p-4 bg-white rounded-lg shadow-md
        cursor-move transition-all
        ${isSelected ? 'ring-4 ring-blue-600 scale-110' : 'hover:shadow-lg'}
        ${isDragging ? 'opacity-50' : 'opacity-100'}
      `}
    >
      <span className="text-4xl mb-2">{equipment.icon}</span>
      <span className="text-xs font-medium text-gray-700 text-center">
        {equipment.name}
      </span>
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="mt-2 px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
        >
          Remove
        </button>
      )}
    </div>
  );
};

const DroppableWorkspace = ({
  placedEquipment,
  selectedEquipment,
  onSelectEquipment,
  onRemoveEquipment,
}: DroppableWorkspaceProps) => {
  const { setNodeRef } = useDroppable({
    id: 'workspace',
  });

  return (
    <div
      ref={setNodeRef}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg border-2 border-dashed border-gray-300 overflow-hidden"
      style={{ height: 'calc(100vh - 300px)', minHeight: '500px' }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Lab Bench */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900 to-amber-700 opacity-30" />

      {/* Placed Equipment */}
      {placedEquipment.map((equipment) => (
        <WorkspaceEquipment
          key={equipment.id}
          equipment={equipment}
          isSelected={selectedEquipment === equipment.id}
          onSelect={() => onSelectEquipment(equipment.id)}
          onRemove={() => onRemoveEquipment(equipment.id)}
        />
      ))}

      {/* Empty State */}
      {placedEquipment.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl mb-4 block">🔬</span>
            <p className="text-gray-500 text-lg font-medium">
              Drag equipment here to start your experiment
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Your virtual lab workspace is ready!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DroppableWorkspace;
