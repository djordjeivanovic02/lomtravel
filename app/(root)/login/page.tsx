import LoginForm from "@/app/components/loginForm";

export default function Login() {
  return (
    <div className=" container flex mt-32 gap-10 md:flex-row flex-col overflow-x-hidden">
      <div className="flex flex-1 justify-center items-center h-fit md:mt-32">
        <h1 className="w-full text-title md:text-7xl text-5xl font-bold">
          Deo si agencije <span className="text-main">Lom Travel ?</span>
        </h1>
      </div>

      <div className="w-full flex-1 min-h-screen flex justify-center md:justify-start relative bg-[url('/images/login_background.svg')] bg-no-repeat bg-contain bg-top md:bg-right-top">
        <LoginForm />
      </div>
    </div>
  );
}
