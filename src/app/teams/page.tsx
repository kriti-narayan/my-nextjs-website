'use client';

import TopHero from '@/components/TopHero';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'Founder',
    imageUrl: 'https://static.wixstatic.com/media/f88665_1234567890~mv2.jpg',
    description: 'Visionary leader with 15+ years of experience in cybersecurity.'
  },
  {
    name: 'Jane Smith',
    position: 'Co-Founder',
    imageUrl: 'https://static.wixstatic.com/media/f88665_0987654321~mv2.jpg',
    description: 'Expert in software development and project management.'
  },
  {
    name: 'Mike Johnson',
    position: 'CTO',
    imageUrl: 'https://static.wixstatic.com/media/f88665_1122334455~mv2.jpg',
    description: 'Technical architect specializing in secure systems design.'
  },
  {
    name: 'Sarah Williams',
    position: 'CEO',
    imageUrl: 'https://static.wixstatic.com/media/f88665_6677889900~mv2.jpg',
    description: 'Business strategist with a focus on growth and innovation.'
  },
  {
    name: 'David Brown',
    position: 'General Manager',
    imageUrl: 'https://static.wixstatic.com/media/f88665_5544332211~mv2.jpg',
    description: 'Operations expert ensuring smooth business processes.'
  }
];

export default function Teams() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col space-y-9 text-center">
          <TopHero title="Our Team" tag="teams">
            Meet the dedicated professionals behind Cybergenix Security. Our team combines expertise in
            cybersecurity and software development to deliver exceptional results.
          </TopHero>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
              <p className="text-lg text-gray-300">{member.position}</p>
              <p className="mt-2 text-gray-400">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 