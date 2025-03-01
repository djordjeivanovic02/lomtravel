import { NextResponse } from "next/server";
import { createDeparture } from "./service";

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
