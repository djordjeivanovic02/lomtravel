import { dmSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import Header from "./components/header";
import Provider from "./context/Provider";
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
    <html lang="en" data-lt-installed="true">
      <body className={`${dmSans.variable} antialiased`}>
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
  );
}
