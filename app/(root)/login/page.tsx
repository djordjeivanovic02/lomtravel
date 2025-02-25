import LoginForm from "@/app/components/loginForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex md:flex-row flex-col container">
      <h1 className="max-w-xl text-title md:text-7xl text-5xl font-bold md:mt-64 mt-10">
        Deo si agencije <span className="text-main">Lom Travel ?</span>
      </h1>

      <div className="w-full md:flex relative mt-1 mb-20">
        <Image
          src="/images/login_background.svg"
          alt="login_image"
          width={623}
          height={771}
          className="md:my-8 md:mx-16 mb-40"
        />

        <div
          className="w-full max-w-md absolute md:left-5 md:top-20 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                md:translate-x-0 md:translate-y-0"
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
