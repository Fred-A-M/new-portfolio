'use client';
import MobileProjectPage from '@/app/work/components/MobileProjectPage';
import { Project, projects } from '@/app/consts';
import { useEffect, useState } from 'react';
import DesktopProjectPage from '../components/DesktopProjectPage';
import { StandardSections, StandardSectionsMobile } from '../standard-sections';
export default function AliceDowdall() {
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

  const project = projects.find(
    project => project.name === 'Alice Dowdall: Portfolio'
  );
  return (
    <>
      {isMobile ? (
        <MobileProjectPage
          project={project as Project}
          sections={StandardSectionsMobile(project as Project)}
        />
      ) : (
        <DesktopProjectPage
          project={project as Project}
          sections={StandardSections(project as Project)}
        />
      )}
    </>
  );
}
