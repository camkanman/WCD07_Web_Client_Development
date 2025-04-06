import React from 'react';

const HoverGreetingBubble = ({ name = "Ayush" }) => {
  return (
    <div className="relative group">
      <div className="flex items-center bg-black text-white px-4 py-2 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out overflow-hidden group-hover:min-w-fit">
        <span className="text-xl">👋</span>
        <span className="max-w-0 opacity-0 whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-in-out font-medium">
          Hi I'm {name}
        </span>
      </div>
    </div>
  );
};

export default HoverGreetingBubble;