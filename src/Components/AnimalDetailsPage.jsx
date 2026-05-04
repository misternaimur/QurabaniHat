/** @format */

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function formatPrice(price) {
  const num = Number(price || 0);
  return `৳${num.toLocaleString("en-IN")}`;
}

export default function AnimalDetailsPage({ animal }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const specs = useMemo(
    () => [
      { label: "Breed", value: animal.breed },
      { label: "Age", value: `${animal.age} Years` },
      { label: "Weight", value: `${animal.weight} KG` },
      { label: "Location", value: animal.location },
    ],
    [animal],
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    toast.success("Booking request submitted successfully.");
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />

      <main className="bg-zinc-100 min-h-screen pb-14">
        <section className="mx-auto max-w-7xl px-4 py-6 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[28px] bg-white shadow-lg border border-gray-200">
                <div className="relative aspect-4/3 bg-emerald-950">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-md">
                    ⊙ CERTIFIED PREMIUM
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 p-4 md:p-5 bg-white">
                  <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-zinc-900">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      width={180}
                      height={140}
                      className="h-24 w-full object-cover opacity-90"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-amber-100">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      width={180}
                      height={140}
                      className="h-24 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-stone-900">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      width={180}
                      height={140}
                      className="h-24 w-full object-cover opacity-85"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-2xl border border-emerald-100 bg-zinc-100 text-emerald-900 font-semibold">
                    +5
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] bg-white p-6 shadow-sm border border-gray-200">
                <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">
                  {animal.name}
                </h1>
                <p className="mt-2 text-sm text-gray-500">{animal.location}</p>

                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-2xl border border-gray-100 bg-zinc-50 p-4 text-center"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                        {spec.label}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-emerald-950">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-emerald-950">
                    Description
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {animal.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-gray-700">
                    <li>• 100% health verified animal</li>
                    <li>• Suitable for Qurbani booking</li>
                    <li>• Home delivery available after confirmation</li>
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-6">
              <div className="rounded-[28px] bg-white p-6 shadow-lg border border-gray-200 relative overflow-hidden">
                <div className="absolute -right-2 -top-2 text-[140px] leading-none text-emerald-50 select-none pointer-events-none">
                  ★
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Reservation Price
                  </p>
                  <div className="mt-2 flex items-end gap-3">
                    <div className="text-4xl font-bold text-emerald-950">
                      {formatPrice(animal.price)}
                    </div>
                    <div className="pb-1 text-sm text-gray-400 line-through">
                      {formatPrice(Math.round(Number(animal.price || 0) * 1.1))}
                    </div>
                  </div>
                  <div className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                    Save 10% today
                  </div>

                  <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-5">
                    <div className="mb-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
                      Login required to book this animal.
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Full Name
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Abdullah Al Mamun"
                          className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-emerald-700"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="mail@example.com"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-emerald-700"
                            required
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                            Phone
                          </label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+880"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-emerald-700"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Delivery Address
                        </label>
                        <textarea
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          placeholder="Enter your full street address for delivery"
                          rows={4}
                          className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-emerald-700"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-2xl bg-emerald-900 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-emerald-800"
                      >
                        Book Now →
                      </button>
                    </form>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-semibold text-gray-600">
                    <div className="rounded-2xl bg-emerald-50 px-4 py-3">
                      Free Delivery
                    </div>
                    <div className="rounded-2xl bg-emerald-50 px-4 py-3">
                      Secure Payment
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] bg-emerald-900 p-5 text-white shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/80">
                      View Farm on Map
                    </p>
                    <p className="mt-1 text-sm text-emerald-100">
                      {animal.location}, Bangladesh
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/15 px-4 py-3 text-sm font-semibold backdrop-blur">
                    Map
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
