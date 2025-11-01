import Sidebar from "./components/Sidebar";
import Playground from "./components/playground/Playground";
import ExperimentPanel from "./components/ExperimentPanel";
import TopNav from "./components/TopNav";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="flex h-screen flex-col bg-gray-900 text-gray-100">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Playground />
        <ExperimentPanel />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
