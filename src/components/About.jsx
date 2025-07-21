import React from "react";

function About(){
    return(
        <div 
            id="about" 
            className="flex items-center justify-center min-h-screen"
        >
            <div className="text-left text-gray-800 text-sm xl:text-l 2xl:text-xl space-y-4 p-24 xl:p-32 2xl:p-36">
                <p className="font-semibold text-xl xl:text-2xl 2xl:text-4xl">About me</p>
                <p>I am a data scientist with a background in psychology and 15 years of experience working in behavioural therapy with children. My interest in problem-solving and technology gradually grew while developing structured interventions and progress tracking tools, which led me to start learning Python and C in my free time. What began as a curiosity turned into a passion - I taught myself to code, ran an afterschool coding club, and eventually made the leap into data science, earning an MSc with distinction from Birkbeck College.</p>
                <p>Since then, I have worked at Freemavens, where I helped build NLP tools from the ground up, and currently at DK, where I develop LLM-based agents and automation systems using tools like Snowflake, Vertex AI, and Gemini. My focus is on building accessible, impactful solutions - especially in NLP and applied machine learning.</p>
                <p className="pb-4">I am always eager to learn and grow. Outside of work, I enjoy running, playing tennis, reading both fiction and non-fiction, and relaxing with my cat.</p>
                <a
                    href="https://drive.google.com/file/d/1_KOXr4f9bWSBAl6FMeESWFDyL2Xzfol3/view?usp=drive_link"
                    target="_blank"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md active:drop-shadow-none"
                >
                    Download my CV
                </a>
            </div>
            
        </div>
    )
}

export default About;



