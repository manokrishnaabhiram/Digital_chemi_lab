import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface DraggableEquipmentProps {
  id: string;
  name: string;
  icon: string;
  isNew?: boolean;
}

const DraggableEquipment = ({ id, name, icon, isNew = false }: DraggableEquipmentProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
    data: {
      id,
      name,
      icon,
      isNew,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm
        hover:shadow-md transition-shadow cursor-move border-2 border-gray-200
        hover:border-blue-600 ${isDragging ? 'ring-2 ring-blue-600' : ''}
      `}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default DraggableEquipment;
