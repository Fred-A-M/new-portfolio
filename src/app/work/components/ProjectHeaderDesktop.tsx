'use client';

import MacWindowFrame from '@/app/components/MacWindowFrame';
import { Project } from '@/app/consts';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Custom hook for a single paragraph animation

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderDesktop({ project }: ProjectHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  // Use the scroll position to animate the description
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], ['0vh', '-100vh']);
  const yDescription = useTransform(
    scrollYProgress,
    [0, 0.7],
    ['100vh', '0vh']
  );

  return (
    <div className="relative h-[300vh] flex justify-center" ref={headerRef}>
      {' '}
      {/* two viewport heights */}
      <div className="sticky top-24 h-[75vh] grid grid-cols-2 w-[90%]">
        {/* Left: scrollable title + description */}
        <div className="relative h-full flex justify-center">
          {/* Title section – now absolutely centered */}
          <motion.div
            className="sm:text-4xl text-xl absolute top-1/2 -translate-y-1/2"
            style={{ y: yTitle }}
          >
            <p className="font-bold">{project.name}</p>
          </motion.div>

          {/* Description container – absolutely positioned so it doesn’t push the title */}
          <motion.div
            className="text-sm grid grid-cols-2 gap-2 absolute top-1/2 -translate-y-1/2"
            style={{ y: yDescription }}
          >
            <div className="col-span-1 flex flex-col w-fit">
              <p className="font-bold">Client</p>
              <p>{project.client}</p>
            </div>
            <div className="col-span-1 row-span-2 flex w-fit flex-col">
              <p className="font-bold">Tools</p>
              {project.tools.map((tool, idx) => (
                <p key={idx}>{tool}</p>
              ))}
            </div>
            <div className="col-span-1 flex flex-col w-fit self-end">
              <p className="font-bold">Roles</p>
              {project.roles.map((role, idx) => (
                <p key={idx}>{role}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: sticky image stays put during scroll */}
        <div className="flex items-center justify-center">
          <MacWindowFrame
            mp4={project.image.mp4}
            webm={project.image.webm}
            alt={project.name}
            width={550}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
