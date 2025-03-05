import DestinationForm from "@/app/components/destinationForm";
import DestinationImages from "@/app/components/destinationImages";
import DestinationTabs from "@/app/components/destinationTabs";
import DestinationTag from "@/app/components/destinationTag";
import CustomIcon from "@/app/components/icon";
import { Travel } from "@/app/interfaces/travel";

export default async function Destination({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(process.env.NEXT_PUBLIC_ROOT_URL + "/api/travel?id=" + id);
  const data: Travel = await res.json();
  const date = new Date(data.date ?? "");
  const options = { day: "numeric", month: "long", year: "numeric" } as const;
  const formattedDate = new Intl.DateTimeFormat("sr-Latn-RS", options).format(
    date
  );
  return (
    <div className="container mt-32">
      <h1 className="md:text-6xl text-4xl text-title font-bold">
        {data.title}
      </h1>
      <div className="flex justify-between py-7">
        <div className="flex items-center">
          <CustomIcon name="location_on" size={19} color="#05073c" />
          <p className="text-roboto text-text">{data.location}, Srbija</p>
        </div>
        <div className="cursor-pointer">
          <CustomIcon name="content_copy" size={19} color="#05073c" />
        </div>
      </div>

      <DestinationImages images={data.images ?? []} />

      <div className="flex flex-col md:flex-row md:items-start py-7 md:justify-between gap-5">
        <div>
          <div className="md:flex-row flex flex-col md:gap-x-14 gap-y-2 mb-12">
            <DestinationTag
              icon="schedule"
              title="Trajanje putovanja"
              desc={data.duration?.toString() ? data.duration!.toString() + " dan-a": "0"}
            />
            <DestinationTag
              icon="group"
              title="Broj Mesta"
              desc={data.number_of_seats?.toString() ?? "0"}
            />
            <DestinationTag
              icon="calendar_month"
              title="Datum Polaska"
              desc={formattedDate ?? "0"}
            />
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
            date={data.date ?? new Date}
            destination={data.location ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
