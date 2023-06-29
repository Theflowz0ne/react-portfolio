import React from 'react';
import { FaCode } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="flex items-center justify-evenly m-auto max-w-8xl">
            <i className="hover:cursor-pointer">
                <FaCode size="55" />
            </i>
            <ul className="flex">
                <li className="mx-4 hover:cursor-pointer">About Me</li>
                <li className="mx-4 hover:cursor-pointer">Skills</li>
                <li className="mx-4 hover:cursor-pointer">Projects</li>
                <li className="mx-4 hover:cursor-pointer">Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;
