import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import CustomIcon from "./icon";

type Props = {
  icon: string;
  title: string;
  desc: string;
  items: string[];
  border?: boolean;
  action?: (selected: string) => void;
};

export default function HeroSectionItem({
  icon,
  title,
  desc,
  items,
  border = true,
  action,
}: Props) {
  return (
    <Dropdown className="w-72 md:w-64 rounded-md ml-16 mt-2">
      <DropdownTrigger className="h-auto">
        <Button
          variant="bordered"
          className={`outline-none w-full md:w-auto py-2 md:py-0 px-5 md:px-0 md:border-b md:border-none ${
            border ? "border-b md:border-none pb-3 md:pb-0" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="px-3 py-3 rounded-full border flex items-center justify-center">
              <CustomIcon name={icon} size={24} color="black" />
            </div>
            <div className="flex flex-col gap-0 items-start">
              <p className="roboto">{title}</p>
              <p className="roboto text-lightText">{desc}</p>
            </div>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="w-full bg-white outline-none rounded-md border my-0"
      >
        {items.map((element, index) => (
          <DropdownItem
            key={element + "_" + index}
            className={`w-full ${
              index !== items.length - 1 ? "border-b" : ""
            } roboto text-base py-4`}
            onPress={() => action && action(element)}
          >
            <p className="px-6">{element}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
