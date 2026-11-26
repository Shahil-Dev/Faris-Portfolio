
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Poppins, Montserrat } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Real Estate Film Portfolio",
    template: "%s | Real Estate Film Portfolio",
  },
  description:
    "Cinematic real estate video editing, visual storytelling, property films, and creative video production.",
  applicationName: "Real Estate Film Portfolio",
  keywords: [
    "Real Estate Video Editing",
    "Cinematic Property Films",
    "Real Estate Videography",
    "Video Editor Portfolio",
    "Property Video Production",
  ],
  openGraph: {
    title: "Real Estate Film Portfolio",
    description:
      "Transforming real estate footage into cinematic visual experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
