"use client";

import AdGeneratorSection from "./components/AdGeneratorSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PartnerSection from "./components/PartnerSection";
import PhotoToPhotoshoot from "./components/PhotoToPhotoshoot";
import PricingSection from "./components/PricingSection";
import ServiceDiv from "./components/ServiceDiv";
import TestimonialWall from "./components/TestimonialsSection";

import VideoAdGenerator from "./components/VideoAdGenerator";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceDiv />
      <AdGeneratorSection />
      <VideoAdGenerator />
      <PhotoToPhotoshoot />
      <PartnerSection />
      <TestimonialWall />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
