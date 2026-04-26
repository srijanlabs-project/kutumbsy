import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kutumbsy",
  description: "Digital family legacy platform for preserving stories, roots, and relationships.",
  icons: {
    icon: "/logo_1kutumb.png",
    apple: "/logo_1kutumb.png",
    shortcut: "/logo_1kutumb.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${playfair.variable} ${lora.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
