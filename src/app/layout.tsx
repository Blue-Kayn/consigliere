import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Consigliere — Your Man in London & Dubai",
  description: "Luxury property advisory for discerning clients. Short-term rentals, long-term residences, and strategic property acquisitions in London and Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
