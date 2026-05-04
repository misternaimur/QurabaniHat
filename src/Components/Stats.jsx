/** @format */

import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Happy Buyers",
    },
    {
      number: "200+",
      label: "Trusted Sellers",
    },
    {
      number: "1000+",
      label: "Animals Sold",
    },
    {
      number: "Secure",
      label: "Booking",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-surface-container">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-emerald-900">
                {stat.number}
              </p>
              <p className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
