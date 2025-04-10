"use client";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./button";
import Slider from "./slider";
import { motion } from "framer-motion";

type Props = {
  images: string[];
  date: string;
};

export default function DestinationImages({ images, date }: Props) {
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-full relative overflow-hidden rounded-2xl md:rounded-r-none md:rounded-bl-xl"
          >
            <div className="absolute text-center top-5 left-5 bg-white rounded-lg py-2 px-4 z-10">
              <p className="text-2xl font-bold text-up">{ date.split(' ')[0] }</p>
              <p className="font-roboto text-lightText uppercase">{ date.split(' ')[1] }</p>
            </div>
            {images[0] && (
              <Image
                src={images[0] ?? null}
                alt="Glavna slika"
                fill
                priority
                className="object-cover"
                onClick={() => openSlider(0)}
              />
            )}
          </motion.div>
        </div>

        <div className="w-full md:w-2/5 h-2/5 md:h-full flex md:flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="relative w-1/2 md:w-full md:h-1/2 overflow-hidden rounded-tl-xl rounded-bl-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl"
          >
            {images[1] && (
              <Image
                src={images[1] ?? null}
                alt="Slika 2"
                fill
                className="object-cover"
                onClick={() => openSlider(1)}
              />
            )}
          </motion.div>

          <div className="w-1/2 md:w-auto h-full md:h-1/2 flex gap-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative w-full md:w-1/2 overflow-hidden"
            >
              {images[2] && (
                <Image
                  src={images[2] ?? null}
                  alt="Slika 3"
                  fill
                  className="md:rounded-none rounded-br-xl rounded-tr-xl object-cover"
                  onClick={() => openSlider(2)}
                />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="hidden md:block relative w-1/2 overflow-hidden rounded-br-xl"
            >
              {images[3] && (
                <Image
                  src={images[3] ?? null}
                  alt="Slika 4"
                  fill
                  className="object-cover"
                  onClick={() => openSlider(3)}
                />
              )}
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
            </motion.div>
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
