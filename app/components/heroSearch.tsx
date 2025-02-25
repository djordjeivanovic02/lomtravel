"use client";
import Link from "next/link";
import HeroSectionItem from "./heroSearchItem";
import CustomIcon from "./icon";

const destinations = [
  "Kopaonik",
  "Zlatibor",
  "Fruska Gora",
  "Ohrid",
  "Srebrno Jezero",
];

export default function HeroSearch() {
  return (
    <div className="md:px-5 md:py-4 bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] md:w-auto w-full rounded-lg md:rounded-full flex flex-col md:flex-row items-center gap-2 md:gap-5 mt-12">
      <HeroSectionItem
        icon="location_on"
        title="Destinacija"
        desc="Pretrazi destinaciju"
        items={destinations}
      />
      <HeroSectionItem
        icon="calendar_month"
        title="Datum"
        desc="Pretrazi datum"
        items={destinations}
        border={false}
      />

      <Link
        href=""
        className="w-full md:w-auto px-3 py-3 rounded-ee-lg rounded-es-lg md:rounded-full flex items-center justify-center bg-main ml-0 md:ml-8 drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:bg-title duration-300"
      >
        <CustomIcon name="search" size={24} color="white" />
      </Link>
    </div>
  );
}
