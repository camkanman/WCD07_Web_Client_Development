import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'
import Header from './components/Header'
import './App.css'


function PokemonList() {
  const navigate = useNavigate();
  
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [sortBy, setSortBy] = useState(() => {
  const savedSortBy = localStorage.getItem('pokemonSortBy');
  return savedSortBy || '';
  });
  
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPokemonPage');
    return savedPage ? parseInt(savedPage) : 1;
  });
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const savedItemsPerPage = localStorage.getItem('pokemonItemsPerPage');
    return savedItemsPerPage ? parseInt(savedItemsPerPage) : 12;
  });
  const [totalPokemon, setTotalPokemon] = useState(0);
  
  
  const [viewMode, setViewMode] = useState(() => {
    const savedViewMode = localStorage.getItem('pokemonViewMode');
    return savedViewMode || 'grid'; 
  });
  
  
  const tryCleanupStorage = () => {
    try {
      
      const allKeys = Object.keys(localStorage);
      
      
      const pokemonDetailKeys = allKeys.filter(key => key.startsWith('pokemon_detail_'));
      
      
      if (pokemonDetailKeys.length > 20) {
        pokemonDetailKeys.slice(0, 20).forEach(key => {
          localStorage.removeItem(key);
        });
        console.log("Cleaned up 20 Pokemon details from localStorage");
        return true;
      }
      return false;
    } catch (e) {
      console.error("Error cleaning up localStorage:", e);
      return false;
    }
  };
  
  
  const fetchPokemon = async () => {
    try {
      setLoading(true);
      
      
      const cacheKey = `pokemon_all`;
      const cachedData = localStorage.getItem(cacheKey);
      
      if (cachedData && cachedData !== 'undefined' && cachedData !== 'null') {
        try {
          const parsedData = JSON.parse(cachedData);
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            setPokemon(parsedData);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error("Error parsing cached batch data:", e);
          
        }
      }
      
      
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
      const data = await response.json();
      
      
      if (!data.results || data.results.length === 0) {
        setPokemon([]);
        setLoading(false);
        return;
      }
      
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          try {
            
            const detailCacheKey = `pokemon_detail_${pokemon.name}`;
            const cachedDetail = localStorage.getItem(detailCacheKey);
            
            if (cachedDetail && cachedDetail !== 'undefined' && cachedDetail !== 'null') {
              try {
                const parsedDetail = JSON.parse(cachedDetail);
                if (parsedDetail && parsedDetail.id) {
                  return parsedDetail;
                }
              } catch (e) {
                console.error("Error parsing cached Pokemon data:", e);
              }
            }
            
            
            const res = await fetch(pokemon.url);
            const pokemonData = await res.json();
            
            
            try {
              
              const simplifiedData = {
                id: pokemonData.id,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                base_experience: pokemonData.base_experience,
                types: pokemonData.types,
                sprites: {
                  front_default: pokemonData.sprites.front_default,
                  other: {
                    'official-artwork': {
                      front_default: pokemonData.sprites.other?.['official-artwork']?.front_default
                    }
                  }
                }
              };
              
              localStorage.setItem(detailCacheKey, JSON.stringify(simplifiedData));
            } catch (e) {
              console.warn("Error caching Pokemon data:", e);
              
              if (e.name === 'QuotaExceededError') {
                const cleaned = tryCleanupStorage();
                if (cleaned) {
                  try {
                    localStorage.setItem(detailCacheKey, JSON.stringify(simplifiedData));
                  } catch (e2) {
                    console.warn("Still couldn't cache after cleanup:", e2);
                  }
                }
              }
            }
            
            return pokemonData;
          } catch (err) {
            console.error(`Error fetching details for ${pokemon.name}:`, err);
            
            return { id: 0, name: pokemon.name, error: true };
          }
        })
      );
      
      
      const validPokemonDetails = pokemonDetails.filter(p => !p.error);
      
      
      try {
        
        const simplifiedPokemonDetails = validPokemonDetails.map(poke => ({
          id: poke.id,
          name: poke.name,
          height: poke.height,
          weight: poke.weight,
          base_experience: poke.base_experience,
          types: poke.types,
          sprites: {
            front_default: poke.sprites.front_default,
            other: {
              'official-artwork': {
                front_default: poke.sprites.other?.['official-artwork']?.front_default
              }
            }
          }
        }));
        
        
        localStorage.setItem(cacheKey, JSON.stringify(simplifiedPokemonDetails));
      } catch (e) {
        console.warn("Could not cache batch data:", e.message);
        
        if (e.name === 'QuotaExceededError') {
          const cleaned = tryCleanupStorage();
          if (cleaned) {
            try {
              localStorage.setItem(cacheKey, JSON.stringify(simplifiedPokemonDetails));
            } catch (e2) {
              console.warn("Still couldn't cache after cleanup:", e2);
            }
          }
        }
        
      }
      
      setPokemon(validPokemonDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setError("Failed to fetch Pokemon data. Please try again later.");
      setLoading(false);
    }
  };
  
  
  useEffect(() => {
    fetchPokemon();
  }, []);

  
  useEffect(() => {
    if (pokemon.length > 0 && sortBy) {
      
      const sortedPokemon = [...pokemon].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        } else if (sortBy === 'id') {
          return a.id - b.id;
        } else if (sortBy === 'id-desc') {
          return b.id - a.id;
        } else if (sortBy === 'height') {
          return a.height - b.height;
        } else if (sortBy === 'weight') {
          return a.weight - b.weight;
        } else if (sortBy === 'base_experience') {
          return a.base_experience - b.base_experience;
        } else if (sortBy === 'base_experience-desc') {
          return b.base_experience - a.base_experience;
        }
        return 0;
      });
      
      setPokemon(sortedPokemon);
    }
  }, [pokemon.length, sortBy]);

  
  const clearCache = () => {
    
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('pokemon')) {
        localStorage.removeItem(key);
      }
    });
    setPokemon([]);
    fetchPokemon();
  };

  
  useEffect(() => {
    localStorage.setItem('currentPokemonPage', currentPage.toString());
  }, [currentPage]);
  
  useEffect(() => {
    localStorage.setItem('pokemonItemsPerPage', itemsPerPage.toString());
  }, [itemsPerPage]);

  
  const navigateToPokemonDetail = (pokemonId) => {
    
    navigate(`/pokemon/${pokemonId}`);
  };

  
  const handleSort = (sortType) => {
    setSortBy(sortType);
    
    
    const sortedPokemon = [...pokemon].sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortType === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortType === 'id') {
        return a.id - b.id;
      } else if (sortType === 'id-desc') {
        return b.id - a.id;
      } else if (sortType === 'height') {
        return a.height - b.height;
      } else if (sortType === 'weight') {
        return a.weight - b.weight;
      } else if (sortType === 'base_experience') {
        return a.base_experience - b.base_experience;
      } else if (sortType === 'base_experience-desc') {
        return b.base_experience - a.base_experience;
      }
      return 0;
    });
    
    setPokemon(sortedPokemon);
  };

  
  const [searchTerm, setSearchTerm] = useState(() => {
    const savedSearchTerm = localStorage.getItem('pokemonSearchTerm');
    return savedSearchTerm || '';
  });
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  useEffect(() => {
    localStorage.setItem('pokemonSortBy', sortBy);
  }, [sortBy]);

  useEffect(() => {
    localStorage.setItem('pokemonSearchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('pokemonViewMode', viewMode);
  }, [viewMode]);
  
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const filteredPokemon = pokemon.filter(poke => 
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPokemon.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  const handleLogoClick = () => {
    setCurrentPage(1);
    setSearchTerm('');
    setSortBy('id');
    
    const sortedPokemon = [...pokemon].sort((a, b) => a.id - b.id);
    setPokemon(sortedPokemon);
  };

  return (
    <div className="App">
      <Header 
        sortBy={sortBy}
        handleSort={handleSort}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        setSearchTerm={setSearchTerm}
        handleLogoClick={handleLogoClick}
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
      
      <div className="controls-container">
        <button className="cache-button" onClick={clearCache} title="Refresh Data">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M23 4v6h-6"></path>
            <path d="M1 20v-6h6"></path>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
            <path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        </button>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div className={`pokemon-container ${viewMode === 'single' ? 'single-view' : ''}`}>
        {pokemon && pokemon.length > 0 ? (
          currentItems.map((poke) => (
            <div 
              key={poke.id} 
              className={`pokemon-card ${viewMode === 'single' ? 'single-view' : ''}`}
              onClick={() => navigateToPokemonDetail(poke.id)}
              style={{ cursor: 'pointer' }}
            >
              <span className="pokemon-id">#{poke.id.toString().padStart(3, '0')}</span>
              <img 
                className="pokemon-image" 
                src={poke.sprites.other['official-artwork'].front_default || poke.sprites.front_default} 
                alt={poke.name} 
              />
              <div className={viewMode === 'single' ? 'pokemon-content' : ''}>
                <h2 className="pokemon-name">{poke.name}</h2>
                <div>
                  {poke.types.map((type, index) => (
                    <span key={index} className={`pokemon-type ${type.type.name}`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="pokemon-info">
                  <p><strong>Height:</strong> {poke.height / 10} m</p>
                  <p><strong>Weight:</strong> {poke.weight / 10} kg</p>
                  <p><strong>Base Experience:</strong> {poke.base_experience}</p>
                </div>
              </div>
            </div>
          ))
        ) : !loading ? (
          <p>No Pokemon found. Try refreshing the data.</p>
        ) : null}
      </div>
      
      {pokemon.length > 0 && (
        <div className="pagination">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className="pagination-button"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '5px'}}>
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Prev
          </button>
          
          <div className="page-numbers">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button 
                  key={pageNum}
                  onClick={() => paginate(pageNum)}
                  className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '5px'}}>
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      )}
      
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading Pokémon data...</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;