import AdminDestination from "@/app/components/adminDestination";
import ClientLink from "@/app/components/clientLink";
import CustomIcon from "@/app/components/icon";
import NavigationLinks from "@/app/components/navigationLinks";
import { Travel } from "@/app/interfaces/travel";
import Link from "next/link";

export default async function Dashboard() {
  const res = await fetch( process.env.NEXT_PUBLIC_ROOT_URL +  "/api/travel");
  const data: Travel[] = await res.json();

  return (
    <section className="AdminDashboard w-full bg-[url('/images/dashboard_bg.svg')] bg-no-repeat bg-center bg-cover pb-24">
      <div className="container bg-cover bg-center flex w-full ">
        <div className="pt-32 w-full">
          <div className="mb-10">
            <NavigationLinks
              prevText="Početna"
              prevLink="/"
              currentText="Kontrolna tabla"
            />
          </div>
          <div className="bg-form backdrop-blur-md md:rounded-[40px] rounded-3xl md:px-12 md:py-8 p-6 w-full">
            <div className="flex justify-between flex-wrap pb-10 gap-2 text-white">
              <Link
                href="/create"
                className="flex w-fit items-center gap-3 rounded-lg bg-text py-3 px-8"
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
                linkVisibility="flex"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.map((travel) => (
                <AdminDestination
                  key={travel.id}
                  id={travel.id ?? -1}
                  location={travel.location}
                  title={travel.title}
                  image={travel.images?.[0] ?? ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
