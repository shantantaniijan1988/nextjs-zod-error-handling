import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/ubuntu-sans-mono";
import "@fontsource-variable/m-plus-1-code";

import { Navigation } from "@/app/components/Navigation";

export const metadata: Metadata = {
  title: "Nextjs zod error handling",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-custom text-gray-700">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
