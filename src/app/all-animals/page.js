/** @format */

import Image from "next/image";
import CowImg from "@/asset/Premium-img-01.png";
import BrahmanImg from "@/asset/Premium-img-02.png";
import GoatImg from "@/asset/Premium-img-03.png";

const animals = [
  {
    id: 1,
    name: "Royal Brahman Bull",
    breed: "Pure Breed Brahman",
    weight: "520 kg",
    age: "3.5 Years",
    location: "Dhaka, Bangladesh",
    price: "৳320,000",
    image: BrahmanImg,
  },
  {
    id: 2,
    name: "Sultan Jamunapari",
    breed: "Jamunapari Goat",
    weight: "65 kg",
    age: "1.8 Years",
    location: "Sylhet, Bangladesh",
    price: "৳45,000",
    image: GoatImg,
  },
  {
    id: 3,
    name: "Imperial Sahiwal",
    breed: "Deshi Sahiwal",
    weight: "480 kg",
    age: "3 Years",
    location: "Rajshahi, Bangladesh",
    price: "৳280,000",
    image: CowImg,
  },
  {
    id: 4,
    name: "Premium Merino",
    breed: "Australian Merino",
    weight: "45 kg",
    age: "1.5 Years",
    location: "Chittagong, Bangladesh",
    price: "৳35,000",
    image: CowImg,
  },
  {
    id: 5,
    name: "Holstein Hybrid",
    breed: "Dairy/Meat Cross",
    weight: "380 kg",
    age: "2.2 Years",
    location: "Bogura, Bangladesh",
    price: "৳190,000",
    image: BrahmanImg,
  },
  {
    id: 6,
    name: "Elite Dorset",
    breed: "Pure Breed Dorset",
    weight: "55 kg",
    age: "2 Years",
    location: "Comilla, Bangladesh",
    price: "৳42,000",
    image: GoatImg,
  },
];

function AnimalCard({ animal }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="relative h-40">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-semibold text-emerald-950">
          ⊙ CERTIFIED
        </span>
      </div>

      <div className="p-4 space-y-2.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl leading-7 text-emerald-950 font-medium max-w-[70%]">
            {animal.name}
          </h3>
          <p className="text-2xl font-bold text-amber-700 whitespace-nowrap">
            {animal.price}
          </p>
        </div>

        <p className="text-xs text-gray-500">{animal.breed}</p>

        <div className="flex items-center gap-5 text-[11px] text-gray-500">
          <span>△ {animal.weight}</span>
          <span>◷ {animal.age}</span>
        </div>

        <p className="text-[11px] text-gray-500">⌖ {animal.location}</p>

        <button className="mt-3 w-full rounded-xl border border-amber-700 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition">
          Details →
        </button>
      </div>
    </article>
  );
}

export default function AllAnimalsPage() {
  return (
    <main
      className="bg-zinc-100 min-h-screen pb-14"
      style={{
        backgroundImage:
          "linear-gradient(#e6e7e9 1px, transparent 1px), linear-gradient(90deg, #e6e7e9 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <section className="mx-auto max-w-[1200px] px-4 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5">
        <aside className="rounded-2xl border border-gray-200 bg-white/95 p-4 h-max">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-emerald-950">Filters</h2>
            <span className="text-gray-500">☰</span>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 mb-3">
                CATEGORIES
              </h3>
              <div className="space-y-2 text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Cows
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Goats
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Sheep
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 mb-3">
                PRICE RANGE
              </h3>
              <input
                type="range"
                className="w-full accent-amber-600"
                defaultValue={45}
              />
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>৳10k</span>
                <span>৳500k</span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                WEIGHT (KG)
              </h3>
              <select className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-600 bg-white">
                <option>All Weights</option>
              </select>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                BREED
              </h3>
              <select className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-600 bg-white">
                <option>Any Breed</option>
              </select>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                LOCATION
              </h3>
              <input
                type="text"
                placeholder="Search city..."
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-600"
              />
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:max-w-md rounded-2xl border border-gray-200 bg-white px-4 py-2 text-gray-500">
              Search for premium bulls, goats...
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-400 font-semibold">SORT BY:</span>
              <select className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700">
                <option>Price Low to High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm">
            <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-400">
              ‹
            </button>
            <button className="h-8 w-8 rounded-full bg-emerald-950 text-white">
              1
            </button>
            <button className="h-8 w-8 rounded-full border border-gray-300">
              2
            </button>
            <button className="h-8 w-8 rounded-full border border-gray-300">
              3
            </button>
            <button className="h-8 w-8 rounded-full border border-gray-300">
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
