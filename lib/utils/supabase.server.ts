"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../database.types";

export default async function createClientServer() {
  const cookieStore = cookies();

  const SUPABASE_KEY = "SUPABASE_CLIENT_API_KEY"; // local
  const SUPABASE_URL = "http://127.0.0.1:54321"; // local

  // return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
  return createServerClient<Database>(SUPABASE_URL!, SUPABASE_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: "", ...options });
      },
    },
  });
}
