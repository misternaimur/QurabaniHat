/** @format */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";

function Spinner({ className = "h-4 w-4" }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

function EditProfileForm({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: user.name || "",
    image: user.image || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
      };

      const image = form.image.trim();
      if (image) {
        payload.image = image;
      }

      const response = await fetch("/api/profile/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Update failed");
      }

      toast.success("Profile updated successfully");
      router.replace("/Profile");
      router.refresh();
    } catch (error) {
      toast.error(error?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-[0_30px_80px_-35px_rgba(15,76,48,0.3)] backdrop-blur">
      <div className="bg-[linear-gradient(135deg,#0f4d30_0%,#114b30_60%,#173d29_100%)] px-6 py-8 text-white sm:px-8">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/75">
          Edit account details
        </p>
        <h2 className="mt-2 text-2xl font-bold">{user.name}</h2>
        <p className="mt-2 break-all text-sm text-emerald-100/80">
          {user.email}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-800"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
            Image URL
          </label>
          <input
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/photo.jpg"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-800"
          />
        </div>

        {form.image.trim() ? (
          <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/70 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Preview
            </p>
            <Image
              src={form.image.trim()}
              alt={form.name || "Profile preview"}
              width={1200}
              height={800}
              unoptimized
              className="h-56 w-full rounded-2xl object-cover"
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-900 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner className="h-4 w-4 text-white" />
                <span>Updating...</span>
              </span>
            ) : (
              "Update Information"
            )}
          </button>

          <Link
            href="/Profile"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
}

export default function EditProfilePage() {
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
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,#f8f9fa_0%,#eef2ec_100%)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center rounded-4xl border border-white/70 bg-white/80 shadow-[0_30px_80px_-35px_rgba(15,76,48,0.28)] backdrop-blur">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-900" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800/70">
              Loading editor
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(16,76,48,0.12),transparent_36%),linear-gradient(180deg,#f8f9fa_0%,#eef2ec_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-800/70">
              My Profile
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
              Update information
            </h1>
          </div>

          <Link
            href="/Profile"
            className="rounded-2xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            Back to profile
          </Link>
        </div>

        <EditProfileForm key={user.id} user={user} />
      </div>

      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </main>
  );
}
