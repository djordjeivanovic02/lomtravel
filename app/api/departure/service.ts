import { Departure } from "@/app/interfaces/departure";
import { supabase } from "@/lib/supabase";

export const createDeparture = async (departure: Departure) => {
  const { data, error } = await supabase
    .from("departures")
    .insert([departure])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};
