"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCoutner from "./animatedCounter";

export default function AboutUs() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/dots.svg"
          alt="Gradient Dots"
          width={223}
          height={334}
          className="hidden lg:block absolute -top-40 right-0 z-10"
        />
      </motion.div>
      <div className="container flex flex-col-reverse lg:flex-row items-start lg:items-end justify-center gap-14">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="w-full h-[250px]  md:h-[400px] lg:h-[250px] lg:max-w-xl relative"
        >
          <Image
            src="/images/img5.png"
            alt="Lake"
            fill={true}
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-handwritten text-xl md:text-2xl text-main">
            Fantasticne Ture
          </h3>
          <h2 className="font-bold text text-4xl md:text-6xl text-title max-w-none lg:max-w-xl my-5">
            Mi Smo Majstori Savrsenih{" "}
            <span className="font-light">Odmora!</span>
          </h2>
          <Image
            src="/images/orange_arrow.svg"
            width={300}
            height={10}
            alt="Orange Arrow"
          />
          <div className="block lg:hidden">
            <p className="font-roboto text-sm md:text-base max-w-none lg:max-w-xl text-lightText mt-5 lg:mt-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis.
            </p>
            <div className="mt-10 flex gap-16">
              <div>
                <p className="font-handwritten text-5xl text-title">50+</p>
                <p className="font-roboto text-lg text-title">Destinacija</p>
              </div>
              <div>
                <p className="font-handwritten text-5xl text-title">15,000</p>
                <p className="font-roboto text-lg text-title">
                  Zadovoljnih Korisnika
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="container w-full items-start justify-center gap-14 mt-8 hidden lg:flex"
      >
        <div className="flex gap-8 items-start relative justify-center">
          <div className="w-72 h-64 relative hidden xl:block">
            <Image
              src="/images/img6.png"
              alt="Lake"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div className="w-[460px] h-[340px] relative">
            <Image
              src="/images/img7.png"
              alt="Lake"
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <p className="font-roboto text-sm md:text-base max-w-xl text-lightText mt-5 lg:mt-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis.
          </p>
          <div className="mt-10 flex gap-16">
            <AnimatedCoutner text="Destinacija" from={0} to={50} />
            <AnimatedCoutner text="Zadovoljnih korisnika" from={0} to={15000} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
