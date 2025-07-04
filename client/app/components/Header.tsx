"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Image as ImageIcon,
  Camera,
  Shirt,
  FileImage,
  Type,
  Video as VideoIcon,
  Film,
  Zap,
  Wrench,
  Users,
  BarChart,
  ShieldCheck,
  Star,
  LayoutTemplate,
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// Define a type for feature items
interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

const features: Record<string, FeatureItem[]> = {
  Generate: [
    {
      title: "Ad Creatives",
      desc: "Generate conversion-focused ad creatives",
      icon: <ImageIcon className="w-4 h-4 mr-2 text-orange-500" />,
    },
    {
      title: "Product Photoshoots",
      desc: "Elevate your product photos to stunning visuals",
      icon: <Camera className="w-4 h-4 mr-2 text-purple-500" />,
    },
    {
      title: "Fashion Photoshoots",
      desc: "Fit product photos onto AI-generated models",
      icon: <Shirt className="w-4 h-4 mr-2 text-pink-500" />,
    },
    {
      title: "Stock Image Generation",
      desc: "Generate premium stock images for commercial use",
      icon: <FileImage className="w-4 h-4 mr-2 text-blue-500" />,
    },
    {
      title: "Text & Headlines",
      desc: "Generate high-conversion-rate text",
      icon: <Type className="w-4 h-4 mr-2 text-green-500" />,
    },
    {
      title: "Product Videoshoots",
      desc: "Turn your product photos into videos",
      icon: <VideoIcon className="w-4 h-4 mr-2 text-rose-500" />,
      isNew: true,
    },
    {
      title: "Stock Videos",
      desc: "Generate safe stock videos",
      icon: <Film className="w-4 h-4 mr-2 text-yellow-500" />,
      isNew: true,
    },
    {
      title: "Instant Ads",
      desc: "Launch conversion-driven ads effortlessly",
      icon: <Zap className="w-4 h-4 mr-2 text-orange-400" />,
      isNew: true,
    },
    {
      title: "Creative Utility Suite",
      desc: "All-in-one toolkit for creatives",
      icon: <Wrench className="w-4 h-4 mr-2 text-gray-500" />,
      isNew: true,
    },
    {
      title: "Buyer Personas",
      desc: "AI profiling for targeting",
      icon: <Users className="w-4 h-4 mr-2 text-blue-400" />,
      isNew: true,
    },
  ],
  Analyse: [
    {
      title: "Creative Insights",
      desc: "Identify top-performing creatives",
      icon: <BarChart className="w-4 h-4 mr-2 text-purple-400" />,
    },
    {
      title: "Competitor Insights",
      desc: "Gain insights from competitors",
      icon: <Star className="w-4 h-4 mr-2 text-yellow-400" />,
    },
    {
      title: "Compliance Checker",
      desc: "Avoid ad violations",
      icon: <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />,
      isNew: true,
    },
  ],
  Predict: [
    {
      title: "Creative Scoring",
      desc: "Create UGC-style ads",
      icon: <Star className="w-4 h-4 mr-2 text-pink-400" />,
    },
  ],
  Automate: [
    {
      title: "Custom Templates",
      desc: "Generate creatives using custom templates",
      icon: <LayoutTemplate className="w-4 h-4 mr-2 text-blue-600" />,
    },
  ],
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverFeature, setHoverFeature] = useState(false);
  const [featureMenuTimeout, setFeatureMenuTimeout] =
    useState<NodeJS.Timeout | null>(null);

  // const navColors = [
  //   "bg-pink-500",
  //   "bg-orange-500",
  //   "bg-blue-500",
  //   "bg-green-500",
  //   "bg-purple-500",
  //   "bg-yellow-500",
  //   "bg-rose-500",
  //   "bg-teal-500",
  // ];
  const navLinks = [
    { label: "Home", href: "#home", color: "#ec4899" }, // pink-500
    { label: "Features", href: "#features", mega: true, color: "#f59e42" }, // orange-500
    { label: "How It Works", href: "#how-it-works", color: "#3b82f6" }, // blue-500
    { label: "Pricing", href: "#pricing", color: "#a21caf" }, // purple-500
    { label: "Testimonials", href: "#testimonials", color: "#f43f5e" }, // rose-500
    { label: "Blog", href: "#blog", color: "#14b8a6" }, // teal-500
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur border-b font-kanit border-gray-200">
      <div className="mx-auto max-w-7xl px-4 flex justify-between items-center h-16">
        <Link href="#home" className="text-4xl font-bold font-darumadrop">
          <span className="text-orange-500">A</span>
          <span className="text-blue-500">d</span>
          <span className="text-green-500">s</span>
          <span className="text-purple-500">e</span>
          <span className="text-pink-500">v</span>
          <span className="text-rose-500">i</span>
          <span className="text-blue-500">a</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => (
            <div
              // className={` transition-all duration-500 hover:bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-2xl `}
              key={link.href}
              onMouseEnter={() => {
                if (link.mega) {
                  if (featureMenuTimeout) clearTimeout(featureMenuTimeout);
                  setHoverFeature(true);
                }
              }}
              onMouseLeave={() => {
                if (link.mega) {
                  const timeout = setTimeout(() => setHoverFeature(false), 150);
                  setFeatureMenuTimeout(timeout);
                }
              }}
              onFocus={() => link.mega && setHoverFeature(true)}
              onBlur={() => link.mega && setHoverFeature(false)}
              tabIndex={0}
              aria-haspopup={link.mega ? "true" : undefined}
              aria-expanded={link.mega && hoverFeature ? "true" : undefined}
            >
              <a
                href={link.href}
                className="relative px-2 py-1 rounded-2xl text-gray-700 font-medium transition duration-300"
                style={{
                  color: "inherit",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = link.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "")
                }
              >
                {link.label}
              </a>
              {link.mega && hoverFeature && (
                <div
                  className="absolute top-12 left-[-10vw] w-screen max-w-5xl bg-white border shadow-xl rounded-xl p-6 z-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm"
                  role="menu"
                  aria-label="Features Mega Menu"
                  onMouseEnter={() => {
                    if (featureMenuTimeout) clearTimeout(featureMenuTimeout);
                    setHoverFeature(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(
                      () => setHoverFeature(false),
                      150
                    );
                    setFeatureMenuTimeout(timeout);
                  }}
                >
                  {Object.entries(features).map(([section, items]) => (
                    <div key={section}>
                      <h4 className="text-pink-600 font-semibold ml-7 uppercase mb-3">
                        {section}
                      </h4>
                      <ul className="space-y-2">
                        {items.map((item, i) => (
                          <li
                            key={i}
                            className="flex flex-col items-start mb-2"
                          >
                            <div className="flex items-center">
                              <span className="group flex items-center font-medium text-sm cursor-pointer text-gray-800">
                                {item.icon}
                                <span className="group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300 hover:underline">
                                  {item.title}
                                </span>
                              </span>
                              {item.isNew && (
                                <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                                  NEW
                                </span>
                              )}
                            </div>
                            <p className="text-gray-500  font-extralight text-xs ml-6 mt-1">
                              {item.desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <SignedIn>
            <a
              href="/dashboard"
              className="text-purple-600 font-semibold hover:underline"
            >
              Dashboard
            </a>
          </SignedIn>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:brightness-110 shadow-md">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <SignedIn>
            <a
              href="/dashboard"
              className="block text-purple-600 font-bold py-2 hover:text-purple-800 transition"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </a>
          </SignedIn>
          <div className="pt-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:brightness-110 shadow-md">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
