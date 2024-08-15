"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import { Navbar } from "../components/ui/navbar";
import { ReactNode } from "react";
import AppFooter from "../components/ui/footer/appFooter";

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
