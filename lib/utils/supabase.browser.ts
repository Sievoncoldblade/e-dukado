import { Database } from "@/lib/database.types";
import { CookieOptions, createBrowserClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

const SUPABASE_KEY = "SUPABASE_CLIENT_API_KEY"; // local
const SUPABASE_URL = "http://127.0.0.1:54321"; // local
// const cookieStore = cookies();

// export const createClientBrowser = () => createBrowserClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
export const createClientBrowser = () => createBrowserClient<Database>(SUPABASE_URL!, SUPABASE_KEY!);
