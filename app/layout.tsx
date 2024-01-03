"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import { Navbar } from "./components/navbar";
import { ReactNode } from "react";
import AppFooter from "./components/footer/appFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: '../public/favicon.ico',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl-Pl" data-bs-theme="dark">
      <body>
        <Navbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
