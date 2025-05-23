"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/home1.webp',
  '/images/home2.webp',
  '/images/home3.webp',
  '/images/home5.webp',
  '/images/p4.webp',
  '/images/home6.webp'
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const heading1Variants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0 },
};

const heading2Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 2.5, ease: [0.68, -0.55, 0.27, 1.55] } }, // Inside-out ease
  exit: { opacity: 0 },
};

const buttonVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }, // Slower fade
  exit: { opacity: 0 },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-black bg-cover bg-center h-[80vh] flex items-center justify-center text-white transition-all duration-700"
      style={{ backgroundImage: `url('${images[currentIndex]}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight size={32} />
      </button>

      {/* Text with Animation */}
   <AnimatePresence mode="wait">
  <motion.div
    key={currentIndex}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={containerVariants}
    className="relative z-10 text-center"
  >
    <motion.h1
      variants={heading1Variants}
      className="text-3xl md:text-5xl font-bold mb-4"
    >
      WE BUILD YOUR DESIGN
    </motion.h1>
<motion.h2
  variants={heading2Variants}
  className="text-sm sm:text-xl md:text-2xl lg:text-4xl text-green-400 font-semibold mb-6"
>
  BEST LiDAR AND PHOTOGRAMMETRY GROUP
</motion.h2>

    <a href="/ContactUs">
    <motion.button
      variants={buttonVariants}
      className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 text-white font-medium"
    >
      Contact Now
    </motion.button></a>
  </motion.div>
</AnimatePresence>

    </section>
  );
}