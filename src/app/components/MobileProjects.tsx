'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { projectsMobile } from '../consts';
import Link from 'next/link';
import { motion } from 'framer-motion';

// More dramatic "random-looking" positions with larger offsets
const POSITIONS = [
  { x: -60, y: -130, rotation: -5 },  // Significantly off to left and up
  { x: -90, y: -110, rotation: 9 },    // Significantly off to right
  { x: -60, y: -150, rotation: -6 },    // Far down, slightly left
  { x: -100, y: -130, rotation: 10 },  // Far up, significantly right  
  { x: -70, y: -210, rotation: 7 },    // Far left
  { x: -110, y: -160, rotation: -15 },   // Very far down, slightly right
  { x: -60, y: -200, rotation: -15 },    // Very far up
  { x: -100, y: -185, rotation: 6 },   // Down and left
  { x: -65, y: -250, rotation: 6 },    // Far right
  { x: -90, y: -245, rotation: -7 }, // Far up and left
];

const SCALES = [
  { scale: 1.2 },
  { scale: 0.9 },
  { scale: 1.3 },
  { scale: 1.3 },
  { scale: 1.5 },
  { scale: 0.8 },
  { scale: 0.9 },
  { scale: 1.4 },
  { scale: 1.1 },
  { scale: 1.3 },
];

export default function ProjectsScattered() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="h-[700px]"></div>;
  }

  return (
    <div className="relative w-full h-full pb-10">
      {/* Remove the grid structure for more freedom */}
      <div className="relative px-4 w-full h-full pb-10">
        {projectsMobile.map((project, index) => {
          // Get position from our predefined array
          const position = POSITIONS[index % POSITIONS.length];
          const scale = SCALES[index % SCALES.length];
          // Define animation parameters
          const floatDuration = 3 + (index % 3);
          const floatDelay = index * 0.1;
          const floatAmount = 3; // Increased for more noticeable motion
          
          const isHovered = hoveredIndex === index;
          
          // Calculate base position in the container
          // This gives us a staggered "base" layout to offset from
          const column = index % 2;
          const row = Math.floor(index / 2);
          const baseX = column * 50 + 25; // 25% or 75% across
          const baseY = row * 200 + 150;  // Spaced 200px apart vertically
          
          return (
            <motion.div 
              key={index} 
              className="absolute z-10 pb-10"
              style={{
                transformOrigin: 'center center',
                // Position absolutely with percentage left/top
                left: `${baseX}%`,
                top: `${baseY}px`,
              }}
              initial={{
                x: position.x,
                y: position.y,
                rotate: position.rotation,
                scale: 1
              }}
              animate={
                isHovered 
                  ? {
                      scale: 1.2,
                      zIndex: 30,
                      x: position.x,
                      y: position.y,
                      rotate: position.rotation,
                    }
                  : {
                      y: [position.y, position.y - floatAmount, position.y, position.y + floatAmount, position.y],
                      x: [position.x, position.x + floatAmount, position.x, position.x - floatAmount, position.x],
                      rotate: [
                        position.rotation, 
                        position.rotation + 3, 
                        position.rotation, 
                        position.rotation - 3, 
                        position.rotation
                      ],
                      scale: scale.scale,
                      zIndex: 10,
                    }
              }
              transition={
                isHovered
                  ? {
                      duration: 0.3,
                      ease: "easeOut",
                    }
                  : {
                      duration: floatDuration,
                      ease: "easeInOut",
                      times: [0, 0.25, 0.5, 0.75, 1],
                      repeat: Infinity,
                      delay: floatDelay,
                      scale: {
                        duration: 0,
                        repeat: 0
                      }
                    }
              }
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link href={project.link || ""}>
                <div className="relative group">
                  <div className="relative">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      width={150}
                      height={0}
                      style={{ 
                        height: 'auto',
                        maxHeight: '150px',
                        width: 'auto',
                        maxWidth: '150px',
                        filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.4))'
                      }}
                      quality={95}
                      className="object-contain transition-all duration-300 group-hover:opacity-40"
                      priority={true}
                      loading="eager"
                    />
                  </div>
                  
                  {/* Tagline overlay - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black text-lg text-center px-2 font-extrabold">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}