import React from "react";

function PortfolioItem({title, imgUrl, stack, link, links}){
    return(
        <div className="border-2 border-grey-800 rounded-md overflow-hidden p-2">
            <img
                src={imgUrl}
                alt='portfolio project'
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold pt-4">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-grey-800 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>

                <ul className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm pt-6">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={Object.values(link)}
                                target="_blank" 
                                class="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-400"
                            > 
                                {Object.keys(link)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PortfolioItem;