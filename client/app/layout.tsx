import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Darumadrop_One, Kanit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import {
  ClerkProvider,
  // SignInButton,
  // SignUpButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from "@clerk/nextjs";

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
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:brightness-110",
          card: "bg-white/70 backdrop-blur border border-gray-200",
          headerTitle: "text-gray-900",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50",
          formFieldInput: "border border-gray-200 focus:border-purple-500",
          footerActionLink: "text-purple-500 hover:text-purple-600",
        },
        layout: {
          socialButtonsPlacement: "bottom",
          logoPlacement: "inside",
          logoImageUrl: "/logo.png",
        },
      }}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      redirectUrl="/dashboard"
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${darumadropOne.variable} ${kanit.variable} antialiased`}
        >
          <Header />
          <main>{children}</main>
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
{
  /* <header className="border-b">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
  <h1 className="text-xl font-bold">Adsevia</h1>
  <div className="flex items-center gap-4">
    <SignedOut>
      <SignInButton mode="modal">
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Sign in
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Sign up
        </button>
      </SignUpButton>
    </SignedOut>
    <SignedIn>
      <UserButton afterSignOutUrl="/" />
    </SignedIn>
  </div>
</div>
</header> */
}
