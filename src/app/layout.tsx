import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Kushwaha | Video Editor & Creative Designer",
  description: "Crafting stunning visual stories through video and image editing. 1.5+ years of professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased selection:bg-rose-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
