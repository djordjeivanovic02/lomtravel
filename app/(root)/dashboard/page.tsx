import AdminDestination from "@/app/components/adminDestination";

export default function Dashboard() {
  return (
    <div className="container bg-[url('/images/dashboard_bg.svg')] bg-cover bg-center min-h-screen flex justify-center items-center p-4">
      <div className="bg-form backdrop-blur-md md:rounded-[40px] rounded-3xl md:p-12 p-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
          <AdminDestination
            location="Niš, Srbija"
            description="Jednodnevno putovanje do Ćele kule u Nišu"
            image="widget_image.svg"
          />
        </div>
      </div>
    </div>
  );
}
