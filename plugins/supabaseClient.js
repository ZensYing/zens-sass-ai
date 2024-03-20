// plugins/supabaseClient.js

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://axzqeugbjsdwpetkilrv.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key are required.')
  }
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
