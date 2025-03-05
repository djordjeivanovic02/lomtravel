"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWRInfinite from "swr/infinite";
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

  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const limit = 1;

  const getKey = (
    pageIndex: number,
    previousPageData: { data: Travel[]; totalCount: number }
  ) => {
    if (previousPageData && !previousPageData.data.length) return null;
    return `${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel?page=${
      pageIndex + 1
    }&limit=${limit}&search=${encodeURIComponent(
      searchTerm
    )}&place=${encodeURIComponent(place)}&date=${encodeURIComponent(date)}`;
  };

  const { data, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher);

  const allTravels = data ? data.flatMap((page) => page.data) : [];
  const maxCount = data?.[0]?.totalCount || 0;
  const hasMore = allTravels.length < maxCount;

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    const newParams = new URLSearchParams();
    if (value) newParams.set("search", value);
    if (place) newParams.set("place", place);
    if (date) newParams.set("date", date);

    router.replace(`?${newParams.toString()}`, { scroll: false });

    setSize(1);
  };

  useEffect(() => {
    if (data) {
      setButtonLoading(false);
    }
  }, [data]);

  const loadMore = () => {
    setButtonLoading(true);
    if (hasMore && !isLoading) {
      setSize(size + 1);
    }
  };

  return (
    <>
      <div className="w-full mb-14 mt-10">
        <div className="flex justify-center relative w-full">
          <SearchInput onSearch={handleSearch} defaultValue={initialSearch} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {isLoading && size === 1 ? (
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
              id={destination.id}
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
