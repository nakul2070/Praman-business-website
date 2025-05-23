'use client';
import Image from 'next/image';

const PlantModelling = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src="/images/3D5.png" 
          alt="Plant Modeling"
          width={350}
          height={350}
          className="rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Plant Modeling</h1>
          <p className="text-gray-700 text-base leading-relaxed text-black">
            3D Modelling Services helps in Plant Design. These days, 3D plant modeling services are used significantly for plant designs to improve engineering productivity and reduce overhead costs and time.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 space-y-6 text-gray-800 text-base leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Advantages of 3D Modelling service on Plant Design:</h2>
          <ul className="list-disc pl-5 space-y-1 text-black">
            <li><strong>Visualization:</strong> Ability to visualize scenarios and change according to need during the design process.</li>
            <li><strong>Presentation:</strong> 3D service makes it easy to design proposals or reviews by creating model renderings and animations.</li>
            <li><strong>Review:</strong> Gives the ability to go through the 3D plant model and review any changes.</li>
            <li><strong>Productivity:</strong> 3D services-based models offer faster design output and more productivity than 2D.</li>
            <li><strong>Non-Technical:</strong> Visual prototypes allow non-technical people to participate in the design process and give input.</li>
            <li><strong>Design Scope:</strong> 3D services-based plant designs can easily incorporate the latest design changes and thus give more scope in engineering.</li>
            <li><strong>Validation:</strong> 3D services-based plant models allow the scope of testing different scenarios, offer quality control, prevent errors in design, and improve decision control.</li>
            <li><strong>Physical Model Elimination:</strong> 3D service prevents the need, time, and cost of physical prototype models.</li>
            <li><strong>Material Optimization:</strong> 3D services-based plant models estimate bill of materials for more reasonable procurement processes.</li>
            <li><strong>Better Data Management:</strong> 3D services-based plant models give the ability to manage, organize and design data efficiently.</li>
            <li><strong>Standardization:</strong> 3D modeling helps to standardize design rules.</li>
            <li><strong>Automation:</strong> Increased speed and accuracy of design process and faster rendering for more customer satisfaction.</li>
            <li><strong>Resource/Material Consumption:</strong> 3D modeling gives an idea of material consumption accurately and reduces procurement of construction material and fabrication time.</li>
            <li><strong>Material Standards:</strong> All plant components can be used for Piping 3D Model.</li>
            <li><strong>Data Reporting:</strong> Smart Data Report Management gives access to billing of materials in excel.</li>
            <li><strong>Workforce Optimization:</strong> 3D-based plant modeling reduces the workforce considerably for optimal resource consumption.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">Know about the Piping and Instrumentation Diagram Quality, Sustainability, Time and Cost:</h2>

          <h3 className="text-lg font-medium mt-4 text-gray-900">3D Model – Piping and Instrumentation Diagram Quality</h3>
          <ul className="list-disc pl-5 space-y-1 text-black">
            <li>Visualization of complex designs via intelligent objects.</li>
            <li>Helps to avoid major conflicts in design, saves time and cost, and reduces the need for many site visits to the plant design engineer.</li>
            <li>3D services identify flaws before construction begins.</li>
            <li>It helps to create intelligent data sets, accurate design references, and optimal workflows.</li>
          </ul>

          <h3 className="text-lg font-medium mt-6 text-gray-900">3D Model – Time and money</h3>
          <p className='text-black'>
            Even before the plant construction begins, engineers can visualize the entire plant and reduce design costs and conflicts practically both for better efficiency and better-optimized design. 3D Pointshot, a 3D modeling service of plant design engineering, covers their efficient and effective solution and enables them to make correct strategic decisions by engaging in the designing process from the foundation stage and eliminating the scope of error in design at an early process.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm shadow">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default PlantModelling;
