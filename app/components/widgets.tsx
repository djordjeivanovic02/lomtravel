"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { Travel } from "../interfaces/travel";
import CustomButton from "./button";
import Loader from "./loader";
import SearchInput from "./searchInput";
import VacationOffer from "./vacationOffer";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok)
    toast.error("Greška pri učitavanju putovanja, pokušajte kasnije");
  return res.json();
};

export default function Widgets() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const place = searchParams.get("place") || "";
  const date = searchParams.get("date") || "";
  const initialSearch = searchParams.get("search") || "";

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [maxCount, setMaxCount] = useState<number>(1);
  const [allTravels, setAllTravels] = useState<Travel[]>([]);
  const limit = 1;

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/travel?page=${currentPage}&limit=${limit}&search=${encodeURIComponent(
      searchTerm
    )}&place=${encodeURIComponent(place)}&date=${encodeURIComponent(date)}`,
    fetcher
  );

  useEffect(() => {
    if (data?.data) {
      setAllTravels((prev) =>
        currentPage === 1 ? data.data : [...prev, ...data.data]
      );
      setButtonLoading(false);
    }
    if (data?.totalCount && currentPage === 1) {
      setMaxCount(data.totalCount);
    }
  }, [data, currentPage]);

  const hasMore = allTravels.length < maxCount;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
    setAllTravels([]);

    const newParams = new URLSearchParams();
    if (value) newParams.set("search", value);
    if (place) newParams.set("place", place);
    if (date) newParams.set("date", date);

    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  const loadMore = () => {
    if (hasMore && !isLoading) {
      setButtonLoading(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="w-full mb-14 mt-10">
        <div className="flex justify-center relative w-full">
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {isLoading && currentPage === 1 ? (
          <div className="h-96 relative">
            <Loader />
          </div>
        ) : allTravels.length === 0 ? (
          <p className="text-center w-full text-xl font-bold text-text">
            Nema rezultata
          </p>
        ) : (
          allTravels.map((destination, index) => (
            <VacationOffer
              key={`${destination.title}-${index}`}
              imageUrl={destination.images?.[0] ?? ""}
              location={destination.location}
              title={destination.title}
              duration={destination.duration}
              price={destination.price}
            />
          ))
        )}
      </div>

      <div className="flex justify-center">
        {hasMore && (
          <div onClick={loadMore}>
            <CustomButton
              text="Prikaži još"
              color="main"
              icon="keyboard_arrow_down"
              radius="full"
              padding="pl-6 pr-4"
              loading={buttonLoading}
            />
          </div>
        )}
      </div>
    </>
  );
}
