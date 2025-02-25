"use client";
import { useRef, useState, useEffect } from "react";
import CustomIcon from "./icon";
import VacattionOffer from "./vacationOffer";

export default function Offers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScrollPosition();
      scrollContainer.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
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
    <div className="relative w-full flex items-center">
      <div
        className={`rounded-full p-2 mr-4 border-2 items-center justify-center hover:bg-[#ddd] cursor-pointer bg-white hidden lg:flex duration-300 ${
          !showLeftButton ? "opacity-0 pointer-events-none" : ""
        }`}
        onClick={handleScrollLeft}
      >
        <CustomIcon name="arrow_left_alt" size={24} color="black" />
      </div>
      <div
        className="flex overflow-x-auto space-x-8 hide-scrollbar px-5 md:px-0"
        ref={scrollContainerRef}
      >
        <VacattionOffer
          imageUrl="/images/church.png"
          location="Kopaonik, Srbija"
          duration="1 dan"
          title="Poseti prestonicu kulture jednodnevno putovanje"
          price={34}
        />
        <VacattionOffer
          imageUrl="/images/church.png"
          location="Kopaonik, Srbija"
          duration="1 dan"
          title="Poseti prestonicu kulture jednodnevno putovanje"
          price={34}
        />
        <VacattionOffer
          imageUrl="/images/church.png"
          location="Kopaonik, Srbija"
          duration="1 dan"
          title="Poseti prestonicu kulture jednodnevno putovanje"
          price={34}
        />
        <VacattionOffer
          imageUrl="/images/church.png"
          location="Kopaonik, Srbija"
          duration="1 dan"
          title="Poseti prestonicu kulture jednodnevno putovanje"
          price={34}
        />
        <VacattionOffer
          imageUrl="/images/church.png"
          location="Kopaonik, Srbija"
          duration="1 dan"
          title="Poseti prestonicu kulture jednodnevno putovanje"
          price={34}
        />
      </div>
      <div
        className={`p-2 rounded-full border-2 ml-4 items-center justify-center hover:bg-[#ddd] cursor-pointer bg-white hidden lg:flex duration-300 ${
          !showRightButton ? "opacity-0 pointer-events-none" : ""
        }`}
        onClick={handleScrollRight}
      >
        <CustomIcon name="arrow_right_alt" size={24} color="black" />
      </div>
    </div>
  );
}
