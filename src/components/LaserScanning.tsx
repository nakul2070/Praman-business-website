import Image from 'next/image';

const LaserScanning = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800 leading-relaxed bg-white">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/3">
          <Image
            src="/images/3D1.png"
            alt="3D Laser Scanner"
            width={400}
            height={400}
            className="rounded shadow-md"
          />
          
        </div>
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">3D Laser Scanning</h1>
          <p className="text-black">
            3D Laser Scanning is a non-destructive, non-contact technology that uses lines of laser light to digitally capture the geometry of physical items.
            From the surface of objects to buildings or scenes, laser scanners create “point clouds” of data.
          </p>
          <p className="mt-2 text-black">
            3D Laser Scanning provides an accurate approach to capturing existing components, producing precise as-built digital design data.
            It is used in various sectors to simplify the design and manufacturing processes.
          </p>
        </div>
      </div>

      {/* Sections */}
      <section className="mt-8">
        <h2 className="text-green-600 font-semibold text-lg mb-2">What is 3D Laser Scanning?</h2>
        <p className="text-black">
          3D laser scanning is a type of digital modeling technology that uses laser light and basic mathematics to build precise 3D models.
          A laser point or laser line is aimed toward the item to be scanned, depending on the 3D laser scanner.
        </p>
        <p className="text-black mt-2">
          Thousands or hundreds of thousands of data points are then captured from various angles until a complete 360° scan is created.
          When finished, the result is a 3D point cloud (a dense group of points) of the scanned object, which gives engineers the information they need to create as-built models and CAD models.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-green-600 font-semibold text-lg mb-2">Applications of 3D Laser Scanning</h2>
        <p className="text-black">
          Today, a scanning technician can capture far more data, more correctly, and in a significantly shorter timeframe utilizing 3D laser scanning technology,
          providing significant benefits to industrial engineering organizations and project owners.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-black">
          <li>Architecture, plant design, equipment modeling, construction, heritage, bridge projects, expansion, etc.</li>
          <li>Comprehensive plans and elevations, panoramic images of the site and building sites for integrated detailed projects.</li>
          <li>Easy integration with BIM and 3D modeling software.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-green-600 font-semibold text-lg mb-2">3D Pointshot - 3D Laser Scanning Services</h2>
        <p className="text-black">
          We don’t simply collect information—we turn data into useful deliverables. We’re here to bring you the field intelligence you need,
          whether it’s plant scanning or construction scanning.
        </p>
        <p className="mt-2 text-black">
          From hardware, visualization, data processing, data handling, and data transmission, we provide 3D services with complete reliability,
          quality, and delivery on schedule.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-green-600 font-semibold text-lg mb-2">Get the Best 3D Laser Scanning</h2>
        <p className="text-black">
          Our team of hardware and software laser scanners captures data-rich real-world objects and environments to create point clouds and
          precise measurements for any project.
        </p>
        <p className="mt-2 text-black">
          You won’t have to worry about labor shortages, equipment malfunction, uneven quality, slow data return, or administration difficulties when 3D Pointshot conducts laser scanning for you.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-green-600 font-semibold text-lg mb-2">We are Leading the 3D Scanning Services Industry</h2>
        <p className="text-black">
          3D Pointshot Laser Scanning is a premier 3D laser scanning company that serves the architecture, engineering, and construction industries.
          Based in India and Australia, we bring advanced tools and methods, and skilled personnel to produce the finest quality point clouds, site plans, and models.
        </p>
        <p className="mt-2 text-black">
          With an accuracy of 2–4mm, our organization offers you digital laser scanning to determine exact dimensions and measurements of target-based models.
          Our expert 3D scanning engineers also provide field-to-finish solutions for architectural and structural modeling.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-green-600 font-semibold text-lg mb-2">What is the benefit of 3D Pointshot Laser Scanning?</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-black">
          <li>Our staff collects rich data customized to fully comprehend the scope of their project and its use for creative solutions.</li>
          <li>Flexible measurement options: hand-held, moving-based mapping/scanning.</li>
          <li>Modern 3D laser scanners capture data in high-density, high-speed environments.</li>
          <li>Precise modeling of objects, environments, infrastructure, and calculating the coordinates of scanned areas.</li>
          <li>We integrate laser scanning with CAD (Computer-Aided Design) to generate as-built plans.</li>
          <li>Our 3D scanning forms a cornerstone of producing excellent service to clients by delivering high-quality data on time and within budget.</li>
        </ul>
      </section>
    </div>
  );
};

export default LaserScanning;
