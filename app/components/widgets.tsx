"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Travel } from "../interfaces/travel";
import CustomButton from "./button";
import Loader from "./loader";
import SearchInput from "./searchInput";
import VacationOffer from "./vacationOffer";

export default function Widgets() {
  const searchParams = useSearchParams();
  const place = searchParams.get("place") || "";
  const date = searchParams.get("date") || "";
  console.log(place);

  const [travels, setTravels] = useState<Travel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxCount, setMaxCount] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const limit = 2;

  const fetchTravels = async (
    page: number,
    search: string,
    place: string,
    date: string
  ) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/travel?page=${page}&limit=${limit}&search=${encodeURIComponent(
          search
        )}&place=${encodeURIComponent(place)}&date=${encodeURIComponent(date)}`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const { data, totalCount } = await res.json();

      if (page === 1) {
        setTravels(data);
        setCurrentPage(1);
        setMaxCount(totalCount);

        if (limit >= totalCount) {
          setHasMore(false);
        }
      } else {
        setTravels((prev) => [...prev, ...data]);

        setHasMore(travels.length + data.length < maxCount);
      }
    } catch (error) {
      toast.error(`Error loading data: ${error}`);
    } finally {
      setLoading(false);
      setButtonLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchTravels(1, searchTerm, place, date);
  }, [searchTerm]);

  const handleSearch = (value: string) => {
    setHasMore(true);
    setSearchTerm(value);
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setButtonLoading(true);
      fetchTravels(currentPage + 1, searchTerm, place, date);
      setCurrentPage(currentPage + 1);
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
        {loading ? (
          <div className="h-96 relative">
            <Loader />
          </div>
        ) : (
          <>
            {travels.length === 0 ? (
              <p className="text-center w-full text-xl font-bold text-text">
                Nema rezultata
              </p>
            ) : (
              travels.map((destination, index) => (
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
          </>
        )}
      </div>

      <div className="flex justify-center">
        {hasMore && (
          <div onClick={loadMore}>
            <CustomButton
              text="Prikazi jos"
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
