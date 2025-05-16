// components/AboutHero.tsx
import React from "react";
import Image from "next/image";

const ProjectHero: React.FC = () => {
  return (
    <section className="relative h-[250px] flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner6.jpg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="mt-2 text-sm">
          <span className="text-lime-400">Home</span>
          <span className="mx-2">/</span>
          <span>Project</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
