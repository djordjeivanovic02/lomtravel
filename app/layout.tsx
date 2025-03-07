/* eslint-disable @next/next/no-page-custom-font */
import { dmSans } from "@/lib/fonts";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import Header from "./components/header";
import Provider from "./context/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lom Travel | Turisticka agencija, putovanja, izleti",
  description:
    "Otkrijte najbolje jednodnevne izlete u Srbiji! Posetite prirodne lepote i kulturne spomenike uz profesionalnu organizaciju. Rezervišite već danas!",
  openGraph: {
    url: "https://www.lomtravel.com/",
    title: "LomTravel",
    description:
      "Otkrijte najbolja jednodnevna putovanja sa našom turističkom agencijom. Nudimo širok izbor jednodnevnih tura u Srbiji...",
    images: [{ url: "https://www.lomtravel.com/images/logo.svg" }],
  },
  keywords:
    "jednodnevna putovanja Srbija, jednodnevni izleti, jednodnevna tura, turističke destinacije Srbija, vikend putovanja Srbija, putovanja za vikend, izleti u prirodu Srbija, kulturni izleti Srbija, popularne destinacije Srbija, jednodnevne ture Beograd, avanturistički izleti Srbija, organizovani izleti Srbija, porodična putovanja Srbija, prirodne lepote Srbije, jednodnevni izleti po Srbiji, putovanja sa vodičem, agencija za putovanja Srbija, planiranje putovanja Srbija, putovanje u Srbiji za 1 dan, destinacije za izlete u Srbiji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="sr" data-lt-installed="true" className="w-screen overflow-x-hidden">
        <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.lomtravel.com/images/logo.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          />
        </head>
        <body className={`${dmSans.variable} antialiased overflow-x-hidden w-screen`}>
          <NextTopLoader color="#f38255" showSpinner={false} />

          <Provider>
            <Header />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
            {children}
            <Footer />
          </Provider>
        </body>
      </html>
    </>
  );
}
