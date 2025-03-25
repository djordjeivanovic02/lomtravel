import { Departure } from "./departure";

export interface Travel {
  id?: number;
  title?: string;
  location?: string;
  date?: Date;
  price?: number;
  images?: string[];
  number_of_seats?: number;
  duration?: number;
  description?: string;
  created_at?: Date;
  departures?: Departure[];
  is_popular?: number;
}
