// app/components/OilAndGasSection.tsx
import Image from "next/image";

const OilAndGasSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
          <Image
            src="/images/o1.jpg"
            alt="Oil & Gas"
            width={900}
            height={500}
            className="rounded-md mb-6"
          />

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Oil & Gas</h2>
          <p className="text-gray-700 mb-4">
            We have very good experience in Oil & Gas sector where we had completed many projects with
            <span className="text-blue-600 font-medium"> 3D Laser Scanner </span>
            and other equipment. We are helping our clients without disturbing the production of
            <span className="font-medium"> as built surveys </span>
            for significant number of industrial sites including
            <span className="text-blue-600 font-medium"> Oil & gas, Process plant, Chemical plants, Refineries </span>
            and drilling facilities.
          </p>
          <p className="text-gray-700 mb-4">
            We have scanned number of plants and delivered the final outputs to our customers on time. The accurate
            data is essential so all our survey carried out with precise equipment in all plants.
          </p>
          <p className="text-gray-700 mb-6">
            With the help of 3D Laser scanner and Total station we are also doing a survey with control points which
            is provided by client. We mark permanent benchmarks on site so it can be used for future reference. Scan
            data registration can be done with the control points and same will be delivered with final outputs. So
            the entire data is georeferenced and final model can be generated with coordinate system. The control
            point model can be used for construction verification, setting out the new structure and design as well.
          </p>

          <h3 className="text-green-600 font-semibold text-lg mb-3">Benefits of 3D Laser Scanning in Plants</h3>
          <ul className="list-disc list-inside text-blue-800 space-y-2">
            <li>Increased data collection efficiency and accuracy</li>
            <li>3D documentation of the facility’s components provides a more accurate asset count</li>
            <li>Comprehensive datasets save time</li>
            <li>Data sharing with cloud-based platform</li>
            <li>Improve project visualization and collaboration</li>
            <li>Time and cost saving</li>
          </ul>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Category */}
          <div className="bg-white p-5 shadow rounded-lg">
            <h4 className="text-green-700 font-bold mb-4 border-b pb-2">POPULAR CATEGORY</h4>
            <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside">
              <li>Oil & Gas</li>
              <li>Offshore And Marine</li>
              <li>Architecture And Construction</li>
              <li>Heritage</li>
              <li>Ship Building</li>
              <li>Aviation</li>
              <li>Mining And Tunneling</li>
              <li>Wind Power</li>
              <li>Urban Planning</li>
              <li>Reverse Engineering</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="bg-white p-5 shadow rounded-lg">
            <h4 className="text-green-700 font-bold mb-4 border-b pb-2">GET IN TOUCH</h4>
            <a href='/ContactUs'>  <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition">
              Get In Touch
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilAndGasSection;
