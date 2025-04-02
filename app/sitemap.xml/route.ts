import { NextResponse } from "next/server";
import { Travel } from "../interfaces/travel";

export async function GET() {
  let destinations: Travel[] = [];
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/travel`);
    destinations = await res.json();
  } catch (error) {
    console.error("Error fetching travels:", error);
  }

  const destinationUrls = destinations.map(
    (destination) => `
      <url>
        <loc>${process.env.BASE_URL}destination/${destination.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.BASE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${process.env.BASE_URL}destinations</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      ${destinationUrls.join("\n")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
