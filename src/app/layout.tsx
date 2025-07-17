import { Righteous } from 'next/font/google';
import { Bruno_Ace_SC } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

// Load the font
const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
});

const brunoAceSC = Bruno_Ace_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bruno-ace-sc',
});

export const metadata: Metadata = {
  title: "Portfolio By Yash",
  description: "I’m a passionate full-stack developer with experience in building scalable web applications using React, Next.js, TypeScript, Node.js, and .NET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${righteous.variable} ${brunoAceSC.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
