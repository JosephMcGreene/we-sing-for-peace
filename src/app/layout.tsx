import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import localFont from "next/font/local";

const lackFont = localFont({
  src: "../../public/lack-regular-webfont.woff",
  variable: "--font-lack",
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Sing for Peace",
  description:
    "Join us in singing for peace and solidarity in our communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lackFont.className}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
