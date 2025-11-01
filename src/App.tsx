import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExperimentsList from './pages/ExperimentsList';
import ExperimentDetail from './pages/ExperimentDetail';
import LabPlayground from './pages/LabPlayground';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiments" element={<ExperimentsList />} />
          <Route path="/experiment/:id" element={<ExperimentDetail />} />
          <Route path="/playground" element={<LabPlayground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
