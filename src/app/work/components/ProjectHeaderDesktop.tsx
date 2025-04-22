"use client";

import StaticImage from '@/app/components/StaticImage';
import { Project } from '@/app/consts';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Custom hook for a single paragraph animation
function useAnimatedParagraph(
  scrollYProgress: MotionValue<number>,
  index: number,
  total: number
) {
  // Calculate how much scroll progress to allocate per paragraph
  const segmentSize = total > 0 ? 0.5 / total : 0.05;
  const startPoint = index * segmentSize;
  const endPoint = startPoint + segmentSize;

  // Create the y transform for this paragraph
  const y = useTransform(
    scrollYProgress,
    [startPoint, endPoint],
    ["100vh", "0vh"]
  );

  return { y };
}

// Wrapper component for an animated paragraph
function AnimatedParagraph({ 
  text, 
  index, 
  total, 
  scrollProgress 
}: { 
  text: string; 
  index: number; 
  total: number; 
  scrollProgress: MotionValue<number>;
}) {
  const { y } = useAnimatedParagraph(scrollProgress, index, total);
  
  return (
    <motion.p 
      style={{ y }}
      className="origin-left transition-opacity"
    >
      {text}
    </motion.p>
  );
}

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderDesktop({ project }: ProjectHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Use the scroll position to animate the description
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div className="relative h-[250vh]" ref={headerRef}> {/* two viewport heights */}
      <div className="sticky top-24 h-[75vh] grid grid-cols-2">
        {/* Left: scrollable title + description */}
        <div className="flex flex-col gap-2 justify-center sticky-text-wrapper">
          {/* Title section - starts visible */}
          <motion.div 
            className="text-block sm:text-4xl text-xl"
            style={{ y: 0 }}
          >
            <p className="radio-canada-big-bold">{project.name}</p>
            <p>{project.client}</p>
          </motion.div>
          
          {/* Description container */}
          <motion.div 
            className="text-block-description text-lg flex flex-col gap-2"
          >
            {project.description.map((desc, idx) => (
              <AnimatedParagraph
                key={idx}
                text={desc}
                index={idx}
                total={project.description.length}
                scrollProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>

        {/* Right: sticky image stays put during scroll */}
        <div className="flex items-center justify-center">
          <StaticImage
            src={project.gallery[0].image}
            alt={project.name}
            width={project.gallery[0].width || undefined}
            height={project.gallery[0].height || undefined}
          />
        </div>
      </div>
    </div>
  );
}