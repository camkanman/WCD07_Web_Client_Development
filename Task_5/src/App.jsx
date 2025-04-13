import React, { useState, useRef, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';

function App() {
  const [isGridView, setIsGridView] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [sortBy, setSortBy] = useState('id');
  const [pokemonList, setPokemonList] = useState([
    { id: '1000', name: 'Bulbasaur', image: '/bulbasaur.png', type: 'Grass', attack: 49, defense: 49, health: 200 },
    { id: '1001', name: 'Pikachu', image: '/pikachu.png', type: 'Electric', attack: 55, defense: 40, health: 180 },
    { id: '1002', name: 'Squirtle', image: '/squirtle.png', type: 'Water', attack: 48, defense: 65, health: 220 },
    { id: '1003', name: 'Caterpie', image: '/caterpie.png', type: 'Bug', attack: 30, defense: 35, health: 150 },
    { id: '1004', name: 'Charmander', image: '/charmander.png', type: 'Fire', attack: 52, defense: 43, health: 190 },
    { id: '1005', name: 'Chikorita', image: '/chikorita.png', type: 'Grass', attack: 49, defense: 65, health: 210 },
    { id: '1006', name: 'Jigglypuff', image: '/jigglypuff.png', type: 'Normal', attack: 45, defense: 20, health: 170 },
    { id: '1007', name: 'Kabuto', image: '/kabuto.png', type: 'Rock', attack: 80, defense: 90, health: 250 },
    { id: '1008', name: 'Meowth', image: '/meowth.png', type: 'Normal', attack: 45, defense: 35, health: 160 },
    { id: '1009', name: 'Mudkip', image: '/mudkip.png', type: 'Water', attack: 70, defense: 50, health: 230 }
  ]);

  const filteredPokemon = pokemonList.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pokemon.id.includes(searchQuery)
  );

  const handlePokemonClick = (id) => {
    const pokemon = pokemonList.find(p => p.id === id);
    if (pokemon) {
      setSelectedPokemon({
        ...pokemon,
        spriteLarge: pokemon.image,
        spriteSmall: pokemon.image,
        health: pokemon.health,
        attack: pokemon.attack,
        defense: pokemon.defense
      });
    }
  };

  const handleSort = (type) => {
    const sortedPokemon = [...pokemonList].sort((a, b) => {
      switch(type) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'id':
          return a.id.localeCompare(b.id);
        case 'attack':
          return b.attack - a.attack;
        case 'defense':
          return b.defense - a.defense;
        default:
          return 0;
      }
    });
    setPokemonList(sortedPokemon);
  };

  // Add new state for view mode
  const [isMobileView, setIsMobileView] = useState(true);

  return (
    <div className={`min-h-screen bg-[#252A3E] ${isMobileView ? 'p-4' : 'p-0'}`}>
      <div className={`mx-auto relative ${
        isMobileView 
          ? 'max-w-md px-2' 
          : 'w-screen px-8'
      }`}>
        <div className="flex flex-col w-full">
          <div className={`flex justify-between items-center ${isMobileView ? 'mb-2' : 'mb-6 h-[80px] px-8'}`}>
            <img 
              src="/pokemon-logo.png" 
              alt="Pokemon Logo" 
              className="h-[30px] object-contain"
            />
            <div className="flex items-center gap-4">
              <button 
                className={`bg-[#2C2F48] p-2 rounded-md ${isMobileView ? 'text-white' : 'text-[#A3A6C5]'}`}
                onClick={() => setIsMobileView(true)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 3H8.5C7.67157 3 7 3.67157 7 4.5V19.5C7 20.3284 7.67157 21 8.5 21H15.5C16.3284 21 17 20.3284 17 19.5V4.5C17 3.67157 16.3284 3 15.5 3Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              <button 
                className={`bg-[#2C2F48] p-2 rounded-md ${!isMobileView ? 'text-white' : 'text-[#A3A6C5]'}`}
                onClick={() => setIsMobileView(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 17V20M17 17V20M9 20H15" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              <div ref={searchRef}>
                {showSearch ? (
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white text-[#666666] px-3 py-1 rounded-[4px] border-none w-[144px] h-[26px] ml-auto text-[14px] placeholder:text-[#666666] outline-none"
                    autoFocus
                  />
                ) : (
                  <svg 
                    className="relative cursor-pointer" 
                    style={{ marginLeft: 'auto' }}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24"
                    fill="none"
                    onClick={() => setShowSearch(true)}
                  >
                    <path 
                      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                      stroke="#FFFFFF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-white opacity-20 mb-6"></div>
        </div>
        
        <div className={`flex justify-between items-center mb-8 ${isMobileView ? '' : 'px-8'}`}>
          <select 
            className="bg-[#3D4466] text-[#A3A6C5] px-3 py-1 rounded-[4px] border-none w-[186px] h-[32px] text-[14px] outline-none cursor-pointer appearance-none"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              handleSort(e.target.value);
            }}
          >
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="attack">Sort by Attack</option>
            <option value="defense">Sort by Defense</option>
          </select>
          <div className="flex gap-1">
            <button 
              className={`bg-[#2C2F48] p-2 rounded-md ${!isGridView ? 'text-white' : 'text-[#A3A6C5]'}`}
              onClick={() => setIsGridView(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button 
              className={`bg-[#2C2F48] p-2 rounded-md ${isGridView ? 'text-white' : 'text-[#A3A6C5]'}`}
              onClick={() => setIsGridView(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H10V10H3V3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 3H21V10H14V3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 14H10V21H3V14Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`grid ${
          isGridView 
            ? (isMobileView ? 'grid-cols-2' : 'grid-cols-5') 
            : (isMobileView ? 'grid-cols-1' : 'grid-cols-1')
        } gap-x-8 gap-y-8 ${isMobileView ? '' : 'px-8'}`}>
          {filteredPokemon.map(pokemon => (
            <PokemonCard 
              key={pokemon.id}
              type={pokemon.type}
              number={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              attack={pokemon.attack}
              defense={pokemon.defense}
              health={pokemon.health}
              isGridView={isGridView}
              isMobileView={isMobileView}
              onClick={() => handlePokemonClick(pokemon.id)}
            />
          ))}
        </div>

        {selectedPokemon && (
          <PokemonDetail 
            pokemon={selectedPokemon} 
            onClose={() => setSelectedPokemon(null)} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
