// File: app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import MetaAdsDashboard from "../components/Dashboard-Components/MetaAdsDashboard";

export default function Dashboard() {
  const { user, logout } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    // Optional: Show a loading spinner or message while redirecting
    return <div>Redirecting to login...</div>;
  }
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
      </div>
      <MetaAdsDashboard isConnected={false} />

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
