import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabaseUrl = "https://vuievlksbricfqqsublo.supabase.co";
export const supabasePublishableKey = "sb_publishable_mHWzWvgMznF802Tt316YDQ_u93FNc-p";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

export function createAdminClient(accessToken) {
  return createClient(supabaseUrl, supabasePublishableKey, {
    accessToken: async () => accessToken,
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}