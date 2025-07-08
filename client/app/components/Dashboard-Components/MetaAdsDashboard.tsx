// File: components/dashboard/MetaAdsDashboard.tsx

import { useEffect, useState } from "react";
import axios from "axios";

interface MetaData {
  clicks: number;
  impressions: number;
  spend: number;
  ctr: number;
}

interface Props {
  isConnected: boolean;
}

export default function MetaAdsDashboard({ isConnected }: Props) {
  const [data, setData] = useState<MetaData | null>(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("adsevia_token");

  useEffect(() => {
    if (isConnected) {
      setLoading(true);
      axios
        .get("/api/meta/ads-insights", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => {
          console.error(" Failed to load Meta data:", err);

          if (err.response?.status === 401) {
            alert("Session expired or unauthorized. Please log in again.");
            // Optional: redirect to login or trigger logout
            // router.push("/login") — if you import useRouter
          } else {
            alert("Something went wrong while fetching Meta Ads data.");
          }
        })
        .finally(() => setLoading(false));
    }
  }, [isConnected]);

  if (!isConnected) {
    return (
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Meta Ads</h2>
        <p className="mb-4">
          Connect your Facebook Ad Account to view analytics.
        </p>
        <a href="http://localhost:3001/api/meta/connect">
          <button className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition-all">
            Connect to Facebook
          </button>
        </a>
      </div>
    );
  }

  if (loading || !data) {
    return <p className="text-white">Loading Meta Ads data...</p>;
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Meta Ads Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 p-4 rounded-xl">
          <p className="text-sm">Clicks</p>
          <p className="text-lg font-bold">{data.clicks}</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <p className="text-sm">Impressions</p>
          <p className="text-lg font-bold">{data.impressions}</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <p className="text-sm">Spend</p>
          <p className="text-lg font-bold">₹{data.spend}</p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl">
          <p className="text-sm">CTR</p>
          <p className="text-lg font-bold">{data.ctr}%</p>
        </div>
      </div>
    </div>
  );
}
