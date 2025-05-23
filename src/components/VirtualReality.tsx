'use client';
import Image from 'next/image';

const VirtualRealityPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/3D7.jpg" 
            alt="Virtual Reality"
            width={600}
            height={500}
            className="rounded shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">3D Virtual Reality Service</h1>
          <p className="mb-4 text-black">
            There has been some <strong>immense work</strong> and technological improvements in <strong>3D Virtual Reality services</strong> and <strong>Augmented reality services</strong> in the past 20 years. Virtual Reality is the experience of a simulated environment that can be similar to the real world and can also be different from the real world. The use of both 3D virtual reality and augmented reality has been rapidly increasing in mobile computing and other applications at a high-speed rate.
          </p>
          <p className="mb-4 text-black">
            Today, <strong>virtual reality service providers like 3D Pointshot</strong> are changing the world with their breakthrough technology, making a pathway for the future, and changing the way we perceive the world. VR services have changed the way we shop, interact, work, and receive medical treatment as patients and their relationships with healthcare providers are now highly detailed via 3D image bodies.
          </p>
          <p className="mb-4 text-black ">
            3D virtual reality, along with <strong>augmented reality</strong> technologies, is paving the path for a new and better yet uncharted world where objects can be felt and used even before they come into reality. These technologies help us learn more about scientific concepts and assist in learning ways to connect the world with a virtual collision detection system.
          </p>
          <p className="mb-4 text-black">
            Augmented reality is different from 3D virtual reality. It consists of overlaying visuals, sounds, and sensory objects in the real world to enhance the experience. Common applications include military, medical, aviation, archaeology, tourism, and architecture.
          </p>
          <p className='text-black'>
            3D Pointshot provides both VR and AR services for construction, gaming, design, and medical training — enabling clients to simulate environments, validate designs early, and improve engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualRealityPage;
