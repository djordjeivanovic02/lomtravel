import HeroSearch from "./components/heroSearch";
import OurDestinations from "./components/ourDestinations";
import TopDestinations from "./components/topDestinations";
import SmoothScrollHandler from "./hooks/smoothScrollHandler";
import AboutUs from "./components/aboutUs";

export default function Index() {
  return (
    <div className="w-full relative overflow-hidden">
      <SmoothScrollHandler />
      <section
        className="HeroSection w-full h-[735px]  bg-center 
             lg:bg-[url('/images/hero.svg')] bg-cover
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

      <section
        id="CurrentOffers"
        className="CurrentOffers w-full mt-24 md:mt-60 bg-[url('/images/red_lines.svg')]  bg-no-repeat bg-cover relative z-20"
      >
        <OurDestinations />
      </section>

      <section className="TopDestinations w-full mt-24 md:mt-60 relative">
        <TopDestinations />
      </section>

      <section
        id="AboutUs"
        className="AboutUs w-full mt-24 md:mt-60 pb-24 md:pb-72 bg-[url('/images/grid.svg')] bg-bottom bg-cover relative"
      >
        <AboutUs/>
      </section>
    </div>
  );
}
