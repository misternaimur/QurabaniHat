/** @format */

import React from "react";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto max-w-[1200px] px-4 md:px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-emerald-900/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-emerald-800 font-medium   text-4xl">
            QurbaniHat
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Home
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            All Animals
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Livestock
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Farms
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Login
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-700 transition"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
