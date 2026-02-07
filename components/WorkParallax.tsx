'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Into the Inferno",
    category: "Netflix Documentary",
    description: "Filming at an active volcano for Netflix documentary 'Into the Inferno'",
    image: "/img/projects/project-1.jpg", 
    speed: 0.2
  },
  {
    id: 2,
    title: "Comedy Special",
    category: "NHK Japan",
    description: "NHK crew filming a tribal ceremony in the Omo Valley",
    image: "/img/projects/project-2.jpg", 
    speed: 0.4
  },
  {
    id: 3,
    title: "Dassenech Ceremony",
    category: "Independent Documentary",
    description: "Capturing the intimate Dassenech 'Dimi' ceremony for an indie documentary",
    image: "/img/projects/project-3.jpg", 
    speed: 0.1
  },
  {
    id: 4,
    title: "Face du Monde",
    category: "Independent Feature",
    description: "Shooting in the scorched Danakil Depression for 'Face du Monde'",
    image: "/img/projects/project-4.jpg", 
    speed: 0.3
  },
  {
    id: 5,
    title: "St. Zion Festival",
    category: "South Korean National TV",
    description: "Filming the St. Zion Festival in Axum for South Korean National TV",
    image: "/img/projects/project-5.jpg", 
    speed: 0.2
  },
  {
    id: 6,
    title: "Rendez-vous",
    category: "France Télévisions",
    description: "Celebrity immersion shoot for France Télévisions in remote Ethiopia",
    image: "/img/projects/project-6.jpg", 
    speed: 0.4
  },
];

export function WorkParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-zinc-950 py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
                <h2 className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4">Selected Works</h2>
                <h3 className="text-4xl md:text-6xl font-serif text-white font-medium">
                    Cinematic <br/>
                    <span className="text-zinc-500">Excellence.</span>
                </h3>
            </div>
            <Button variant="outline" className="mt-8 md:mt-0 border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8">
                View All Projects <ArrowRight className="ml-2 w-4 h-4"/>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-32">
            {projects.map((project, index) => (
                <ParallaxCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    scrollYProgress={scrollYProgress}
                />
            ))}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function ParallaxCard({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) {
    const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100]);
    
    return (
        <motion.div 
            style={{ y }}
            className={`group relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
        >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="flex justify-between items-start border-t border-white/20 pt-4">
                <div className="max-w-[80%]">
                    <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                    <span className="text-xs text-primary font-mono uppercase tracking-wider block mb-2">{project.category}</span>
                    <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
                </div>
                <span className="text-xs text-zinc-600 font-mono">0{project.id}</span>
            </div>
        </motion.div>
    )
}
