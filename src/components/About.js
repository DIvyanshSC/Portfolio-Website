
import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-800 dark:text-pink-600">
                        Hi, I'm Divyansh.
                        <br className="hidden lg:inline-block" />I can help you build your dream app.
                    </h1>
                    <p className="mb-8 leading-relaxed text-base">
                        Result-oriented Full Stack Developer
                        with deep knowledge of different
                        frameworks and APIs. Knowledge of
                        Data Structures, Algorithms in Java,
                        C++ with in-depth knowledge of HTML,
                        CSS, Bootstrap, JavaScript, MongoDB,
                        Express, React/Angular, Node.js.

                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-black dark:bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-black-100 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./FrontImage.png"
                    />
                </div>
            </div>
        </section>
    );
}