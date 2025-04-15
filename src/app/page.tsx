'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/NNfGHj4gsBiVtyuU/scene.splinecode');
    }
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center uppercase" style={{ fontFamily: 'turret' }}>
      <div>
        <span className="text-center text-white md:text-left">
          <motion.div
            initial={{ x: 10 * 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            Welcome
          </motion.div>
        </span>
        <span className="bg-black text-center text-4xl font-extrabold tracking-widest text-white md:text-7xl">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            CyberGenix Security Pvt Ltd.
          </motion.div>
        </span>

        <div className="hidden md:block">
          <div className="absolute inset-0 text-center opacity-90">
            <div className="relative">
              <canvas ref={canvasRef} id="canvas3d" />
              <div className="absolute bottom-0 h-14 w-screen bg-black text-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 