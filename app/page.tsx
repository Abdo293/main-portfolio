"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/projects/projects-section";
import Contact from "@/components/contact/contact-section";
import About from "@/components/about/about-section";
import HeroSection from "@/components/hero-section/hero-section";

// This page acts as a router controller
export default function MainController() {
  const pathname = usePathname();

  // Determine which page to show based on pathname
  const renderPage = () => {
    switch (pathname) {
      case "/":
        return <HeroSection key="home" />;
      case "/about":
        return <About key="about" />;
      case "/portfolio":
        return <Portfolio key="projects" />;
      case "/contact":
        return <Contact key="contact" />;
      default:
        return <HeroSection key="home" />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>

      {/* Navigation component always visible */}
      <Navigation />
    </div>
  );
}
