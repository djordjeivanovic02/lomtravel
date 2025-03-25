import EditPage from "@/app/components/editPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izmeni Putovanje | LomTravel",
  keywords:
    "jednodnevna putovanja Srbija, jednodnevni izleti, jednodnevna tura, turističke destinacije Srbija, vikend putovanja Srbija, putovanja za vikend, izleti u prirodu Srbija, kulturni izleti Srbija, popularne destinacije Srbija, jednodnevne ture Beograd, avanturistički izleti Srbija, organizovani izleti Srbija, porodična putovanja Srbija, prirodne lepote Srbije, jednodnevni izleti po Srbiji, putovanja sa vodičem, agencija za putovanja Srbija, planiranje putovanja Srbija, putovanje u Srbiji za 1 dan, destinacije za izlete u Srbiji",
};
export default function Edit() {
  return <EditPage />;
}
