"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HamburgerLink from "./hamburgerLink";
import CustomIcon from "./icon";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Dugme za otvaranje menija */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center items-center w-11 h-11 shadow-lg rounded-md"
        >
          <CustomIcon name="menu" color="black" size={20} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <div
        className={`font-roboto fixed top-0 right-0 w-72 h-[100%] bg-white shadow-lg pt-10 px-3 rounded-md 
          transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col justify-between h-full pb-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-2 right-2"
          >
            <CustomIcon name="close" color="black" size={20} />
          </button>
          <div className="">
            <HamburgerLink
              text="Pocetna"
              link="/"
              toggleMenu={() => setIsOpen(!isOpen)}
            />
            <HamburgerLink
              text="Ponude"
              link="/"
              toggleMenu={() => setIsOpen(!isOpen)}
            />
            <HamburgerLink
              text="Destinacije"
              link="/destinations"
              toggleMenu={() => setIsOpen(!isOpen)}
            />
            <HamburgerLink
              text="O nama"
              link="/"
              toggleMenu={() => setIsOpen(!isOpen)}
            />
          </div>

          <div className="">
            <Link
              href="https://www.instagram.com/lom_travel/"
              className="flex gap-2 pb-2"
              target="_blank"
            >
              <Image
                src="/icons/insta_icon_blue.svg"
                alt="Instagram"
                width={19}
                height={19}
                color="#094174"
              />
              @lom_travel
            </Link>
            <Link
              href="https://www.facebook.com/p/lom-travel-100066774284154/"
              className="flex gap-2 pb-2"
              target="_blank"
            >
              <Image
                src="/icons/facebook_icon_blue.svg"
                alt="facebook"
                width={19}
                height={19}
                color="#094174"
              />
              lom travel
            </Link>
            <Link
              href="mailto:lomtravel11@gmail.com?subject=Kontakt"
              className="flex gap-2 pb-2"
              target="_blank"
            >
              <CustomIcon name="mail" size={22} color="#094174" />
              lomtravel11@gmail.com
            </Link>
            <Link
              href="tel:+381637056233"
              className="flex gap-2 pb-2 border-b border-border"
            >
              <CustomIcon name="call" size={22} color="#094174" />
              063/70-56-233
            </Link>

            <Link
              href="#"
              className="flex justify-center items-center mt-2 gap-2 bg-main rounded-full py-3 px-5 text-white  hover:bg-title transition-all duration-300 ease-in-out"
            >
              Rezervisi putovanje
              <CustomIcon name="call_made" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
