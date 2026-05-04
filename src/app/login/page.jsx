/** @format */

"use client";

import { useEffect, useState } from "react";
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

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const session = authClient.useSession();

  useEffect(() => {
    if (session?.data?.user) {
      router.replace("/Profile");
    }
  }, [router, session]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
        fetchOptions: { throw: false },
      });

      if (error) {
        const message = error.message || "Invalid email or password.";
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      if (data?.session || data?.user) {
        toast.success("Login successful");
        router.push("/Profile");
        return;
      }

      setErrorMessage("Login failed. Please try again.");
      toast.error("Login failed");
    } catch {
      setErrorMessage("An unexpected error occurred.");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/sign-in/oauth2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: "google",
          callbackURL: "/Profile",
          disableRedirect: true,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data?.url) {
        throw new Error(data?.message || "Google login failed");
      }

      window.location.href = data.url;
    } catch (error) {
      toast.error(error?.message || "Google login failed");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f2f3ef] px-4 py-6 md:py-8">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-4xl bg-white shadow-2xl">
          <div className="flex items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md space-y-6">
              <div>
                <p className="text-sm text-gray-500">Welcome Back</p>
                <h1 className="mt-2 text-4xl font-extrabold text-emerald-950">
                  Login
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-600">
                    <span className="material-symbols-outlined text-[18px]">
                      error
                    </span>
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Email Address
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
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Spinner className="h-4 w-4 text-white" />
                      <span>Logging in...</span>
                    </span>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-400">
                <span className="h-px flex-1 bg-gray-200" />
                <span>Or continue with</span>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:border-emerald-300 hover:bg-emerald-50 disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Spinner className="h-4 w-4 text-gray-700" />
                    <span>Continuing...</span>
                  </span>
                ) : (
                  <>
                    <span className="text-lg">G</span>
                    Google
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-amber-600 hover:underline"
                >
                  Register Now
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
