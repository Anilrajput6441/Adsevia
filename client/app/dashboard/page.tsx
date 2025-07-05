// File: app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-20 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name} 👋</h1>
            <p className="text-gray-600">Your Adsevia Dashboard</p>
          </div>
          <button
            onClick={() => router.push("/dashboard/create-ad")}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            + Create New Ad
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Total Ads Created</h2>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Ad Clicks</h2>
            <p className="text-3xl font-bold text-green-600">3.5K</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Conversion Rate</h2>
            <p className="text-3xl font-bold text-purple-600">7.2%</p>
          </div>
        </div>
      </div>

      {/* Bottom Right Logout */}
      <div className="flex justify-end max-w-6xl mx-auto w-full">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
