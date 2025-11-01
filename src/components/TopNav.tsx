import { useState, ChangeEvent } from "react";
import { FlaskRound, HelpCircle, Settings } from "lucide-react";

const experiments = [
  { id: "heat-01", title: "Heat and Cold" },
  { id: "chem-01", title: "Hydrogen Gas Formation" }
];

function TopNav() {
  const [selectedId, setSelectedId] = useState(experiments[0]?.id ?? "");

  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-800 bg-gray-950 px-4">
      <div className="flex items-center gap-2">
        <FlaskRound className="h-5 w-5 text-primary" />
        <h1 className="text-lg font-semibold">Digital Chemistry Lab</h1>
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-gray-300">
          <span className="whitespace-nowrap">Experiment</span>
          <select
            className="rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-sm"
            value={selectedId}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedId(event.target.value)}
          >
            {experiments.map((experiment) => (
              <option key={experiment.id} value={experiment.id}>
                {experiment.title}
              </option>
            ))}
          </select>
        </label>

        <button className="rounded-md border border-gray-700 px-3 py-1 text-sm text-gray-200 hover:bg-gray-800">
          New / Reset
        </button>
        <button className="rounded-md border border-gray-700 px-3 py-1 text-sm text-gray-200 hover:bg-gray-800">
          Save Progress
        </button>
        <button className="rounded-md border border-gray-700 p-2 text-gray-200 hover:bg-gray-800">
          <HelpCircle className="h-4 w-4" />
        </button>
        <button className="rounded-md border border-gray-700 p-2 text-gray-200 hover:bg-gray-800">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

export default TopNav;
