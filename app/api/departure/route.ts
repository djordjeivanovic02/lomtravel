import { NextResponse } from "next/server";
import { createDeparture, deleteTravelDepartures } from "./service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newTravel = await createDeparture(body);
    return NextResponse.json(newTravel, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing travel id" }, { status: 400 });
    }
    const deletedDeparture = await deleteTravelDepartures(Number(id));
    return NextResponse.json({ deletedDeparture }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
