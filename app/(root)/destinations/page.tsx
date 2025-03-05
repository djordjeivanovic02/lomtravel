import NavigationLinks from "@/app/components/navigationLinks";
import Widgets from "@/app/components/widgets";

export default async function Destinations() {
  return (
    <section className="DestinationsSection mb-24">
      <div className="container mt-32">
        <NavigationLinks
          prevText="Početna"
          prevLink="/"
          currentText="Destinacije"
        />
        <Widgets />
      </div>
    </section>
  );
}
