'use client';

import { ArrowRight, FileText, Map, Truck, Sun } from 'lucide-react';
import Link from 'next/link';

const logistics = [
  {
    icon: FileText,
    title: "Filming Permits Guide",
    description: "Step-by-step breakdown of national and regional permit requirements.",
    href: "/guide/permits"
  },
  {
    icon: Map,
    title: "Customs & Equipment",
    description: "ATA Carnet procedures and temporary import regulations for gear.",
    href: "/guide/customs"
  },
  {
    icon: Sun,
    title: "Best Seasons to Film",
    description: "Weather patterns and lighting conditions by region and month.",
    href: "/guide/seasons"
  },
  {
    icon: Truck,
    title: "Remote Logistics",
    description: "Sourcing reliable 4x4s, fuel, and accommodation in off-grid areas.",
    href: "/services/logistics"
  }
];

export function LogisticsGrid() {
  return (
    <section className="w-full bg-black text-white py-24 lg:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4">
            The Engine Room
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
            Production Logistics <br />
            <span className="text-zinc-500">Simplified.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {logistics.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-black p-8 md:p-10 flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div>
                <item.icon
                  className="w-8 h-8 text-white mb-6"
                  strokeWidth={1.5}
                />
                <h4 className="text-xl font-serif font-medium mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Read Guide <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
