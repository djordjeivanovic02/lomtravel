import NavigationLinks from "@/app/components/navigationLinks";
import Widgets from "@/app/components/widgets";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sve Destinacije | LomTravel",
  description:
    "Otkrijte najbolja jednodnevna putovanja sa našom turističkom agencijom. Nudimo širok izbor jednodnevnih tura u Srbiji. Posetite popularne destinacije, prirodne lepote i kulturne spomenike na nezaboravnim jednodnevnim izletima. Planirajte savršen vikend odmor ili jednodnevni izlet sa profesionalnom organizacijom, sigurnošću i personalizovanim uslugama. Rezervišite svoje idealno jednodnevno putovanje već danas i uživajte u vrhunskim destinacijama uz povoljne cene.",
  openGraph: {
    url: "https://www.lomtravel.com/destinations",
    title: "Sve Destinacije | LomTravel",
    description:
      "Otkrijte najbolja jednodnevna putovanja sa našom turističkom agencijom. Nudimo širok izbor jednodnevnih tura u Srbiji...",
    images: [{ url: "https://www.lomtravel.com/images/logo.svg" }],
  },
  keywords:
    "jednodnevna putovanja Srbija, jednodnevni izleti, jednodnevna tura, turističke destinacije Srbija, vikend putovanja Srbija, putovanja za vikend, izleti u prirodu Srbija, kulturni izleti Srbija, popularne destinacije Srbija, jednodnevne ture Beograd, avanturistički izleti Srbija, organizovani izleti Srbija, porodična putovanja Srbija, prirodne lepote Srbije, jednodnevni izleti po Srbiji, putovanja sa vodičem, agencija za putovanja Srbija, planiranje putovanja Srbija, putovanje u Srbiji za 1 dan, destinacije za izlete u Srbiji",
};

export default async function Destinations() {
  return (
    <section className="DestinationsSection mb-24">
      <div className="container mt-32">
        <NavigationLinks
          prevText="Početna"
          prevLink="/"
          currentText="Destinacije"
        />
        <Suspense >
          <Widgets />
        </Suspense>
      </div>
    </section>
  );
}
