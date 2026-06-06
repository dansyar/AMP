import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMP AI Champions Hub",
  description:
    "Industry blueprints for AMP's AI Fluency ideathon and AI Champion programme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
