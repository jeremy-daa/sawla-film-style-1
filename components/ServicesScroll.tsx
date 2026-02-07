'use client';

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Permit Handling',
    description: 'We secure national filming permits, regional clearances, customs documentation, and drone authorisations.',
    image: '/img/service-1.webp',
  },
  {
    id: 2,
    title: 'Location Scouting',
    description: 'Access our hi-res visual libraries and GIS-based sun-path reports for remote villages, volcanic zones, and heritage towns.',
    image: '/img/service-2.webp',
  },
  {
    id: 3,
    title: 'Production Logistics',
    description: 'We manage 4x4 fleets, production vans, fuel depots, mobile kitchens, and satellite-linked base camps.',
    image: '/img/service-3.webp',
  },
  {
    id: 4,
    title: 'Crew & Tech Support',
    description: 'Get ARRI, RED, and DJI-certified assistants, gaffers, drone pilots, and multilingual translators on call 24/7.',
    image: '/img/service-4.webp',
  }
];

export function ServicesScroll() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-black py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background Layer */}
        <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
            {services.map((service) => (
                <div 
                    key={service.id}
                    className={cn(
                        "absolute inset-0 w-full h-full transition-opacity duration-700",
                        activeImage === service.image ? "opacity-30" : "opacity-0"
                    )}
                >
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" /> 
                </div>
            ))}
             <div className={cn(
                "absolute inset-0 bg-zinc-900 transition-opacity duration-700",
                activeImage ? "opacity-0" : "opacity-100"
            )} />
        </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 md:mb-24">
            <h2 className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white font-medium max-w-2xl leading-tight">
                Full-Spectrum Fixer Services <br/>
                <span className="text-white/50">For The Modern Filmmaker.</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative border-t border-white/10 py-12 transition-all duration-500 hover:border-white/40"
              onMouseEnter={() => setActiveImage(service.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="md:w-1/3">
                    <span className="text-xs font-mono text-white/30 mr-4">0{service.id}</span>
                    <h4 className="inline text-2xl md:text-3xl font-serif text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                    </h4>
                </div>
                
                <p className="md:w-1/3 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="md:w-[10%] flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                         <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
