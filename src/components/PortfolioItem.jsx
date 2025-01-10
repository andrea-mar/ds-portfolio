import React, { useState, useRef, useEffect } from "react";

function PortfolioItem({ title, description, imgUrl, stack, links }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && 
                !dropdownRef.current.contains(event.target) && 
                !buttonRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            if (isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [isDropdownOpen]);

    return (
        <div className="border-2 border-grey-800 rounded-md overflow-hidden p-2 pb-10 2xl:pb-12 relative">
            <img
                src={imgUrl}
                alt="portfolio project"
                className="w-full h-36 md:h-48 xl:h-[12rem] 2xl:h-[16rem] object-cover cursor-pointer"
            />
            <div className="pb-6">  
                <h3 className="text-lg md:text-lg xl:text-xl 2xl:text-2xl mb-2 md:mb-3 xl:mb-6 2xl:mb-8 font-semibold pt-4 xl:pt-6 2xl:pt-8">
                    {title}
                </h3>
                <p className="text-xs 2xl:text-sm mb-2 md:mb-3 xl:mb-6 2xl:mb-8">
                    {description}
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm xl:text-sm 2xl:text-lg">
                    {stack.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block px-2 py-1 font-semibold border-2 border-grey-800 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
            <div className="absolute bottom-2 left-2">
                <div className="relative pt-6">
                    <button
                        ref={buttonRef}
                        onClick={toggleDropdown}
                        className="inline-flex items-center px-3 py-2 w-max text-xs md:text-sm xl:text-sm 2xl:text-xl font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md active:drop-shadow-none"
                    >
                        Project URLs 
                        <svg 
                            className={`w-2.5 h-2.5 ms-3 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 10 6"
                        >
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="fixed transform -translate-y-full mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50"
                    style={{
                        left: buttonRef.current?.getBoundingClientRect().left,
                        top: buttonRef.current?.getBoundingClientRect().top
                    }}
                >
                    <ul>
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="text-xs md:text-sm xl:text-sm 2xl:text-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            >
                                <a
                                    href={Object.values(link)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    {Object.keys(link)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PortfolioItem;