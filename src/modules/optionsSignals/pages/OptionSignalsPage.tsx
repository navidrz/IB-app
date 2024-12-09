import React, { useEffect, useState } from 'react';
import { loadOptionsData } from '../services/optionsDataService';
import FilterForm from '../components/FilterForm';
import RecommendationList from '../components/RecommendationList';
import ScoreChart from '../components/ScoreChart';
import { useOptionFilter } from '../hooks/useOptionFilter';

const OptionSignalsPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const { filteredData, setFilters } = useOptionFilter(data);

  useEffect(() => {
    loadOptionsData().then(d => setData(d));
  }, []);

  const handleFilter = (filters: {scenario?: string; view?: string; side?: string}) => {
    setFilters(filters);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Option Signals</h2>
      <p className="text-sm text-gray-600 mb-4">
        Use the filters below to refine the signals. The chart shows average scores by scenario, helping you understand the general trend of signals.
      </p>
      <FilterForm onFilter={handleFilter}/>
      <ScoreChart data={filteredData}/>
      <RecommendationList data={filteredData}/>
    </div>
  );
};

export default OptionSignalsPage;
