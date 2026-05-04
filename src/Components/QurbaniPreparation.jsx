/** @format */

import React from "react";

const items = [
  {
    title: "Age Verification",
    description:
      "Ensure the animal has reached the prescribed age (2 years for cattle, 1 year for goats) as per Islamic law.",
    icon: (
      <path
        d="M4 4h16v16H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Physical Health",
    description:
      "Look for clear eyes, moist nose, and a healthy coat. The animal must be free from any major physical defects.",
    icon: (
      <path
        d="M12 3l7 4v6c0 4.5-3 7.5-7 8-4-.5-7-3.5-7-8V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Shariah Guidelines",
    description:
      "Understand the rules for sharing (up to 7 for cattle, 1 for goat) and the proper method of sacrifice.",
    icon: (
      <path
        d="M4 6h16M7 6v12M17 6v12M4 18h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function QurbaniPreparation() {
  return (
    <section className="bg-emerald-950 py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Qurbani Preparation
          </h2>
          <p className="mt-2 text-sm md:text-base text-emerald-100/75">
            Essential Islamic guidelines and expert tips for selecting your
            animal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/10 px-5 py-6 md:px-6 md:py-7 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-sm text-white"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300 text-emerald-950 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-emerald-100/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
