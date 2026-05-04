/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-amber-400">QurbaniHat</div>
            <p className="text-emerald-200/60 text-sm max-w-xs leading-relaxed">
              Connecting sacred traditions with premium modern service. Find,
              book, and deliver your Qurbani animal with complete peace of mind.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-800/20 transition"
                href="#"
                aria-label="website"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-emerald-200"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12h20"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-800/20 transition"
                href="#"
                aria-label="mail"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-emerald-200"
                >
                  <path
                    d="M3 8.5l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 6H3v12h18V6z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-800/20 transition"
                href="#"
                aria-label="chat"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-emerald-200"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3 text-emerald-200/60">
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Categories
            </h5>
            <ul className="space-y-3 text-emerald-200/60">
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Cows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Goats
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Camel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Premium Breeds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              Legal
            </h5>
            <ul className="space-y-3 text-emerald-200/60">
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">
                  Seller Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 text-center text-emerald-200/40 text-xs">
          © 2024 QurbaniHat. All rights reserved. Sacred tradition, premium
          service.
        </div>
      </div>

      <button className="fixed bottom-8 right-8 bg-amber-400 text-emerald-950 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40 border border-amber-300">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2a10 10 0 0 0-10 10v6l4-2 1 1 1-1 1 1 1-1 1 1 1-1 4 2v-6a10 10 0 0 0-10-10z"
            fill="#063"
            opacity="0.05"
          />
          <path
            d="M12 2a10 10 0 0 0-10 10v6l4-2 1 1 1-1 1 1 1-1 1 1 1-1 4 2v-6a10 10 0 0 0-10-10z"
            stroke="#063"
            strokeWidth="0.6"
            fill="none"
          />
          <circle cx="12" cy="12" r="3" fill="#063" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
