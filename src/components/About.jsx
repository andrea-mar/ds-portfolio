import React from "react";

function About(){
    return(
        <div 
            id="about" 
            className="flex items-center justify-center min-h-screen"
        >
            <div className="text-left text-gray-800 text-sm space-y-4 p-24">
                <p className="font-semibold text-xl">About me</p>
                <p>I began my career in psychology and behavior analysis, spending 15 years working in behavioral therapy with children with special needs. Along the way, I discovered a passion for programming and problem-solving, which inspired me to transition into computing, data science, and artificial intelligence. Five years ago, I began teaching myself C and Python, diving into web development, game creation, and AI. My love for learning also led me to teach coding to the children I worked with, starting an afterschool club in 2021 where I taught students—from both special educational needs (SEN) and mainstream backgrounds—how to code their own games using Scratch, Python (Turtle, Pygame), and more.</p>
                <p>In January 2024, I earned my MSc in Data Science from Birkbeck College with distinction. My thesis focused on fine-tuning BERT-based models for three-class sentiment analysis of Reddit posts discussing behavior therapy. I also built classification models to identify key stakeholders (parents, therapists, SEN professionals, general public), combining my passion for NLP and my desire to understand the online discourse surrounding my previous work. This project was a fascinating deep dive into how language models have evolved, from simple bag-of-words approaches to the sophisticated capabilities of modern generative AI.</p>
                <p>Since then, I’ve been working as a Junior Data Scientist at Freemavens, where I’ve continued developing my expertise in NLP. I’ve worked on analyzing online discourse across product descriptions, reviews, forums, and social media platforms like TikTok. My role involves extracting and storing data through APIs and web scraping, developing methodologies and analysis tools, and visualizing insights using Plotly and Matplotlib. I’ve also built a database from scratch in Azure to monitor TikTok data over time and gained hands-on experience with cloud services, including Azure VMs.</p>
                <p className="pb-4">I’m currently excited about new opportunities to further develop my machine learning and data science skills, deepen my expertise in NLP and large language models (LLMs), and gain experience with predictive and causal modeling across diverse industries. Let’s connect and create something impactful!</p>
                <a
                    href="https://drive.google.com/file/d/1GLYMWgTv2ldY3FABZNTSys_k5ac_JhJ4/view?usp=sharing"
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