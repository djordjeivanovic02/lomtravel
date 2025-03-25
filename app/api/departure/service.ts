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

export const deleteDeparture = async (id: number) => {
  const { data, error } = await supabase
    .from("departures")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
};

export const deleteTravelDepartures = async (id: number) => {
  const { data, error } = await supabase
    .from("departures")
    .delete()
    .eq("travel_id", id);

  if (error) throw new Error(error.message);
  return data;
};
