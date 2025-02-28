import CustomButton from "@/app/components/button";
import CustomIcon from "@/app/components/icon";
import NavigationLinks from "@/app/components/navigationLinks";
import VacattionOffer from "@/app/components/vacationOffer";

export default function Destionations() {
  const destinations = [
    {
      imageUrl: "/images/church.png",
      location: "Paris, France",
      title: "Eiffel Tower Tour",
      duration: "2 hours",
      price: 50,
    },
    {
      imageUrl: "/images/church.png",
      location: "New York, USA",
      title: "Central Park Walk",
      duration: "1 hour",
      price: 30,
    },
    {
      imageUrl: "/images/church.png",
      location: "Tokyo, Japan",
      title: "Shibuya Crossing Experience",
      duration: "30 minutes",
      price: 15,
    },
    {
      imageUrl: "/images/church.png",
      location: "London, UK",
      title: "Big Ben and Thames Cruise",
      duration: "3 hours",
      price: 75,
    },
    {
      imageUrl: "/images/church.png",
      location: "Rome, Italy",
      title: "Vatican Museums Tour",
      duration: "4 hours",
      price: 100,
    },
    {
      imageUrl: "/images/church.png",
      location: "Sydney, Australia",
      title: "Sydney Opera House Tour",
      duration: "1.5 hours",
      price: 45,
    },
    {
      imageUrl: "/images/church.png",
      location: "Dubai, UAE",
      title: "Burj Khalifa Observation Deck",
      duration: "1 hour",
      price: 80,
    },
    {
      imageUrl: "/images/church.png",
      location: "Machu Picchu, Peru",
      title: "Machu Picchu Day Trip",
      duration: "6 hours",
      price: 120,
    },
  ];

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
          {destinations.map((destination, index) => (
            <VacattionOffer
              key={index}
              imageUrl={destination.imageUrl}
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
      </div>
    </section>
  );
}
