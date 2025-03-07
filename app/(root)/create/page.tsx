import CreatePage from "@/app/components/createPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreiraj Putovanje | LomTravel",
  openGraph: {
    url: "https://www.lomtravel.com/create",
    title: "Kreiraj Putovanje | LomTravel",
    description:
      "Otkrijte najbolja jednodnevna putovanja sa našom turističkom agencijom. Nudimo širok izbor jednodnevnih tura u Srbiji...",
    images: [{ url: "https://www.lomtravel.com/images/logo.svg" }],
  },
  keywords:
    "jednodnevna putovanja Srbija, jednodnevni izleti, jednodnevna tura, turističke destinacije Srbija, vikend putovanja Srbija, putovanja za vikend, izleti u prirodu Srbija, kulturni izleti Srbija, popularne destinacije Srbija, jednodnevne ture Beograd, avanturistički izleti Srbija, organizovani izleti Srbija, porodična putovanja Srbija, prirodne lepote Srbije, jednodnevni izleti po Srbiji, putovanja sa vodičem, agencija za putovanja Srbija, planiranje putovanja Srbija, putovanje u Srbiji za 1 dan, destinacije za izlete u Srbiji",
};

export default function Create() {
  return <CreatePage />;
}
