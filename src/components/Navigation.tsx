import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl">🧪</span>
              <span className="text-2xl font-bold text-blue-600">
                Digital Chemistry Lab
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/experiments"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/experiments')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Experiments
            </Link>
            <Link
              to="/playground"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/playground')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Lab Playground
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
