import Image from "next/image";
import Link from "next/link";
import Checkbox from "./checkbox";
import CustomIcon from "./customicon";
import IconWithDialog from "./iconWithDialog";
type Props = {
  id: number;
  location?: string;
  title?: string;
  image?: string;
  isPopular?: number;
};

export default function AdminDestination({
  id,
  location,
  title,
  image = "",
  isPopular,
}: Props) {
  return (
    <div className="w-full border-b-2 border-form flex items-center justify-between gap-3">
      <div className="flex">
        <div className="w-[85px] h-[85px] relative">
          <Image
            src={image}
            alt="destination_image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1 pl-4 h-full w-full relative">
          <div className="flex items-center">
            <CustomIcon name="location_on" size={12} color="#717171" />
            <h1 className="text-xs font-roboto text-lightText">{location}</h1>
          </div>
          <div className="w-full overflow-hidden">
            <Link href={`/destination/${id}`}>
              <h1 className="text-base font-sans font-semibold text-text line-clamp-3 overflow-hidden">
                {title}
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="bg-main rounded-[3px] p-1 cursor-pointer w-fit">
          <Link href={"/edit/" + id} className="flex justify-center">
            <CustomIcon name="edit" size={24} />
          </Link>
        </div>
        <div className="w-fit h-[32px]">
          <IconWithDialog travelId={id} />
        </div>
        <Checkbox id={id} isPopular={isPopular || 0} />
      </div>
    </div>
  );
}
