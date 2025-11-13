import { createClient } from '@supabase/supabase-js';
import { Car } from 'lucide-react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  image_url: string;
  engine: string;
  fuel_type: string;
  transmission: string;
  color: string;
  description: string;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// let Car = {
//   id: "carpars",
//   name: "pars",
//   brand: "pejo",
//   price: 1000000000,
//   year: 1400,
//   image_url: "iran-peugeot-pars-elx-official-car-of-v0-7ma32v4g82fa1.webp",
//   engine: "gfggfd",
//   fuel_type: "dfgfddf",
//   transmission: "dfgfdg",
//   color: "fdgfd",
//   description: "fdgfd",
//   created_at: "fdgfdgfd",
// }