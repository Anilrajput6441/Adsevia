"use client";

import AdGeneratorSection from "./components/AdGeneratorSection";
import Hero from "./components/Hero";
import ServiceDiv from "./components/ServiceDiv";
import VideoAdGenerator from "./components/VideoAdGenerator";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceDiv />
      <AdGeneratorSection />
      <VideoAdGenerator />
    </div>
  );
}
