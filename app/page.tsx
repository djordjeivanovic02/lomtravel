import Image from "next/image";
import HeroSearch from "./components/heroSearch";
import VacattionOffer from "./components/vacationOffer";
import Offers from "./components/offers";
import WideWidget from "./components/wideWidget";

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
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1500px] px-0 md:px-5">
            <div className="py-14">
              <Offers />
            </div>
          </div>
        </div>
      </section>

      <section className="TopDestinations w-full mt-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h3 className="font-handwritten text-xl md:text-2xl text-main">
                Top Destinacije
              </h3>
              <h2 className="font-bold text text-4xl md:text-6xl text-title max-w-xl my-5">
                Neke Od Nasih Sjajnih{" "}
                <span className="font-light">Destinacija</span>
              </h2>
              <Image
                src="/images/orange_arrow.svg"
                width={300}
                height={10}
                alt="Orange Arrow"
              />
            </div>
            <p className="font-roboto text-sm md:text-base max-w-xl text-lightText mt-5 lg:mt-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-16 lg:mt-20 justify-between">
          {wideData.map((data) => (
            <WideWidget
              key={data.image}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
