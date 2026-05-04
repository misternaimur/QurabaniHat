/** @format */

import React from "react";
import Image from "next/image";
import Img01 from "../asset/Premium-img-01.png";
import Img02 from "../asset/Premium-img-02.png";
import Img03 from "../asset/Premium-img-03.png";

const breeds = [
  {
    name: "Deshi Cow",
    subtitle: "Traditional & Hearty",
    priceLabel: "STARTING 120K",
    image: Img01,
  },
  {
    name: "Sahiwal",
    subtitle: "Elite Milk & Meat",
    priceLabel: "STARTING 120K",
    image: Img02,
  },
  {
    name: "Brahman",
    subtitle: "Massive & Prestigious",
    priceLabel: "STARTING 120K",
    image: Img03,
  },
  {
    name: "Black Bengal Goat",
    subtitle: "Superior Meat Quality",
    priceLabel: "STARTING 120K",
    image: Img03,
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

            <div className="w-full h-56 md:h-64 relative">
              <Image
                src={b.image}
                alt={b.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={i < 2}
              />
            </div>

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
