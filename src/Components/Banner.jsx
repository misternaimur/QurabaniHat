/** @format */

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-emerald-900 to-emerald-800 py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-700/40 border border-emerald-600/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              <span className="text-xs font-semibold text-emerald-100 uppercase tracking-widest">
                Shariah Compliant Marketplace
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Find Your <span className="text-amber-300">Perfect</span>{" "}
                Qurbani Animal
              </h1>
              <p className="text-lg text-emerald-100/80 leading-relaxed max-w-md">
                Trusted livestock booking for your sacred tradition. We bridge
                the gap between traditional farms and modern families with
                verified health checks and seamless logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-amber-300 text-emerald-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-400 transition-colors">
                Browse Animals
              </button>
              <button className="bg-emerald-700/50 border border-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600/50 transition-colors backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
              <Image
                src="/Banner-image.jpg"
                alt="Livestock farming - Qurbani animals"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-2.5 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl border border-emerald-50 animate-float animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center">
                  <span className="text-xl">★</span>
                </div>
                <div>
                  <p className="font-bold text-emerald-900 text-sm">
                    Certified Farms Only
                  </p>
                  <p className="text-xs text-emerald-700">
                    100% Health Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
