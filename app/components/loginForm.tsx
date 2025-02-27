"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "./button";
import Input from "./input";
import Loader from "./loader";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const errorMessage = searchParams.get("error");
    if (errorMessage) {
      toast.error(`Greška: ${errorMessage}`, {
        position: "top-right",
        autoClose: 3000,
      });
      router.replace("/login", { scroll: false }); // Očisti URL
    }
  }, [searchParams, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      toast.error("Morate popuniti oba polja");
      return;
    }
    setLoading(true);
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      toast.error("Uneti podaci nisu validni");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[400px] bg-form backdrop-blur-md rounded-[40px] py-16 md:px-16 px-10 flex flex-col items-center"
    >
      <div className="md:w-70 w-full">
        <Input
          labelText="Korisničko ime"
          inputType="text"
          placeholderValue="Unesite vaše korisničko ime"
          name="username"
        />
        <Input
          labelText="Lozinka"
          inputType="password"
          placeholderValue="Unesite vašu lozinku"
          name="password"
        />
      </div>

      <div className="flex font-roboto font-light text-sm w-full">
        <label>Zapamti me</label>
        <input type="checkbox" className="mx-3 cursor-pointer" />
      </div>

      <div className="w-full mt-6">
        <CustomButton
          text={loading ? "Prijavljivanje..." : "Prijavi se"}
          color="text"
          radius="full"
          type="submit"
        />
      </div>

      {loading && <Loader />}
    </form>
  );
}
