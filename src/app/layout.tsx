import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/NavBar';
import Scroll from './Scroll';

export const metadata: Metadata = {
  title: 'fred-a-m.dev',
  description: 'Fred Moore: Web Developer, London, UK',
  openGraph: {
    title: 'fred-a-m.dev',
    description: 'Fred Moore: Web Developer, London, UK',
    images: [
      {
        url: '/fred-a-m.png', // Path relative to the public directory
        width: 1200,
        height: 1200,
        alt: 'Fred Moore - Web Developer',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/blob2.svg',
    apple: '/blob2.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Scroll />
      <body className={`h-screen`}>
        <Navbar />
        <main className="px-5 sm:px-10 pb-10">{children}</main>
      </body>
    </html>
  );
}
