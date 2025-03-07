type Props = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

export default function CustomIcon({
  name,
  size = 18,
  color = "white",
  className = ""
}: Props) {
  return (
    <span
      className={`material-symbols-outlined ${className} select-none`}
      style={{ fontSize: `${size}px`, color }}
    >
      {name}
    </span>
  );
}
