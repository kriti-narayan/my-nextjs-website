'use client';

import TopHero from '@/components/TopHero';
import Image from 'next/image';

const services = [
  {
    name: 'Spreading Awareness',
    description:
      'At Cybergenix Security, we spread cybersecurity awareness through dynamic sessions and seminars at schools and colleges. Our engaging presentations and workshops aim to equip students with essential knowledge and skills to navigate the digital world safely and securely.',
    imageUrl:
      'https://static.wixstatic.com/media/f88665_4ddd04d725d64d31aa51fe14cacd090e~mv2.jpg'
  },
  {
    name: 'Training',
    description:
      'At Cybergenix Security, we focus on teaching cybersecurity through engaging sessions and seminars at schools and colleges. Our goal is to equip students with vital knowledge and practical skills to stay safe online.',
    imageUrl:
      'https://static.wixstatic.com/media/f88665_0a6be900a86546829a23ed2d6c0d4476~mv2.jpg'
  },
  {
    name: 'Project Handling',
    description:
      'At Cybergenix Security, we excel in project handling. Our experienced team ensures meticulous planning, efficient resource allocation, proactive problem-solving, and clear communication.',
    imageUrl:
      'https://static.wixstatic.com/media/f88665_b350975f9e56468d859148f343fe080b~mv2.jpg'
  },
  {
    name: 'Event Conduction',
    description:
      'Cybergenix Security, where we specialize in turning visions into unforgettable experiences. From meticulous planning to creative design, vendor coordination, and a focus on guest experience.',
    imageUrl:
      'https://static.wixstatic.com/media/f88665_275bc84b3e2744f5b2a3a3a40ea5c48f~mv2.jpg'
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col space-y-9 text-center">
          <TopHero title="Our Services" tag="services">
            Discover the comprehensive range of cybersecurity services we offer to protect your digital assets.
          </TopHero>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">{service.name}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 