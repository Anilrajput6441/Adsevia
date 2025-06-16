import Image from "next/image";
import React from "react";
// import Button from "./Button";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="relative h-screen w-full mt-[4%]">
      {/* Background video with dark overlay */}
      <div className="absolute w-full h-full">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video/Expensive.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* Black overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div> */}
      </div>

      {/* Content on top of video */}
      <div className="absolute top-0 left-0 w-full p-10 h-full z-20 flex flex-col items-center justify-center gap-y-10">
        <Marquee speed={100}>
          <div className="flex items-center justify-evenly gap-20">
            <Image
              src="https://img.freepik.com/premium-vector/factory-vector-logo-design-template-industrial-building-manufactory-badge_18099-5365.jpg?semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="https://img.freepik.com/free-vector/gear-leaf-nature-colorful-logo-gradient-design_343694-1807.jpg?uid=R177754169&semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="https://img.freepik.com/free-vector/creative-barbecue-logo-template_23-2149017951.jpg?uid=R177754169&semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="https://img.freepik.com/premium-vector/dhaka-earth-logo_685107-2.jpg?uid=R177754169&semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="https://img.freepik.com/premium-vector/initials-monogram-logo-with-letter-oh_678577-295.jpg?uid=R177754169&semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="https://img.freepik.com/free-vector/bull-logo-design-template_23-2150443187.jpg?uid=R177754169&semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="https://img.freepik.com/free-vector/swan-colorful-gradient-logo-illustration-design_343694-1502.jpg?uid=R177754169&semt=ais_hybrid&w=740"
              alt="image"
              width={100}
              height={100}
            />
          </div>
        </Marquee>
        <h1 className="font-kanit">
          over <span className="font-bold text-xl">20,000 ads</span> already
          created and analyzed
        </h1>
        <h1
          className="text-[48px] font-semibold text-center font-kanit 
             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
             bg-clip-text text-transparent"
        >
          The Future of Ads Creation Begins Here
          <p className="text-2xl mt-2 font-light">Next-Gen Ad Machine</p>
        </h1>
        <p className="mt-4 text-lg  font-kanit font-light">
          Design, scale, and publish campaigns faster, smarter, and more
          powerfully than ever before.
        </p>
        <div className="flex gap-4 p-5">
          <div className="">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-6 py-4  rounded-lg text-lg  transition hover:brightness-110 shadow-md">
              Try for Free now
            </button>
          </div>
          <div className="hover:bg-gray-50 rounded-lg">
            <button
              className="flex justify-between items-center gap-2   px-6 py-4 rounded-lg transition hover:brightness-110 text-lg  border border-gray-100 shadow-lg 
             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
             bg-clip-text text-transparent "
            >
              <Image
                src="https://cdn-icons-png.freepik.com/256/2702/2702602.png?uid=R177754169&semt=ais_hybrid"
                alt="google"
                width={25}
                height={25}
              />
              Start with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
