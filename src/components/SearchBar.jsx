import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <input 
        type="text" 
        placeholder="Search templates..." 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;