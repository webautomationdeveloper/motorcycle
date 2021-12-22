import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wlkwwyzkeahqvkhwijjq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTk4NjUyMCwiZXhwIjoxOTU1NTYyNTIwfQ.kK4GZ4oGgjfaUpaIMtOQbit_odCgHNcFjIS1Y2NeyHc";
export const Supabase = createClient(supabaseUrl, supabaseAnonKey);
