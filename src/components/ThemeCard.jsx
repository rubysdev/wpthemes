import React from 'react';

const ThemeCard = ({ id, title, description, icon, isPaid, category }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className={`px-2 py-1 text-xs rounded ${isPaid ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
          {isPaid ? 'Paid' : 'Free'}
        </span>
        <span className="text-sm text-gray-500">{category}</span>
        <a href={`/theme/${id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          More Details
        </a>
      </div>
    </div>
  );
};

export default ThemeCard;