"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 shadow-2xl border-b border-indigo-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-lg font-black text-white shadow-lg">E</span>
              <span>Dashboard</span>
            </Link>
          </div>

          {session && (
            <div className="flex items-center space-x-6">
              <span className="text-sm text-slate-300 font-medium bg-slate-800/50 px-4 py-1 rounded-lg">{session.user?.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg transition font-semibold text-sm shadow-lg hover:shadow-indigo-500/50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
