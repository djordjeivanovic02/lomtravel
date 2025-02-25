import CustomButton from "./button";
import Input from "./input";

export default function LoginForm() {
  return (
    <div className="w-full max-w-[400px] bg-form backdrop-blur-md rounded-[40px] py-16 md:px-16 px-10 flex flex-col items-center ">
      <div className="md:w-70 w-full">
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

      <div className="w-full mt-6">
        <CustomButton text="Prijavi se" color="text" radius="full" />
      </div>
    </div>
  );
}
