import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.lomtravel.com";

  const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/travel`);
  let destinations = [];
  if(res.status === 200){
    destinations = await res.json();
  }

  const destinationUrls = destinations.map(
    (destination: { id: string }) => `
      <url>
        <loc>${baseUrl}/destination/${destination.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/destinations</loc>
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
