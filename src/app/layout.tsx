import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Funtime | Find the best event to have fun.",
  description: "Explore events near to your position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
