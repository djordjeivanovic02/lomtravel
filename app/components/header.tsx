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
      className={`w-full p-8 sticky top-0 z-50 py-2 transition-all duration-500 text-x ${
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
              href="/"
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
              href="#"
            >
              O nama
            </Link>
          </div>

          <Link
            href="#"
            className="hidden md:flex bg-main rounded-full py-3 px-5 text-white  hover:bg-title transition-all duration-300 ease-in-out"
          >
            Rezervisi putovanje
          </Link>
        </div>

        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}
