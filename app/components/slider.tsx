"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  images: string[];
  activeIndex: number;
};

export default function Slider({
  isOpen,
  setIsOpen,
  images,
  activeIndex,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        className="absolute top-5 right-5 text-white text-3xl z-50 hover:text-gray-300 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        ✖
      </button>

      <Swiper
        initialSlide={activeIndex}
        navigation={true}
        pagination={{ type: "progressbar" }}
        modules={[Navigation, Pagination]}
        className="w-full max-w-3xl h-[80vh]"
        style={
          {
            "--swiper-pagination-color": "#f38255", // Crvena za progress bar
            "--swiper-navigation-color": "#717171", // Zelena za strelice
            "--swiper-navigation-size": "35px", // Veličina strelica
          } as React.CSSProperties
        }
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={`/images/${img}`}
                alt={`Slika ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                priority={index === activeIndex}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
