import { useMemo } from "react";
import type { LabEquipmentInstance } from "../../store/labStore";
import { useLabStore } from "../../store/labStore";
import type { LabState } from "../../store/labStore";
import type { EquipmentDefinition } from "../../types/equipment";

interface EquipmentInstancesProps {
  items: LabEquipmentInstance[];
}

const equipmentColors: Record<string, string> = {
  beaker: "#60A5FA",
  thermometer: "#FBBF24"
};

function EquipmentInstances({ items }: EquipmentInstancesProps) {
  const catalog = useLabStore((state: LabState) => state.equipmentCatalog);

  const equipmentWithDefinitions = useMemo<Array<{
    instance: LabEquipmentInstance;
    definition?: EquipmentDefinition;
  }>>(() => {
    const map = new Map(
      catalog.map((definition: EquipmentDefinition) => [definition.id, definition] as const)
    );
    return items.map((instance: LabEquipmentInstance) => ({
      instance,
      definition: map.get(instance.definitionId)
    }));
  }, [catalog, items]);

  return equipmentWithDefinitions.map((entry: {
    instance: LabEquipmentInstance;
    definition?: EquipmentDefinition;
  }) => {
    const { instance } = entry;
    const color = equipmentColors[instance.definitionId] ?? "#A855F7";
    return (
      <mesh
        key={instance.id}
        position={instance.position}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.5, 0.5, 1.5, 24]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    );
  });
}

export default EquipmentInstances;
