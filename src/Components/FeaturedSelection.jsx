/** @format */

import React from "react";
import Image from "next/image";
import Img01 from "../asset/Premium-img-01.png";
import Img02 from "../asset/Premium-img-02.png";
import Img03 from "../asset/Premium-img-03.png";
import Img04 from "../asset/Premium-img-03.png";

const items = [
  {
    title: "Shundar Sahiwal",
    subtitle: "Premium Sahiwal Breed",
    price: "৳1,20,000",
    weight: "320kg",
    location: "Pabna",
    image: Img01,
  },
  {
    title: "Royal Brahman",
    subtitle: "Authentic Brahman",
    price: "৳4,50,000",
    weight: "650kg",
    location: "Manikganj",
    image: Img02,
  },
  {
    title: "Dhaka Giant",
    subtitle: "Mixed Breed",
    price: "৳2,10,000",
    weight: "480kg",
    location: "Gazipur",
    image: Img03,
  },
  {
    title: "Kalo Manik",
    subtitle: "Pure Black Bengal",
    price: "৳42,000",
    weight: "35kg",
    location: "Kushtia",
    image: Img04,
  },
];

export default function FeaturedSelection() {
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
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,25vw"
                  priority={idx < 2}
                />
                <span className="absolute top-3 left-3 bg-amber-300 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full">
                  CERTIFIED
                </span>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-900">
                      {it.title}
                    </h3>
                    <p className="text-xs text-gray-400">{it.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-500 font-bold">{it.price}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2v20"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6v12"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{it.weight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8 2 4 5.2 4 9c0 6 8 13 8 13s8-7 8-13c0-3.8-4-7-8-7z"
                        stroke="#9CA3AF"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{it.location}</span>
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
