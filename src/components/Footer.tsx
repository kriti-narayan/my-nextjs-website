'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="body-font mt-8 bg-gray-900 text-gray-400">
      <div className="flex w-full flex-col items-center px-5 py-8 sm:flex-row">
        <div className="title-font flex items-center justify-center font-medium text-white md:justify-start">
          <Image
            className="size-20 rounded-full p-2 text-white"
            src="/images/cybergenix.png"
            alt="Logo"
            width={80}
            height={80}
          />
          <span className="ml-3 text-xl">CyberGenix Security</span>
        </div>
        <p className="mt-4 text-sm text-gray-400 sm:mt-0 sm:ml-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4">
          © 2025 CyberGenix Security
        </p>
        <span className="mt-4 inline-flex justify-center sm:mt-0 sm:ml-auto sm:justify-start">
          <Link href="." aria-label="button" className="text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link href="." aria-label="button" className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link href="." aria-label="button" className="ml-3 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link href="." aria-label="button" className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
} 