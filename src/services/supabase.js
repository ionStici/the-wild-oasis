import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jfguacptfzzjtnrtvmwu.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmZ3VhY3B0Znp6anRucnR2bXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2MTMxMjIsImV4cCI6MjAzNjE4OTEyMn0.wlm-vPppCTrmXAyT4u7RAB-AUOmyVKELcENZMmhWrrY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
