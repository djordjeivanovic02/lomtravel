import Image from "next/image";
import HeroSearch from "./components/heroSearch";
import Offers from "./components/offers";

export default function Index() {
  return (
    <div className="w-full">
      <section
        className="HeroSection w-full h-[735px] bg-cover bg-center 
             lg:bg-[url('/images/hero.svg')] 
             bg-gradient-to-b from-white to-[#FCE9E0]"
      >
        <div className="container h-full flex flex-col md:justify-center">
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

      <section className="CurrentOffers w-full mt-24 bg-[url('/images/red_lines.svg')]">
        <div className="container">
          <h3 className="font-handwritten text-2xl text-main">Sjajne Ture</h3>
          <h2 className="font-bold text-6xl text-title max-w-xl my-5">
            Nase Aktuelne Ponude
          </h2>
          <Image
            src="/images/orange_arrow.svg"
            width={300}
            height={10}
            alt="Orange Arrow"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1500px] px-5">
            <div className="py-14">
              <Offers />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
