import { motion } from "framer-motion";
import Image from "next/image";
import Offers from "./offers";

export default function OurDestinations() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <h3 className="font-handwritten text-xl md:text-2xl text-main">
          Sjajne Ture
        </h3>
        <h2 className="font-bold text text-4xl md:text-6xl text-title max-w-xl my-5">
          Nase Aktuelne Ponude
        </h2>
        <Image
          src="/images/orange_arrow.svg"
          width={300}
          height={10}
          alt="Orange Arrow"
        />
      </motion.div>
      ;
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1500px] px-0 md:px-5">
          <div className="py-14">
            <Offers />
          </div>
        </div>
      </div>
    </div>
  );
}
