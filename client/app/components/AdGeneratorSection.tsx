"use client";
import Image from "next/image";

const data = [
  {
    src: "/AdsVideo/ads.mp4",
    score: 92,
  },
  {
    src: "/AdsVideo/ads2.mp4",
    score: 87,
  },
];

const AdGeneratorSection = () => {
  return (
    <section className="bg-gradient-to-br font-kanit from-orange-100 via-pink-100 to-purple-100 w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Launch Smart Ads in Seconds with AI
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Skip the need for designers and strategists. Advicia creates
            high-converting ads for you—text, visuals, scoring, and insights all
            handled by AI.
          </p>
          <ul className="space-y-3 mb-8 text-gray-800">
            <li>✅ Instant ad images & videos</li>
            <li>✅ Pre-publish scoring & improvements</li>
            <li>✅ Smart AI-powered performance tips</li>
            <li>✅ 1-click publishing to Meta & Google</li>
          </ul>
          <div className="flex gap-4 p-5">
            <div className="">
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-6 py-4  rounded-lg text-sm md:text-lg  transition hover:brightness-110 shadow-md">
                Try for Free now
              </button>
            </div>
            <div className="hover:bg-gray-50 bg-white rounded-lg">
              <button
                className="flex justify-between items-center gap-2   px-6 py-4 rounded-lg transition hover:brightness-110 text-sm md:text-lg  border border-gray-100 shadow-lg 
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

        {/* Right Content - App Simulation Box */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl w-full max-w-md">
          <div className="font-semibold text-lg mb-4">Advicia</div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="e.g. Fashion Brand"
              className="w-full px-4 py-2 border rounded-md"
              disabled
            />
            <div className="flex gap-2">
              <select className="w-1/2 px-3 py-2 border rounded-md" disabled>
                <option>Meta</option>
                <option>Google</option>
              </select>
              <select className="w-1/2 px-3 py-2 border rounded-md" disabled>
                <option>1080x1080</option>
                <option>1080x1920</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="e.g. Shop the New Drop"
              className="w-full px-4 py-2 border rounded-md"
              disabled
            />
            <button
              disabled
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-md font-semibold"
            >
              Generate
            </button>

            {/* Generated Preview */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow"
                >
                  <div className="relative w-full h-40">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-2 text-sm">Let AI do the heavy lifting</div>
                  <div className="text-xs px-2 pb-2 text-gray-500">
                    Score: {item.score}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdGeneratorSection;
