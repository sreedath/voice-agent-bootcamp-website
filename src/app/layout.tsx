import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voice Agent Engineering Bootcamp | Vizuara",
  description:
    "Build real-time voice agents from scratch in 8 days. Master ASR, TTS, LLMs, streaming pipelines, and agentic workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
