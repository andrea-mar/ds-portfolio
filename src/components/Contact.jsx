import React from "react";
import Footer from './Footer';

function Contact() {
    return (
        <div id="contact" className="flex flex-col min-h-screen">
            {/* Main content */}
            <div className="flex-grow flex justify-center items-center p-20">
                <form 
                    action="https://getform.io/f/aqoozvoa"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <p className="text-xl font-semibold mb-6 mt-10">Contact</p>

                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />

                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />

                    <textarea 
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md active:drop-shadow-none"
                    >
                        Work With Me
                    </button>
                </form>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Contact;
