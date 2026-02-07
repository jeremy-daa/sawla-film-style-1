import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ServicesScroll } from "@/components/ServicesScroll";
import { WorkParallax } from "@/components/WorkParallax";
import { LogisticsGrid } from "@/components/LogisticsGrid";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navigation />
      <Hero />
      <ServicesScroll />
      <WorkParallax />
      <LogisticsGrid />
      <Footer />
      <StickyActions />
    </main>
  );
}
