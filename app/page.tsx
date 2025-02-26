"use client";
import Image from "next/image";
import HeroSearch from "./components/heroSearch";
import Offers from "./components/offers";
import WideWidget from "./components/wideWidget";
import { motion } from "framer-motion";
import OurDestinations from "./components/ourDestinations";

const wideData = [
  {
    image: "/images/img1.png",
    title: "Kanjon Moraca",
    description: "Istrazi prirodu i opusti se",
  },
  {
    image: "/images/img2.png",
    title: "Kanjon Moraca",
    description: "Istrazi prirodu i opusti se",
  },
  {
    image: "/images/img3.png",
    title: "Kanjon Moraca",
    description: "Istrazi prirodu i opusti se",
  },
  {
    image: "/images/img4.png",
    title: "Kanjon Moraca",
    description: "Istrazi prirodu i opusti se",
  },
];

export default function Index() {
  return (
    <div className="w-full relative overflow-hidden">
      <section
        className="HeroSection w-full h-[735px] bg-cover bg-center 
             lg:bg-[url('/images/hero.svg')] 
             bg-gradient-to-b from-white to-[#FCE9E0] relative animate-fade-in"
      >
        <div className="container h-full flex flex-col md:justify-center delay-1000 animate-slide-up">
          <h1 className="text-[54px] mt-40 md:mt-0 md:text-[70px] font-bold text-title max-w-[585px]">
            Putovanja Koja Neces <span className="text-main">Zaboraviti</span>
          </h1>
          <h2 className="font-roboto text-title mt-3">
            LIDER U ORGANIZACIJI JEDNODNEVNIH PUTOVANJA
          </h2>
          <div className="flex">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section className="CurrentOffers w-full mt-24  bg-[url('/images/red_lines.svg')] relative z-20">
        <OurDestinations />
      </section>

      <section className="TopDestinations w-full mt-24 md:mt-60 relative">
        
      </section>

      <section className="AboutUs w-full mt-24 md:mt-60 pb-24 md:pb-72 bg-[url('/images/grid.svg')] bg-bottom bg-cover relative">
        <Image
          src="/images/dots.svg"
          alt="Half Circle"
          width={223}
          height={334}
          className="hidden lg:block absolute -top-40 right-0 z-10"
        />
        <div className="container flex flex-col-reverse lg:flex-row items-start lg:items-end justify-center gap-14">
          <div className="w-full h-[250px]  md:h-[400px] lg:h-[250px] lg:max-w-xl relative">
            <Image
              src="/images/img5.png"
              alt="Lake"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div>
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
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis.
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
          </div>
        </div>
        <div className="container w-full items-start justify-center gap-14 mt-8 hidden lg:flex">
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
        </div>
      </section>
    </div>
  );
}
