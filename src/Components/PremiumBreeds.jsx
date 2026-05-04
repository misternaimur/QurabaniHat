/** @format */

import React from "react";

const breeds = [
  {
    name: "Deshi Cow",
    subtitle: "Traditional & Hearty",
    priceLabel: "STARTING 120K",
    image:
      "https://images.unsplash.com/photo-1548122239-3a3d9b7c5f2e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7d3e7b2b2d1a7b3c6f8f2c9a3f0b9e3a",
  },
  {
    name: "Sahiwal",
    subtitle: "Elite Milk & Meat",
    priceLabel: "STARTING 120K",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d7f5b2dfc9f1c9b6f6a2a8d6c4b3e1f",
  },
  {
    name: "Brahman",
    subtitle: "Massive & Prestigious",
    priceLabel: "STARTING 120K",
    image:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5a4e6c7f8b9a6d4c2f1e0b3c9a8d7e6f",
  },
  {
    name: "Black Bengal Goat",
    subtitle: "Superior Meat Quality",
    priceLabel: "STARTING 120K",
    image:
      "https://images.unsplash.com/photo-1583511655826-2b7a06f6c5f4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e",
  },
];

export default function PremiumBreeds() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-900">
            Premium Breeds
          </h3>
          <p className="text-sm text-gray-500">
            The finest livestock curated for your sacred sacrifice.
          </p>
        </div>
        <a
          className="text-amber-500 text-sm font-medium hover:underline"
          href="#"
        >
          Explore All Breeds →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {breeds.map((b, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <span className="absolute top-3 left-3 bg-emerald-800 text-emerald-50 text-[10px] px-2 py-1 rounded-full font-semibold">
              {b.priceLabel}
            </span>
            <img
              src={b.image}
              alt={b.name}
              className="w-full h-56 md:h-64 object-cover"
            />

            <div className="p-4">
              <h4 className="text-base text-emerald-900 font-semibold">
                {b.name}
              </h4>
              <p className="text-xs text-gray-400">{b.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
