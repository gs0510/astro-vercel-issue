// import supabase from "./supabase";

// export async function getEvents() {
//   const { data, error } = await supabase.from("events").select("*");

//   return data || [];
// }

export function getGeoFilter(mi = 60) {
  return `nearby(38.8920807, -77.0823054, ${mi}mi)`;
}
