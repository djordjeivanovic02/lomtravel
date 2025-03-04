import Image from "next/image";
import Link from "next/link";
import CustomIcon from "./icon";

type Props = {
  imageUrl?: string;
  location?: string;
  title?: string;
  duration?: number;
  price?: number;
};

export default function VacationOffer({
  imageUrl = "",
  location,
  title,
  duration,
  price,
}: Props) {
  return (
    <div className="w-full max-w-72 p-4 rounded-xl border bg-white shrink-0 h-fit">
      <div className="w-full h-48 relative rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          fill={true}
          alt="location"
          objectFit="cover"
          className="hover:scale-125 duration-300 cursor-pointer"
        />
        <div className="bg-white px-3 py-2 absolute bottom-4 right-4 rounded-full">
          <p className="font-roboto text-title">
            Od <span className="text-lg font-bold text-main">€{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 my-4">
        <CustomIcon name="location_on" size={24} color="#717171" />
        <p className="font-roboto text-sm text-lightText">{location}</p>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h2 className="font-bold text-lg hover:underline cursor-pointer line-clamp-2 min-h-[56px]">
          {title}
        </h2>
        <div>
          <hr className="my-4" />
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1">
              <CustomIcon name="schedule" size={20} color="#05073C" />
              <p className="font-roboto text-sm text-title">{duration}</p>
            </div>
            <Link href="" className="font-roboto text-sm">
              Prikazi Detalje
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
