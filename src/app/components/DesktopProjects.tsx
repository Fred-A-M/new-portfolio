'use client';
import { useState, useEffect } from 'react';
import { projects } from '../consts';
import SlidingImage from './SlidingImage';
import DescriptionCard from './DescriptionCard';
import Link from 'next/link';

export default function DesktopProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth < 900);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger flip animation when activeProject changes
  useEffect(() => {
    setIsFlipped(prev => !prev);
  }, [activeProject]);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Work</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>

      <div className="grid grid-cols-2 gap-20 w-full lg:w-[90%] mx-auto mb-20">
        {/* Left column with scrolling images */}
        <div className="flex flex-col gap-20">
          {projects.map(project => (
            <Link
              href={project.link}
              className="flex w-full"
              key={project.name}
            >
              <SlidingImage
                src={project.image}
                alt={project.name}
                width={600}
                height={600}
                onInView={() => setActiveProject(project)}
                isSmallerScreen={isSmallerScreen}
              />
            </Link>
          ))}
        </div>

        {/* Right column with fixed card */}
        <DescriptionCard isFlipped={isFlipped} activeProject={activeProject} />
      </div>
    </div>
  );
}
