'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import DesktopProjects from './components/DesktopProjects';
import Header from './components/Header';
import MobileProjects from './components/MobileProjects';
import Contact from './components/Contact';
export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }

  return (
    <div
      className={`flex justify-center ${!isMobile && 'min-h-[calc(100vh-150px)]'}`}
    >
      <div
        className={`flex flex-col w-full items-center justify-center 
          ${isMobile ? 'gap-15' : 'gap-20'}`}
      >
        <Header />
        {isMobile ? <MobileProjects /> : <DesktopProjects />}
        <Contact />
      </div>
    </div>
  );
}
