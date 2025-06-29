import React from 'react';

interface SubmitButtonProps {
  children?: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children = 'SUBMIT' }) => {
  return (
    <button
      type="submit"
      className="w-[140px] h-[54px] sm:w-auto sm:h-auto sm:py-3 sm:px-12 inline-flex items-center justify-center border border-transparent shadow-sm text-base font-bold rounded-full text-black bg-[#D3E97A] hover:bg-[#cde07a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D3E97A] focus:ring-offset-black transition-colors"
    >
      {children}
    </button>
  );
};

export default SubmitButton;