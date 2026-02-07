'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video Layer */}
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-5000 ease-out will-change-transform ${
          mounted ? 'scale-100' : 'scale-110'
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/img/hero-poster.webp"
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/vid/hero-optimized.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative h-full flex items-center justify-center text-center container mx-auto px-4 z-10">
        <div className="max-w-4xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight"
          >
            Frame the Extraordinary <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-yellow-500">
              Film Ethiopia
            </span>{' '}
            Like Never Before.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
             Your trusted partner for filming in Ethiopia. Logistics, permits, and fixer services that turn challenges into cinematic gold.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-14 text-lg font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow">
              Request a Fixer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm">
                View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
          <div className="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent animate-pulse" />
      </motion.div>
    </div>
  );
}
