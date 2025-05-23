'use client';
import Image from 'next/image';

const BimModelling = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src="/images/3D4.png" // Save your image as public/bim-model.png
          alt="3D BIM Modeling"
          width={350}
          height={350}
          className="rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-800 mb-4">3D BIM Modeling Service</h1>
          <p className="text-gray-700 text-base leading-relaxed text-black">
            3D Pointshot is a leading 3D Modeling Services provider and our <strong>3D BIM Modeling Services</strong> is one of the niche in the industry. Building Information Modeling (BIM) is used for creating and managing building models based on real-time intelligent input accessed by a cloud platform. Scan to BIM service incorporates multidisciplinary, structured data to produce a digital representation of assets across the lifecycle, from planning, design to construction and operations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 space-y-6 text-gray-800 text-base leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">How Can BIM Help You?</h2>
          <p className='text-black'>
            Scan to BIM services brings all the information about all objects of a building into one place. BIM enables anyone to access that information for any purpose anytime, anywhere. BIM Data can illustrate the entire building lifecycle, from inception and design to demolition and even after renovation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">What is a BIM Object?</h2>
          <ul className="list-disc pl-5 space-y-1 text-black">
            <li>A BIM object consists of three things:</li>
            <li>Information used to define a product.</li>
            <li>Properties of a product.</li>
            <li>Visual representation and graphical characteristics.</li>
            <li>Visualization to give the object a recognizable appearance.</li>
            <li>Useful data to enable the object to be practiced and behave in the same manner as its product.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Fitting specifications into the BIM process?</h2>
          <p className='text-black'>
            Specifications are vital part of information integration. 3D Pointshot along with its <strong>3D Modeling Services</strong> is a dedicated <strong>3D BIM Modeling service provider</strong>. Our services are designed for the best use in BIM services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Stages of BIM:</h2>
          <ul className="list-disc pl-5 space-y-2 text-black">
            <li>
              <strong>Level 1 BIM: 2D construction draft + 3D modeling</strong><br />
              CAD and BIM file managed at first level. No real-time data sharing is conducted. Often stored on a shared drive environment.
            </li>
            <li>
              <strong>Level 2 BIM: Teams Work On Their 3D Models</strong><br />
              A second level BIM standard where CAD data is shared through a standard file format.
            </li>
            <li>
              <strong>Level 3 BIM: Working With a Shared 3D Model</strong><br />
              Centralized BIM level using collaborative software. Teams must everyone access a shared project model.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">The Benefits of Level 3 BIM</h2>
          <ul className="list-disc pl-5 space-y-1 text-black">
            <li>3D visualization of the entire project</li>
            <li>Close collaboration between multiple teams and parts of the business</li>
            <li>Enhanced coordination and mutual understanding of design</li>
            <li>Fewer revisions and increased confidence in outcomes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Level 4, 5, and 6 BIM: Scheduling, Cost prediction, and Sustainability information</h2>
          <p className='text-black'>
            These levels bring even smarter information models. The data helps to include scheduling, energy consumption, material usage etc. into the BIM lifecycle.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-black">
            <li>Level 4 BIM adds time estimation and project scheduling</li>
            <li>Level 5 BIM adds cost estimation, budget, and tracking linked to the information model</li>
            <li>Level 6 BIM incorporates energy usage, carbon emissions, material use, and resource models</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Benefits of 4, 5, and 6 Level BIM:</h2>
          <ul className="list-disc pl-5 space-y-1 text-black">
            <li>Efficient coordination and clash detection</li>
            <li>Efficient handoff between stages in the construction stage</li>
            <li>Cost control and estimation</li>
            <li>Reduced design errors</li>
            <li>Detailed energy management</li>
            <li>Increased quality and compliance of the building</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">What is the Future of BIM?</h2>
          <p className='text-black'>
            The future of BIM involves AI tools, IoT, and ML to fasten its design and long-term facility management. Its driven by technology and transparent processes. At 3D Pointshot, we already provide cutting-edge <strong>Scan to BIM and BIM services</strong> through innovative Projects.
          </p>
          <p>
            As industries evolve, the BIM future lies in automation, real-time collaboration, and environmental intelligence. We will soon experience level 7 and beyond BIM evolution.
          </p>
        </section>
      </div>

    
    </div>
  );
};

export default BimModelling;
