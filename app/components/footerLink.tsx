import Link from "next/link";
import CustomIcon from "./customicon";

type Props = {
  link: string;
  text: string;
  scroll?: boolean;
};

export default function FooterLink({ link, text, scroll=false }: Props) {
  return (
    <Link href={link} className="flex items-center gap-1 mb-4" scroll={scroll}>
      <CustomIcon name="chevron_forward" />
      <p className="font-roboto text-md text-white hover:text-lightText duration-300">{text}</p>
    </Link>
  );
}
