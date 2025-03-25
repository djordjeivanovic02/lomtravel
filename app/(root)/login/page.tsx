import LoginForm from "@/app/components/loginForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Prijavi se | LomTravel",
  openGraph: {
    url: "https://www.lomtravel.com/login",
    title: "Prijavi Se | LomTravel",
    description:
      "Otkrijte najbolja jednodnevna putovanja sa našom turističkom agencijom. Nudimo širok izbor jednodnevnih tura u Srbiji...",
    images: [{ url: "https://www.lomtravel.com/images/logo.svg" }],
  },
  keywords:
    "jednodnevna putovanja Srbija, jednodnevni izleti, jednodnevna tura, turističke destinacije Srbija, vikend putovanja Srbija, putovanja za vikend, izleti u prirodu Srbija, kulturni izleti Srbija, popularne destinacije Srbija, jednodnevne ture Beograd, avanturistički izleti Srbija, organizovani izleti Srbija, porodična putovanja Srbija, prirodne lepote Srbije, jednodnevni izleti po Srbiji, putovanja sa vodičem, agencija za putovanja Srbija, planiranje putovanja Srbija, putovanje u Srbiji za 1 dan, destinacije za izlete u Srbiji",
};
export default function Login() {
  return (
    <div className="container flex mt-32 gap-10 md:flex-row min-h-screen flex-col box-border">
      <div className="flex md:flex-1 justify-center items-center h-fit md:mt-32">
        <h1 className="w-full text-title md:text-7xl text-5xl font-bold">
          Deo si agencije <span className="text-main">Lom Travel ?</span>
        </h1>
      </div>

      <div className="w-full md:flex-1 pt-6 md:pt-0 mb-10 min-h-screen flex justify-center md:justify-start relative bg-[url('/images/login_background.svg')] bg-no-repeat bg-contain bg-top md:bg-right-top">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
