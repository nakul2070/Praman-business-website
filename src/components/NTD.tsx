import Image from 'next/image';

export default function NDTPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="w-full md:w-1/2 mb-8">
        <Image
          src="/images/3D9.jpg"
          alt="Non-destructive testing in progress"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          Non - Destructive Testing
        </h1>
        <p className="text-gray-700 mb-4">
          3D Pointshot provides the services for Non-destructive testing (NDT) for many applications and different material components.
                    Non-destructive testing (NDT) is a testing and analysis technique used by industry to evaluate the properties of a material, component, structure or system for characteristic differences or welding defects and discontinuities without causing damage to the original part.
                              NDT plays a crucial role in everyday life and is necessary to assure safety and reliability. Typical examples are found in aircraft, spacecraft (shuttle), motor vehicles, pipelines, bridges, trains, power stations, refineries, buildings and oil platforms which are all inspected using NDT.

        </p>
        
      </div>
    </div>
  );
}
