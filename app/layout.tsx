import { GeistSans } from "geist/font/sans";
import "./globals.css";
import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createContext } from 'react';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Lyntra",
  description: "An ecommerce platform for the modern web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en" className={GeistSans.className}>
        <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </body>
      </html>

  );
}

// refrence code 
