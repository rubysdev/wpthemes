import React from 'react';

const CategoryCloud = ({ categories, onCategorySelect }) => {
  return (
    <div className="mb-8 overflow-x-auto whitespace-nowrap">
      <div className="inline-flex space-x-2">
        {categories.map(category => (
          <button 
            key={category}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryCloud;