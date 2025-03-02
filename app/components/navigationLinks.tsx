import Link from "next/link";
import CustomIcon from "./icon";

type Props = {
    prevText: string;
    prevLink: string;
    currentText: string;
}

export default function NavigationLinks({
    prevText,
    prevLink,
    currentText
}:Props){
    return <div className="flex items-center gap-2 font-roboto text-xl text-title font-bold">
        <Link href={prevLink} className="hover:text-main duration-300">{prevText}</Link>
        <CustomIcon name="keyboard_arrow_right" color="#094174" size={20}/>
        <p className="font-light">{currentText}</p>       
    </div>
}