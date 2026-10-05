import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Online E-Commerece Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}