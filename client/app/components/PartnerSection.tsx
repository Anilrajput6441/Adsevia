// components/PartnerSection.tsx
"use client";

import Image from "next/image";

const partners = [
  {
    name: "Meta Business Partner",
    logo: "https://cdn.prod.website-files.com/672a8fcfbc16cce6f2865d40/672ad93cc317d9b25465ade5_672ad927d053b34a1f3e5c54_meta%25201.png",
  },
  {
    name: "Google Partner",
    logo: "https://cdn.prod.website-files.com/661ce890f68a1d352ebbed35/67e521517ca902fdf50d531c_google-premier-partner.png",
  },
  {
    name: "Linkedin Marketing Partner",
    logo: "https://www.serendipiaagency.com/wp-content/uploads/2017/07/Linkedin-Marketing-Partner-1.png",
  },
  {
    name: "Pinterest Partner",
    logo: "https://cdn.prod.website-files.com/661ce890f68a1d352ebbed35/67e41d00131d13c2fea554df_Image%20298.png",
  },
  {
    name: "TikTok Marketing Partner",
    logo: "https://b2210413.smushcdn.com/2210413/wp-content/uploads/2024/05/TTMP_logo_4C_stacked_black.png?lossy=2&strip=1&webp=1",
  },
];

export default function PartnerSection() {
  return (
    <section className="w-full px-6 py-20 font-kanit  bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-kanit text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
          Trusted Partnerships
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          We proudly partner with industry leaders to help you create, manage,
          and scale your marketing.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col  items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-[20vw] md:w-[10vw] h-[8vh]  md:h-[10vh]  relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-md mt-2 text-gray-700 text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
