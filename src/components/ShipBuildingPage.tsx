'use client';
import Image from 'next/image';

const ShipBuildingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o5.png"
          alt="Ship Building"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p className='text-black'>
            3D Pointshot now providing the services for Ship design and ship repairs. 3D Laser scanning is very helpful for
            Retrofit, Renovation, Ship navigation, Refurbishment and space management in Ship design process. It require more
            precision assembly industrial environments, components used in shipbuilding and naval engineering must be verified
            against design specifications to ensure proper fit. 3D Laser scanning provides a fast and accurate way to inspect
            ship parts and components during boat construction, portable 3D measurement solutions Digitizing hulls and existing
            conditions.
          </p>

          <p className='text-black'>
            3D laser scanning solutions allows for the captures of 3D as-built documentation for repair or restoration.
            3D Pointshot can scan multiple curved surfaces. 3D surface analysis enables verification of the correct size of the
            parts and their deviations. When the scan is completed, surface and volume models can be created and collision
            detections may be performed on the computer.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Ship Building
          </h2>
          <ul className="list-disc list-inside text-black text-sm space-y-1">
            <li><span className="text-black">Accurate planning with digital model can save time and money</span></li>
            <li>Can be perform while ship in operation/production time</li>
            <li>Reduce project time by 35% cost by 30% compared to as-is baseline</li>
            <li>Fast and Accurate</li>
            <li>Efficient collaboration</li>
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

export default ShipBuildingPage;
