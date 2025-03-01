import { Departure } from "@/app/interfaces/departure";
import { NextResponse } from "next/server";
import { createTravel, getAllTravels } from "./service";

export async function GET() {
  try {
    const travels = await getAllTravels();
    return NextResponse.json(travels, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const travel = {
      title: formData.get("title") as string,
      location: formData.get("destination") as string,
      date: new Date(formData.get("date") as string),
      price: parseFloat(formData.get("price") as string),
      description: formData.get("description") as string,
      number_of_seats: parseInt(formData.get("seats") as string),
      duration: parseInt(formData.get("duration") as string),
    };

    const departures: Departure[] = JSON.parse(
      formData.get("departures") as string
    );

    const images: File[] = [];
    formData.getAll("images[]").forEach((file) => {
      if (file instanceof File) {
        images.push(file);
      }
    });

    const newTravel = await createTravel(travel, departures, images);

    return NextResponse.json(newTravel, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
