import React from 'react';
import ContactForm from './ContactForm';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
    return (
        <div
            id="contact"
            className="section flex-col">
            <div className="mb-20 text-white font-lobster text-center w-[70%] max-[768px]:mb-10 max-[768px]:w-[80%]">
                <h1 className="text-7xl mb-5 max-[768px]:text-2xl">
                    <TypeAnimation
                        sequence={[
                            ' If you want to connect',
                            2000,
                            'Contact me!',
                            2000,
                        ]}
                        speed={50}
                        wrapper="h1"
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-2xl max-[768px]:text-xl">
                    Feel free to contact me for work or any other topic. I'm
                    ready to collaborate, discuss, and explore new opportunities
                    together. Let's connect and expand horizons.
                </p>
            </div>
            <div className="mx-auto w-[50%] max-[768px]:w-[80%]">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
