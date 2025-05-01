import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/NavBar';
import Scroll from './Scroll';

export const metadata: Metadata = {
  title: 'fred-a-m.dev',
  description: 'Fred Moore: Web Developer, London',
  openGraph: {
    title: 'Fred Moore',
    description: 'Web Developer: London',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 629,
        alt: 'Fred Moore - Web Developer',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/blob.png',
    apple: '/blob.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen`}>
        <Scroll />
        <div className="background-grid" />
        <Navbar />
        <main className="px-5 sm:px-10 pb-10">{children}</main>
      </body>
    </html>
  );
}
