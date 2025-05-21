import React from 'react';
import Image from 'next/image';

const ServicesOverview = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-500 tracking-tight sm:text-4xl">
            OUR SERVICES
          </h2>
          <p className="mt-2 text-sm text-gray-500 uppercase">
            VIEW ALL SERVICES
          </p>
        </div>

        {/* 3D LASER SCANNING */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8">
              <Image
                src="/images/4.webp" // Replace with actual path
                alt="3D Laser Scanning"
                className="rounded-lg"
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="md:w-1/2 lg:w-3/5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3D LASER SCANNING
              </h3>
              <p className="text-gray-700 mb-4">
                3D Pointshot uses{' '}
                <strong className="font-semibold">3D scanning in India</strong>{' '}
                to produce as-built surveys and clash detection analysis for a
                range of industrial applications like Oil & Gas, Power stations,
                Steel, Ship building, Mining etc. Utilizing point cloud data as
                abasis, we can provide a bespoke product to suit your particular
                need. A number of our clients prefer to create their own products
                from point cloud data...
              </p>
              <p className="text-gray-700 mb-4 hidden md:block">
                3D Pointshot provides as-built surveys and clash detection
                analysis for a range of industrial applications. Utilizing point
                cloud data as a basis, we can provide a bespoke product to suit
                your particular need. Clients include Oil & Gas, Power stations,
                Steel, Ship building, Mining, etc.
              </p>
              <a href="/services/LaserScanning">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md">
                Learn More
              </button></a>
            </div>
          </div>
        </div>

        {/* 3D BIM MODELLING */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8">
              <Image
                src="/images/p1.webp" // Updated image path
                alt="3D BIM Modelling"
                className="rounded-lg"
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="md:w-1/2 lg:w-3/5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3D BIM MODELLING
              </h3>
              <p className="text-gray-700 mb-4">
                At 3D Pointshot one of the best{' '}
                <strong className="font-semibold">3D scanning company</strong>{' '}
                we have highly experienced experts and use latest technology for
                processing of point cloud data to convert it into BIM ready
                format. BIM models add certain information, one could call a
                database. Each element is defined (walls, windows, floors etc.),
                and the model is a parametric result combining all of those
                elements. 2D plans, sections and elevations can be generated
                automatically from any defined position or direction.
              </p>
              <a href="/services/BimModelling">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md">
                Learn More
              </button></a>
            </div>
          </div>
        </div>

        {/* GIS MAPPING */}
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8">
              <Image
                src="/images/p3.webp" // Replace with actual path
                alt="GIS Mapping"
                className="rounded-lg"
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="md:w-1/2 lg:w-3/5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GIS MAPPING
              </h3>
              <p className="text-gray-700 mb-4">
                A Geographic information system (GIS) is a computer system for
                capturing, storing, checking, and displaying data related to
                positions on Earth’s surface. GIS can show many different kinds
                of data on one map, such as streets, buildings, and vegetation.
                This enables people to more easily see, analyze, and understand
                patterns and relationships...
              </p>
              <p className="text-gray-700 mb-4">
                GIS Mapping is a type of highly detailed mapping that can be used
                for a variety of purposes, including urban planning, disaster
                relief, environmental protection, and geologic mapping. GIS
                mapping allows you to modify maps to match your specific
                requirements. You can alter map projections, add points, lines,
                and polygons, and edit attribute data with the press of a button.
              </p>
              <a href="/services/MobileMapping">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md">
                Learn More
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
