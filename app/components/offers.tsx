"use client";
import { useRef, useState, useEffect } from "react";
import CustomIcon from "./icon";
import VacattionOffer from "./vacationOffer";
import { motion } from "framer-motion";

export default function Offers() {
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
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // checkScrollPosition();
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
        {Array(5)
          .fill(null)
          .map(
            (_, index) =>
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
                    imageUrl="/images/church.png"
                    location="Kopaonik, Srbija"
                    duration={1}
                    title="Poseti prestonicu kulture jednodnevno putovanje"
                    price={34}
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
