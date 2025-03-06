"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeroSectionItem from "./heroSearchItem";
import CustomIcon from "./customicon";

const fetchLocationsAndDates = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ROOT_URL}api/travel?type=locations`
  );
  console.log(response);

  if (!response.ok) throw new Error("Failed to fetch locations");
  return response.json();
};


export default function HeroSearch() {
  const [locations, setLocations] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [locationsAndDates, setLocationsAndDates] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    fetchLocationsAndDates()
      .then((data) => {
        setLocations(Object.keys(data));
        setLocationsAndDates(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setDates(locationsAndDates[location] || []);
    setSelectedDate("");
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const formattedDate = new Intl.DateTimeFormat("sr-Latn-RS", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="md:px-5 md:py-4 bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] md:w-auto w-full rounded-lg md:rounded-full flex flex-col md:flex-row items-center gap-2 md:gap-5 mt-12">
      <HeroSectionItem
        icon="location_on"
        title="Destinacija"
        desc={selectedLocation || "Pretrazi destinaciju"}
        items={locations}
        action={handleLocationSelect}
      />
      <HeroSectionItem
        icon="calendar_month"
        title="Datum"
        desc={selectedDate ? formattedDate.format(new Date(selectedDate)) : "Izaberi datum"}
        items={dates}
        border={false}
        action={handleDateSelect}
      />
      <Link
        href={
          selectedLocation && selectedDate
            ? `/destinations?place=${selectedLocation}&date=${selectedDate}`
            : `#`
        }
        className="w-full md:w-auto px-3 py-3 rounded-ee-lg rounded-es-lg md:rounded-full flex items-center justify-center bg-main ml-0 md:ml-8 drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:bg-title duration-300"
      >
        <CustomIcon name="search" size={24} color="white" />
      </Link>
    </div>
  );
}
