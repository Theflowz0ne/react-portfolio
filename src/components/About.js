import React from 'react';
import image from '../assets/images/my-img-about-me.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const About = () => {
    return (
        <div
            id="about"
            className="section text-white">
            <div className="container mx-auto flex max-[1024px]:flex-col">
                <div className="mr-10 w-full max-[1024px]:w-[70%] max-[1024px]:mx-auto max-[1024px]:order-2 transition duration-300 ease-in-out hover:scale-105">
                    <img
                        src={image}
                        alt="IvanTraykov"
                    />
                </div>
                <div className="max-w-fit mx-5 min-[1024px]:mr-10 max-[1024px]:text-center">
                    <h2 className="font-lobster  text-5xl">About Me</h2>
                    <h3 className="font-lobster mt-10 text-3xl my-3">
                        Developing web applications and gaining practical
                        programming experience.
                    </h3>
                    <p className="mt-10">
                        Driven by an unwavering passion for programming, I am
                        determined to transform my lifelong dream into a
                        fulfilling career that merges creativity,
                        problem-solving, and continuous growth.
                    </p>
                    <div className="flex max-[1024px]:justify-center">
                        <a
                            className="my-10 mx-5 transition duration-300 ease-in-out hover:scale-105"
                            href="https://www.linkedin.com/in/ivan-traykov-4ab849220/"
                            target="_blank"
                            rel="noreferrer">
                            <BsLinkedin size="60px" />
                        </a>
                        <a
                            className="my-10 mx-5 transition duration-300 ease-in-out hover:scale-105"
                            href="https://github.com/Theflowz0ne"
                            target="_blank"
                            rel="noreferrer">
                            <BsGithub size="60px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
