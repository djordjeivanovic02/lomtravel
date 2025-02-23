import Link from "next/link";
import CustomIcon from "./icon";

type Props = {
  link: string;
  text: string;
};

export default function FooterLink({ link, text }: Props) {
  return (
    <Link href={link} className="flex items-center gap-1 mb-4">
      <CustomIcon name="chevron_forward" />
      <p className="roboto text-md text-white">{text}</p>
    </Link>
  );
}
