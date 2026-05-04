/** @format */

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

function LoadingState() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800/70">
          Loading details
        </p>
      </div>
    </main>
  );
}

export default function DetailsPage() {
  const router = useRouter();
  const session = authClient.useSession();
  const sessionData = session?.data;
  const user = sessionData?.user;
  const isSessionResolved = sessionData !== undefined;

  useEffect(() => {
    if (isSessionResolved && !user) {
      router.replace("/register");
    }
  }, [isSessionResolved, router, user]);

  if (!isSessionResolved || !user) {
    return <LoadingState />;
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(16,76,48,0.12),transparent_36%),linear-gradient(180deg,#f8f9fa_0%,#eef2ec_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-4xl border border-white/60 bg-white/90 p-6 shadow-[0_30px_80px_-35px_rgba(15,76,48,0.35)] backdrop-blur sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800/70">
          Private Area
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
          Details Page
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          This page is private. If you are logged in, you can see this content.
          If you are not logged in, you will be redirected to the registration
          page.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Signed in user
            </p>
            <p className="mt-3 text-lg font-semibold text-emerald-950">
              {user?.name || "Unknown user"}
            </p>
            <p className="mt-1 break-all text-sm text-emerald-900/75">
              {user?.email || "No email available"}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
              Access
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              Private client page
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Only authenticated users can stay here.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Back to Home
          </Link>
          <Link
            href="/Profile"
            className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            My Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
