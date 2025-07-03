"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", color: "#F97316", textColor: "#ffff" }, // orange
    {
      label: "Features",
      href: "#features",
      color: "#3B82F6",
      textColor: "#ffff",
    }, // blue
    {
      label: "How It Works",
      href: "#how-it-works",
      color: "#10B981",
      textColor: "#ffff",
    }, // green
    {
      label: "Pricing",
      href: "#pricing",
      color: "#8B5CF6",
      textColor: "#ffff",
    }, // purple
    {
      label: "Testimonials",
      href: "#testimonials",
      color: "#EC4899",
      textColor: "#ffff",
    }, // pink
    { label: "Blog", href: "#blog", color: "#F43F5E", textColor: "#ffff" }, // rose
  ];
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="#home"
          className="text-4xl font-bold text-black font-darumadrop"
        >
          <span className="text-orange-500">A</span>
          <span className="text-blue-500">d</span>
          <span className="text-green-500">s</span>
          <span className="text-purple-500">e</span>
          <span className="text-pink-500">v</span>
          <span className="text-rose-500">i</span>
          <span className="text-blue-500">a</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-block px-2 py-1 text-gray-700 transition group"
              style={{ "--hover-color": link.color } as React.CSSProperties}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = link.textColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-full w-full z-[-1] rounded-full scale-x-0 origin-right bg-current transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"
                style={{ backgroundColor: link.color }}
              ></span>
            </a>
          ))}
          {/* Dashboard link only for logged-in users */}
          <SignedIn>
            <a
              href="/dashboard"
              className="relative inline-block px-2 py-1 text-gray-700 font-bold transition group hover:text-purple-600"
            >
              Dashboard
            </a>
          </SignedIn>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition hover:brightness-110 shadow-md">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
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
          {/* Dashboard link only for logged-in users (mobile) */}
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
                <button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg transition hover:brightness-110 shadow-md">
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
};

export default Header;
