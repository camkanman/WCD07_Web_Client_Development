import React from "react";
import HoverButton from "./HandHover";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section
            className="relative flex items-center justify-center h-screen bg-[#E6E9EF]"
        >
            <nav className="absolute top-4 left-4 text-sm font-light">@Husnu Mulyadi</nav>
            <nav className="absolute top-4 right-4 flex space-x-6 text-sm font-light">
                <Link to="#">About</Link>
                <Link to="#">Work</Link>
                <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
            </nav>
            <div className="absolute bottom-0 text-center">
                <img
                    src="/man-2.png"
                    alt="Profile"
                    className="bottom-0 w-[750px] h-[750px] object-cover mx-auto"
                />
            </div>
            <h1 className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[200px] text-white text-center whitespace-nowrap overflow-hidden max-w-full">
                flow Developer — UI/UX
            </h1>
            
            <div className="absolute top-1/2 right-0">
                <HoverButton />
            </div>
        </section>
    );
};

export default HeroSection;
