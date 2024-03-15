import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, I'm Hinson",
  description: "Hinson's site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link href="https://applesocial.s3.amazonaws.com" rel="preconnect" />
      </head>

      <body className={inter.className}>
        {/* eslint-disable-next-line @next/next/no-img-element  -- can't use this*/}
        <img
          alt="tracker"
          className="absolute opacity-0"
          referrerPolicy="unsafe-url"
          src="https://pixel.flatypus.me/flatypus.me"
        />
        {children}
      </body>
    </html>
  );
}
