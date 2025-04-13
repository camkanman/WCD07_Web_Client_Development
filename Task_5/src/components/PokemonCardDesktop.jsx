import React from 'react';

const PokemonCardDesktop = ({ type, number, image, name, attack, defense, health, onClick }) => {
  return (
    <div 
      className="bg-white rounded-[20px] p-6 shadow-md cursor-pointer w-[220px] h-[340px] flex-shrink-0"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#4CAF50] text-[18px] font-semibold">{type}</span>
        <span className="text-[#1E1E1E] text-[18px]">#{number}</span>
      </div>
      
      <div className="flex flex-col items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-[160px] h-[160px] object-contain mb-4"
        />
        <h3 className="text-[22px] font-bold text-[#212E4C] mb-4">{name}</h3>
        
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="text-center">
            <p className="text-[#666666] text-[14px]">Health</p>
            <p className="text-[#212E4C] text-[18px] font-bold">{health}</p>
          </div>
          <div className="text-center">
            <p className="text-[#666666] text-[14px]">Attack</p>
            <p className="text-[#212E4C] text-[18px] font-bold">{attack}</p>
          </div>
          <div className="text-center">
            <p className="text-[#666666] text-[14px]">Defense</p>
            <p className="text-[#212E4C] text-[18px] font-bold">{defense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDesktop;