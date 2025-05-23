'use client';
import Image from 'next/image';

const ReverseEngineeringPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o10.png"
          alt="Reverse Engineering"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <h1 className="text-2xl font-bold text-blue-800">Reverse Engineering</h1>

          <p className='text-black'>
            3D Pointshot provides fast and accurate Indoor and Outdoor measurement in three dimensions as simply at your fingertips.
          </p>

          <p className='text-black'>
            We offer reverse engineering services, which include more accurate geometric analysis, material and surface analysis, and the generation of precise <span className="text-blue-600 font-medium">3D CAD models</span> and 2D technical documentation.
          </p>

          <p className='text-black'>
            In engineering terms, Reverse Engineering is used to summarize the process of reconstructing an existing object. When designing an object from scratch, an engineer will draw up a design specification and produce drawings from which the item is constructed. Reverse engineering provides a way to generate missing CAD files and update or create as-built documentation. It allows users to quickly digitize a part or object and create a fully surfaced CAD model which can then be used to reproduce an item.
          </p>

          <p className='text-black'>
            3D Pointshot offers Reverse Engineering services to assist your physical requirement by using our 3D laser scanning technologies and <span className="text-blue-600 font-medium">3D CAD</span> software. We are able to assist you in capturing the measurements and entering them into 3D Product Development software.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Reverse Engineering
          </h2>
          <ul className="list-disc list-inside text-black text-sm space-y-1 ">
            <li>Quality Control</li>
            <li>Deformation Analysis</li>
            <li>Optimized 3D Mesh model</li>
            <li>Creating 3D and 2D Documentation</li>
            <li>Saving time</li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="bg-white shadow-md rounded-md">
          <h3 className="bg-white text-green-600 px-4 py-2 rounded-t-md font-semibold">POPULAR CATEGORY</h3>
          <ul className="p-4 text-sm space-y-2 text-blue-700">
            {[
              'Oil & Gas',
              'Offshore And Marine',
              'Architecture And Construction',
              'Heritage',
              'Ship Building',
              'Aviation',
              'Mining And Tunneling',
              'Wind Power',
              'Urban Planning',
              'Reverse Engineering',
            ].map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-green-600 font-semibold mb-3">GET IN TOUCH</h3>
          <a href='/ContactUs'>  
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get In Touch
            </button>
          </a>
        </div>
      </aside>
    </div>
  );
};

export default ReverseEngineeringPage;
