import React from "react";
import Image from "next/image";

const styles = [
  {
    title: "Your Product",
    src: "/photo-to-photoshoot/product-image.jpeg",
  },
  {
    title: "AI Magic",
    src: "/photo-to-photoshoot/ai-magic.webp",
  },
  {
    title: "Lifestyle Scene",
    src: "/photo-to-photoshoot/lifestyle-scene.webp",
  },
  {
    title: "Outdoor Style",
    src: "/photo-to-photoshoot/outdoor.webp",
  },
  {
    title: "Final Result",
    src: "/photo-to-photoshoot/final.jpg",
  },
];

export default function PhotoToPhotoshoot() {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-gradient-to-tr from-purple-50 font-kanit via-white to-orange-50 rounded-3xl shadow-xl">
      <div className="flex  p-4 flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left visual section */}
        <div className="md:w-1/2  w-full grid place-items-center relative">
          <div className="bg-white h-max-[60vh] h-[60vh] rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <video
              src="/AdsVideo/Photo-to-photoshoot.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right content section */}
        <div className="md:w-1/2 w-full">
          <p className="text-pink-600 text-lg font-medium uppercase tracking-wide mb-2">
            Perfect For E-Commerce
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Photo to <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
              Photoshoot
            </span>{" "}
            in Seconds
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Transform plain product photos into stunning, high-quality shots —
            instantly, without a studio.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="text-gray-800 flex gap-2 items-start">
              <span className="text-green-500 mt-1">✔</span> AI-styled
              backgrounds with one click
            </li>
            <li className="text-gray-800 flex gap-2 items-start">
              <span className="text-green-500 mt-1">✔</span> 3D render-quality
              visuals for your store or ads
            </li>
            <li className="text-gray-800 flex gap-2 items-start">
              <span className="text-green-500 mt-1">✔</span> Export ready-to-use
              images for Meta & Google Ads
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition">
            Generate My Shoot
          </button>
        </div>
      </div>

      {/* Output styles */}
      <h2 className="mt-20 md:ml-5 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Under the{" "}
        <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
          HOOD
        </span>{" "}
        process :
      </h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {styles.map((style, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col items-center"
          >
            <Image
              src={style.src}
              alt={style.title}
              width={200}
              height={150}
              className="rounded-lg object-cover h-[90%]"
            />
            <p className="mt-2 font-medium text-xl text-center">
              {style.title} →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
