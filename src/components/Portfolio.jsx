import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div id="portfolio" className="flex flex-col min-h-screen p-24 xl:px-32 2xl:px-36">
            <p className="text-xl xl:text-2xl 2xl:text-4xl font-semibold mb-8 mt-2 text-left">Projects</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12  2xl:gap-16"> 
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={index} // Add a unique key for each item
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        links={project.links}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
