import React from "react";
import profilePhoto from '../../public/assets/profile_photo.jpeg';

function Intro() {
    return (
        <div id="home" className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center min-h-screen p-4 mx-8">
            {/* Left Column: Round Picture */}
            <div className="flex justify-center items-center">
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="rounded-full w-[14rem] h-[14rem] md:w-[18rem] md:h-[18rem] xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] object-cover"
                />
            </div>

            {/* Right Column: Text and Social Media Buttons */}
            <div className="flex flex-col items-center space-y-2 text-gray-800">
                {/* Paragraphs */}
                <p className="text-center font-poppins font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                    Hello, I'm
                </p>
                <p className="text-center font-poppins font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                    Andreea Nistor
                </p>
                <p className="text-center font-poppins font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                    Data Scientist
                </p>

                {/* Social Media Buttons */}
                <div className="flex space-x-3 mt-3">
                    <ul className="flex justify-center mt-5 space-x-5">
                        {/* LinkedIn */}
                        <li>
                            <a href="https://www.linkedin.com/in/andreea-nistor-600a5a297/" target="_blank" className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.694 5.317C8.464 5.317 8.979 5.831 8.979 6.517C8.979 7.203 8.464 7.717 7.694 7.717ZM18 17H15.558V13.174C15.558 12.116 15.162 11.417 14.183 11.417C13.426 11.417 12.983 11.881 12.783 12.328C12.714 12.479 12.696 12.693 12.696 12.904V17H10.254V9H12.696V10.058C13.067 9.527 13.631 8.75 15.162 8.75C17.403 8.75 18 9.891 18 12.341V17Z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/* Github */}
                        <li>
                            <a href="https://github.com/andrea-mar" target="_blank" className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        {/* Gmail */}
                        <li>
                            <a href="#contact"
                                className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-400"
                                rel="noopener noreferrer">
                                <svg className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Intro;
