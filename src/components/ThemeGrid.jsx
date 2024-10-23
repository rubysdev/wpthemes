import React, { useState, useEffect } from 'react';
import ThemeCard from './ThemeCard.jsx';
import FilterMenu from './FilterMenu.jsx';
import SearchBar from './SearchBar.jsx';
import CategoryCloud from './CategoryCloud.jsx';
import FAQ from './FAQ.jsx';

const themes = [
  { id: 1, title: 'Modern Blog', description: 'A clean and modern blog theme', icon: '📝', isPaid: false, category: 'Blog' },
  { id: 2, title: 'E-commerce Pro', description: 'Powerful e-commerce solution', icon: '🛒', isPaid: true, category: 'E-commerce' },
  { id: 3, title: 'Portfolio Plus', description: 'Showcase your work in style', icon: '🎨', isPaid: false, category: 'Portfolio' },
  { id: 4, title: 'Business Elite', description: 'Professional theme for corporate sites', icon: '💼', isPaid: true, category: 'Business' },
  { id: 5, title: 'News Flash', description: 'Dynamic theme for news websites', icon: '📰', isPaid: false, category: 'News' },
  { id: 6, title: 'Photo Gallery', description: 'Beautiful theme for photographers', icon: '📷', isPaid: true, category: 'Photography' },
];

const ThemeGrid = () => {
  const [filteredThemes, setFilteredThemes] = useState(themes);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterThemes = () => {
    let result = themes;

    if (activeFilter !== 'All') {
      result = result.filter(theme => 
        activeFilter === 'Paid' ? theme.isPaid : !theme.isPaid
      );
    }

    if (searchTerm) {
      result = result.filter(theme =>
        theme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        theme.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(theme => theme.category === selectedCategory);
    }

    setFilteredThemes(result);
  };

  useEffect(() => {
    filterThemes();
  }, [activeFilter, searchTerm, selectedCategory]);

  const categories = [...new Set(themes.map(theme => theme.category))];

  return (
    <>
      <FilterMenu onFilterChange={setActiveFilter} />
      <SearchBar onSearch={setSearchTerm} />
      <CategoryCloud categories={categories} onCategorySelect={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredThemes.map(theme => (
          <ThemeCard 
            key={theme.id}
            id={theme.id}
            title={theme.title}
            description={theme.description}
            icon={theme.icon}
            isPaid={theme.isPaid}
            category={theme.category}
          />
        ))}
      </div>
      <FAQ />
    </>
  );
};

export default ThemeGrid;