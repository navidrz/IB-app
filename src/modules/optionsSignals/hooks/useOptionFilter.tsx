import { useState, useMemo } from 'react';

interface Filters {
  scenario?: string;
  view?: string;
  side?: string;
}

export function useOptionFilter(data: any[]) {
  const [filters, setFilters] = useState<Filters>({});

  const filteredData = useMemo(() => {
    let results = [...data];
    if (filters.scenario) {
      results = results.filter(r => r.MarketScenario === filters.scenario);
    }
    if (filters.view) {
      results = results.filter(r => r.UserMarketView === filters.view);
    }
    if (filters.side) {
      results = results.filter(r => r.Side === filters.side);
    }
    results.sort((a,b)=>parseFloat(a.Score)-parseFloat(b.Score));
    return results;
  }, [data, filters]);

  return { filteredData, setFilters };
}
