'use client';
import Image from 'next/image';

const OffshoreAndMarinePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">
      
      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o2.jpg"
          alt="Offshore and Marine"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Offshore And Marine</h1>

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p className='text-black'>
            We specialize in <span className="text-blue-700 underline">3D laser scanning</span> for the maritime and industrial engineering and design applications. 3D Pointshoot used a 3D Laser scanner to capture the real condition of the offshore site.
          </p>

          <p className='text-black'>
            A better approach involves scanning ship spaces with a 3D laser scanner to create a very detailed and error free 3D point cloud data. For this type of projects high speed laser scanners are quite suitable for this purpose as they can take millions of measurements in just a few minutes.
          </p>

          <p className='text-black'>
            As knowing the time critical nature of the <span className="text-blue-700 underline">Oil and Gas</span> sector we mobilize a team quickly and ready for travel anywhere.
          </p>

          <p className='text-black'>
            We also provide our services for Clash detection, Piping routing, Equipment positioning and space management. The marine Industry is in great need of applying emerging technologies like 3D Laser Scanning to a myriad of new tasks.
          </p>

          <p className='text-black'>
            Our team are trained and experienced professionals specializing in 3D scanning and <span className="text-blue-700 underline">CAD modelling</span> of point cloud data processing for offshore installations and vessels which are very often compact and dense with details. We do a 3D Non-Intelligent and Intelligent model from Point cloud data compatible with CADMATIC, AVEVA PDMS, <span className="text-blue-700 underline">AutoCAD</span> Plant 3D and any other platform.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Offshore And Marine
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-black">
            <li>more comprehensive and precise compared to hand measurements.</li>
            <li>Safety</li>
            <li>Reduces or eliminates the need for follow-up site visits</li>
            <li>
              Data allows larger portion of new or replacement pipe spools to be pre-fabricated in shop @ lower cost.
            </li>
            <li>Accuracy and time Saving</li>
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

export default OffshoreAndMarinePage;
