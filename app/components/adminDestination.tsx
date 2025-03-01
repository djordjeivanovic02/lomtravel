import Image from "next/image";
import CustomIcon from "./icon";
type Props = {
  location?: string;
  description?: string;
  image?: string;
};

export default function AdminDestination({
  location,
  description,
  image = "",
}: Props) {
  return (
    <div className="w-full border-b-2 border-form flex items-center justify-between gap-3">
      <div className="flex">
        <div className="w-[85px] h-[85px] relative">
          <Image
            src={image}
            alt="login_image"
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
            <h1 className="text-base max-w-full text-nowrap font-sans font-semibold text-text text-ellipsis overflow-hidden max-h-[70px]">
              {description}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-main rounded-md p-1 flex justify-center items-center cursor-pointer my-1">
          <CustomIcon name="edit" size={24} />
        </div>
        <div className="bg-red rounded-md p-1 flex justify-center items-center cursor-pointer">
          <CustomIcon name="delete" size={24} />
        </div>
      </div>
    </div>
  );
}
