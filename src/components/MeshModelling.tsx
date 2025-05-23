'use client';
import Image from 'next/image';

const MeshModeling = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/3D6.jpg"
            alt="3D Mesh Model"
            width={450}
            height={300}
            className="rounded shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-3xl font-bold text-blue-800 mb-4">3D Mesh Modeling</h1>
          <p className="text-gray-800 mb-4 leading-relaxed text-black">
            A 3D mesh is the structural build of a 3D model consisting of polygons. 3D meshes use reference points in X, Y and Z axes to define shapes with height, width and depth.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed text-black">
            3D mesh modelling is a product we can offer to the clients who require a vector representation of an irregular or organically shaped object. It is because we are able to convert point cloud or image into a mesh. As a result, from the mesh we generate a surface created by triangles.
          </p>
          <p className="text-gray-800 leading-relaxed text-black">
            3D mesh modelling is a product we can offer to the clients who require a vector representation of an irregular or organically shaped object.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeshModeling;
