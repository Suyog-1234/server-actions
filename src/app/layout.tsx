import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "../style/globals.css";
import { Toaster } from 'sonner'
import ReactQueryProvider from "@/lib/providers.ts/ReactQueryProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins" });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${space.variable}`}>
        <Toaster richColors />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
