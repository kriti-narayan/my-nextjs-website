'use client';

import TopHero from '@/components/TopHero';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col space-y-9 text-center">
          <TopHero title="About Us" tag="about">
            Learn more about Cybergenix Security and our mission to provide top-notch cybersecurity solutions.
          </TopHero>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-gray-300">
              At Cybergenix Security, we are dedicated to providing comprehensive cybersecurity solutions
              that protect your digital assets and ensure business continuity. Our mission is to make
              cybersecurity accessible and effective for businesses of all sizes.
            </p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="https://static.wixstatic.com/media/f88665_1234567890~mv2.jpg"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 