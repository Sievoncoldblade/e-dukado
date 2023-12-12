"use server";

import createClientServer from "./supabase.server";

export async function useSession() {
  const supabase = await createClientServer();

  return await { session: supabase.auth.getSession(), user: "user placeholder" };
}
