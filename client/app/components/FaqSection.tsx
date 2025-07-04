"use client";
import { useState } from "react";

const faqs = [
  {
    question: "📥 What exactly is a 'Download'?",
    answer:
      "Each time you export or save an ad creative (image or video), it counts as a 'Download'. Depending on your plan, you'll get a specific number of downloads per month. These renew monthly and help us manage platform resources while keeping your experience smooth and cost-effective.",
  },
  {
    question: "🏷️ What do you mean by 'Brands'?",
    answer:
      "A Brand in Advicia is like a workspace for a business or product. You can set your logo, brand colors, tone of voice, and connect ad accounts. This allows our AI to tailor ad creatives, copy, and performance insights that truly align with your brand identity.",
  },
  {
    question: "♾️ What does 'Unlimited Generations' really mean?",
    answer:
      "You can generate as many creatives—text, images, or videos—as you want. There's no cap. You’ll only use your download credits when you choose to save or export a creative. This lets you explore multiple ideas and pick the best one without worrying about limits.",
  },
  {
    question: "🖼️ What are 'Unlimited Free Stock Images'?",
    answer:
      "We’ve integrated with a massive library of 100M+ royalty-free, high-quality stock images. You can use them freely in your ad creatives with no licensing fees, no extra steps. It's built right into the platform and available on every plan.",
  },
  {
    question: "✍️ How does the 'Text Generator AI' work?",
    answer:
      "Just tell us what you're promoting, and our AI will write compelling ad headlines, primary text, and CTAs using proven copywriting formulas. Whether you're targeting awareness, engagement, or conversions — the copy adapts to your goal and audience.",
  },
  {
    question: "📊 What is 'Creative Insights Pro' and why does it matter?",
    answer:
      "When you connect your ad accounts, our AI can analyze past campaign data and give you deep insights—like which creatives performed best, average click-through rate in your industry, top colors or formats, and AI-backed suggestions for better results next time.",
  },
  {
    question: "👥 What does 'Number of Users' mean?",
    answer:
      "You can invite teammates to collaborate on campaigns, creatives, and insights in real-time. Each plan supports a set number of user seats. This is perfect for agencies, startups, and teams that work together on marketing.",
  },
  {
    question: "🔌 What are 'Integrations' exactly?",
    answer:
      "Integrations allow you to connect your ad accounts—like Meta (Facebook/Instagram), Google Ads, Pinterest, TikTok, etc.—directly to your Advicia brand. This helps us personalize your AI suggestions, enable direct publishing, and gather post-campaign performance data.",
  },
  {
    question: "💸 What’s your refund policy if things don’t work out?",
    answer:
      "We offer full refunds within 7 days on monthly plans and 30 days on annual plans, as long as the platform hasn’t been actively used (no downloads or creative generations). Just reach out to our support via chat or email and we’ll handle it quickly—no drama.",
  },
  {
    question: "❓Still got questions?",
    answer:
      "No worries! You can check our Help Center for quick answers or start a live chat with our team. We're here to make your ad journey effortless, even if you're just getting started.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8 font-kanit md:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold font-kanit 
             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
             bg-clip-text text-transparent"
        >
          🤔 Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Everything you need to know before getting started
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm transition hover:shadow-md"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <span className=" text-lg text-gray-800">{faq.question}</span>
              <span className="text-gray-500 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700 font-medium">
          Didn’t find your question?{" "}
          <a
            href="/help"
            className="text-pink-600 font-semibold hover:underline"
          >
            Visit our Help Center →
          </a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
