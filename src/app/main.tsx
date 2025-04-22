'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import DesktopProjects from './components/DesktopProjects';
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
    <div className={`flex justify-center ${!isMobile && 'min-h-[calc(100vh-150px)]'}`}>
      {isMobile ? (
        <div className="w-full h-full"></div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <DesktopProjects />
        </div>
      )}
    </div>
  );
}
