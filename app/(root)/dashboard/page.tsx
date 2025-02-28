import AdminDestination from "@/app/components/adminDestination";
import ClientLink from "@/app/components/clientLink";
import CustomIcon from "@/app/components/icon";
import { Travel } from "@/app/interfaces/travel";
import Link from "next/link";

export default async function Dashboard() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/travel");
  const data: Travel[] = await res.json();

  return (
    <div className="container bg-[url('/images/dashboard_bg.svg')] bg-cover bg-center min-h-screen flex justify-center items-center p-4">
      <div className="mt-32 bg-form backdrop-blur-md md:rounded-[40px] rounded-3xl md:px-12 md:py-8 p-6 w-full max-w-4xl">
        <div className="flex justify-between flex-wrap pb-10 gap-2 text-white">
          <Link
            href="/create"
            className="flex  w-fit items-center gap-3 rounded-lg bg-text py-3 px-8"
          >
            Dodaj putovanje <CustomIcon name="add" />
          </Link>
          <ClientLink
            signedText="Odjavi se"
            notSignedText="Odjavi se "
            color="red"
            signedIcon="exit_to_app"
            notSignedIcon="exit_to_app"
            padding="py-3 px-8"
            radius="lg"
            action="signout"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((travel) => (
            <AdminDestination
              key={travel.id}
              location={travel.location}
              description={travel.description}
              image={travel.images[1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
