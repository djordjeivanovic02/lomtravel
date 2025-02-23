import { dmSans } from "@/lib/fonts";
import type { Metadata } from "next";
import Footer from "./components/footer";
import ScrollHeader from "./components/scrollHeader";
import "./globals.css";
import "./globalsicon.css";

export const metadata: Metadata = {
  title: "Lom travel",
  description: "Turisticka agencija za organizovanje putovanja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <ScrollHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
