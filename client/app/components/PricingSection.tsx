import React from "react";

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-16 font-kanit">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">
          Plans That Scale With Your Growth
        </h2>
        <p className="text-lg text-gray-600">
          Only pay when you’re ready. Try everything first.
        </p>
        <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400 shadow-md animate-bounce">
          <span className=" text-md  whitespace-nowrap">
            💳 No credit card required to get started
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Free Forever */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h3 className="text-xl font-semibold mb-2">Free Forever</h3>
          <p className="text-sm text-gray-500 mb-4">
            Perfect for individuals and early-stage startups
          </p>
          <p className="text-3xl font-bold mb-4">
            ₹0<span className="text-base font-normal">/month</span>
          </p>
          <ul className="text-sm space-y-2 mb-6">
            <li>✔ 3 ad/video/image generations per month</li>
            <li>✔ Watermarked outputs</li>
            <li>✔ Basic analytics</li>
            <li>✔ Limited template styles</li>
            <li>✔ Try publishing to 1 platform</li>
          </ul>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-lg transition-all">
            Try Free — No Card Needed
          </button>
        </div>

        {/* Starter */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-500 p-6 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-sm text-gray-500 mb-4">
            Get your first AI campaigns out the door
          </p>
          <p className="text-3xl font-bold mb-4">
            ₹499<span className="text-base font-normal">/month</span>
          </p>
          <ul className="text-sm space-y-2 mb-6">
            <li>✔ 100 generations/month (video or image)</li>
            <li>✔ Unlimited publishing</li>
            <li>✔ Smart AI scoring</li>
            <li>✔ High-converting templates</li>
            <li>✔ Ad-style A/B testing</li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all">
            Launch My First Campaign
          </button>
        </div>

        {/* Pro Marketer */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h3 className="text-xl font-semibold mb-2">Pro Marketer</h3>
          <p className="text-sm text-gray-500 mb-4">
            Designed for marketing teams & ad agencies
          </p>
          <p className="text-3xl font-bold mb-4">
            ₹1,999<span className="text-base font-normal">/month</span>
          </p>
          <ul className="text-sm space-y-2 mb-6">
            <li>✔ Unlimited generations</li>
            <li>✔ Priority rendering</li>
            <li>✔ Custom branding on outputs</li>
            <li>✔ Performance dashboard</li>
            <li>✔ Collaboration (3 users)</li>
            <li>✔ Auto-sync to Meta & Google</li>
          </ul>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-all">
            Scale My Results
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-2xl shadow p-6 border">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-sm text-gray-500 mb-4">
            Custom workflows, white-glove support, and onboarding
          </p>
          <p className="text-2xl font-bold mb-4">Custom Pricing</p>
          <ul className="text-sm space-y-2 mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Dedicated CSM</li>
            <li>✔ Team access control</li>
            <li>✔ CRM + pixel integrations</li>
            <li>✔ Quarterly strategy review</li>
          </ul>
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-lg transition-all">
            Talk to Sales
          </button>
        </div>
      </div>

      {/* Bonus Perks */}
      <div className="bg-gradient-to-br from-[#FFF9F0] to-[#FFEFEF] py-12 px-6 rounded-xl shadow-md max-w-6xl mx-auto mt-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
            🎁 Exclusive Perks for Our Early Adopters
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Because our first users deserve more than just access.
          </p>
        </div>

        {/* Bonus List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-1 text-pink-600">
              🌟 20% Off for 3 Months
            </h4>
            <p className="text-gray-600 text-sm">
              Early users get an exclusive discount on all plans.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-1 text-yellow-600">
              🎉 Invite & Earn
            </h4>
            <p className="text-gray-600 text-sm">
              Bring 3 friends and unlock Rewards.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-1 text-blue-600">
              🧪 Beta Tester Access
            </h4>
            <p className="text-gray-600 text-sm">
              Get early access to experimental features + badge.
            </p>
          </div>
        </div>

        {/* Benefit Hooks */}
        {/* <div className="mt-12 text-center">
          <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-md animate-pulse">
            ✅ No credit card required. Get started in 60 seconds.
          </div>

          <ul className="mt-6 text-gray-700 space-y-2 text-sm">
            <li>✅ Free trial gives full access to premium features</li>
            <li>✅ Cancel anytime — no surprises, no tricks</li>
            <li>✅ Publish ads to Google, Meta, TikTok, Pinterest</li>
            <li>✅ Boost your account with priority AI credits</li>
          </ul>

          <div className="mt-8 space-y-1 text-base font-semibold text-gray-800">
            <p>🚀 “Start your first campaign in under 2 minutes”</p>
            <p>⚡ “95% of users create their first AI ad within 10 minutes”</p>
            <p>
              🌍 “Trusted by 2,000+ creators, brands, and agencies worldwide”
            </p>
            <p>💸 “Make your first AI ad for ₹0 — and see results roll in”</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
