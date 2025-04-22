import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import Scroll from './Scroll';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Scroll />
      <body
        className={`radio-canada-big antialiased h-screen`}
        style={{ 
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        <Navbar />
        <main className="px-5 sm:px-10 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
