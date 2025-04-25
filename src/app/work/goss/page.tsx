'use client';
import MobileProjectPage from '@/app/work/components/MobileProjectPage';
import { Project, projects } from '@/app/consts';
import { useEffect, useState } from 'react';
import DesktopProjectPage from '../components/DesktopProjectPage';
import { GossSections, GossSectionsMobile } from './sections';
export default function Goss() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
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

  const project = projects.find(project => project.name === 'Goss');
  return (
    <>
      {isMobile ? (
        <MobileProjectPage
          project={project as Project}
          sections={GossSectionsMobile(project as Project)}
        />
      ) : (
        <DesktopProjectPage
          project={project as Project}
          sections={GossSections(project as Project)}
        />
      )}
    </>
  );
}
