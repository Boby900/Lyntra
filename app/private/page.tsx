import { redirect } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@/utils/supabase/server";
import React from 'react';

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <Auth supabaseClient={supabase} />
      <p>Hello {data.user.email}</p>
    </>
  );
}
