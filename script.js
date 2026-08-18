const SUPABASE_URL = "lvjcvmpytnwweckrhtjf";
const SUPABASE_KEY = "sb_publishable_g8SteLwdjRXBY-BFjXr7_g_NbKk_wt-";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
function buy(product){alert(product + " selected!\n\nConnect your payment gateway here to complete checkout.");}
