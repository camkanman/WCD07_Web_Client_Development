import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { usePokemonContext } from '../context/PokemonContext';

function Header({ 
  sortBy, 
  handleSort, 
  handleLogoClick,
  viewMode,
  toggleViewMode,
  itemsPerPage,
  handleItemsPerPageChange
}) {
  // Use context instead of props for search
  const { searchTerm, setSearchTerm, typeFilter, setTypeFilter } = usePokemonContext();
  
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null);

  // Toggle search function
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    }
  };

  // Clear search function
  const clearSearch = () => {
    setSearchTerm('');
    if (window.innerWidth <= 768) {
      setIsSearchActive(false);
    }
  };

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle click outside to close search on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchActive &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.classList.contains('search-icon-button')
      ) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchActive]);

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-search-row">
          <div className="logo-container">
            <img 
              src="/pokemon-logo.png" 
              alt="Pokémon" 
              className="logo" 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          
          <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
            <button 
              className="search-icon-button" 
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              ref={searchInputRef}
            />
            {searchTerm && (
              <button className="clear-search" onClick={clearSearch}>
                ×
              </button>
            )}
          </div>
        </div>
        
        <div className="header-controls">
          <div className="sort-container">
            {/* Type filter dropdown */}
            <select 
              className="sort-select-types" 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
              style={{ marginRight: '10px' }}
            >
              <option value="all">All Types</option>
              <option value="normal">Normal</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="ice">Ice</option>
              <option value="fighting">Fighting</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="flying">Flying</option>
              <option value="psychic">Psychic</option>
              <option value="bug">Bug</option>
              <option value="rock">Rock</option>
              <option value="ghost">Ghost</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="steel">Steel</option>
              <option value="fairy">Fairy</option>
            </select>
            
            <select 
              className="sort-select" 
              value={sortBy} 
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="" hidden>Sort by</option>
              <option value="id-desc">Sort by ID (Highest First)</option>
              <option value="name">Sort by Name (A-Z)</option>
              <option value="name-desc">Sort by Name (Z-A)</option>
              <option value="base_experience-desc">Sort by Experience (Highest First)</option>
              <option value="base_experience">Sort by Experience (Lowest First)</option>
            </select>
            
            <div className="pagination-controls">
              <select 
                id="items-per-page" 
                value={itemsPerPage} 
                onChange={handleItemsPerPageChange}
                className="items-per-page-select"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>
            
            <div className={`toggle-container ${viewMode === 'single' ? 'single-active' : ''}`}>
              <button 
                className={`toggle-btn ${viewMode === 'single' ? 'active' : ''}`}
                onClick={() => toggleViewMode('single')}
                aria-label="Single View"
              >
                <div className="square-icon"></div>
              </button>
              <button 
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => toggleViewMode('grid')}
                aria-label="Grid View"
              >
                <div className="grid-icon">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;