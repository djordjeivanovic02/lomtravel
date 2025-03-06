"use client";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./button";
import Slider from "./slider";

type Props = {
  images: string[];
};

export default function DestinationImages({ images }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openSlider = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row h-[570px] gap-2">
        <div className="w-full md:w-3/5 h-3/5 md:h-full relative">
          <div className="absolute text-center top-5 left-5 bg-white rounded-lg py-2 px-4 z-10">
            <p className="text-2xl font-bold">24</p>
            <p className="font-roboto text-lightText">JAN</p>
          </div>
          <div className="w-full h-full relative overflow-hidden rounded-2xl md:rounded-r-none md:rounded-bl-xl">
            <Image
              src={images[0] ?? ''}
              alt="Glavna slika"
              fill
              priority
              className="object-cover"
              onClick={() => openSlider(0)}
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 h-2/5 md:h-full flex md:flex-col gap-2">
          <div className="relative w-1/2 md:w-full md:h-1/2 overflow-hidden rounded-tl-xl rounded-bl-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl">
            <Image
              src={images[1] ?? ''}
              alt="Slika 2"
              fill
              className="object-cover"
              onClick={() => openSlider(1)}
            />
          </div>

          <div className="w-1/2 md:w-auto h-full md:h-1/2 flex gap-2">
            <div className="relative w-full md:w-1/2 overflow-hidden">
              <Image
                src={images[2] ?? ''}
                alt="Slika 3"
                fill
                className="md:rounded-none rounded-br-xl rounded-tr-xl object-cover"
                onClick={() => openSlider(2)}
              />
            </div>
            <div className="hidden md:block relative w-1/2 overflow-hidden rounded-br-xl">
              <Image
                src={images[3] ?? ''}
                alt="Slika 4"
                fill
                className="object-cover"
                onClick={() => openSlider(3)}
              />
              <div
                className="absolute bottom-4 right-4 w-[80%]"
                onClick={() => setIsOpen(true)}
              >
                <CustomButton
                  text="Pogledaj sve slike"
                  color="title"
                  radius="full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={images}
        activeIndex={activeIndex}
      />
    </>
  );
}
