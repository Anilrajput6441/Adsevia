// Project: Advicia.com – SaaS Starter Kit (Next.js + TypeScript)

// File: /app/page.tsx (App Router Enabled)

"use client";

import Head from "next/head";
import { useState } from "react";
// import { Button } from "@/"

export default function Home() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email captured:", email); // Replace with ConvertKit or custom logic
  };

  return (
    <>
      <Head>
        <title className="text-black">Advicia | AI-Powered Ad Creation</title>
      </Head>
      <main className="min-h-screen  flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="font-bold text-5xl border-b-2 px-4 border-black">
          Adsevia
        </h1>
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Create. Optimize. Analyze. Scale.
          </h1>
          <p className="mb-6 text-lg">
            One tool to launch smarter ads across Google, Meta, and LinkedIn —
            powered by AI.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email to join the waitlist"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm"
              required
            />
            <button
              type="submit"
              className="border-1 border-black p-3 bg-gray-300 hover:bg-gray-400"
            >
              Join the Waitlist
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

// File: /README.md

// # Advicia.com (MVP Starter)

// ## Project Setup

// - Framework: Next.js (App Router) + TypeScript
// - Styling: Tailwind CSS + shadcn/ui
// - Email capture: Local logging (replace with ConvertKit or Mailchimp)

// ## Getting Started

// ```bash
// npm install
// npm run dev
// ```

// ## Next Steps

// - Replace email logging with actual API
// - Deploy via Vercel
// - Connect to advicia.com domain

// ## Components Needed

// - Ad Creator UI
// - Copy AI integration (OpenAI)
// - Image AI integration (DALL·E)
// - Analytics Dashboard (basic charts)
