type Props = {
  placeholderValue: string;
  inputType: string;
  labelText: string;
  value?: string;
  border?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholderValue,
  inputType,
  labelText,
  value = "",
  border,
  name,
  onChange,
}: Props) {
  return (
    <div className="w-full">
      <label className="font-roboto my-3">{labelText}</label>
      <input
        name={name}
        type={inputType}
        placeholder={inputType !== "date" ? placeholderValue : ""}
        className={`bg-white w-full min-w-0 text-base rounded-full font-roboto py-3 px-6 my-3 ${border} appearance-none`}
        {...(onChange ? { value, onChange } : { defaultValue: value })}
      />
    </div>
  );
}
