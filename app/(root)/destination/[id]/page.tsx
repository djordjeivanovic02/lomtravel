import DestinationForm from "@/app/components/destinationForm";
import DestinationImages from "@/app/components/destinationImages";
import DestinationTabs from "@/app/components/destinationTabs";
import DestinationTag from "@/app/components/destinationTag";
import CustomIcon from "@/app/components/icon";

export default function Destination() {
  return (
    <div className="container mt-32">
      <h1 className="md:text-6xl text-4xl text-title font-bold">
        Poseti prestonicu kulture - Temišvar jednodnevno putovanje
      </h1>
      <div className="flex justify-between py-7">
        <div className="flex items-center">
          <CustomIcon name="location_on" size={19} color="#05073c" />
          <p className="text-roboto text-text">Kopaonik, Srbija</p>
        </div>
        <div className="cursor-pointer">
          <CustomIcon name="content_copy" size={19} color="#05073c" />
        </div>
      </div>

      <DestinationImages />

      <div className="flex flex-col md:flex-row md:items-start md:p-7 py-7 md:justify-between gap-5">
        <div>
          <div className="md:flex-row flex flex-col md:gap-x-14 gap-y-2 mb-12">
            <DestinationTag
              icon="schedule"
              title="Trajanje putovanja"
              desc="1 dan"
            />
            <DestinationTag
              icon="group"
              title="Trajanje putovanja"
              desc="1 dan"
            />
            <DestinationTag
              icon="calendar_month"
              title="Trajanje putovanja"
              desc="1 dan"
            />
          </div>
          <div>
            <DestinationTabs />
          </div>
        </div>

        <div className="mb-20">
          <DestinationForm />
        </div>
      </div>
    </div>
  );
}
