import Link from "next/link";
import CustomIcon from "./icon";

type Props = {
  link: string;
  text: string;
  toggleMenu: () => void;
};

export default function HamburgerLink({ link, text, toggleMenu }: Props) {
  return (
    <Link
      className="flex justify-between border-b border-border px-2 py-1 mb-5"
      href={link}
      onClick={toggleMenu}
    >
      <p className="roboto text-md">{text}</p>
      <CustomIcon name="arrow_right_alt" color="#f38255" size={24} />
    </Link>
  );
}
