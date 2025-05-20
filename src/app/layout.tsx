import "./globals.css";
import type { Metadata } from "next";
import { Lato, Asap } from "next/font/google";
import ClientBody from "./ClientBody";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const asap = Asap({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-asap",
});

export const metadata: Metadata = {
  title: "VIET TIN MEDIC",
  description: "Công ty cổ phần xuất nhập khẩu thương mại dịch vụ thiết bị y tế Việt Tín",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} ${asap.variable}`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
