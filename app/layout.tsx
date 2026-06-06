import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMP AI Champions Hub",
  description:
    "Industry blueprints for AMP's 1-day AI Fluency ideathon.",
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
