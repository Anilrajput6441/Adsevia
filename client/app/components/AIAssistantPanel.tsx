// File: components/AIAssistantPanel.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Message {
  id: string;
  role: "user" | "assistant";
  type: "text" | "image" | "video";
  content: string;
}

export default function AIAssistantPanel() {
  const [mode, setMode] = useState<"text" | "image" | "video">("text");
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    const userMsg: Message = {
      id: uuidv4(),
      role: "user",
      type: "text",
      content: prompt,
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      // Simulate API response for now
      setTimeout(() => {
        const assistantMsg: Message = {
          id: uuidv4(),
          role: "assistant",
          type: "text",
          content: `Here's a sample response for your ${mode} request: "${prompt}". This is a placeholder response.`,
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setPrompt("");
        setLoading(false);
      }, 1000);

      // TODO: Uncomment when APIs are ready
      // if (mode === "text") {
      //   const response = await fetch("/api/ads/generate", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ prompt }),
      //   });
      //   const data = await response.json();
      //   setMessages((prev) => [
      //     ...prev,
      //     {
      //       id: uuidv4(),
      //       role: "assistant",
      //       type: "text",
      //       content: data.result,
      //     },
      //   ]);
      // } else if (mode === "image") {
      //   const response = await fetch("/api/image-gen", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ prompt }),
      //   });
      //   const data = await response.json();
      //   setMessages((prev) => [
      //     ...prev,
      //     {
      //       id: uuidv4(),
      //       role: "assistant",
      //       type: "image",
      //       content: data.imageUrl,
      //     },
      //   ]);
      // } else if (mode === "video") {
      //   const response = await fetch("/api/video-gen", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ prompt }),
      //   });
      //   const data = await response.json();
      //   setMessages((prev) => [
      //     ...prev,
      //     {
      //       id: uuidv4(),
      //       role: "assistant",
      //       type: "video",
      //       content: data.videoUrl,
      //     },
      //   ]);
      // }
    } catch (err) {
      console.error("Error generating content:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: "assistant",
          type: "text",
          content: "❌ Something went wrong. Please try again later.",
        },
      ]);
      setPrompt("");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white  overflow-scroll flex flex-col h-[90vh]">
      {/* Mode Selector */}
      <div className="flex gap-2 mb-2 p-4">
        {(["text", "image", "video"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-1 rounded ${
              mode === m ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Chat Feed */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3 border rounded p-3 bg-gray-50 mx-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[75%] p-3 rounded ${
              msg.role === "user" ? "ml-auto bg-white" : "mr-auto bg-gray-200"
            }`}
          >
            {msg.type === "text" && <p>{msg.content}</p>}
            {msg.type === "image" && (
              <Image
                src={msg.content}
                alt="Generated"
                width={300}
                height={200}
                className="rounded"
              />
            )}
            {msg.type === "video" && (
              <video controls src={msg.content} className="w-full rounded" />
            )}
          </div>
        ))}
        {loading && <p className="text-sm text-gray-500">AI is thinking...</p>}
        {/* Invisible div for auto-scroll */}
        <div ref={chatEndRef} />
      </div>

      {/* Prompt Input */}
      <div className="flex gap-2 p-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={2}
          className="flex-1 border rounded p-2"
          placeholder="Describe your idea..."
        ></textarea>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {loading ? "..." : "Generate"}
        </button>
      </div>
    </div>
  );
}
