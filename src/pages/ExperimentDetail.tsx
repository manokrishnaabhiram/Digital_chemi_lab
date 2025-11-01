import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getExperimentById } from '../data/experiments';

const ExperimentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experiment = id ? getExperimentById(id) : null;

  if (!experiment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Experiment Not Found
          </h1>
          <Link to="/experiments" className="text-blue-600 hover:underline">
            Back to Experiments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/experiments"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <span className="mr-2">←</span> Back to Experiments
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {experiment.title}
              </h1>
              <p className="text-gray-600">{experiment.category}</p>
            </div>
            <span className="text-5xl">🧪</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              {experiment.difficulty}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              ⏱️ {experiment.duration} minutes
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              🔬 {experiment.materials.length} materials
            </span>
          </div>

          <p className="text-gray-700 text-lg">{experiment.description}</p>
        </motion.div>

        {/* Objective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">🎯</span> Objective
          </h2>
          <p className="text-gray-700">{experiment.objective}</p>
        </motion.div>

        {/* Materials Required */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">📋</span> Materials Required
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {experiment.materials.map((material, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span className="text-gray-700">{material}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Safety Precautions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-red-800 mb-3 flex items-center">
            <span className="mr-2">⚠️</span> Safety Precautions
          </h2>
          <ul className="space-y-2">
            {experiment.safetyPrecautions.map((precaution, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-red-500">•</span>
                <span className="text-gray-700">{precaution}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Procedure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">📝</span> Procedure
          </h2>
          <ol className="space-y-3">
            {experiment.procedure.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Observations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">👁️</span> Observations
          </h2>
          <ul className="space-y-2">
            {experiment.observations.map((observation, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-green-500">•</span>
                <span className="text-gray-700">{observation}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">✅</span> Conclusion
          </h2>
          <p className="text-gray-700">{experiment.conclusion}</p>
        </motion.div>

        {/* Theory Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">📚</span> Related Theory Concepts
          </h2>
          <div className="flex flex-wrap gap-2">
            {experiment.theoryConcepts.map((concept, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {concept}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <Link
            to="/playground"
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
          >
            Try in Playground
          </Link>
          <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Mark as Complete
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperimentDetail;
