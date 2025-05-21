import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[50vh] sm:min-h-[80vh] md:h-[90vh] lg:h-[40vh] xl:h-30vh overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bannerp1.webp"
        alt="Banner background"
        fill
        className="object-cover brightness-50 contrast-125"
        priority
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-10">
        <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold mb-3 leading-tight sm:leading-snug">
          LASER SCANNING AND UAV SURVEYING GROUP
        </h1>
        <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium mb-5 max-w-xl sm:max-w-2xl">
          WILL HELP YOU MAKE AWESOME DESIGN FOR YOUR PROJECT
        </p>
        <a
          href="/ContactUs"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base lg:text-lg py-2 px-6 rounded-md shadow-md transition duration-300"
        >
          Get In Touch
        </a>

      </div>
    </div>
  );
};

export default HeroBanner;
