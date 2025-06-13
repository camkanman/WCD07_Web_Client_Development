import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { id: 1, link: 'home', text: 'Beranda' },
    { id: 2, link: 'about', text: 'Tentang Saya' },
    { id: 3, link: 'projects', text: 'Proyek' },
    { id: 4, link: 'skills', text: 'Keahlian' },
    { id: 5, link: 'contact', text: 'Kontak' },
  ];

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleShadow);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleShadow);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${shadow ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'}`}
    >
      <div className="w-full max-w-[85%] mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-text-primary">Portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-3 lg:space-x-5">
          {links.map(({ id, link, text }) => (
            <li key={id} className="relative group">
              <Link 
                to={link} 
                smooth 
                duration={500}
                spy={true}
                activeClass="active"
                className={`py-2 px-1 text-sm font-medium cursor-pointer transition-all duration-300 ${activeLink === link ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {text}
              </Link>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-all duration-300 ${activeLink === link ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'}`}></div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer p-2 rounded-full hover:bg-secondary/50 transition-all duration-300">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
          fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out z-40`}
          onClick={handleClick}
        ></div>
        <div
          className={`${nav ? 'translate-x-0' : 'translate-x-full'} 
          fixed top-0 right-0 w-3/4 h-screen bg-primary shadow-xl flex flex-col justify-center 
          transition-transform duration-300 ease-in-out md:hidden z-50 p-8`}
        >
          <div className="absolute top-6 right-6">
            <FaTimes size={24} onClick={handleClick} className="cursor-pointer hover:text-accent transition-colors" />
          </div>
          <ul className="flex flex-col space-y-8 items-center">
            {links.map(({ id, link, text }) => (
              <li key={id} className="w-full text-center">
                <Link
                  onClick={handleClick}
                  to={link}
                  smooth
                  duration={500}
                  className={`block py-2 text-xl font-medium transition-all duration-300 ${activeLink === link ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;