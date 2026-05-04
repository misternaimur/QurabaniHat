/** @format */

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(0, 104, 71, 0.08) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      <section className="relative mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-8">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
            Something&apos;s Missing
          </span>

          <div className="space-y-2">
            <p className="text-7xl font-semibold leading-none text-zinc-300">
              404
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-emerald-950">
              Page Not Found
            </h1>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-700">
            It seems our prize goat has wandered off the path. The page you are
            looking for might have been moved, deleted, or never existed.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/"
              className="rounded-xl bg-emerald-800 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
            >
              Back to Home
            </Link>

            <Link
              href="/all-animals"
              className="rounded-xl border border-emerald-800 px-6 py-3 text-base font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              Browse Animals
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-4 shadow-xl ring-1 ring-zinc-200">
          <div className="relative h-[420px] rounded-3xl bg-gradient-to-b from-stone-100 via-stone-200 to-stone-300 p-6">
            <div className="h-full rounded-2xl border-2 border-amber-600/60 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 p-6">
              <div className="flex h-full flex-col justify-between">
                <div className="rounded-xl bg-amber-400 px-3 py-2 text-right text-sm font-bold text-zinc-900 w-fit ml-auto">
                  Lost?
                </div>

                <div className="space-y-2 text-center">
                  <p className="text-6xl font-black text-emerald-900">404</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
                    Route Not Found
                  </p>
                </div>

                <p className="text-center text-sm text-zinc-700">
                  Try navigating from the home page to continue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
