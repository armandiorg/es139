import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Onboarding() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useApp();

  const handleStart = () => {
    if (name.trim()) {
      updateUser({ name: name.trim() });
      navigate('/quiz');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary-400 via-accent-400 to-primary-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full mb-4"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Connect</h1>
          <p className="text-gray-600 text-lg">Find your perfect match</p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-700 text-center mb-6">
              Welcome! Let's discover your personality type and connect you with ambitious people who share your goals.
            </p>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              What's your name?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleStart()}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStart}
            disabled={!name.trim()}
            className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Start Your Journey
          </motion.button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          This is a demo prototype for testing and feedback
        </p>
      </motion.div>
    </div>
  );
}