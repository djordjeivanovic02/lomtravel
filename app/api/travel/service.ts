import { Departure } from "@/app/interfaces/departure";
import { Travel } from "@/app/interfaces/travel";
import { supabase } from "@/lib/supabase";
import { createDeparture, deleteDeparture } from "../departure/service";

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

export const getTravel = async (id: number) => {
  const { data, error } = await supabase
    .from("travels")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  if (!data) return null;

  const images = await getTravelImages(id);

  const { data: departures, error: departuresError } = await supabase
    .from("departures")
    .select("*")
    .eq("travel_id", id);

  if (departuresError) throw new Error(departuresError.message);

  return { ...data, images, departures };
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

export const editTravel = async (
  travel: Travel,
  departures: Departure[],
  deletedDepartures: number[],
  images: File[],
  deletedImages: string[]
) => {
  if (!travel && !departures && !images) return;

  const { error: travelError } = await supabase
    .from("travels")
    .update(travel)
    .eq("id", travel.id);

  if (travelError) throw new Error(travelError.message);

  if (deletedDepartures.length > 0) {
    const deletedDeparturesPromises = deletedDepartures.map(async (id) => {
      if (id) return await deleteDeparture(id);
    });

    await Promise.all(deletedDeparturesPromises);
  }

  const departurePromises = departures.map(async (departure: Departure) => {
    if (departure.id === undefined)
      return await createDeparture({ ...departure, travel_id: travel.id });
  });

  await Promise.all(departurePromises);

  if (deletedImages.length > 0) {
    const deletedImagePromises = deletedImages.map(async (url: string) => {
      const filename = url.split("/").pop();
      return await supabase.storage
        .from("travels-images")
        .remove([`${travel.id}/${filename}`]);
    });

    await Promise.all(deletedImagePromises);
  }

  const imageUploadPromises = images.map((file) => {
    const filePath = `${travel.id}/${file.name}`;
    return supabase.storage.from("travels-images").upload(filePath, file);
  });

  await Promise.all(imageUploadPromises);

  return true;
};

export const deleteTravel = async (travelId: number) => {
  const folderName = `${travelId}/`;

  const { data: files, error: listError } = await supabase.storage
    .from("travels-images")
    .list(folderName);

  if (listError) {
    throw new Error("Error listing files:" + listError.message);
  } else if (files && files.length > 0) {
    const filePaths = files.map((file) => `${folderName}${file.name}`);
    const { error: deleteError } = await supabase.storage
      .from("travels-images")
      .remove(filePaths);

    if (deleteError) {
      throw new Error("Error deleting files:" + deleteError.message);
    }
  }
  const { data, error } = await supabase
    .from("travels")
    .delete()
    .eq("id", travelId);

  if (error) throw new Error(error.message);
  return data;
};
