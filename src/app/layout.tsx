import "./global.css";

import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/core/Header";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Bruno Alves | Portifolio" } as Metadata;
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className="bg-black700">
        <Header />
        <main>{children}</main>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
