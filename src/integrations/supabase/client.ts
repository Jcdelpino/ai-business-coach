// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xazocpvqdeuqodetyzcg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhem9jcHZxZGV1cW9kZXR5emNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NTUxMzcsImV4cCI6MjA1MjAzMTEzN30.6kboWpwIJ28QrS_aZxTlwH0b_kt6hXl_c2cTEIqPz9w";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);