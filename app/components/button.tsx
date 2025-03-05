import Image from "next/image";
import CustomIcon from "./icon";

type Props = {
  color?: string;
  text?: string;
  type?: "button" | "submit" | "reset";
  radius?: string;
  icon?: string;
  padding?: string;
  loading?: boolean;
  className?: string;
  action?: () => void;
  disabled?: boolean;
};

export default function CustomButton({
  color = "main",
  text = "",
  type = "button",
  radius = "",
  icon = "",
  padding = "",
  loading = false,
  className = "",
  action,
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={`w-full flex items-center justify-center gap-2 bg-${color} text-white p-2 rounded-${radius} ${padding} relative ${className} ${
        disabled ? "bg-lightText" : ""
      }`}
      onClick={action ?? (() => void {})}
    >
      <div
        className={`flex items-center justify-center gap-2 ${
          loading ? "invisible" : ""
        }`}
      >
        {text}
        <CustomIcon name={icon} size={24} />
      </div>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/gifs/loading.svg" width={30} height={30} alt="Loading" />
        </div>
      )}
    </button>
  );
}
