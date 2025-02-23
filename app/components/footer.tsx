import Image from "next/image";
import Link from "next/link";
import CustomIcon from "./icon";
import FooterLink from "./footerLink";

export default function Footer() {
  return (
    <footer className="w-full bg-footer py-24 px-5 relative overflow-hidden">
      <Image
        src="/images/half_circle.svg"
        alt="Half Circle Image"
        width={256}
        height={299}
        className="absolute top-0 left-0 z-10"
      />
      <Image
        src="/images/world_dots.svg"
        alt="World Dots Image"
        width={1226}
        height={532}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10"
      />
      <div className="container p-4 flex items-start justify-between relative z-20">
        <div className="firstColumn pr-20 border-r-[1px] border-border">
          <Image
            src="/images/footer_logo.svg"
            alt="Lom Travel Logo"
            width={100}
            height={86}
          />
          <p className="roboto text-lg text-white max-w-72 mt-4">
            Lider u organizaciji jednodnevnih putovanja
          </p>
          <Link href="" className="flex items-center gap-4 mt-5">
            <div className="bg-title p-4 rounded-[1000px] flex items-center justify-center">
              <CustomIcon name="arrow_right_alt" size={24} />
            </div>
            <p className="text-xl text-white font-bold">Kontaktiraj Nas</p>
          </Link>
          <p className="text-md text-white sans mt-8">
            Copyright © 2025 Lom Travel. All Rights Reserved
          </p>
          <p className="text-md text-white sans">
            Design & Development By <b>Remenex</b>
          </p>
        </div>

        <div className="secondColumn">
          <h2 className="text-2xl text-white font-bold">Korisni Linkovi</h2>
          <Image
            src="/images/orange_arrow.svg"
            width={200}
            height={10}
            alt="Arrow"
            className="my-5"
          />
          <FooterLink link="" text="Pocetna" />
          <FooterLink link="" text="Ponude" />
          <FooterLink link="" text="Destinacije" />
          <FooterLink link="" text="O nama" />
          <FooterLink link="" text="Admin" />
        </div>
        <div className="secondColumn">
          <h2 className="text-2xl text-white font-bold">
            Stupi U Kontakt Sa Nama
          </h2>
          <Image
            src="/images/orange_arrow.svg"
            width={200}
            height={10}
            alt="Arrow"
            className="my-5"
          />
          <p className="roboto text-lg text-white font-bold">063/70-56-233</p>
          <p className="roboto text-lg text-white font-bold">
            lomtravel11@gmail.com
          </p>
          <Link href="" className="flex items-center gap-1 my-4">
            <Image
              src="/icons/insta_icon.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
            <p className="roboto text-md text-white">@lom_travel</p>
          </Link>
          <Link href="" className="flex items-center gap-1 mb-4">
            <Image
              src="/icons/facebook_icon.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
            <p className="roboto text-md text-white">lom travel</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
