import CustomIcon from "./icon";

type Props = {
  title: string;
  desc: string;
  icon: string;
};

export default function DestinationTag({ title, desc, icon }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center rounded-lg border-border border p-3">
        <CustomIcon name={icon} size={20} color="#05073C" />
      </div>
      <div className="font-roboto text-text">
        <p>{title}</p>
        <span className="font-light">{desc}</span>
      </div>
    </div>
  );
}
