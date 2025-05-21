'use client';
import Link from 'next/link';
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const services = [
    { name: '3D Laser Scanning', path: '/services/LaserScanning' },
    { name: 'Lidar Data Processing', path: '/services/LidarData' },
    { name: '3D Cad Mod Modelling', path: '/services/CadModelling' },
    { name: '3D BIM Modelling', path: '/services/BimModelling' },
    { name: 'Plant Modelling', path: '/services/PlantModelling' },
    { name: '3D Mesh Model', path: '/services/MeshModel' },
    { name: '3D Virtual Reality', path: '/services/VirtualReality' },
    { name: 'Mobile Mapping', path: '/services/MobileMapping' },
    { name: 'Non-Destructive Testing (NDT)', path: '/services/NDT' },
    { name: 'Project Based Training', path: '/services/Training' },
  ];

  const industries = [
    { name: 'Oil & Gas', path: '/industries/oil-gas' },
    { name: 'Offshore and Marine', path: '/industries/offshore-marine' },
    { name: 'Architecture and Construction', path: '/industries/architecture-construction' },
    { name: 'Heritage', path: '/industries/heritage' },
    { name: 'Ship Building', path: '/industries/ship-building' },
    { name: 'Aviation', path: '/industries/aviation' },
    { name: 'Mining and Tunneling', path: '/industries/mining-tunneling' },
    { name: 'Wind Power', path: '/industries/wind-power' },
    { name: 'Urban Planning', path: '/industries/urban-planning' },
    { name: 'Reverse Engineering', path: '/industries/reverse-engineering' },
  ];


  return (
   <div className="w-full">
  {/* Top Bar */}
  <div className="bg-blue-900 text-white text-xs sm:text-sm flex justify-between items-center px-2 sm:px-4 py-2 sm:py-2">
    
    {/* Left Side: Contact Info */}
    <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
      <a href="tel:+918889013444" className="flex items-center gap-1 sm:gap-2 hover:underline whitespace-nowrap">
        <FaPhoneAlt className="text-sm sm:text-base" /> +91 8889013444
      </a>
      <a href="mailto:pramanengineering12@gmail.com" className="flex items-center gap-1 sm:gap-2 hover:underline whitespace-nowrap">
        <FaEnvelope className="text-sm sm:text-base" /> pramanengineering12@gmail.com
      </a>
    </div>

    {/* Right Side: Quick Inquiry + Social Icons */}
    <div className="flex items-center gap-2 sm:gap-3 mt-1 md:mt-0">
      <a href='/ContactUs'>        
        <button className="bg-lime-400 text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded hover:bg-lime-500">
          Quick Inquiry
        </button>
      </a>
      <a href="#" aria-label="Facebook" className="hover:text-lime-300">
        <FaFacebookF className="text-sm sm:text-base" />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-lime-300">
        <FaInstagram className="text-sm sm:text-base" />
      </a>
      <a href="#" aria-label="LinkedIn" className="hover:text-lime-300">
        <FaLinkedinIn className="text-sm sm:text-base" />
      </a>
    </div>

  </div>






      {/* Navbar Main */}
      <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
        <div className="text-xl md:text-2xl font-bold text-blue-700">
          Praman<span className="text-green-500">Engineering Services</span>
        </div>

        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/Home" className="text-black-700 hover:text-blue-600">Home</Link>
          <Link href="/About" className="hover:text-blue-600">About Us</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <span
              onClick={() => setIsServicesDropdownOpen(prev => !prev)}
              className="hover:text-blue-600 cursor-pointer"
            >
              Services
            </span>

            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 py-1 w-60 z-30">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <span
              onClick={() => setIsIndustriesDropdownOpen(prev => !prev)}
              className="hover:text-blue-600 cursor-pointer"
            >
              Industries
            </span>

            {isIndustriesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 py-1 w-48 z-30">
                {industries.map((industry, index) => (
                  <Link
                    key={index}
                    href={industry.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                  >
                    {industry.name}
                  </Link>

                ))}
              </div>
            )}
          </div>

          <Link href="/Project" className="hover:text-blue-600">Projects</Link>
          <Link href="/Blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/ContactUs" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 z-30 md:hidden">
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="/" className="text-black hover:text-blue-600">Home</Link>
              <Link href="/About" className="text-black hover:text-blue-600">About Us</Link>

              <details className="group">
                <summary className="cursor-pointer text-black hover:text-blue-600">Services</summary>
                <div className="pl-4 mt-1 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className="block text-gray-700 hover:text-blue-600 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-black hover:text-blue-600">Industries</summary>
                <div className="pl-4 mt-1 space-y-1">
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      href={industry.path}
                      className="block text-gray-700 hover:text-blue-600 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>

                  ))}
                </div>
              </details>

              <Link href="/Project" className=" text-black hover:text-blue-600">Projects</Link>
              <Link href="/Blog" className="text-black hover:text-blue-600">Blog</Link>
              <Link href="/ContactUs" className="text-black hover:text-blue-600">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
