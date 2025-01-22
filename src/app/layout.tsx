import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Layer Caker",
  description: "Layer Caker is a manufacturer of delicious cakes.",
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
