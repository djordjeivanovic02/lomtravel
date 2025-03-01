import { Departure } from "@/app/interfaces/departure";
import { Travel } from "@/app/interfaces/travel";
import { supabase } from "@/lib/supabase";
import { createDeparture } from "../departure/service";

export const getAllTravels = async () => {
  const { data, error } = await supabase.from("travels").select("*");
  if (error) throw new Error(error.message);

  const travelsWithImages = await Promise.all(
    data.map(async (travel) => {
      const images = await getTravelImages(travel.id);
      return { ...travel, images };
    })
  );

  return travelsWithImages;
};

export const getTravelImages = async (id: number) => {
  const { data, error } = await supabase.storage
    .from("travels-images")
    .list(`${id}`);

  if (error) throw new Error(error.message);

  const imageUrls = data.map(
    (file) =>
      supabase.storage.from("travels-images").getPublicUrl(`${id}/${file.name}`)
        .data.publicUrl
  );

  return imageUrls;
};

export const createTravel = async (
  travel: Travel,
  departures: Departure[],
  images: File[]
) => {
  if (
    !travel ||
    !Array.isArray(departures) ||
    !Array.isArray(images) ||
    images.length === 0 ||
    departures.length === 0
  ) {
    throw new Error("Missing data or invalid arrays");
  }

  const { data: travelData, error: travelError } = await supabase
    .from("travels")
    .insert([travel])
    .select()
    .single();

  if (travelError) throw new Error(travelError.message);

  const travel_id: number = Number(travelData.id);

  const departurePromises = departures.map(async (departure) => {
    return await createDeparture({ ...departure, travel_id });
  });

  await Promise.all(departurePromises);

  const imageUploadPromises = images.map((file) => {
    const filePath = `${travel_id}/${file.name}`;
    return supabase.storage.from("travels-images").upload(filePath, file);
  });

  const imageUploadResults = await Promise.all(imageUploadPromises);

  const imagesUrls = imageUploadResults.map((result, index) => {
    if (result.error) throw new Error(result.error.message);
    return supabase.storage
      .from("travels-images")
      .getPublicUrl(`${travel_id}/${images[index].name}`).data.publicUrl;
  });

  return { travelData, imagesUrls };
};
