import { createClientBrowser } from "../utils/supabase.browser";
import createClientServer from "../utils/supabase.server";

export const fetchUser = async (userId: string) => {
  const supabase = await createClientBrowser();
  return await supabase.from("profiles").select().eq("id", userId);
};
