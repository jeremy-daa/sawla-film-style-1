"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ServicesScroll } from "@/components/ServicesScroll";
import { WorkParallax } from "@/components/WorkParallax";
import { AboutSummary } from "@/components/AboutSummary";
import { LogisticsGrid } from "@/components/LogisticsGrid";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { RequestFixerModal } from "@/components/RequestFixerModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navigation onRequestFixer={openModal} />
      <Hero onRequestFixer={openModal} />
      <ServicesScroll />
      <WorkParallax />
      <AboutSummary />
      <LogisticsGrid />
      <Footer />
      <StickyActions onRequestFixer={openModal} />
      <RequestFixerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
