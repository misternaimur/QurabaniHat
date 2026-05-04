/** @format */

import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import AnimalDetailsPage from "@/Components/AnimalDetailsPage";

async function getAnimal(id) {
  const filePath = path.join(process.cwd(), "public", "Animal.json");
  const file = await fs.readFile(filePath, "utf8");
  const animals = JSON.parse(file);
  return animals.find((animal) => String(animal.id) === String(id)) || null;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "Animal.json");
  const file = await fs.readFile(filePath, "utf8");
  const animals = JSON.parse(file);

  return animals.map((animal) => ({
    id: String(animal.id),
  }));
}

export default async function AnimalDetailsRoute({ params }) {
  const { id } = await params;
  const animal = await getAnimal(id);

  if (!animal) {
    notFound();
  }

  return <AnimalDetailsPage animal={animal} />;
}
