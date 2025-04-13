import React from 'react';
import PokemonCardDesktop from './PokemonCardDesktop';

const PokemonCard = ({ type, number, image, isGridView, isMobileView, onClick, name, attack, defense, health }) => {
  if (!isGridView && !isMobileView) {
    return (
      <div className="bg-white rounded-[20px] shadow-md cursor-pointer w-full h-[240px] flex items-center px-8">
        <div className="flex w-full items-center justify-between max-w-[1400px] mx-auto">
          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-3 w-[160px]">
              <span className="text-[#4CAF50] text-[28px] font-semibold">{type}</span>
              <span className="text-[#1E1E1E] text-[24px]">#{number}</span>
            </div>
            <img 
              src={image} 
              alt={name} 
              className="w-[200px] h-[200px] object-contain"
            />
            <h2 className="text-[36px] font-bold text-[#212E4C] w-[250px]">{name}</h2>
          </div>
          
          <div className="flex gap-16">
            <div className="text-center min-w-[120px]">
              <p className="text-[#666666] text-[18px] mb-2">Health</p>
              <p className="text-[#212E4C] text-[28px] font-bold">{health}</p>
            </div>
            <div className="text-center min-w-[120px]">
              <p className="text-[#666666] text-[18px] mb-2">Attack</p>
              <p className="text-[#212E4C] text-[28px] font-bold">{attack}</p>
            </div>
            <div className="text-center min-w-[120px]">
              <p className="text-[#666666] text-[18px] mb-2">Defense</p>
              <p className="text-[#212E4C] text-[28px] font-bold">{defense}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white rounded-[20px] p-4 shadow-md mb-1 cursor-pointer ${
        isGridView 
          ? (isMobileView ? 'w-[128px] h-[180px]' : 'w-full h-[280px]')
          : (isMobileView ? 'w-[279px] h-[240px]' : 'w-full h-[320px] flex items-center')
      }`}
      onClick={onClick}
    >
      {!isGridView && (
        <div className={`flex ${isMobileView ? 'flex-col' : 'flex-row w-full gap-8 px-8'}`}>
          <div className={`flex justify-between items-start mb-2 ${isMobileView ? '-mt-2 w-full' : 'w-1/3'}`}>
            <div className="flex flex-col gap-2">
              <span className="text-[#4CAF50] text-[20px] font-semibold">{type}</span>
            </div>
            {isMobileView && (
              <span className="text-[#1E1E1E] text-[18px]">#{number}</span>
            )}
            {!isMobileView && (
              <span className="text-[#1E1E1E] text-[18px]">#{number}</span>
            )}
          </div>
          <div className={`flex ${isMobileView ? 'flex-col items-center -mt-6' : 'flex-row items-center gap-8 w-2/3'}`}>
            <img 
              src={image} 
              alt={name} 
              className={`${isMobileView ? 'w-[178.11px] h-[173px]' : 'w-[200px] h-[200px]'} object-contain`}
            />
            <div className={`${isMobileView ? 'text-center' : 'flex flex-col gap-4'}`}>
              <p className={`font-['DM_Sans'] font-bold ${isMobileView ? 'text-[18px] mt-2' : 'text-[24px]'} text-[#212E4C]`}>
                {name}
              </p>
              {!isMobileView && (
                <div className="grid grid-cols-3 gap-8 mt-4">
                  <div>
                    <p className="text-[#666666] text-[14px]">Health</p>
                    <p className="text-[#212E4C] text-[18px] font-bold">{health}</p>
                  </div>
                  <div>
                    <p className="text-[#666666] text-[14px]">Attack</p>
                    <p className="text-[#212E4C] text-[18px] font-bold">{attack}</p>
                  </div>
                  <div>
                    <p className="text-[#666666] text-[14px]">Defense</p>
                    <p className="text-[#212E4C] text-[18px] font-bold">{defense}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isGridView && (
        <div className={`flex flex-col items-center ${isMobileView ? 'mt-4' : 'mt-8'}`}>
          <img 
            src={image} 
            alt={name} 
            className={`${isMobileView ? 'w-[80px] h-[80px] mt-2' : 'w-[160px] h-[160px]'} object-contain`}
          />
          <p className={`text-center font-['DM_Sans'] font-bold ${isMobileView ? 'text-[14px] mt-4 leading-[1.1]' : 'text-[20px] mt-6'} text-[#212E4C]`}>
            {name}
          </p>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;