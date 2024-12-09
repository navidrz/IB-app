import React, { useState } from 'react';

const scenarios = [
  "Normal Market",
  "Bull Market",
  "Bear Market",
  "Volatile Market",
  "Market Crash",
  "Market Rally"
];

const views = ["bullish", "bearish", "neutral"];
const sides = ["Long", "Short"];

interface FilterFormProps {
  onFilter: (filters: {scenario?: string; view?: string; side?: string}) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const [scenario, setScenario] = useState("");
  const [view, setView] = useState("");
  const [side, setSide] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ scenario, view, side });
  };

  return (
    <form className="flex flex-col gap-4 mb-6 bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2 font-medium text-gray-700">Scenario</label>
        <select 
          value={scenario} 
          onChange={e=>setScenario(e.target.value)} 
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {scenarios.map(s=><option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block mb-2 font-medium text-gray-700">View</label>
        <select 
          value={view} 
          onChange={e=>setView(e.target.value)} 
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {views.map(v=><option key={v} value={v}>{v}</option>)}
        </select>
      </div>
      <div>
        <label className="block mb-2 font-medium text-gray-700">Side</label>
        <select 
          value={side} 
          onChange={e=>setSide(e.target.value)} 
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          {sides.map(sd=><option key={sd} value={sd}>{sd}</option>)}
        </select>
      </div>
      <button 
        type="submit" 
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
      >
        Filter
      </button>
    </form>
  );
};

export default FilterForm;
