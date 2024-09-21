import React from "react";

import '../css/navbar.css';
import { useState } from "react";
import vector from '../images/Vector.jpg';
import menu from '../images/menu.11 1.jpg'


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="bg-white border-gray-200 nav-font">
            <div className="container mx-auto px-6  flex justify-between items-center py-6  max-w-7xl">
                <div className="ml-4 text-xl font-bold flex gap-3">
                    <img className="vector-img" src={vector} alt="Logo" />
                    <p>Travlog</p>
                </div>

                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-700 hover:text-gray-900"><b>Home</b></a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Discover</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Special Deals</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                </div>

                <div className="hidden md:flex space-x-4">
                    <h5 className="text-gray-700 hover:text-gray-900 py-3">
                        <a href="#"><b>Log In</b></a>
                    </h5>
                    <button className="signup-button">Sign Up</button>
                </div>

                {/* Button for toggling nav on mobile */}
                <img src={menu}
                    onClick={toggleNav}
                    className="md:hidden text-gray-700 hover:text-gray-900"


                />
            </div>

            {/* Mobile Navigation */}
            {isNavOpen && (
                <div className="md:hidden flex flex-col space-y-4 py-4">
                    <a href="#" className="text-gray-700 hover:text-gray-900"><b>Home</b></a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Discover</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Special Deals</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                    <h5 className="text-gray-700 hover:text-gray-900">
                        <a href="#"><b>Log In</b></a>
                    </h5>
                    <button className="signup-button">Sign Up</button>
                </div>
            )}
            <br /> <br />
        </nav>

    );
};
export default Navbar;

