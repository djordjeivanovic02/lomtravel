"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Travel } from "../interfaces/travel";
import WideWidget from "./wideWidget";

export default function TopDestinations() {
  const [travels, setTravels] = useState<Travel[]>([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ROOT_URL}api/travel?type=newest`
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
            Dobrodošli na zvanični sajt turističke agencije “L.O.M. TRAVEL”.
            Naša specijalnost su jednodnevna putovanja koja su postala naš
            zaštitni znak i zbog kojih sa ponosom nosimo titulu lidera u ovoj
            oblasti zahvaljujući poverenju naših turista. Od samog planiranja do
            same realizacije izleta, naš tim vredno i posvećeno radi da svaki
            deo vašeg puta bude jednostavan, siguran i pun uživanja. Naša vozila
            su Vaša sigurna luka u svetu putovanja gde su udobnost i bezbednost
            na prvom mestu. Putujte sa nama zato što svaki naš izlet predstavlja
            kap u okeanu nezaboravnih priča.
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
          <Link
            href={`destination/${data.id}`}
            key={index}
            className="w-full lg:w-[24.6%] group lg:hover:w-[35%] transition-all duration-500 mt-7 lg:mt-0"
          >
            <WideWidget
              image={data.images ? data.images![0] : ""}
              title={data.title ?? ""}
              description={""}
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
