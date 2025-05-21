import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about1.webp"
            alt="Handshake"
            width={600}
            height={400}
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
            ABOUT <span className="text-blue-800">US</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
            We are a professional surveying company with a primary focus on 3D laser scanning.
            Based in India, we operate worldwide with vast experience over a diverse range of services. As a
            <strong> 3D Scanning Company</strong>, we offer a wide spectrum of point cloud-related products such as 2D documentation,
            3D Laser Scanning, 3D Models, Building Information Models (BIM), Plant Modeling, <span className="text-blue-600 underline">Offshore</span>,
            Ship industries, Mining, Topography Surveying, GIS and NDT.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
            Our products and services are suitable for industrial sites, Oil & Gas, offshore installations and vessels,
            architecture, <span className="text-blue-600 underline">heritage</span>, FMCG and large-scale urban regeneration projects.
            We have highly skilled CAD engineers which allows us to process all our data in-house.
          </p>
          <a href="/About">
  <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-blue-800 text-white text-sm sm:text-base rounded hover:bg-blue-600 transition duration-300">
    Read More
  </button>
</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
