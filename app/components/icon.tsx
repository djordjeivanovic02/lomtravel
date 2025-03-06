type Props = {
  name: string;
  size?: number;
  color?: string;
};

export default function CustomIcon({
  name,
  size = 18,
  color = "white",
}: Props) {
  return (
    <span
      className={`material-symbols-outlined`}
      style={{ fontSize: `${size}px`, color }}
    >
      {name}
    </span>
  );
}
