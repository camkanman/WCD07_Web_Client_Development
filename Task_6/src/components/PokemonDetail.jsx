import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        
        const cacheKey = `pokemon_detail_${id}`;
        let cachedData = null;
        
        try {
          cachedData = localStorage.getItem(cacheKey);
          if (cachedData && cachedData !== 'undefined' && cachedData !== 'null') {
            const parsedData = JSON.parse(cachedData);
            if (parsedData && parsedData.id) {
              setPokemon(parsedData);
              setLoading(false);
              return;
            }
          }
        } catch (e) {
          console.error("Error retrieving from localStorage:", e);
        }
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        
        const pokemonData = await response.json();
        
        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData = await speciesResponse.json();
        
        const fullPokemonData = { ...pokemonData, species: speciesData };
        
        try {
          const simplifiedData = {
            id: fullPokemonData.id,
            name: fullPokemonData.name,
            height: fullPokemonData.height,
            weight: fullPokemonData.weight,
            base_experience: fullPokemonData.base_experience,
            types: fullPokemonData.types,
            stats: fullPokemonData.stats,
            abilities: fullPokemonData.abilities,

            moves: fullPokemonData.moves.slice(0, 15),
            sprites: {
              front_default: fullPokemonData.sprites.front_default,
              other: {
                'official-artwork': {
                  front_default: fullPokemonData.sprites.other?.['official-artwork']?.front_default
                }
              }
            },
            species: {
              flavor_text_entries: fullPokemonData.species.flavor_text_entries?.filter(entry => 
                entry.language.name === "en"
              ).slice(0, 3) || []
            }
          };
          
          localStorage.setItem(cacheKey, JSON.stringify(simplifiedData));
        } catch (e) {
          console.warn("Could not cache Pokemon details:", e.message);
          
        }
        
        setPokemon(fullPokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
        setError("Failed to load Pokemon details. Please try again later.");
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  
  const formatPokemonId = (id) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  
  const getEnglishFlavorText = (species) => {
    if (!species || !species.flavor_text_entries) return "No description available.";
    
    const englishEntry = species.flavor_text_entries.find(
      entry => entry.language.name === "en"
    );
    
    return englishEntry 
      ? englishEntry.flavor_text.replace(/\f/g, ' ') 
      : "No description available.";
  };

  
  const handleBackClick = (e) => {
    e.preventDefault();
    const lastPage = localStorage.getItem('lastVisitedPage');
    if (lastPage) {
      navigate(`/?page=${lastPage}`);
    } else {
      navigate('/');
    }
  };

  
  const handleBack = () => {
    navigate('/');
  };
  
  return (
    <div className="pokemon-detail-page">
      
      <header className="app-header">
        <div className="header-container">
          <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/pokemon-logo.png" alt="Pokemon Logo" className="logo" />
          </div>

          <button onClick={handleBack} className="back-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </button>
        </div>
      </header>
      
      <div className="pokemon-detail-content">
        
        {loading ? (
          <div className="detail-loading-container">
            <div className="pokeball-spinner"></div>
            <p className="detail-loading-text">Catching Pokémon data...</p>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : pokemon ? (
          <div className="pokemon-detail">
            <div className="pokemon-detail-header">
              <img 
                className="pokemon-detail-image" 
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                alt={pokemon.name} 
              />
              <h1 className="pokemon-detail-name">{pokemon.name}</h1>
              <div className="pokemon-detail-number">{formatPokemonId(pokemon.id)}</div>
              <div className="pokemon-detail-types">
                {pokemon.types.map((type, index) => (
                  <span key={index} className={`pokemon-type ${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pokemon-detail-section">
              <p>{getEnglishFlavorText(pokemon.species)}</p>
            </div>

            <div className="pokemon-detail-section">
              <h3>Physical Information</h3>
              <div className="physical-info">
                <div className="physical-item">
                  <div className="physical-value">{pokemon.height / 10} m</div>
                  <div className="physical-label">Height</div>
                </div>
                <div className="physical-item">
                  <div className="physical-value">{pokemon.weight / 10} kg</div>
                  <div className="physical-label">Weight</div>
                </div>
                <div className="physical-item">
                  <div className="physical-value">{pokemon.base_experience}</div>
                  <div className="physical-label">Base Exp</div>
                </div>
              </div>
            </div>

            <div className="pokemon-detail-section">
              <h3>Base Stats</h3>
              <div className="stats-container">
                {pokemon.stats.map((stat, index) => (
                  <div key={index} className="stat-row">
                    <div className="stat-name">{stat.stat.name.replace('-', ' ')}</div>
                    <div className="stat-value">{stat.base_stat}</div>
                    <div className="stat-bar-container">
                      <div 
                        className="stat-bar" 
                        style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pokemon-detail-section">
              <h3>Abilities</h3>
              <div className="abilities-list">
                {pokemon.abilities.map((ability, index) => (
                  <div key={index} className="ability-item">
                    {ability.ability.name.replace('-', ' ')}
                    {ability.is_hidden && " (Hidden)"}
                  </div>
                ))}
              </div>
            </div>

            <div className="pokemon-detail-section">
              <h3>Moves</h3>
              <div className="moves-list">
                {pokemon.moves.slice(0, 15).map((move, index) => (
                  <div key={index} className="move-item">
                    {move.move.name.replace('-', ' ')}
                  </div>
                ))}
                {pokemon.moves.length > 15 && (
                  <div className="move-item">+{pokemon.moves.length - 15} more</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>No Pokemon data found.</p>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;