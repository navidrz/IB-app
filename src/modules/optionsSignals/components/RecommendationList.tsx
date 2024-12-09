import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Recommendation {
  OptionName: string;
  Score: string;
  Side: string;
  MarketScenario: string;
  UserMarketView: string;
}

interface RecommendationListProps {
  data: Recommendation[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ data }) => {
  if (data.length === 0) return <p className="text-center text-gray-500">No results found.</p>;

  return (
    <ul className="space-y-4">
      <AnimatePresence>
        {data.map((item,i)=> {
          const score = parseFloat(item.Score);
          const color = score > 0 ? 'text-green-600' : 'text-red-600';
          return (
            <motion.li 
              key={i}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:10 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white rounded shadow hover:shadow-lg hover:scale-105 transform transition duration-200"
            >
              <div className="font-bold text-lg mb-1">{item.OptionName}</div>
              <div className={`mb-1 ${color}`}>Score: {item.Score}</div>
              <div className="text-sm text-gray-600">Side: {item.Side}</div>
              <div className="text-sm text-gray-600">Scenario: {item.MarketScenario}</div>
              <div className="text-sm text-gray-600">View: {item.UserMarketView}</div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
};

export default RecommendationList;
