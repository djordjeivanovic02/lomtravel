"use client";
import { useRef, useState, useEffect } from "react";
import CustomIcon from "./customicon";
import VacattionOffer from "./vacationOffer";
import { motion } from "framer-motion";
import { Travel } from "../interfaces/travel";

export default function Offers() {
  const [travels, setTravels] = useState<Travel[]>([]);

  useEffect(() => {
    const fetchedData = async () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        checkScrollPosition();
        scrollContainer.addEventListener("scroll", checkScrollPosition);
      }
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel?type=popular`
        );
        if (!res.ok) {
          throw new Error(
            "Doslo je do greske prilikom pribavljanja aktuelnih destinacija"
          );
        }
        const data = await res.json();
        setTravels(data);
      } catch (error) {
        console.log(error);
      }
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener("scroll", checkScrollPosition);
        }
      };
    };
    fetchedData();
  }, [travels]);


  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [sliderInView, setSliderInView] = useState(false);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
  }, []);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() => setSliderInView(true)}
      className="relative w-full flex items-center"
    >
      <div
        className={`rounded-full p-2 mr-4 border-2 items-center justify-center hover:bg-[#ddd] cursor-pointer bg-white hidden lg:flex duration-300 ${
          !showLeftButton ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={handleScrollLeft}
      >
        <CustomIcon name="arrow_left_alt" size={24} color="black" />
      </div>
      <div
        className="flex overflow-x-auto space-x-8 hide-scrollbar px-5 md:px-0"
        ref={scrollContainerRef}
      >
        {travels.map(
          (travel, index) =>
            sliderInView && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-shrink-0"
              >
                <VacattionOffer
                  id={travel.id ?? -1}
                  imageUrl={
                    travel.images && travel.images[0] ? travel.images[0] : ""
                  }
                  location={travel.location}
                  duration={travel.duration}
                  title={travel.title}
                  price={travel.price}
                />
              </motion.div>
            )
        )}
      </div>
      <div
        className={`p-2 rounded-full border-2 ml-4 items-center justify-center hover:bg-[#ddd] hidden cursor-pointer bg-white lg:flex duration-300 ${
          !showRightButton ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={handleScrollRight}
      >
        <CustomIcon name="arrow_right_alt" size={24} color="black" />
      </div>
    </motion.div>
  );
}
