'use client';
import { useState, useEffect } from 'react';
import { projects } from '../consts';
import SlidingImage from './SlidingImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function DesktopProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isFlipped, setIsFlipped] = useState(false);

  // Trigger flip animation when activeProject changes
  useEffect(() => {
    setIsFlipped(prev => !prev);
  }, [activeProject]);

  return (
    <div className="flex flex-col gap-10 pt-28 w-full">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <div className="text-lg">Work</div>
          <span className="w-full h-[1px] bg-black"></span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 w-[90%] mx-auto">
        {/* Left column with scrolling images */}
        <div className="flex flex-col gap-10">
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
        <div style={{ perspective: '1000px' }}>
          <motion.div
            className="sticky top-1/2 -translate-y-1/4 flex justify-center items-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: isFlipped ? 180 : 0,
              rotateZ: isFlipped ? 180 : 0,
              rotateX: isFlipped ? 180 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-amber-100/10 backdrop-blur-sm p-8 h-52 rounded-sm shadow-lg font-['Helvetica'] border-black/10 w-[70%]"
              >
                <h2 className="text-2xl font-bold mb-4">{activeProject.name}</h2>
                <p className="text-lg mb-4">{activeProject.client}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
