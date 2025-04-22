"use client";
import MobileProjectPage from "@/app/work/components/MobileProjectPage";
import { Project, projects, projectsMobile } from "@/app/consts";
import { useEffect, useState } from 'react';
import { GiffGaffSections, GiffGaffSectionsMobile } from './sections';
import DesktopProjectPage from '../components/DesktopProjectPage';

export default function GiffGaff() {
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

  const project = isMobile ? projectsMobile.find(project => project.name === "Have a Proper Chat") 
    : projects.find(project => project.name === "Have a Proper Chat");

  return (
    <>
      {isMobile ? (
        <MobileProjectPage project={project as Project} sections={GiffGaffSectionsMobile(project as Project)} />
      ) : (
        <DesktopProjectPage project={project as Project} sections={GiffGaffSections(project as Project)} />
      )}
    </>
  );
}