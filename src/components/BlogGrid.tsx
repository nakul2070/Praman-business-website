import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogItem {
  title: string;
  image: string;
  link: string;
}

const blogs: BlogItem[] = [
  {
    title: 'Can 3D BIM Modeling Help My Small Business?',
    image: '/images/blog1.jpeg',
    link: '#',
  },
  {
    title: 'Where Can I Find a Great 3D BIM Modeling Service?',
    image: '/images/blog2.jpeg',
    link: '#',
  },
  {
    title: 'Why is 3D BIM modeling service a game-changer for builders and engineers?',
    image: '/images/blog3.jpeg',
    link: '#',
  },
  {
    title: 'The 5 Best Reasons to Invest in Professional 3D BIM Modeling Services',
    image: '/images/blog4.jpeg',
    link: '#',
  },
  {
    title: 'Benefits of 3D Laser Scanning: Revolutionizing Precision and Efficiency',
    image: '/images/blog5.jpeg',
    link: '#',
  },
  {
    title: 'Why 3D Laser Scanning Is Essential for Your Next Project',
    image: '/images/blog6.jpeg',
    link: '#',
  },
  {
    title: 'The Future of Farming: How Drones Are Transforming Agriculture',
    image: '/images/blog7.jpeg',
    link: '#',
  },
  {
    title: 'Unlocking the Future of Surveying: The Power of UAV Mapping',
    image: '/images/blog8.jpeg',
    link: '#',
  },
  {
    title: 'How 3D Laser Scanning Services Can Help Your Business',
    image: '/images/blog9.jpeg',
    link: '#',
  },
  // Add the rest of the blog objects here...
];

const BlogGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2 line-clamp-3 text-black">{blog.title}</h3>

              <Link href={blog.link} className="text-blue-600 hover:underline text-sm">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
