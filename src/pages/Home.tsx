import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: '🧪',
      title: 'Interactive Experiments',
      description: 'Perform 20+ chemistry experiments virtually with step-by-step guidance.',
    },
    {
      icon: '🎮',
      title: 'Digital Playground',
      description: 'Drag and drop lab equipment to create your own experiments.',
    },
    {
      icon: '📚',
      title: 'Learn Theory',
      description: 'Understand concepts with detailed explanations and observations.',
    },
    {
      icon: '🔬',
      title: 'Safe Learning',
      description: 'Explore chemistry without any risk of accidents or injuries.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to Digital Chemistry Lab
            </h1>
            <p className="text-xl mb-8">
              Experience Class 10 chemistry experiments in a safe, interactive virtual environment
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/experiments"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Experiments
              </Link>
              <Link
                to="/playground"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Try Playground
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Digital Chemistry Lab?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Experiment Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Chemical Reactions', count: 4, icon: '⚗️', color: 'blue' },
              { name: 'Acids, Bases and Salts', count: 4, icon: '🧬', color: 'green' },
              { name: 'Metals and Non-metals', count: 4, icon: '⚡', color: 'yellow' },
              { name: 'Carbon Compounds', count: 4, icon: '💎', color: 'purple' },
              { name: 'Physical Changes', count: 4, icon: '🌡️', color: 'red' },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count} experiments</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Chemistry Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students learning chemistry in a fun and safe way
          </p>
          <Link
            to="/experiments"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
