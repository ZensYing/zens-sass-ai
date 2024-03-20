// plugins/supabaseClient.js

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
  }
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

