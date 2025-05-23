'use client';
import Image from 'next/image';

const MiningAndTunnelingPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o7.jpg"
          alt="Mining Tunnel"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p className='text-black'>
            3D Pointshot now provides the 3D Laser scanning services for Mining and Tunneling with very precise equipment. The main concern in mines is a security whether it’s a Gold mining or Coal mining. So Laser scanning technology is a very useful tool for Mining and Tunneling more secure by reducing the safety risk.
          </p>

          <p className='text-black'>
            The digital mine provides up-to-date information on conditions, status and production quantities. One of the primary applications is computation of volumes, which requires definition of a reference surface located at the bottom of a tunnel segment. With help of 3D Laser scanner we can calculate the Stockpile volume, generate the contours and arrange a facility and asset management in Mines.
          </p>

          <p className='text-black'>
            3D Scanner is capturing the real condition of mines with accurate measurement and capable to show the identity and record any cracks and fissures, compare these data to previous scans, and identify any areas of concern. This is an enormous contribution to mine safety and a safe work environment.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Mining and Tunneling
          </h2>
          <ul className="list-disc list-inside text-black text-sm space-y-1 ">
            <li>We can a scan without light in mines</li>
            <li>Provides more secure environment</li>
            <li>Required less resources and time</li>
            <li>Reduced unnecessary excavation by critical geometric information capturing</li>
            <li>We can scan in any complex situation.</li>
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

export default MiningAndTunnelingPage;
