'use client';
import Image from 'next/image';

const UrbanPlanningPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o9.png"
          alt="Urban Planning"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <h1 className="text-2xl font-bold text-blue-800">Urban Planning</h1>

          <p className='text-black'>
            Accurate, high-resolution 3D city models are increasingly in demand for defense and security applications as well as civilian needs for urban planning and conservation. The increasing demands in urban planning and management sectors call for co-ordinate application of <span className="text-blue-600 font-medium">Remote Sensing</span> and <span className="text-blue-600 font-medium">Geographic Information System (GIS)</span> for sustainable development of Urban areas.
          </p>

          <p className='text-black'>
            Information for urban planning must integrate all possible strategic information coming from different sources. In other words, the information must be accurate and updated and it should represent a high-fidelity 3D model of the city.
          </p>

          <p className='text-black'>
            3D Pointshot works for many Client for a work related Building development, Roads and Rail across a range of countries. <span className="text-blue-600 font-medium">3D Laser scanning</span> can be utilized to capture significant urban areas in a timely and efficient manner.
          </p>

          <p className='text-black'>
            For the majority of applications, terrestrial scanning is the best methodology. For larger or inaccessible area such as major road or brownfield sites Mobile mapping or Arial scanning (UAV) can be organized.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Urban Planning
          </h2>
          <ul className="list-disc list-inside text-black text-sm space-y-1">
            <li>Ideal for large scale area</li>
            <li>Capturing more details and precision</li>
            <li>Assessing Urban land use</li>
            <li>Monitoring construction progress</li>
            <li>3D documentation</li>
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

export default UrbanPlanningPage;
