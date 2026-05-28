import { app } from "@/lib/config/app";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./global.css";

export const metadata: Metadata = {
  title: {
    default: app.name,
    template: `%s | ${app.name}`,
  },
  description: app.description,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "android-chrome",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
  ],
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#ffffff",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
