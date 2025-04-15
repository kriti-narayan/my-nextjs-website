'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="z-90 flex justify-between border-b-2 border-b-blue-700 px-8 pt-4 text-white" style={{ fontFamily: 'turret' }}>
      <div className="flex w-fit items-center text-center text-xl">
        <motion.div animate={{ rotate: 720 }}>
          <Link href="/">
            <Image src="/images/cybergenix.png" alt="logo" width={80} height={80} />
          </Link>
        </motion.div>
        <span className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            CyberGenix <br />Security
          </motion.div>
        </span>
      </div>
      <div className="flex items-center justify-between md:hidden">
        {menuOpen ? (
          <button onClick={() => setMenuOpen(false)} aria-label="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setMenuOpen(true)} aria-label="open">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M 4 18h16"
              />
            </svg>
          </button>
        )}
      </div>

      <motion.div
        animate={{ y: [-100, 10, 0] }}
        className="hidden w-1/4 items-center justify-between text-xl md:flex"
      >
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'text-blue-300' : ''}>
          About Us
        </Link>
        <Link href="/services" className={pathname === '/services' ? 'text-blue-300' : ''}>
          Services
        </Link>
        <Link href="/teams" className={pathname === '/teams' ? 'text-blue-300' : ''}>
          Teams
        </Link>
      </motion.div>

      {menuOpen && (
        <div className="text-md absolute z-10 flex w-full flex-col items-center justify-between bg-gray-600 p-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-white">
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={pathname === '/about' ? 'text-blue-300' : ''}
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className={pathname === '/services' ? 'text-blue-300' : ''}
          >
            Services
          </Link>
          <Link
            href="/teams"
            onClick={() => setMenuOpen(false)}
            className={pathname === '/teams' ? 'text-blue-300' : ''}
          >
            Teams
          </Link>
        </div>
      )}
    </div>
  );
} 