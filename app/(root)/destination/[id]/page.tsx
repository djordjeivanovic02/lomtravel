import DestinationForm from "@/app/components/destinationForm";
import DestinationHeader from "@/app/components/destinationHeader";
import DestinationImages from "@/app/components/destinationImages";
import DestinationTabs from "@/app/components/destinationTabs";
import DestinationTag from "@/app/components/destinationTag";
import { Travel } from "@/app/interfaces/travel";

export default async function Destination({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    process.env.NEXT_PUBLIC_ROOT_URL + "/api/travel?id=" + id
  );
  const data: Travel = await res.json();
  const date = new Date(data.date ?? "");
  const options = { day: "numeric", month: "long", year: "numeric" } as const;
  const formattedDate = new Intl.DateTimeFormat("sr-Latn-RS", options).format(
    date
  );

  const infos = [
    {
      icon: "schedule",
      title: "Trajanje putovanja",
      desc: data.duration?.toString()
        ? data.duration!.toString() + " dan"
        : "0",
    },
    {
      icon: "group",
      title: "Broj mesta",
      desc: data.number_of_seats?.toString() ?? "0",
    },
    {
      icon: "calendar_month",
      title: "Datum polaska",
      desc: formattedDate ?? "0",
    },
  ];

  return (
    <div className="container mt-32">
      <DestinationHeader
        title={data.title ?? ""}
        location={data.location ?? ""}
      />
      <DestinationImages images={data.images ?? []} />

      <div className="flex flex-col md:flex-row md:items-start py-7 md:justify-between gap-5">
        <div>
          <div className="md:flex-row flex flex-col md:gap-x-14 gap-y-2 mb-12">
            {infos.map((info, index) => {
              return (
                <DestinationTag
                  delay={infos.length * 0.25 - index * 0.25}
                  key={index}
                  title={info.title}
                  desc={info.desc}
                  icon={info.icon}
                />
              );
            })}
          </div>
          <div>
            <DestinationTabs
              description={data.description ?? ""}
              departures={data.departures ?? []}
            />
          </div>
        </div>

        <div className="mb-20">
          <DestinationForm
            price={data.price || 0}
            departures={data.departures ?? []}
            maxReservations={data.number_of_seats ?? 0}
            date={data.date ?? new Date()}
            destination={data.location ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
