import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center w-full hover:shadow-lg transition">
    <div className="flex justify-center mb-4">
      <div className="bg-green-500 rounded-full p-6">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
    </div>
    <h3 className="text-xl font-bold text-blue-700 uppercase">{title}</h3>
    <p className="text-gray-700 mt-3 text-sm">{description}</p>
  </div>
);

const MissionVisionValue: React.FC = () => {
  const data: CardProps[] = [
    {
      icon: '/images/mission1.png',
      title: 'Mission',
      description:
        'To provide error-free solutions and services with admirable quality and value that improve the design for each industry.',
    },
    {
      icon: '/images/vision1.png',
      title: 'Vision',
      description:
        'To enable the technology growth through digital twin and latest development, and to provide better solutions that support each industry on the globe.',
    },
    {
      icon: '/images/value1.png',
      title: 'Value',
      description:
        'We provide error-free data and outstanding services that, together deliver premium value to our valuable customers.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl w-full px-4 sm:px-6">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default MissionVisionValue;
