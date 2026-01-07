"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="w-full max-w-md p-8 bg-slate-800/80 rounded-lg shadow-2xl border border-slate-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Admin Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-900/20 border border-red-700 text-red-300 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-slate-600 bg-slate-700/50 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-slate-600 bg-slate-700/50 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-slate-400 mt-4 text-center">
          Default: admin@example.com / adminpassword123
        </p>

        <p className="text-sm text-slate-400 mt-4 text-center">
          New admin?{" "}
          <Link href="/onboard" className="text-indigo-400 hover:text-indigo-300 underline">
            Create your account
          </Link>
        </p>
      </div>
    </div>
  );
}
