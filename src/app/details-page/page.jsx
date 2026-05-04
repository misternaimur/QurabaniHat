/** @format */

import React from "react";
import Link from "next/link";

export default function DetailsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl rounded-2xl border bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-emerald-900">Details Page</h1>
        <p className="mt-4 text-sm text-gray-600">
          This is a placeholder for a private details page. Replace with your
          protected view.
        </p>
        <div className="mt-6">
          <Link href="/" className="text-emerald-700 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
