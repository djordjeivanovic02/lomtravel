import { Travel } from "@/app/interfaces/travel";
import { supabase } from "@/lib/supabase";

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

export const createTravel = async (travel: Travel) => {
  const { data, error } = await supabase
    .from("travels")
    .insert([travel])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};
