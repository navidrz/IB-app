import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed top-0 left-0 w-64 bg-white h-full z-50 flex flex-col shadow"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-gray-800">Menu</span>
              <button 
                onClick={onClose} 
                className="focus:outline-none"
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              <a href="/" className="block text-gray-700 hover:bg-gray-100 rounded px-2 py-1">Signals</a>
            </nav>

            <div className="p-4 border-t text-sm text-gray-600">
              Version 1.0.0
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
