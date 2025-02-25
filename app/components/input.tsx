type Props = {
  placeholderValue: string;
  inputType: string;
  labelText: string;
  value?: string;
  border?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholderValue,
  inputType,
  labelText,
  value = "",
  border,
  onChange,
}: Props) {
  return (
    <div className="w-full">
      <label className="font-roboto my-3">{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholderValue}
        className={`bg-white w-full text-base rounded-full font-roboto py-3 px-6 my-3 ${border}`}
        {...(onChange ? { value, onChange } : { defaultValue: value })}
      />
    </div>
  );
}
