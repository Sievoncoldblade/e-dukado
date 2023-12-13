"use server";

import createClientServer from "./supabase.server";

export async function useSession() {
  const supabase = await createClientServer();
  const session = await supabase.auth.getSession();
  const userId = session.data.session?.user.id;
  const response = await supabase
    .from("profiles")
    .select()
    .eq("id", userId as string);
  return await { session: session, response: response };
}
