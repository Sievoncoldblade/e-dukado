"use server";

import createClientServer from "@/lib/utils/supabase.server";

export async function signUpWithEmailAndPassword(data: { email: string; password: string; confirmPassword: string }) {
  const supabase = await createClientServer();
  const result = await supabase.auth.signUp({ email: data.email, password: data.password });
  return JSON.stringify(result);
}
export async function signInWithEmailAndPassword(data: { email: string; password: string }) {
  const supabase = await createClientServer();
  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}

export async function signOut() {
  const supabase = await createClientServer();
  const result = await supabase.auth.signOut();
  return JSON.stringify(result);
}