type Props = {
  image: string;
  title: string;
  description: string;
};

export default function WideWidget({ image, title, description }: Props) {
  return (
    <div className="w-full lg:w-[24.6%] group lg:hover:w-[35%] transition-all duration-500 mt-7 lg:mt-0">
      <div
        className="w-full h-[475px] md:h-[720px] bg-bottom bg-cover"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 duration-500 cursor-pointer flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-main bg-opacity-30 flex items-center justify-center">
                <p className="font-bold text-white">SAZNAJ VISE</p>
            </div>
        </div>
      </div>
      <div className="px-5 mt-5">
        <h1 className="text-3xl text-title font-bold">{title}</h1>
        <p className="font-roboto text-base text-lightText">{description}</p>
      </div>
    </div>
  );
}