import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-black md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-pink-800 mb-4 md:mb-0">
                    <a href="https://www.linkedin.com/in/divyansh56/" className="ml-3 text-xl">
                        My Linkedin
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-pink-700 hover:text-pink-500">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 text-pink-700 hover:text-pink-500">
                        Skills
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center text-white bg-pink-600 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}