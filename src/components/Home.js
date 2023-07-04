import React from 'react';
import Image from '../assets/images/my-img-home.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div
            id="home"
            className="section">
            <div className="container flex flex-col min-[768px]:flex-row min-[768px]:mb-20 items-center space-evenly mx-auto">
                <div className="drop-shadow-2xl grow font-lobster text-5xl min-[1024px]:text-7xl min-[1024px]:w-[50%] transition duration-300 ease-in-out hover:scale-110">
                    <h1 className="text-white">Ivan Traykov</h1>
                    <h3 className="text-sky-400 mt-3 text-4xl min-[1024px]:text-5xl">
                        Your Web{' '}
                        <span className="underline underline-offset-8 decoration-indigo-500">
                            <TypeAnimation
                                sequence={[
                                    ' Developer',
                                    2000,
                                    ' Magician',
                                    2000,
                                ]}
                                speed={50}
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </span>
                    </h3>
                </div>
                <div className="object-contain mx-auto mt-10 w-4/5 min-[768px]:w-3/5 transition duration-300 ease-in-out hover:scale-105 ">
                    <img
                        src={Image}
                        alt="Ivan-Traykov"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
