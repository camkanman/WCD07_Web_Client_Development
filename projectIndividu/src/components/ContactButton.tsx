'use client'

import Link from 'next/link'

interface ContactButtonProps {
  href: string
  className?: string
  children: React.ReactNode
  iconType?: 'arrow' | 'download'
}

const ContactButton = ({ href, className = '', children, iconType = 'arrow' }: ContactButtonProps) => {
  const ArrowIcon = (
    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l6-6m0 0H9m6 0v6" />
  );

  const DownloadIcon = (
    <g transform="translate(6 6) scale(0.5)">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="7 10 12 15 17 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="12" y1="15" x2="12" y2="3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </g>
  );

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-x-3 px-4 w-auto h-[48px] md:h-[54px] bg-[#D3E97A] text-black rounded-full overflow-hidden transition-all duration-300 font-medium ${className}`}
    >
      <span className="font-bold font-[Manrope] tracking-wider text-sm md:text-base ml-1">{children}</span>
      
      {/* Container for dot and arrow */}
      <span className="inline-block w-6 h-6 relative">
        {/* Dot hitam kecil di kanan (hidden on hover) */}
        <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full md:group-hover:opacity-0 transition-opacity duration-300"></span>
        {/* Arrow (shown on hover) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-6 md:h-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:w-[40px] md:group-hover:h-[40px] transition-all duration-300"
        >
          <circle cx="12" cy="12" r="12" fill="black" />
          {iconType === 'arrow' ? ArrowIcon : DownloadIcon}
        </svg>
      </span>
    </Link>
  )
}

export default ContactButton
