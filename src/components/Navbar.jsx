import React, { useState } from "react";

const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'CV', id: 'cv' , url: 'https://drive.google.com/file/d/1GLYMWgTv2ldY3FABZNTSys_k5ac_JhJ4/view?usp=sharing'},
    { title: 'Contact', id: 'contact' }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle both navigation and menu closing
    const handleNavClick = (e) => {
        setIsMenuOpen(false);  // Close the menu when a link is clicked
    };

    return (
        <div className="bg-gray-800 fixed w-full top-0 left-0 z-10">
            <div className="flex justify-between mx-auto items-center py-4 px-6 md:px-24">
                {/* Logo */}
                <div className="text-white font-bold text-xl">AN.DS</div>

                {/* Hamburger Menu (visible on smaller screens) */}
                <div 
                    className="text-white text-3xl md:hidden cursor-pointer" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </div>

                {/* Nav Links (visible on larger screens) */}
                <ul className="hidden md:flex gap-10 items-center justify-center text-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-white text-sm">
                            <a 
                                href={link.title === 'CV' ? link.url : `#${link.id}`}
                                target={link.title === 'CV' ? '_blank' : '_self'}
                                className="hover:underline"
                                onClick={handleNavClick}
                            >{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Fullscreen Overlay Menu (visible when hamburger is clicked) */}
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center">
                        <div 
                            className="absolute top-4 right-6 text-white text-4xl cursor-pointer" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            &times;
                        </div>
                        <ul className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, index) => (
                                <li key={index} className="text-white text-2xl">
                                    <a 
                                        href={link.title === 'CV' ? link.url : `#${link.id}`}
                                        target={link.title === 'CV' ? '_blank' : '_self'}
                                        className="hover:underline"
                                        onClick={handleNavClick}  // onClick handler 
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;