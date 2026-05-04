/** @format */

import React from "react";
import Banner from "@/Components/Banner";
import PremiumBreeds from "@/Components/PremiumBreeds";
import FeaturedSelection from "@/Components/FeaturedSelection";
import QurbaniPreparation from "@/Components/QurbaniPreparation";
import Stats from "@/Components/Stats";

const content = ` `;

export default function Home() {
  return (
    <div className="bg-zinc-50">
      <Banner></Banner>
      <Stats></Stats>
      <PremiumBreeds />
      <FeaturedSelection />
      <QurbaniPreparation />
    </div>
  );
}
