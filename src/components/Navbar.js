import React from 'react';
import { Link } from 'react-scroll';
import { FaLaptopCode } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { FaKeyboard } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';

function Navbar() {
    return (
        <div className="bg-white bg-opacity-1 w-fit p-3 flex h-20 items-center justify-center rounded-full">
            <Link
                className="m-4 sm:m-5 lg:m-7 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                to="home"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}>
                <FaLaptopCode size="40px" />
            </Link>

            <Link
                className="m-4 sm:m-5 lg:m-7 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}>
                <BsInfoCircle size="40px" />
            </Link>

            <Link
                className="m-4 sm:m-5 lg:m-7 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}>
                <FaKeyboard size="40px" />
            </Link>

            <Link
                className="m-4 sm:m-5 lg:m-7 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}>
                <BiSolidContact size="40px" />
            </Link>
        </div>
    );
}

export default Navbar;
