import React from 'react';

function PokemonDetail({ pokemon, onClose }) {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#252A3E] z-50">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center h-[48px] px-4">
            <img 
              src="/pokemon-logo.png" 
              alt="Pokemon Logo" 
              className="h-[30px] object-contain"
            />
            <button onClick={onClose} className="text-white ml-auto bg-[#252A3E] p-2 rounded-md hover:bg-[#3D4466]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="h-[1px] bg-white opacity-20 mb-6"></div>
        </div>

        <div className="flex-1 flex flex-col px-4">
          <div className="text-[#666666] text-[18px] pl-1">#{pokemon.id}</div>
          
          <div className="relative w-full max-w-[280px] mx-auto mb-8">
            <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center">
              <img 
                src={pokemon.spriteLarge} 
                alt={pokemon.name}
                className="w-[180px] h-[180px] object-contain"
              />
            </div>
            <div className="absolute bottom-[-35px] left-0 right-0 flex items-center">
              <h2 className="text-white text-[32px] font-bold -mt-3 pl-0">{pokemon.name}</h2>
              <img 
                src={pokemon.spriteSmall} 
                alt={pokemon.name} 
                className="w-[50px] absolute right-0 -mt-3" 
              />
            </div>
          </div>

          <div className="w-[272px] h-[154px] mx-auto bg-[#05091B] rounded-xl p-4 pl-4 mt-4 mb-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="text-[#A3A6C5] text-[14px] mb-1.5">Health</div>
                <div className="flex flex-col -mt-1">
                  <div className="w-[240px] h-[6px] bg-[#252A3E] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#31C48D]" 
                      style={{ width: `${(pokemon.health / 1000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex gap-1 items-baseline">
                    <span className="text-white text-[24px] font-bold">{pokemon.health}</span>
                    <span className="text-[#A3A6C5] text-[16px]">from 1000</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#252A3E]"></div>

              <div className="flex justify-between">
                <div>
                  <div className="text-[#A3A6C5] text-[16px] mb-1">Attack</div>
                  <div className="text-white text-[24px] font-bold leading-none -mt-1">{pokemon.attack}</div>
                </div>
                <div>
                  <div className="text-[#A3A6C5] text-[16px] mb-1">Defense</div>
                  <div className="text-white text-[24px] font-bold leading-none -mt-1">{pokemon.defense}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;