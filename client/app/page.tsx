"use client";

import AdGeneratorSection from "./components/AdGeneratorSection";
import Hero from "./components/Hero";
import PartnerSection from "./components/PartnerSection";
import PhotoToPhotoshoot from "./components/PhotoToPhotoshoot";
import ServiceDiv from "./components/ServiceDiv";
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
    </div>
  );
}
