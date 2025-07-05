import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Darumadrop_One, Kanit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { AuthProvider } from "@/contexts/AuthContext";

const darumadropOne = Darumadrop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-darumadrop-one",
});

const kanit = Kanit({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adsevia - Ad Creation Platform",
  description: "Create and manage your ads with AI assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${darumadropOne.variable} ${kanit.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
