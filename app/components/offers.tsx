"use client"
import { useRef } from "react";
import CustomIcon from "./icon";
import VacattionOffer from "./vacationOffer";

export default function Offers() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScrollRight = () => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({left:250, behavior: "smooth"});
        }
    }
    const handleScrollLeft = () => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({left:-250, behavior: "smooth"});
        }
    }
  return (
    <div className="relative w-full flex items-center">
      <div className="rounded-full p-2 mr-4 border-2  items-center justify-center hover:bg-[#ddd] cursor-pointer bg-white hidden lg:flex" onClick={handleScrollLeft}>
        <CustomIcon name="arrow_left_alt" size={24} color="black" />
      </div>
      <div className="flex overflow-x-auto space-x-8 hide-scrollbar" ref={scrollContainerRef}>
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
      <div className="p-2 rounded-full border-2 ml-4 items-center justify-center hover:bg-[#ddd] cursor-pointer bg-white hidden lg:flex" onClick={handleScrollRight}>
        <CustomIcon name="arrow_right_alt" size={24} color="black" />
      </div>
    </div>
  );
}
