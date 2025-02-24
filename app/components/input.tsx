type Props = {
  placeholderValue: string;
  inputType: string;
  labelText: string;
};

export default function Input({
  placeholderValue,
  inputType,
  labelText,
}: Props) {
  return (
    <div className="w-full">
      <label className="font-roboto my-3">{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholderValue}
        className="bg-white w-full text-base rounded-full font-roboto p-5 my-3 "
      />
    </div>
  );
}
