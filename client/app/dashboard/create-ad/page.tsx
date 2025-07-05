/* eslint-disable @typescript-eslint/no-explicit-any */
// File: app/dashboard/create/page.tsx
"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import AIAssistantPanel from "@/app/components/AIAssistantPanel";

export default function CreateAdPage() {
  const [platform, setPlatform] = useState("meta");
  const [type, setType] = useState("image");
  const [campaign, setCampaign] = useState("");
  const [headline, setHeadline] = useState("");
  const [text, setText] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("7");
  // const [prompt, setPrompt] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files).filter((file) => {
      const isValidImage =
        file.type.startsWith("image/") &&
        ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
          file.type
        );
      const isValidVideo =
        file.type.startsWith("video/") &&
        ["video/mp4", "video/avi", "video/mov", "video/wmv"].includes(
          file.type
        );
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit

      return (isValidImage || isValidVideo) && isValidSize;
    });

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Collect all form data
    const formData = {
      platform,
      type,
      campaign,
      headline,
      text,
      budget,
      duration,
      uploadedFiles,
      prompt,
    };

    // TODO: send data to backend including uploadedFiles
    console.log("Form data:", formData);
    // console.log("Uploaded files:", uploadedFiles);

    // Validate required fields
    if (!campaign.trim()) {
      toast.error("Please enter a campaign name");
      return;
    }

    if (!headline.trim()) {
      toast.error("Please enter a headline");
      return;
    }

    if (!text.trim()) {
      toast.error("Please enter primary text");
      return;
    }

    if (!budget || parseFloat(budget) <= 0) {
      toast.error("Please enter a valid budget");
      return;
    }

    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one file");
      return;
    }

    toast.success("Ad created successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br font-kanit from-pink-100 via-purple-100 to-orange-100 p-6">
      <div className="max-w-6xl border-2  border-red-700 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="col-span-2 bg-white rounded-xl shadow-lg p-6 space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Ad Creator</h2>

          {/* Platform Selection */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPlatform("meta")}
              className={`px-4 py-2 rounded border ${
                platform === "meta"
                  ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Meta Ads
            </button>
            <button
              type="button"
              onClick={() => setPlatform("google")}
              className={`px-4 py-2 rounded border ${
                platform === "google"
                  ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Google Ads
            </button>
          </div>

          {/* Ad Type */}
          <div className="flex gap-2">
            {["image", "video", "carousel"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 px-4 py-2 rounded border text-sm font-medium transition-all duration-500 ${
                  type === t
                    ? "bg-gradient-to-r  from-orange-500 via-pink-500 to-purple-500 text-white"
                    : "bg-gray-100 hover:bg-gray-300"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)} Ad
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Enter campaign name"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Enter headline"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder="Enter primary text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border rounded p-2"
            rows={4}
          ></textarea>
          {/*--------- file input -------- */}
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
              isDragOver
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
            />

            {uploadedFiles.length === 0 ? (
              <div className="space-y-2">
                {/* <div className="text-4xl mb-2">📁</div> */}
                <p className="text-sm text-gray-600 font-medium">
                  Upload files or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF, MP4, AVI up to 10MB
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">
                  {uploadedFiles.length} file(s) uploaded
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                      {file.type.startsWith("image/") ? (
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          width={500}
                          height={500}
                          className="w-full h-20 object-cover rounded border"
                        />
                      ) : (
                        <video
                          src={URL.createObjectURL(file)}
                          className="w-full h-20 object-cover rounded border"
                          muted
                        />
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(index);
                        }}
                        className="absolute  top-1 right-1 bg-red-500 text-white  w-9 h-9 text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                      <p className="text-xs text-gray-600 truncate mt-1">
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="text-xs text-purple-600 hover:text-purple-700 font-medium"
                >
                  Add more files
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              placeholder="$0.00"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border rounded p-2"
            />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border rounded p-2"
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button type="button" className="px-4 py-2 border rounded">
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create Ad
            </button>
          </div>
        </form>

        {/* AI Assistant */}
        <div className="col-span-2 bg-white rounded-xl shadow-lg p-2">
          <AIAssistantPanel />
        </div>
      </div>
    </div>
  );
}
