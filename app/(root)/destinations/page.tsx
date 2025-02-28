import CustomButton from "@/app/components/button";
import CustomIcon from "@/app/components/icon";
import NavigationLinks from "@/app/components/navigationLinks";
import VacattionOffer from "@/app/components/vacationOffer";
import { Travel } from "@/app/interfaces/travel";

export default async function Destionations() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/travel");
  const data: Travel[] = await res.json();
  return (
    <section className="DestinationsSection mb-24">
      <div className="container mt-32">
        <NavigationLinks
          prevText="Pocetna"
          prevLink="/"
          currentText="Destinacije"
        />
        <div className="w-full mb-14 mt-10">
          <div className="flex justify-center relative w-full">
            <div className="relative w-full max-w-[600px]">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pt-1">
                <CustomIcon name="search" color="#717171" size={24} />
              </div>
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 border border-border rounded-full outline-none"
                placeholder="Pronađite svoju omiljenu destinaciju"
              />
            </div>
          </div>
        </div>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {data.map((destination, index) => (
          <VacattionOffer
            key={index}
            imageUrl={destination.images[1]}
            location={destination.location}
            title={destination.title}
            duration={destination.duration}
            price={destination.price}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div>
          <CustomButton
            text="Prikazi jos"
            color="main"
            icon="keyboard_arrow_down"
            radius="full"
            padding="px-6"
          />
        </div>
      </div>
    </section>
  );
}
