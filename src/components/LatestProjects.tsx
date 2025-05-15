import Image from "next/image";

type Project = {
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    image: "/images/4.webp",
    alt: "FARO 3D Scanner setup at industrial site",
  },
  {
    image: "/images/5.webp",
    alt: "3D BIM Model rendering of factory piping",
  },
  {
    image: "/images/6.webp",
    alt: "Construction site overview",
  },
  {
    image: "/images/7.webp",
    alt: "Architectural model visualization",
  },
];

export default function LatestProjects() {
  return (
    <section className="bg-white py-12 sm:py-16 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        <span className="text-green-600">LATEST</span>{" "}
        <span className="text-blue-700">PROJECTS</span>
      </h2>
      <p className="text-gray-500 mb-8 sm:mb-10 uppercase tracking-wide text-sm">
        View All Projects
      </p>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="w-full overflow-hidden rounded-lg shadow-md">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
