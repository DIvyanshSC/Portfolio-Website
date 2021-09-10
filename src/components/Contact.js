import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/search?q=110091&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-pink-100 dark:bg-pink-600 dark:bg-opacity-75 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/1 px-6">
                            <h2 className="title-font font-semibold text-pink-900 dark:text-black tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1 text-black dark:text-pink-100">
                                Mayur Vihar <br />
                                New Delhi, IN 110091
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-pink-900 dark:text-black tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-black dark:text-pink-100 leading-relaxed">
                                chaudhary.divyansh5@gmail.com
                            </a>

                        </div>
                    </div>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-pink-900 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5 text-base">
                        Looking for a developer to bring your idea to reality? Leave your message below and we will
                        contact you.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-pink-500">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-pink-100 rounded border border-pink-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4 ">
                        <label htmlFor="email" className="leading-7 text-sm text-pink-500">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-pink-100 rounded border border-pink-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-pink-500">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-pink-100 rounded border border-pink-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}