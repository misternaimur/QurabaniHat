/** @format */

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const session = authClient.useSession();
  let demoUser = null;
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("qurbani_demo_admin");
      demoUser = stored ? JSON.parse(stored) : null;
    } catch {
      demoUser = null;
    }
  }

  const user = session?.data?.user || demoUser;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  async function handleLogout() {
    try {
      // Clear demo local session first
      if (typeof window !== "undefined") {
        localStorage.removeItem("qurbani_demo_admin");
      }

      // Try server sign out if available
      if (authClient && typeof authClient.signOut === "function") {
        await authClient.signOut?.({ fetchOptions: { throw: false } });
      } else {
        // best-effort fallback endpoint
        try {
          await fetch("/api/auth/sign-out", { method: "POST" });
        } catch {}
      }
    } catch (e) {
      // ignore
    } finally {
      setMenuOpen(false);
      // navigate to home and reload to clear session state
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }
  }
  const initials = user?.name
    ? user.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join("")
    : "U";

  const navClass = (href) =>
    `text-sm transition ${pathname === href ? "text-emerald-900 font-semibold border-b-2 border-amber-400 pb-1" : "text-slate-600 hover:text-emerald-800"}`;

  return (
    <header className="w-full">
      <nav className="mx-auto max-w-300 px-4 md:px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-emerald-900/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-emerald-800 font-medium text-4xl">
            QurbaniHat
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={navClass("/")}>
            Home
          </Link>
          <Link href="/all-animals" className={navClass("/all-animals")}>
            All Animals
          </Link>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Livestock
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-emerald-800">
            Farms
          </a>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-emerald-700 bg-emerald-50 text-sm font-bold text-emerald-900 shadow-sm transition hover:scale-105"
                aria-haspopup="true"
                aria-expanded={menuOpen}
                title={user?.name || "Profile"}
              >
                {user?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.image}
                    alt={user?.name || "Profile"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>{initials}</span>
                )}
              </button>

              {menuOpen && (
                <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border bg-white p-2 shadow-lg">
                  <Link
                    href="/Profile"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded px-3 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                  >
                    My profile
                  </Link>
                  <Link
                    href="/my-profile"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded px-3 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                  >
                    My profile (alias)
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mt-1 w-full rounded px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-slate-600 hover:text-emerald-800"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-emerald-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-emerald-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
