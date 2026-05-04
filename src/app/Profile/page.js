/** @format */

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Profile from "./Profile";

function LoadingState() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f9fa_0%,#eef2ec_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center rounded-4xl border border-white/70 bg-white/80 shadow-[0_30px_80px_-35px_rgba(15,76,48,0.28)] backdrop-blur">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-900" />
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800/70">
            Loading profile
          </p>
        </div>
      </div>
    </main>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const session = authClient.useSession();
  const sessionData = session?.data;
  const user = sessionData?.user;
  const isSessionResolved = sessionData !== undefined;

  useEffect(() => {
    if (isSessionResolved && !user) {
      router.replace("/login");
    }
  }, [isSessionResolved, router, user]);

  if (!isSessionResolved || !user) {
    return <LoadingState />;
  }

  return <Profile user={user} />;
}
