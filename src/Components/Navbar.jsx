/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navClass = (href) =>
    `text-sm transition ${pathname === href ? "text-emerald-900 font-semibold border-b-2 border-amber-400 pb-1" : "text-slate-600 hover:text-emerald-800"}`;

  return (
    <header className="w-full">
      <nav className="mx-auto max-w-[1200px] px-4 md:px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-emerald-900/10 flex items-center justify-between gap-4">
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
        </div>
      </nav>
    </header>
  );
}
