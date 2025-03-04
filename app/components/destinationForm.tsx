"use client";
import { useEffect, useState } from "react";
import CustomButton from "./button";
import HeroSectionItem from "./heroSearchItem";
import { Departure } from "../interfaces/departure";

type Props = {
  price: number;
  departures: Departure[];
  maxReservations: number;
};

type SelectedCity = {
  time: string;
  price: number;
};

export default function DestinationForm({
  price,
  departures,
  maxReservations,
}: Props) {
  const [city, setCity] = useState<string>("");
  const [time, setTime] = useState<SelectedCity>({ time: "", price: 0 });
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(price);

  useEffect(() => {
    setTotal(price * counter + (time?.price ?? 0));
  }, [counter, time]);

  const handleCity = (value: string) => {
    setCity(value);
  };

  const handleTime = (value: string) => {
    const newVal = value.replace(/\s*\(.*?\)/, "");
    setTime({
      time: value,
      price: departures.filter((element) => element.time === newVal)[0]?.price,
    });
  };

  const handleCounter = (value: number) => {
    setCounter((prev) =>
      prev + value > maxReservations
        ? maxReservations
        : prev + value < 1
        ? 1
        : prev + value
    );
  };

  return (
    <div className="md:w-72 w-full flex flex-col gap-3 text-roboto p-4 shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-xl">
      <p>
        Cena od <span className="font-bold text-xl">€{price}</span>
      </p>
      <div>
        <HeroSectionItem
          icon="location_on"
          title="Mesto polaska"
          desc={city !== "" ? city : "Izaberi mesto polaska"}
          items={departures.map((element) => element.city)}
          action={handleCity}
        />
      </div>
      <div>
        <HeroSectionItem
          icon="calendar_month"
          title="Vreme polaska"
          desc={time?.time !== "" ? time!.time : "Izaberi vreme polaska"}
          items={departures
            .filter((element) => element.city === city)
            .map(
              (element) =>
                element.time +
                (element.price ? " (+" + element.price + "€)" : "")
            )}
          border={false}
          action={handleTime}
        />
      </div>
      <div className="flex justify-between items-center text-text py-4 border-b border-border">
        <p>Broj putnika</p>
        <div className="flex gap-2">
          <button
            className=" border border-border rounded-full px-2 hover:bg-border duration-300"
            onClick={() => handleCounter(-1)}
          >
            -
          </button>
          <span className="font-bold w-3 text-center">{counter}</span>
          <button
            className=" border border-border rounded-full px-2 hover:bg-border duration-300"
            onClick={() => handleCounter(1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Ukupno</p>
        <span className="font-bold">{total}€</span>
      </div>
      <CustomButton text="Rezervisi sada" icon="call_made" radius="lg" />
    </div>
  );
}
