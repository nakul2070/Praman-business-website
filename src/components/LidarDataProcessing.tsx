// components/LidarData.tsx
import Image from "next/image";
import React from "react";

const LidarData: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10 bg-white">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow">
        <Image
          src="/images/L1.png" 
          alt="Lidar Data"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h1 className="text-3xl font-bold text-blue-800">Lidar Data Processing</h1>
        <p className="text-gray-700 ">
          For a variety of reasons, the usage of Lidar data processing has exploded in recent years. Lidar technology aids in obtaining higher-quality data than previous low-cost photogrammetric approaches. As a result, automatically gathering data in a dense manner, has resulted in a significant accomplishment.
        </p>
        <p className="text-gray-700">
          The advancement of laser scanning gear has been astounding. For quite some time, 3D Pointshot has been at the forefront of LIDAR data processing services. Our work and experience have been intersected with prestigious and challenging infrastructure modeling projects in a variety of locations.
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">Lidar (Light Detection And Ranging)</h2>
        <p className="text-gray-700">
          Point cloud data, a type of 3D surface representation, is often created via airborne or terrestrial laser scanning, also known as Light Detection and Ranging (LiDAR). The data is generated as sets of high density (e.g. x, y, z) points or in a more common binary format known as LAS, which can include various return values and point intensities.
        </p>
        <p className="text-gray-700">
          Many top GIS processing software tools now enable and accommodate basic and sophisticated LiDAR data processing and analysis. LIDAR is developing as one of the most cost-effective and precise data collection methods for managing major assets like railway stations and other public/private infrastructure.
        </p>
        <p className="text-gray-700">
          We do accurate fast surveys over huge geographical regions and transmit results promptly. Airborne LiDAR surveys and aerial laser scanning surveys are carried out by our specialists. We also have an in-house data processing team with years of expertise. We provide a variety of LiDAR systems for conducting wide-area surveys in mines, forests, and cities.
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Services of Lidar data</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Electric utility data processing</li>
          <li>LiDAR data processing techniques are used to demarcate watersheds</li>
          <li>Forestry data processing</li>
          <li>Agricultural characteristics are processed using LiDAR data</li>
          <li>Classification of LiDAR data and point clouds</li>
          <li>Oil and gas network LiDAR data processing</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Advantages</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Data is gathered fast and with great precision.</li>
          <li>The sample density of the surface data is very high.</li>
          <li>Even in dense forests, it has the ability to gather elevation data.</li>
          <li>Works at all hours of the day and night</li>
          <li>There are no aberrations in the geometry</li>
          <li>Minimal human monitoring is required</li>
          <li>Extreme weather has no effect</li>
          <li>Cost Effective</li>
          <li>It offers additional information that may be beneficial.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Pointshot Lidar data processing services</h2>
        <p className="text-gray-700">
          Pointshot offers a variety of LiDAR data processing services, including the creation of Digital Elevation Models (DEM), Digital Terrain Models (DTM), and Triangulated Irregular Networks (TIN), which give highly accurate information of the Earth’s surface.
        </p>
        <p className="text-gray-700">
          3D Pointshot LiDAR data processing services have aided worldwide advancement in making smart business decisions. LiDAR data processing helps the electric utility sector to plan and monitor their activity with excellent certainty. LiDAR classification also aids the forest industry by identifying vegetation and mapping crop relaxation using LiDAR point cloud data. As a result, LiDAR data processing services have been used in numerous industries to plan and make crucial decisions.
        </p>
      </section>
    </div>
  );
};

export default LidarData;
