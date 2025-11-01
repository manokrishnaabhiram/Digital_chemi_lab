import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { experiments, categories } from '../data/experiments';

const ExperimentsList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperiments = experiments.filter((exp) => {
    const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          exp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Chemistry Experiments
          </h1>
          <p className="text-gray-600">
            Explore {experiments.length} interactive experiments from Class 10 syllabus
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search experiments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Experiments
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link to={`/experiment/${experiment.id}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow h-full p-6 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-3xl">🧪</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(experiment.difficulty)}`}>
                      {experiment.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {experiment.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {experiment.category}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {experiment.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4">
                      <span className="mr-1">⏱️</span>
                      {experiment.duration} min
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">🔬</span>
                      {experiment.materials.length} items
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Start Experiment
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredExperiments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No experiments found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperimentsList;
