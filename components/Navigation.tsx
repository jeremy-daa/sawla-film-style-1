'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Permits & Compliance', href: '/services/permits' },
      { name: 'Drone Operations', href: '/services/drone' },
      { name: 'Customs & Equipment', href: '/services/customs' },
      { name: 'Logistics', href: '/services/logistics' },
    ],
  },
  {
    name: 'Work',
    href: '/work',
    dropdown: [
        { name: 'Portfolio', href: '/work/portfolio' },
        { name: 'Case Studies', href: '/work/case-studies' },
    ]
  },
  { 
      name: 'Ethiopia Filming Guide', 
      href: '/guide',
      dropdown: [
          { name: 'What to Film', href: '/guide/what-to-film' },
          { name: 'Permits Guide', href: '/guide/permits' },
          { name: 'Best Seasons', href: '/guide/seasons' },
      ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

interface NavigationProps {
  onRequestFixer: () => void;
}

export function Navigation({ onRequestFixer }: NavigationProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-white tracking-wider"
        >
          SAWLA FILMS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                  pathname === item.href ? "text-primary" : "text-white/90",
                )}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {item.dropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-md p-2 min-w-[200px] shadow-xl">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="bg-white text-black hover:bg-white/90 font-medium"
            onClick={onRequestFixer}
          >
            Request a Fixer
          </Button>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-white mb-2"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 flex flex-col gap-2 border-l border-white/20 ml-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white text-sm"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
