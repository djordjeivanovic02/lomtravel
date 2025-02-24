import Input from "./input";

export default function LoginForm() {
  return (
    <div className="bg-form backdrop-blur-md rounded-[40px] py-16 md:px-16 px-8 flex flex-col items-center">
      <div className="md:w-80 w-full">
        <Input
          labelText="Korisnicko ime"
          inputType="text"
          placeholderValue="Unesite vase korisnicko ime"
        />

        <Input
          labelText="Lozinka"
          inputType="password"
          placeholderValue="Unesite vasu lozinku"
        />
      </div>

      <div className="flex font-roboto font-light text-sm w-full">
        <label>Zapamti me</label>
        <input type="checkbox" className="mx-3 cursor-pointer" />
      </div>

      <button className="bg-title w-full rounded-full text-white font-roboto text-sm font-bold p-5 my-8">
        Prijavi se
      </button>
    </div>
  );
}
