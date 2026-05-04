/** @format */

"use client";

import React, { useEffect, useState } from "react";

const API_URL = "https://qurbani-hat-phi.vercel.app/Animal.json";

function formatPrice(price) {
  const num = Number(price || 0);
  return `৳${num.toLocaleString("en-IN")}`;
}

export default function FeaturedSelection() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadAnimals() {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch API data");
        const data = await response.json();
        if (mounted) setAnimals(Array.isArray(data) ? data.slice(0, 4) : []);
      } catch {
        try {
          const fallbackResponse = await fetch("/Animal.json");
          const fallbackData = await fallbackResponse.json();
          if (mounted)
            setAnimals(
              Array.isArray(fallbackData) ? fallbackData.slice(0, 4) : [],
            );
        } catch {
          if (mounted) setAnimals([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadAnimals();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900">
            Featured Selection
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Hand-picked livestock from our most trusted partner farms across
            Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {loading && (
            <div className="col-span-full text-center text-gray-500">
              Loading featured animals...
            </div>
          )}

          {!loading && animals.length === 0 && (
            <div className="col-span-full text-center text-gray-500">
              No animals available.
            </div>
          )}

          {animals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border"
            >
              <div className="relative h-48 md:h-56 bg-gray-200">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-amber-300 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full">
                  CERTIFIED
                </span>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-900">
                      {animal.name}
                    </h3>
                    <p className="text-xs text-gray-400">{animal.breed}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-500 font-bold">
                      {formatPrice(animal.price)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span>△ {animal.weight} kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⌖ {animal.location}</span>
                  </div>
                </div>

                <div>
                  <button className="w-full bg-emerald-900 text-white py-2 rounded-md font-semibold hover:bg-emerald-800">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
