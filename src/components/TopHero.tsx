'use client';

import { motion } from 'framer-motion';

interface TopHeroProps {
  tag: string;
  title: string;
  children: React.ReactNode;
}

export default function TopHero({ tag, title, children }: TopHeroProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-300 uppercase"
      >
        {tag}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold md:text-6xl"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl text-center text-lg"
      >
        {children}
      </motion.div>
    </div>
  );
} 