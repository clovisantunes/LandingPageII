import type { Metadata } from "next";
import './styles/global.scss';

export const metadata: Metadata = {
  title: "LandingPage II",
  description: "Generated by create next app",
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
