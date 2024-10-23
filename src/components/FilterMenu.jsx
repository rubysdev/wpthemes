import React, { useState } from 'react';

const FilterMenu = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {['All', 'Free', 'Paid'].map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded ${
            activeFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterMenu;