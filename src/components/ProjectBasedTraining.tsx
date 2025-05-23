// app/components/ProjectBasedTraining.tsx
import Image from "next/image";

const ProjectBasedTraining = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 p-6 md:p-10 bg-white shadow-md rounded-lg">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/3D10.jpg" 
          alt="Project Based Training"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Project Based Training
        </h2>
        <p className="text-gray-700 mb-6">
          3D Pointshot is always happy to help the customer and person who want to learn the new technology related to{" "}
          <span className="text-blue-500 font-medium">Lidar</span>, photogrammetry,{" "}
          <span className="text-blue-500 font-medium">NDT</span>,{" "}
          <span className="text-blue-500 font-medium">GIS</span> Digital survey. We are providing the world class services for any project with the subject line with well experienced professionals.
        </p>
        <p className="text-gray-700 mb-36">
          We also provide the training for <span className="font-medium">Hardware</span> and <span className="font-medium">software</span> related to survey field.
          We have certified engineer for <span className="text-blue-500 font-medium">CAD</span> based software how can serve the good knowledge for{" "}
          <span className="text-blue-500 font-medium">BIM modelling</span> till{" "}
          <span className="font-semibold">LOD 500</span>.
        </p>
      </div>
    </div>
  );
};

export default ProjectBasedTraining;
