import { useMemo } from "react";
import { BeakerIcon, FlameKindling, Ruler, TestTubeDiagonal, Zap } from "lucide-react";
import { useLabStore } from "../store/labStore";
import type { LabState } from "../store/labStore";
import type { EquipmentDefinition } from "../types/equipment";

const categories = [
  { id: "glassware", label: "Glassware", icon: BeakerIcon },
  { id: "heating", label: "Heating", icon: FlameKindling },
  { id: "measuring", label: "Measuring", icon: Ruler },
  { id: "chemicals", label: "Chemicals", icon: TestTubeDiagonal },
  { id: "electrical", label: "Electrical", icon: Zap }
];

function Sidebar() {
  const equipmentCatalog = useLabStore((state: LabState) => state.equipmentCatalog);
  const addEquipment = useLabStore((state: LabState) => state.addEquipment);

  const equipmentByCategory = useMemo(() => {
    return equipmentCatalog.reduce<Record<string, EquipmentDefinition[]>>(
      (acc: Record<string, EquipmentDefinition[]>, item: EquipmentDefinition) => {
        if (!acc[item.type]) {
          acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
      },
      {}
    );
  }, [equipmentCatalog]);

  return (
    <aside className="flex w-60 flex-col border-r border-gray-800 bg-gray-950">
      <div className="border-b border-gray-800 px-4 py-3">
        <input
          type="search"
          placeholder="Search equipment..."
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-200 focus:border-primary focus:outline-none"
        />
      </div>
      <nav className="flex-1 overflow-y-auto">
        {categories.map((category) => {
          const Icon = category.icon;
          const items = equipmentByCategory[category.id] ?? [];
          return (
            <section key={category.id} className="border-b border-gray-900">
              <header className="flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                <Icon className="h-4 w-4" />
                {category.label}
              </header>
              <div className="space-y-2 px-4 pb-4">
                {items.length === 0 && (
                  <p className="text-xs text-gray-500">Coming soon...</p>
                )}
                {items.map((item: EquipmentDefinition) => (
                  <button
                    key={item.id}
                    className="flex w-full items-center justify-between rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-left text-sm text-gray-100 hover:border-primary hover:bg-gray-800"
                    onClick={() => addEquipment(item.id)}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-400">{item.properties.capacity ?? ""}</span>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
