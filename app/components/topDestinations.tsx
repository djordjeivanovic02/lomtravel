"use client";
import Image from "next/image";
import WideWidget from "./wideWidget";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Travel } from "../interfaces/travel";

export default function TopDestinations() {
  const [travels, setTravels] = useState<Travel[]>([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ROOT_URL}api/travel`
        );
        if (!res.ok) {
          throw new Error("Došlo je do greške!");
        }
        const data = await res.json();
        setTravels(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchedData();
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/half_circle_right.svg"
          alt="Half Circle"
          width={223}
          height={334}
          className="absolute -top-40 right-0 z-10"
        />
      </motion.div>
      <div className="container relative z-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-handwritten text-xl md:text-2xl text-main">
              Top Destinacije
            </h3>
            <h2 className="font-bold text text-4xl md:text-6xl text-title max-w-xl my-5">
              Neke Od Nasih Najnovijih{" "}
              <span className="font-light">Destinacija</span>
            </h2>
            <Image
              src="/images/orange_arrow.svg"
              width={300}
              height={10}
              alt="Orange Arrow"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="font-roboto text-sm md:text-base max-w-xl text-lightText mt-5 lg:mt-0"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col lg:flex-row mt-16 lg:mt-20 justify-between relative z-20 overflow-hidden"
      >
        {travels.map((data, index) => (
          <div
            key={index}
            className="w-full lg:w-[24.6%] group lg:hover:w-[35%] transition-all duration-500 mt-7 lg:mt-0"
          >
            <WideWidget
              image={data.images ? data.images![0] : ""}
              title={data.title ?? ""}
              description={""}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
