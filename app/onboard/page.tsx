"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, secret }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(data.error || "Failed to create admin");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="w-full max-w-md p-8 bg-slate-800/80 rounded-lg shadow-2xl border border-slate-700">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">Admin Onboarding</h1>
        <p className="text-sm text-slate-400 mb-6 text-center">
          Create your first admin account (requires secret key)
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-900/20 border border-red-700 text-red-300 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-emerald-900/20 border border-emerald-700 text-emerald-300 rounded">
            {success} Redirecting to login...
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
              placeholder="Create a strong password"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">Secret Key</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              required
              className="w-full border border-slate-600 bg-slate-700/50 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
              placeholder="Enter the secret onboarding key"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Creating Admin..." : "Create Admin"}
          </button>
        </form>

        <p className="text-sm text-slate-400 mt-4 text-center">
          Already have an account?{" "}
          <a href="/" className="text-indigo-400 hover:text-indigo-300 underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
