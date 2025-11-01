import { Thermometer, TimerReset } from "lucide-react";

function StatusBar() {
  return (
    <footer className="flex h-12 items-center justify-between border-t border-gray-800 bg-gray-950 px-4 text-sm">
      <div className="flex items-center gap-6">
        <span className="font-semibold text-gray-200">Experiment: Heat and Cold</span>
        <span className="flex items-center gap-1 text-gray-400">
          <TimerReset className="h-4 w-4" />
          00:00:00
        </span>
        <span className="flex items-center gap-1 text-gray-400">
          <Thermometer className="h-4 w-4" />
          29°C
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-md border border-gray-700 px-3 py-1 text-gray-200 hover:bg-gray-800">
          Pause
        </button>
        <button className="rounded-md border border-gray-700 px-3 py-1 text-gray-200 hover:bg-gray-800">
          Restart
        </button>
      </div>
    </footer>
  );
}

export default StatusBar;
