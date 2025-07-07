"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3001/api/auth/register", {
        name,
        email,
        password,
      });
      auth?.login(res.data.user, res.data.token);
      router.push("/dashboard");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background graphic */}
      <div className="absolute z-0 w-[35rem] h-[35rem] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 "></div>
      <Image
        src="/svg4.svg"
        alt="Register Illustration"
        width={500}
        height={400}
        className="absolute z-1 w-full h-full object-contain"
      />
      <form
        onSubmit={handleRegister}
        className="z-10 bg-white border border-gray-200 shadow-xl rounded-xl px-8 py-6 w-full max-w-md"
      >
        <div className="text-center text-4xl font-darumadrop mb-4 tracking-wide">
          <span className="text-orange-900">A</span>
          <span className="text-blue-800">d</span>
          <span className="text-green-500">s</span>
          <span className="text-purple-800">e</span>
          <span className="text-pink-900">v</span>
          <span className="text-rose-900">i</span>
          <span className="text-blue-800">a</span>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h1>
        <input
          className="border border-gray-300 rounded-md mb-4 w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border border-gray-300 rounded-md mb-4 w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border border-gray-300 rounded-md mb-4 w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 w-full rounded-md transition font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-purple-700 font-semibold cursor-pointer hover:underline"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
