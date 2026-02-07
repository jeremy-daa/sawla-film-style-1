'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  "Local Expertise, Global Standards",
  "Government & Tribal Liaison",
  "24/7 Production Support",
  "Comprehensive Risk Management"
];

export function AboutSummary() {
  return (
    <section className="w-full bg-zinc-950 py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
                <h2 className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-6">Who We Are</h2>
                <h3 className="text-3xl md:text-5xl font-serif text-white font-medium leading-tight mb-8">
                    More Than Fixers. <br/>
                    <span className="text-zinc-500">We Are Your Ethiopian Production Partners.</span>
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                    Sawla Films bridges the gap between international production requirements and Ethiopian on-ground realities. We don't just secure permits; we curate environments where creativity thrives, ensuring your shoot is seamless, safe, and cinematic.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-white/80">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-black rounded-full px-8">
                    Meet The Team <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>

            <div className="lg:w-1/2 relative">
                 {/* Decorative abstract map or image placeholder could go here */}
                 <div className="aspect-square md:aspect-video lg:aspect-square w-full bg-zinc-900 rounded-sm border border-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/img/hero-poster.webp')] bg-cover bg-center opacity-20 grayscale transition-all duration-700 group-hover:opacity-30 group-hover:scale-105" />
                    <div className="relative z-10 text-center">
                        <span className="text-6xl md:text-8xl font-serif text-white font-bold block mb-2">10+</span>
                        <span className="text-zinc-500 uppercase tracking-widest text-sm">Years of Experience</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
      
       <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
