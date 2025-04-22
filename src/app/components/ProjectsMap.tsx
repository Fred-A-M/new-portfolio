'use client';

import { useEffect, useState, useRef } from "react";
// import dynamic from 'next/dynamic';
import Image from "next/image";
// Import icons for custom arrows
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { projects } from '../consts';
import Link from 'next/link';
// Dynamic import to avoid SSR issues
// const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function ProjectsMap() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndexRef = useRef(currentIndex);

  const radius = 350;
  const projectsPerView = 5;
  const verticalOffset = 80;  // Your existing vertical offset
  const horizontalOffset = -110; // Adjust this value to move the arch left or right
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Track direction of movement
  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);
  
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }
  
  // Get projects for display and track their positions
  const displayedProjects: {
    originalIndex: number;
    positionIndex: number;
    name: string;
    description: string[];
    image: string;
  }[] = [];
  for (let i = 0; i < projectsPerView; i++) {
    const projectIndex = (currentIndex + i) % projects.length;
    displayedProjects.push({
      ...projects[projectIndex],
      originalIndex: projectIndex,
      positionIndex: i,
    });
  }
  
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      {/* Navigation buttons */}
      <button 
        onClick={prevProject}
        className="absolute left-10 top-1/2 z-40 p-3 bg-white/90 rounded-full shadow-md hover:bg-white transform -translate-y-1/2 transition-all"
        aria-label="Previous project"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
      </button>
      
      <button 
        onClick={nextProject}
        className="absolute right-10 top-1/2 z-40 p-3 bg-white/90 rounded-full shadow-md hover:bg-white transform -translate-y-1/2 transition-all"
        aria-label="Next project"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800" />
      </button>
      
      
      <div className="absolute">
        {projects.map((project, idx) => {
          // Find if this project is currently displayed
          const displayInfo = displayedProjects.find(p => p.originalIndex === idx);
          const isVisible = !!displayInfo;
          
          // Calculate its position (either visible or offscreen waiting to enter)
          let positionIndex = isVisible ? displayInfo.positionIndex : -1;
          
          // For offscreen items, determine if they're waiting to enter from left or right
          if (!isVisible) {
            // Calculate how far this item is from entering the view
            const distanceFromCurrent = (idx - currentIndex + projects.length) % projects.length;
            
            if (distanceFromCurrent >= projectsPerView) {
              // Will enter from left (as prev is clicked)
              positionIndex = -1;
            } else {
              // Will enter from right (as next is clicked)
              positionIndex = projectsPerView;
            }
          }
          
          // Calculate angle for arch position (including offscreen positions)
          // Map position indices to angles in the full circle
          // -1 (off left) = 1.0 * Math.PI (left side)
          // 0 to projectsPerView-1 = scaled from Math.PI to 2*Math.PI (visible arch)
          // projectsPerView (off right) = 0.0 (right side)
          
          let angle;
          if (positionIndex === -1) {
            angle = Math.PI; // Left side
          } else if (positionIndex === projectsPerView) {
            angle = 2 * Math.PI; // Right side
          } else {
            angle = Math.PI + (Math.PI * positionIndex) / (projectsPerView - 1);
          }
          
          // Apply horizontal offset to x-coordinate
          const x = Math.cos(angle) * radius + horizontalOffset;
          const y = Math.sin(angle) * radius + verticalOffset;
          
          // Calculate opacity based on visibility
          const opacity = isVisible ? 1 : 0;
          
          return (
            <motion.div
              key={idx}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: 'translate(-50%, -50%)',
                zIndex: isVisible ? (20 - displayInfo?.positionIndex) : 0,
              }}
              animate={{
                left: `50%`,   // Center point
                top: `50%`,    // Center point
                x: x,          // Offset from center horizontally
                y: y,          // Offset from center vertically (with adjustment)
                opacity,
                scale: isVisible ? 1 : 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1,
              }}
            >
              <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden shadow-2xl border-4 shadow-black hover:border-4 hover:border-black hover:cursor-pointer">
                <Link href={project.link || ""}>
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    sizes="220px"
                    quality={95}
                  className="object-cover"
                />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Pagination indicators */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              (index >= currentIndex && index < currentIndex + projectsPerView) || 
              (currentIndex + projectsPerView > projects.length && 
               index < (currentIndex + projectsPerView) % projects.length)
                ? 'bg-black' 
                : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}