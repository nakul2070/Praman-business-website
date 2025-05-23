'use client';
import Image from 'next/image';

const AviationPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o6.jpg"
          alt="Aviation"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <h2 className="text-2xl font-bold text-blue-800">Aviation</h2>
          <p className='text-black'>
            We 3D Pointshot extended our <span className="text-blue-600 underline cursor-pointer">services</span> for Aviation Industries where 
            <span className="text-blue-600 underline cursor-pointer"> 3D Laser scanning</span> take any part and make a digital representation on it.
          </p>

          <p className='text-black'>
            3D laser scanners are ideal for Aerospace Investment Castings inspections as they have excellent measuring capabilities and they are able to check geometric dimensions with ease. The data can directly be sent to CAD software to manipulate, replicate or measurement. Further, 3D laser scanning process is pretty much faster and captures data points quickly. The material wastage and chances of error are just negligible.
          </p>

          <p className='text-black'>
            Instead of working on few data points, 3D laser scanner captures millions of data points and remodel geometry of parts in beautiful way. Data is further sent to CAD or <span className="text-blue-600 underline cursor-pointer">CAM software</span> for final inspection and accurate product dimensions. 3D scanning is pretty much faster when compared to other traditional quality inspection techniques in market. The process even catches small errors that cannot be read out with human eyes.
          </p>

          <p className='text-black'>
            The 3D laser scanning services applied to the aviation industry for 
            <span className="text-green-600 underline cursor-pointer"> reverse engineering</span> parts is a great advantage. So much time will be saved simply by the guaranteed accuracy of part measurement that the 3D scanner provides. All adjustment and redesign issues can be hammered out on computer before it goes to the fabrication line. That is going to cut down on a lot of unnecessary costs.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Aviation
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-black">
            <li><span className="text-black">3D Scan provides accurate dimensions of any parts</span></li>
            <li>Reproduce existing component</li>
            <li>Time saving and provides accurate details</li>
            <li>Useful for Aircraft Interior and Exterior design</li>
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

export default AviationPage;
