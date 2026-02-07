'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-1">
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wider block mb-6">
                    SAWLA FILMS
                </Link>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Sawla Films pairs world-class storytelling with bulletproof film logistics Ethiopia wide—location scouting, filming permits, gear import & onset fixers.
                </p>
                <div className="flex items-center gap-4">
                    <SocialLink href="#" icon={Instagram} />
                    <SocialLink href="#" icon={Twitter} />
                    <SocialLink href="#" icon={Linkedin} />
                    <SocialLink href="#" icon={Facebook} />
                </div>
            </div>

            <div>
                <h4 className="font-medium text-white mb-6">Services</h4>
                <ul className="space-y-4 text-sm text-zinc-500">
                    <li><FooterLink href="/services/permits">Permit Handling</FooterLink></li>
                    <li><FooterLink href="/services/scouting">Location Scouting</FooterLink></li>
                    <li><FooterLink href="/services/logistics">Production Logistics</FooterLink></li>
                    <li><FooterLink href="/services/crew">Crew & Tech Support</FooterLink></li>
                     <li><FooterLink href="/services/remote">Remote Camps</FooterLink></li>
                </ul>
            </div>

            <div>
                <h4 className="font-medium text-white mb-6">Quick Links</h4>
                <ul className="space-y-4 text-sm text-zinc-500">
                    <li><FooterLink href="/about">About Us</FooterLink></li>
                    <li><FooterLink href="/work">Our Work</FooterLink></li>
                    <li><FooterLink href="/guide">Filming Guide</FooterLink></li>
                    <li><FooterLink href="/contact">Contact Us</FooterLink></li>
                    <li><FooterLink href="/faq">FAQ</FooterLink></li>
                </ul>
            </div>

            <div>
                 <h4 className="font-medium text-white mb-6">Contact</h4>
                 <ul className="space-y-4 text-sm text-zinc-500">
                     <li>Bole Road, Addis Ababa, Ethiopia</li>
                     <li>+251 912 345 678</li>
                     <li>info@sawlafilms.com</li>
                 </ul>
            </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Sawla Films. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
            <Icon className="w-4 h-4" />
        </a>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-primary transition-colors block">
            {children}
        </Link>
    )
}
