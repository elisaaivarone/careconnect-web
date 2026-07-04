import { createClient } from '@supabase/supabase-js';

// Pegando as chaves do arquivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Criando e exportando o "cliente" do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);