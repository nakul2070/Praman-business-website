'use client';
import Image from 'next/image';
import Link from 'next/link';

const ArchitectureConstructionPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6 bg-white">
      
      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o3.jpg"
          alt="Architecture and Construction"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Architecture And Construction</h1>

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p className='text-black'>
            3D Pointshot is a leading construction and surveying company in India working on restoration and refurbishment of heritage and old buildings. We are offering a list of as-built surveys for architectural development. Capturing the physical space/ elements with 3D Laser scanner and placing them together in to create meaningful BIM laser scan models and objects. Using the captured and processed cloud data to create BIM models help us to analyze the existing structure, envision the modifications and enhance the design options.
          </p>

          <p className='text-black'>
            <span className="text-blue-700 underline">3D Laser scanning</span> is very helpful during renovations, refurbishments and extension phases of existing constructions. After creating the 3D virtual models of Architectural, Structural and MEPF (Mechanical, Electronic, Plumbing & Fire Fighting) elements; We will prepare RFIs for mismatches in scanned data. Our Scan to BIM outputs are accurate, reliable and consistent.
          </p>

          <p className='text-black'>
            3D Pointshot has a experienced team for 3D Laser scanning of any construction site, Building and surveying related to the AEC Industries. We can scan and handover the outputs with registered point cloud data as per the requirement with any formats. 3D Pointshot have own team to process the point cloud data and creating the 3D BIM Model with required level of details (LOD) and Level of Information (LoI) an appropriate coordinate system should be carefully considered.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Architecture and Construction
          </h2>
          <ul className="list-disc list-inside text-black text-sm space-y-1">
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
          <h3 className="bg-white text-green-600 shadow-md rounded-md px-4 py-2 rounded-t-md font-semibold">POPULAR CATEGORY</h3>
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
          <h3 className="text-green-600 font-semibold  mb-3">GET IN TOUCH</h3>
          <Link href="/ContactUs">
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default ArchitectureConstructionPage;
