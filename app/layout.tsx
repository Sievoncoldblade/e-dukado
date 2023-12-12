import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-Dukado LMS",
  description: "Learning Management System for SRES Central I",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
