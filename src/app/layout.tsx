import "./global.css";

import { PropsWithChildren } from "react";
import { Metadata } from "next";

import { Header } from "@/components/core/Header";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Bruno Alves | Portifolio" } as Metadata;
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
