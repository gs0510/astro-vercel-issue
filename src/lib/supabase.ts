import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://nfrlaycowlgljgsgbpmy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mcmxheWNvd2xnbGpnc2dicG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyMDMwODQsImV4cCI6MTk2Mjc3OTA4NH0.rH2iqbjWpgMz9eZathhz-qtJWNbpJZ0BGncKj_azHJI"
);

export default supabase;
