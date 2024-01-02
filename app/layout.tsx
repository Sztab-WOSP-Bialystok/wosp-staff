import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import { Navbar } from "./components/navbar";
import { ReactNode } from "react";
import AppFooter from "./components/footer/appFooter";
import type { Metadata } from "next";
import { SSRProvider } from "./bootstrap";

export const metadata: Metadata = {
  title: {
    template: "%s | Sztab WOŚP Białystok #6314",
    default: "Sztab WOŚP Białystok #6314", // a default is required when creating a template
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="pl-Pl">
        <body>
          <Navbar />
          {children}
          <AppFooter />
        </body>
      </html>
  );
}
