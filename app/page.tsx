
import { createClient } from "@/utils/supabase/server";

export default  function Index() {
  const supabase = createClient();

  return (
    <>
    <div>
    landing page
    </div>
    </>
    
  );
}
