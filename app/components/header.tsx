import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./hamburger";

type Props = {
  isScrolled?: boolean;
  isOpen?: boolean;
  toggleMenu: () => void;
};

export default function Header({ isScrolled, isOpen, toggleMenu }: Props) {
  return (
    <header
      className={`container sticky top-0 z-50 py-2 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } `}
    >
      <nav className="flex justify-between items-center text-title">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={102}
            height={84}
            className="w-20 md:w-24"
          />
        </Link>

        <div className="hidden md:flex gap-10">
          <Link href="/">Pocetna</Link>
          <Link href="/">Ponude</Link>
          <Link href="/destinations">Destinacije</Link>
          <Link href="#">O nama</Link>
        </div>

        <Link
          href="#"
          className="hidden md:flex bg-main rounded-full py-3 px-5 text-white"
        >
          Rezervisi putovanje
        </Link>

        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}
