"use client";
import CustomButton from "./button";
import HeroSectionItem from "./heroSearchItem";

export default function DestinationForm() {
  const destinations = [
    "Kopaonik",
    "Zlatibor",
    "Fruska Gora",
    "Ohrid",
    "Srebrno Jezero",
  ];

  return (
    <div className="md:w-72 w-full flex flex-col gap-3 text-roboto p-4 shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-xl">
      <p>
        Cena od <span className="font-bold">€34</span>
      </p>
      <div>
        <HeroSectionItem
          icon="location_on"
          title="Destinacija"
          desc="Pretrazi destinaciju"
          items={destinations}
        />
      </div>
      <div>
        <HeroSectionItem
          icon="calendar_month"
          title="Datum"
          desc="Pretrazi datum"
          items={destinations}
          border={false}
        />
      </div>
      <div className="flex justify-between items-center text-text py-4 border-b border-border">
        <p>Broj putnika</p>
        <div className="flex gap-2">
          <button className=" border border-border rounded-full px-2">-</button>
          <span className="font-bold">1</span>
          <button className=" border border-border rounded-full px-2">+</button>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Ukupno</p>
        <span className="font-bold">€104</span>
      </div>
      <CustomButton text="Rezervisi sada" icon="call_made" radius="lg" />
    </div>
  );
}
