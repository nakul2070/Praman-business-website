'use client';
import Image from 'next/image';

const CadModelling = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Image
          src="/images/3D3.png"
          alt="3D CAD Model"
          width={300}
          height={300}
          className="w-full md:w-80 rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            3D CAD Modeling Services
          </h1>
          <p className="text-gray-700 text-base leading-relaxed text-black">
            We provide various range of <strong>3D CAD Modelling</strong> in different formats and levels of detail
            to suit your requirements. Our CAD services include creating 3D-built 3d-acadmodels from point cloud and
            textured 3D CAD Modelling. We have highly skilled professionals with vast experience in the conversion of
            point cloud data to intelligent 3D CADs. 3D Pointsoft provides to the needs of architects, general
            contractors, mechanical/plumbing/HVAC contractors and civil contractors in the construction industry.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-6 text-gray-800 text-base leading-relaxed">
        <p className='text-black'>
          The future of 3d Solid Modeling is a significant topic in today’s society for a variety of reasons. To
          begin, there are a plethora of technologies that are connected to computer graphics in some manner. Virtual,
          augmented reality and 3D printing – all of these technologies assist not just specialist sectors, but also
          everyday individuals. However, for the advancement of technology, the common customer just cannot keep up.
          Following that, there comes the requirement of advancement. PCs become increasingly powerful, mobile
          phones gain access to new tools, and new software is released. The future of <strong>3d cad modeling
          services</strong> appears bright—yet how to stay up? This time, we disclose five themes that will impact
          the future of CGI and its applications, as well as how you might benefit from them!
        </p>

        {/* Section: Cycles of Product Design */}
        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Cycles of Product Design Simplified
          </h2>
          <p className='text-black'>
            Scan Data and 3d cad modeling software enables designers to explore a broader range of design options
            and make adjustments quickly and efficiently—instead of painstakingly updating a 2D design. Consider
            this a more direct (and expedient) path to the output.
          </p>
          <p className='text-black'>
            After all, when it comes to product design and manufacturing, time truly is money. That is one of the
            primary reasons why so many businesses are focusing their efforts on 3D modelling. 3D modelling is
            substantially quicker than 2D modelling. This time saver cannot be overlooked, especially when it
            enables you to launch your product ahead of your rivals.
          </p>
        </section>

        {/* Section: Virtual Reality */}
        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Virtual Reality</h2>
          <p className='text-black'>
            Users can now enter digital worlds using a specialised visor and a set of controllers. While several
            tests with VR gear only based on animation were conducted in the past, they were met with minimal
            success thus far. Now the tides for the future of 3D modeling has turned. Interactivity. Contemporary 3D
            modelling software enables the creation of fully interactive photorealistic models and surroundings.
            This enables users to experience virtual reality that is indistinguishable from our world, and perhaps
            “full-dive” with all senses activated artificially.
          </p>
        </section>

        {/* Section: Multi-Reality */}
        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Multi-Reality</h2>
          <p className='text-black'>
            However, what if you could merge augmented reality with virtual reality? That is the purpose of mixed
            reality. In a nutshell, it is a novel technology that allows users to engage with both the real and
            virtual worlds at the same time. Mixed reality does not function similarly to AR via holograms or
            immersive technology, but also allowing them to interact as needed with objects. A digital figure, for
            instance, may “sit” at a table, just like a “place” a virtual chat bot hologram to interact with users
            inside a holographic simulation, instead of the static bot employed today. The future of 3D modelling,
            programming, and artificial intelligence will fundamentally alter how we interact with our computers and
            how we perceive the virtual world.
          </p>
        </section>

        {/* Section: Modeling Virtually */}
        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Modeling Virtually</h2>
          <p className='text-black'>
            Thus, the writing is on the wall – our future will undoubtedly involve the fusion of the physical and
            digital worlds. As for the future of <strong>3d cad modeling services</strong> like 3D PointSoft, we can
            already see how it is evolving. From fundamental form manipulation to polygonal modelling, to animation
            and rigging, the boundaries are being pushed with each new generation. Mixed reality and AI tools are
            now available alongside 3D design, modelling and augmented reality. There will be no need for high-end
            PCs in the near future, since GGE will be cross-platform, being highly accessible to every major user
            need. The AI will involve some expertise, as it should, to match GGI with interactive modelling and even
            physics in 3d cad modeling.
          </p>
        </section>

        {/* Section: Final Thoughts */}
        <section>
          <p className='text-black'>
            Software technologies are also expanding and improving. These programmes are becoming increasingly
            important in a variety of industries and are now a big component of applications. The growing use of CAD
            results in evolutions. Indeed, these CAD applications must be modified to fit their new users and uses.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CadModelling;
