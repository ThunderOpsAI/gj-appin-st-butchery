import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G&J Appin St Butchery | Wangaratta Butcher - Meat Packs & Christmas Hams",
  description: "Fresh local meats, $50 & $100 weekly meat packs, house-made sausages and traditional wood-smoked Christmas hams at 92 Appin Street, Wangaratta. Call (03) 5721 3822.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-200 selection:text-amber-900 bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
