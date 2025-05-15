'use client';

import React, { useState } from 'react';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaBars,
    FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleServicesMouseEnter = () => {
        setIsServicesDropdownOpen(true);
    };

    const handleServicesMouseLeave = () => {
        setIsServicesDropdownOpen(false);
    };

    const handleIndustriesMouseEnter = () => {
        setIsIndustriesDropdownOpen(true);
    };

    const handleIndustriesMouseLeave = () => {
        setIsIndustriesDropdownOpen(false);
    };

    const services = [
        '3D Laser Scanning',
        'Lidar Data Processing',
        '3D Cad Mod Modelling',
        '3D BIM Modelling',
        'Plant Modelling',
        '3D Mesh Model',
        '3D Virtual Reality',
        'Mobile Mapping',
        'Non-Destructive Testing (NDT)',
        'Project Based Training',
    ];

    const industries = [
        'Oil & Gas',
        'Offshore and Marine',
        'Architecture and Construction',
        'Heritage',
        'Ship Building',
        'Aviation',
        'Mining and Tunneling',
        'Wind Power',
        'Urban Planning',
        'Reverse Engineering',
    ];

    return (
        <div className="w-full">
            {/* Top bar */}
            <div className="bg-blue-900 text-white text-sm flex justify-between items-center px-4 py-2">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
                    <a href="tel:+918889013444" className="flex items-center gap-1 hover:underline">
                        <FaPhoneAlt /> +91 8889013444
                    </a>
                    <a href="mailto:pramanengineering12@gmail.com" className="flex items-center gap-1 hover:underline">
                        <FaEnvelope /> pramanengineering12@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                    <button className="bg-lime-400 text-black px-3 py-1 rounded hover:bg-lime-500">
                        Quick Inquiry
                    </button>
                    <a href="#" aria-label="Facebook" className="hover:text-lime-300"><FaFacebookF /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-lime-300"><FaInstagram /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-lime-300"><FaLinkedinIn /></a>
                </div>
            </div>

            {/* Main nav */}
            <div className="flex justify-between items-center px-6 py-4 shadow-md relative bg-white">
                {/* Logo */}
                <div className="text-xl md:text-2xl font-bold text-blue-700">
                    Praman<span className="text-green-500">Engineering Services</span>
                </div>

                {/* Desktop nav links */}
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    <a href="#" className="hover:text-blue-600">Home</a>
                    <a href="#" className="hover:text-blue-600">About Us</a>
                    <div
                        className="relative"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                    >
                        <a href="#" className="hover:text-blue-600">Services</a>
                        {isServicesDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 py-1 w-50 z-10">
                                {services.map((service, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                                    >
                                        {service}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={handleIndustriesMouseEnter}
                        onMouseLeave={handleIndustriesMouseLeave}
                    >
                        <a href="#" className="hover:text-blue-600">Industries</a>
                        {isIndustriesDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 py-1 w-48 z-10">
                                {industries.map((industry, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                                    >
                                        {industry}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="#" className="hover:text-blue-600">Projects</a>
                    <a href="#" className="hover:text-blue-600">Blog</a>
                    <a href="#" className="hover:text-blue-600">Contact Us</a>
                </div>

                {/* Hamburger icon for mobile */}
                <div className="md:hidden text-xl cursor-pointer" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile dropdown menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 z-10 md:hidden">
                        <div className="flex flex-col space-y-4 text-sm font-medium">
                            <a href="#" className="hover:text-blue-600">Home</a>
                            <a href="#" className="hover:text-blue-600">About Us</a>
                            <a href="#" className="hover:text-blue-600">Services</a>
                            <a href="#" className="hover:text-blue-600">Industries</a>
                            <a href="#" className="hover:text-blue-600">Projects</a>
                            <a href="#" className="hover:text-blue-600">Blog</a>
                            <a href="#" className="hover:text-blue-600">Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;