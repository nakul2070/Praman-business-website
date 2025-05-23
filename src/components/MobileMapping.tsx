'use client';
import Image from 'next/image';

const MobileMappingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/3D8.jpg" 
            alt="Mobile Mapping"
            width={700}
            height={400}
            className="rounded shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Mobile Mapping</h2>
          <p className="mb-4 text-black">
            3D Pointshot provides the collecting geospatial data from a mobile vehicle. With a good range of GNSS,
            photographic, radar, laser, <span className="text-blue-600 font-semibold">LiDAR</span> or any number of remote sensing systems.
            This includes GIS data, video, Georeferenced images and digital maps.
          </p>
          <p className='text-black'>
            We are serving our Mobile mapping services for major road and rail projects. For mapping the urban environments,
            understanding underground and underwater structure, and to improve safety in power infrastructure and plants
            around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMappingPage;
