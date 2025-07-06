// File: components/AIAssistantPanel.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

interface Message {
  id: string;
  role: "user" | "assistant";
  type: "text" | "image" | "video" | "mixed";
  content: string;
  mediaUrl?: string; // For mixed content (text + media)
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
      const response = await axios.post(
        "http://localhost:3001/api/ads/generate",
        {
          prompt,
          mode,
        }
      );

      const data = response.data;
      let assistantMsg: Message;

      // Determine response type based on actual response data, not mode
      const hasText = data.result && typeof data.result === "string";
      const hasImage = data.imageUrl && typeof data.imageUrl === "string";
      const hasVideo = data.videoUrl && typeof data.videoUrl === "string";

      if (hasText && (hasImage || hasVideo)) {
        // Mixed content: text + media
        assistantMsg = {
          id: uuidv4(),
          role: "assistant",
          type: "mixed",
          content: data.result,
          mediaUrl: data.imageUrl || data.videoUrl,
        };
      } else if (hasText && !hasImage && !hasVideo) {
        // Text only
        assistantMsg = {
          id: uuidv4(),
          role: "assistant",
          type: "text",
          content: data.result,
        };
      } else if (hasImage && !hasText) {
        // Image only
        assistantMsg = {
          id: uuidv4(),
          role: "assistant",
          type: "image",
          content: data.imageUrl,
        };
      } else if (hasVideo && !hasText) {
        // Video only
        assistantMsg = {
          id: uuidv4(),
          role: "assistant",
          type: "video",
          content: data.videoUrl,
        };
      } else {
        // Fallback: treat as text
        assistantMsg = {
          id: uuidv4(),
          role: "assistant",
          type: "text",
          content: data.result || data.message || "No response received",
        };
      }

      setMessages((prev) => [...prev, assistantMsg]);
      setPrompt("");
    } catch (err) {
      console.error("Error generating content:", err);

      let errorMessage = "❌ Something went wrong. Please try again later.";

      if (axios.isAxiosError(err)) {
        errorMessage =
          err.response?.data?.message || err.message || errorMessage;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: "assistant",
          type: "text",
          content: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const renderMessageContent = (msg: Message) => {
    switch (msg.type) {
      case "text":
        return <p className="text-sm leading-relaxed">{msg.content}</p>;

      case "image":
        return (
          <div className="space-y-2">
            <Image
              src={msg.content}
              alt="Generated"
              width={400}
              height={300}
              className="rounded-lg shadow-md max-w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3EImage not available%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        );

      case "video":
        return (
          <div className="space-y-2">
            <video
              controls
              src={msg.content}
              className="w-full max-w-md rounded-lg shadow-md"
              onError={(e) => {
                const target = e.target as HTMLVideoElement;
                target.style.display = "none";
                const errorDiv = document.createElement("div");
                errorDiv.className = "p-4 bg-red-50 text-red-600 rounded-lg";
                errorDiv.textContent = "Video not available";
                target.parentNode?.appendChild(errorDiv);
              }}
            />
          </div>
        );

      case "mixed":
        const isVideo =
          msg.mediaUrl?.includes(".mp4") ||
          msg.mediaUrl?.includes(".webm") ||
          msg.mediaUrl?.includes(".avi");
        return (
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">{msg.content}</p>
            {isVideo ? (
              <video
                controls
                src={msg.mediaUrl}
                className="w-full max-w-md rounded-lg shadow-md"
                onError={(e) => {
                  const target = e.target as HTMLVideoElement;
                  target.style.display = "none";
                  const errorDiv = document.createElement("div");
                  errorDiv.className = "p-4 bg-red-50 text-red-600 rounded-lg";
                  errorDiv.textContent = "Video not available";
                  target.parentNode?.appendChild(errorDiv);
                }}
              />
            ) : (
              <Image
                src={msg.mediaUrl || ""}
                alt="Generated"
                width={400}
                height={300}
                className="rounded-lg shadow-md max-w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3EImage not available%3C/text%3E%3C/svg%3E";
                }}
              />
            )}
          </div>
        );

      default:
        return <p className="text-sm">{msg.content}</p>;
    }
  };

  return (
    <div className="bg-white overflow-scroll flex flex-col h-[90vh]">
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
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p>Start a conversation with AI Assistant</p>
            <p className="text-sm">
              Ask for ad copy, headlines, or creative ideas
            </p>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[85%] p-4 rounded-lg ${
              msg.role === "user"
                ? "ml-auto bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white"
                : "mr-auto bg-white border shadow-sm"
            }`}
          >
            {renderMessageContent(msg)}
          </div>
        ))}
        {loading && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
            <span className="ml-2 text-sm text-gray-500">
              AI is thinking...
            </span>
          </div>
        )}
        {/* Invisible div for auto-scroll */}
        <div ref={chatEndRef} />
      </div>

      {/* Prompt Input */}
      <div className="flex gap-2 p-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
          rows={2}
          className="flex-1 border rounded p-2 resize-none"
          placeholder={`Describe your ${mode} idea... `}
          disabled={loading}
        ></textarea>
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          className="bg-black text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
    </div>
  );
}
