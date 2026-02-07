'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StickyActionsProps {
  onRequestFixer: () => void;
}

interface StickyActionsProps {
  onRequestFixer: () => void;
}

export function StickyActions({ onRequestFixer }: StickyActionsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 80% of viewport height (approx end of hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
      )}
    >
      <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-full p-2 pl-6 pr-2 shadow-2xl flex items-center gap-4">
        <span className="text-white text-sm font-medium hidden sm:inline">
          Start your production
        </span>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-full w-10 h-10"
          >
            <Phone className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-full w-10 h-10"
          >
            <Mail className="w-4 h-4" />
          </Button>
          <Button
            className="bg-white text-black hover:bg-zinc-200 rounded-full px-6"
            onClick={onRequestFixer}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
