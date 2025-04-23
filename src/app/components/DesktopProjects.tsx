'use client';
import { useState, useEffect } from 'react';
import { projects } from '../consts';
import SlidingImage from './SlidingImage';
import DescriptionCard from './DescriptionCard';

export default function DesktopProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isFlipped, setIsFlipped] = useState(false);

  // Trigger flip animation when activeProject changes
  useEffect(() => {
    setIsFlipped(prev => !prev);
  }, [activeProject]);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <div className="text-lg">Work</div>
          <span className="w-full h-[1px] bg-black"></span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 w-[90%] mx-auto">
        {/* Left column with scrolling images */}
        <div className="flex flex-col gap-20">
          {projects.map(project => (
            <div className="flex w-full" key={project.name}>
              <SlidingImage
                src={project.image}
                alt={project.name}
                width={600}
                height={600}
                onInView={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Right column with fixed card */}
        <DescriptionCard isFlipped={isFlipped} activeProject={activeProject} />
      </div>
    </div>
  );
}
