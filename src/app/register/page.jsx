/** @format */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

export default function RegisterPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [session, setSession] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    import("@/lib/auth-client").then(({ authClient }) => {
      const unsub = authClient.useSession();
      if (unsub?.data?.user) {
        router.replace("/");
      }
    });
  }, [router]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const { authClient } = await import("@/lib/auth-client");
      const { data, error } = await authClient.signUp.email({
        email: form.email,
        password: form.password,
        name: form.name,
        image: form.image || undefined,
        fetchOptions: { throw: false },
      });

      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      if (data?.user) {
        toast.success("Registration successful. Please login.");
        router.push("/login");
      }
    } catch {
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleRegister() {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/sign-in/oauth2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: "google",
          callbackURL: "/",
          requestSignUp: true,
          disableRedirect: true,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data?.url) {
        throw new Error(data?.message || "Google registration failed");
      }

      window.location.href = data.url;
    } catch (error) {
      toast.error(error.message || "Google registration failed");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f2f3ef] px-4 py-6 md:py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden rounded-4xl bg-white shadow-2xl lg:grid-cols-2">
          <div className="hidden lg:flex flex-col justify-between rounded-3xl bg-linear-to-b from-emerald-900 to-emerald-800 p-8 text-white relative overflow-hidden min-h-96">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%)]" />
            <div className="relative z-10 space-y-5">
              <span className="inline-flex rounded-full bg-amber-400/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                Premium Livestock
              </span>
              <h2 className="max-w-md text-5xl font-extrabold leading-tight">
                Start Your Journey.
              </h2>
              <p className="max-w-md text-sm leading-7 text-emerald-50/80">
                Create your account to book premium animals with confidence and
                keep your tradition organized.
              </p>
            </div>

            <div className="relative z-10 mt-auto rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
              <div className="rounded-2xl bg-white/90 p-2">
                <img
                  src="https://images.pexels.com/photos/144240/goat-lamb-animal-nature-144240.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Livestock"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md space-y-6">
              <div>
                <p className="text-sm text-gray-500">Create Account</p>
                <h1 className="mt-2 text-4xl font-extrabold text-emerald-950">
                  Register
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
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
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-800"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Photo URL (link)
                  </label>
                  <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-800"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-800"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-emerald-900 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-800 disabled:opacity-60"
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>

              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-400">
                <span className="h-px flex-1 bg-gray-200" />
                <span>Or continue with</span>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <button
                onClick={handleGoogleRegister}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:border-emerald-300 hover:bg-emerald-50 disabled:opacity-60"
              >
                <span className="text-lg">G</span>
                Google
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-amber-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </main>
  );
}
