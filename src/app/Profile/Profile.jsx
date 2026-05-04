/** @format */

import Image from "next/image";
import Link from "next/link";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
}

export default function Profile({ user }) {
  const displayName = user?.name || "Your Profile";
  const displayEmail = user?.email || "No email available";
  const displayImage = user?.image?.trim();
  const initials = getInitials(displayName) || "U";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,76,48,0.12),_transparent_36%),linear-gradient(180deg,_#f8f9fa_0%,_#eef2ec_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800/70">
              My Profile
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
              Account overview
            </h1>
          </div>
          <Link
            href="/Profile/edit"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-800"
          >
            Update Information
          </Link>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 shadow-[0_30px_80px_-35px_rgba(15,76,48,0.35)] backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative bg-[linear-gradient(135deg,_#0f4d30_0%,_#114b30_60%,_#173d29_100%)] p-6 text-white sm:p-8">
              <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.7)_1px,_transparent_0)] [background-size:20px_20px]" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-white/10 shadow-2xl shadow-black/20 ring-4 ring-white/10">
                  {displayImage ? (
                    <Image
                      src={displayImage}
                      alt={displayName}
                      width={224}
                      height={224}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl font-black tracking-wider text-white">
                      {initials}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/80">
                      Signed in as
                    </p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                      {displayName}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-100/85">
                    <span className="material-symbols-outlined text-[18px]">
                      mail
                    </span>
                    <span className="break-all">{displayEmail}</span>
                  </div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-50">
                    Active account
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
                  Name
                </p>
                <p className="mt-3 break-words text-xl font-bold text-emerald-950">
                  {displayName}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <p className="mt-3 break-all text-lg font-semibold text-slate-900">
                  {displayEmail}
                </p>
              </div>

              <div className="rounded-3xl border border-amber-100 bg-amber-50/70 p-5 sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
                  Photo
                </p>
                <p className="mt-3 text-sm leading-6 text-amber-950/80">
                  {displayImage
                    ? "Your profile photo is linked to the image URL stored in your account."
                    : "No profile image has been set yet. Use Update Information to add one."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
