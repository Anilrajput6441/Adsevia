"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (!auth?.loading && auth?.user) {
      router.replace("/dashboard");
    }
  }, [auth?.loading, auth?.user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });

      auth?.login(res.data.user, res.data.token);
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // Show loading while authentication is being checked
  if (auth?.loading) {
    return (
      <div className="p-6 max-w-md border-[2rem] mt-[20vh] mx-auto">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  // Don't show login form if user is already authenticated
  if (auth?.user) return null;

  return (
    <form
      onSubmit={handleLogin}
      className="p-6 max-w-md border-[2rem] mt-[20vh] mx-auto"
    >
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        className="border mb-2 w-full p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border mb-2 w-full p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2 w-full rounded mt-2"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
