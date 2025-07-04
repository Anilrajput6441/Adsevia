"use client";

import Image from "next/image";
// import { FC } from "react";
import { Plus } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    company: "AdSpark India",
    role: "Founder at AdSpark",
    image:
      "https://img.freepik.com/premium-photo/close-up-shot-confused-person-doing-stroking-chin-gesture_482257-93863.jpg",
    gradient: "from-orange-400 to-black",
    quote:
      "Partnering with your AI tools helped us elevate our ad campaigns at a fraction of cost. The conversion rate boost was phenomenal!",
    bg: "bg-yellow-300",
  },
  {
    name: "Sophie Li",
    company: "NeoAds",
    role: "Performance Lead at NeoAds",
    image:
      "https://img.freepik.com/free-photo/japanese-woman-posing-restaurant_23-2149319441.jpg",
    gradient: "from-indigo-400 to-black",
    quote:
      "We scaled our outreach 5x thanks to the intelligent targeting and creative generation. Your platform is a total game-changer!",
    bg: "bg-purple-300",
  },
  {
    name: "Rohan Kapoor",
    company: "PixelPump",
    role: "CTO at PixelPump",
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915905.jpg?t=st=1751623688~exp=1751627288~hmac=7895dcc15179c4ad3f86c60ba949379cf214d63187b4616f1cf6e49d92519f57&w=900",
    gradient: "from-green-400 to-black",
    quote:
      "No studio needed — just uploaded product shots and got pro-quality content. Saved us hours every week!",
    bg: "bg-green-300",
  },
  {
    name: "Emily Davis",
    company: "LumeGrowth",
    role: "Head of Growth at Lume",
    image:
      "https://img.freepik.com/premium-photo/portrait-young-woman-standing-snow_1048944-30794935.jpg?w=900",
    gradient: "from-pink-400 to-black",
    quote:
      "This isn’t just another AI tool. It feels like having a creative agency in your pocket. 10/10 experience!",
    bg: "bg-pink-300",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid gap-10 font-kanit md:grid-cols-2">
      <div>
        {" "}
        <h2 className="text-4xl md:text-5xl font-bold font-kanit py-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
          What Founders & Marketers Say
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Real results from brands using our AI-powered ad creation platform.
        </p>
      </div>

      {testimonials.map((t, i) => (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Photo Block */}
          <div
            className={`relative rounded-xl overflow-hidden  h-64 flex items-end p-4 text-white`}
          >
            <Image
              src={t.image}
              alt={t.name}
              width={300}
              height={300}
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="relative z-10">
              <h4 className="font-semibold text-lg">{t.company}</h4>
              <button className="absolute bottom-4 right-4 bg-white/20 rounded-full p-1 hover:bg-white/30 transition">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Quote Block */}
          <div
            className={`${t.bg} rounded-xl p-6 flex flex-col justify-between shadow-md`}
          >
            <div>
              <div className="text-4xl font-serif mb-4">“</div>
              <p className="font-medium text-lg leading-relaxed">{t.quote}</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-700">{t.role}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="relative mx-auto max-w-4xl text-center px-6 py-12 rounded-3xl bg-gradient-to-r from-orange-300 via-pink-400 to-purple-300 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-sm">
          “<span className="text-white">Results</span>” That Speak for
          Themselves
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-800 font-medium">
          Creators, marketers, and founders across the globe—from India to New
          York—trust us to elevate their brand. See how we’ve helped them scale
          with ease and impact.
        </p>
        <div className="absolute top-4 right-4 text-sm font-semibold bg-white px-3 py-1 rounded-full shadow text-[#ff6f61] animate-bounce">
          Loved by 1,000+ teams
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
