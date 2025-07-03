"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const VideoAdPrompt = () => {
  const [typedPrompt, setTypedPrompt] = useState("");
  const fullPrompt = "Make an ad for my shirt product";
  const [videoGenerated, setVideoGenerated] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedPrompt(fullPrompt.slice(0, i));
      i++;
      if (i > fullPrompt.length) {
        clearInterval(interval);
        setTimeout(() => setVideoGenerated(true), 1000); // Simulate video generation
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-tl from-pink-200 via-orange-50 to-white rounded-3xl  px-6 py-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 shadow-md">
      {/* LEFT:  Video Box */}
      <div className=" w-full md:w-1/2   flex flex-col items-center justify-center">
        <div className="relative overflow-hidden flex justify-center items-center   rounded-[3rem] w-[75vw] md:w-[18vw] h-[70vh] md:h-[74vh]">
          <Image
            src="/AdsVideo/final.png"
            alt="phone"
            width={700}
            height={600}
            className="w-full h-full absolute z-10 object-cover"
          />
          {videoGenerated ? (
            <video
              src="/AdsVideo/mobile-video.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-[95%] object-cover absolute rounded-[2.5rem] z-5 h-[95%] md:h-[97%]"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex  items-center absolute justify-center w-[95%] object-cover  rounded-[2.5rem] z-5 h-[95%] md:h-[95%] bg-black text-white text-lg">
              Generating video...
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Input + Text Content */}
      <div className="flex flex-col-reverse gap-y-5 md:flex-col w-full lg:w-1/2  space-y-6">
        <div className="bg-white p-4 rounded-lg w-full max-w-md shadow-md">
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Enter Your Ad Prompt
          </label>
          <input
            value={typedPrompt}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-gray-50 text-gray-700"
          />
        </div>
        <div>
          {" "}
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Turn Your Ideas Into Video Ads Instantly
          </h2>
          <p className="text-lg text-gray-600">
            Describe your product in one line — and let AI do the rest.
            We&apos;ll generate scroll-stopping video ads you can publish
            straight to Meta or Google. No design or editing needed.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Converts your prompt into high-performing video ads</li>
            <li>✅ Instant generation with built-in voice and animation</li>
            <li>✅ Works for e-commerce, services, or local businesses</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VideoAdPrompt;
