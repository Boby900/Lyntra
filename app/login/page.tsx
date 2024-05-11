"use client";
import { login, signup } from './actions'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);

const LoginPage = function () {
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // if (!session) {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{
        theme: ThemeSupa,
      }}
      theme="dark"
      providers={["google", "facebook"]}
    >
    <form>
    <label htmlFor="email">Email:</label>
    <input id="email" name="email" type="email" required />
    <label htmlFor="password">Password:</label>
    <input id="password" name="password" type="password" required />
    <button formAction={login}>Log in</button>
    <button formAction={signup}>Sign up</button>
  </form>
  </Auth>

  );  
};  

export default LoginPage;
