import { createContext, useState, useContext, useEffect } from 'react';

// Create context
const PokemonContext = createContext();

// Custom hook to use the context
export const usePokemonContext = () => useContext(PokemonContext);

// Provider component
export const PokemonProvider = ({ children }) => {
  // Filter state
  const [searchTerm, setSearchTerm] = useState(() => {
    const savedSearchTerm = localStorage.getItem('pokemonSearchTerm');
    return savedSearchTerm || '';
  });

  // Type filter state
  const [typeFilter, setTypeFilter] = useState(() => {
    const savedTypeFilter = localStorage.getItem('pokemonTypeFilter');
    return savedTypeFilter || 'all';
  });

  // Save to localStorage when filters change
  useEffect(() => {
    localStorage.setItem('pokemonSearchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('pokemonTypeFilter', typeFilter);
  }, [typeFilter]);

  // Filter function that can be used by components
  const filterPokemon = (pokemonList) => {
    return pokemonList.filter(pokemon => {
      // Name filter
      const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Type filter
      const typeMatch = typeFilter === 'all' || 
        pokemon.types.some(type => type.type.name === typeFilter);
      
      return nameMatch && typeMatch;
    });
  };

  // Values to be provided to consumers
  const value = {
    searchTerm,
    setSearchTerm,
    typeFilter,
    setTypeFilter,
    filterPokemon
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
};