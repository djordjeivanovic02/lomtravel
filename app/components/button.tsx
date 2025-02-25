import CustomIcon from "./icon";

type Props = {
  color?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  radius?: string;
  icon?: string;
};

export default function CustomButton({
  color = "main",
  text = "",
  type = "button",
  radius = "",
  icon = "",
}: Props) {
  return (
    <button
      type={type}
      className={`w-full flex items-center justify-center gap-2 bg-${color} text-white p-2 rounded-${radius}`}
    >
      {text}
      <CustomIcon name={icon} />
    </button>
  );
}
