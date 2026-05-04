/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const session = authClient.useSession();
  let demoUser = null;
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("qurbani_demo_admin");
      demoUser = stored ? JSON.parse(stored) : null;
    } catch {
      demoUser = null;
    }
  }

  const user = session?.data?.user || demoUser;
  const initials = user?.name
    ? user.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join("")
    : "U";

  const navClass = (href) =>
    `text-sm transition ${pathname === href ? "text-emerald-900 font-semibold border-b-2 border-amber-400 pb-1" : "text-slate-600 hover:text-emerald-800"}`;

  return (
    <header className="w-full">
      <nav className="mx-auto max-w-300 px-4 md:px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-emerald-900/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-emerald-800 font-medium text-4xl">
            QurbaniHat
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={navClass("/")}>
            Home
          </Link>
          <Link href="/all-animals" className={navClass("/all-animals")}>
            All Animals
          </Link>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Livestock
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Farms
          </a>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href="/Profile"
              className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-emerald-700 bg-emerald-50 text-sm font-bold text-emerald-900 shadow-sm transition hover:scale-105"
              aria-label="Open profile"
              title={user?.name || "Profile"}
            >
              {user?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.image}
                  alt={user?.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>{initials}</span>
              )}
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-slate-600 hover:text-emerald-800"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
