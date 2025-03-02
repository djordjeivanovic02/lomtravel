import Image from "next/image";
import Link from "next/link";
import ClientLink from "./clientLink";
import HamburgerMenu from "./hamburger";
import ScrollHeader from "./scrollHeader";

export default function Header() {
  return (
    <header
      className={`flex justify-center w-full p-8 fixed top-0 z-50 py-2 transition-all text-x animate-fade-in`}
      id="header"
    >
      <nav className="flex justify-between items-center text-title w-full max-w-[1400px]">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={102}
            height={84}
            className="w-20 md:w-24"
            priority
          />
        </Link>

        <div className="flex justify-center items-center gap-20">
          <div className="hidden md:flex gap-1">
            <Link
              className="rounded-3xl px-5 py-2 hover:bg-border transition-all duration-300 ease-in-out"
              href="/"
            >
              Pocetna
            </Link>
            <Link
              className="rounded-3xl px-5 py-2 hover:bg-border transition-all duration-300 ease-in-out"
              href="/#CurrentOffers"
              scroll={false}
            >
              Ponude
            </Link>
            <Link
              className="rounded-3xl px-5 py-2 hover:bg-border transition-all duration-300 ease-in-out"
              href="/destinations"
            >
              Destinacije
            </Link>
            <Link
              className="rounded-3xl px-5 py-2 hover:bg-border transition-all duration-300 ease-in-out"
              href="/#AboutUs"
              scroll={false}
            >
              O nama
            </Link>
          </div>

          <ClientLink
            notSignedText="Rezervisi putovanje"
            signedUrl="/dashboard"
            notSignedUrl="/destinations"
            padding="py-3 px-5"
            radius="full"
          />
        </div>

        <HamburgerMenu />
        <ScrollHeader />
      </nav>
    </header>
  );
}
