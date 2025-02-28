import { NextResponse } from "next/server";
import { createTravel, getAllTravels } from "../services/service";

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
    const body = await req.json();
    const newTravel = await createTravel(body);
    return NextResponse.json(newTravel, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
