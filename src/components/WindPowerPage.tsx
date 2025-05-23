'use client';
import Image from 'next/image';


const WindPowerPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o8.jpg"
          alt="Wind Power"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p className='text-black'>
            3D Pointshot is serving the services for Wind power sector. As the need for electricity is rising by the day, it becomes important to find more convenient and efficient ways to harvest it. 3D scanning systems have been successfully employed in the power generation sectors of Gas & Steam turbines, Hydropower, Wind Energy, and Propulsion.
          </p>

          <p className='text-black'>
            3D Scanner can be used for 3D inspection of towers, turbine hubs and rotor blades before they are shipped to the installation site and help to eliminate costly rework during installation.
          </p>

          <p className='text-black'>
            Reverse engineering and inspection services speeds up R&D efforts, getting parts from drawing board to wind farm quickly and efficiently. Terrestrial 3D scanning solutions using systems such as the long-range 3D scanner for windmill installation rapidly provides information that translates to fast and seamless construction in the field. Reverse engineering is another area where 3D scanners are delivering greatly for the power industry.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Wind Power
          </h2>
          <ul className="list-disc list-inside text-black text-sm space-y-1">
            <li>Survey large area quickly</li>
            <li>Quick, detailed and accurate results</li>
            <li>Cost effective</li>
            <li>Can help streamline the project process and accelerate profits.</li>
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

export default WindPowerPage;
