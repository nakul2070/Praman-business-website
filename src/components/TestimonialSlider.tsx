"use client";
import Image from 'next/image';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  title: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mayank",
    title: "Founder",
    message:
      "All architectural services are handled by qualified CAD specialists by a very friendly crew. Best 3D BIM Modeling service in Gujarat.",
  },
  {
    name: "Vikas sandheliya",
    title: "Co-founder",
    message:
      "They presented new concepts that were outside of our scope. Their members approach assured that my project was in good hands.",
  },
  {
    name: "Nishant katare",
    title: "Co-founder",
    message:
      "Amazing attention to detail and project management. The LiDAR data processing was top notch and helped us meet tight deadlines with confidence.",
  },
  
];

export default function TestimonialSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  const next = () =>
    setStartIndex((prev) =>
      (prev + 2) % testimonials.length
    );

  return (
    <section className="relative py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-10">
        CLIENTS LOVE <span className="text-blue-700">OUR WORK</span>
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(startIndex, startIndex + 2).map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-lg p-6 md:p-8 max-w-md w-full border text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 border-2 border-dotted border-blue-600 rounded-sm flex items-center justify-center">

                  <Image
                    src="/images/test.png"
                    alt="Testimonial"
                    width={300}       
                    height={300}      
                    className="rounded-full object-cover"
                  />

                </div>
                <div>
                  <h3 className="text-green-600 font-semibold text-lg">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.message}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
