import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { blobs1, blobs2, letters, lettersMobile } from '../consts';

interface HeaderProps {
  isMobile?: boolean;
}

export default function Header({ isMobile = false }: HeaderProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const controlsBlob1 = useAnimationControls();
  const controlsBlob2 = useAnimationControls();

  useEffect(() => {
    // Set up looping animations
    controlsBlob1.start({
      d: [blobs1[0], blobs1[1], blobs1[2], blobs1[0]],
      transition: {
        duration: 10,
        ease: 'easeInOut',
        times: [0, 0.33, 0.66, 1],
        repeat: Infinity,
        repeatType: 'loop',
      },
    });

    controlsBlob2.start({
      d: [blobs2[0], blobs2[1], blobs2[2], blobs2[0]],
      transition: {
        duration: 15, // Different duration for variety
        ease: 'easeInOut',
        times: [0, 0.33, 0.66, 1],
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.1]);
  const opacityWords = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 10, 180, 720]);
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 25, 250]);
  const y2 = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, -25, -250]);

  const letterMap = isMobile ? lettersMobile : letters;

  return (
    <>
      {/* Scrollable container */}
      <div className="relative h-[300vh]" ref={ref}>
        {/* This div should be empty - no content here */}
      </div>

      {/* Blob container - separate from scrollable content */}
      <div
        className="fixed z-[-1]"
        style={{
          width: `600px`,
          height: `600px`,
          left: `40%`,
          top: `50%`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="-100 -100 200 200"
          style={{ transformOrigin: 'center', scale, opacity }}
        >
          <motion.path fill="#6c63ff" animate={controlsBlob1} initial={{ d: blobs1[0] }} />
        </motion.svg>
      </div>

      <div
        className="fixed z-[-1]"
        style={{
          width: `300px`,
          height: `300px`,
          left: `80%`,
          top: `25%`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="-100 -100 200 200"
          style={{ transformOrigin: 'center', scale, opacity }}
        >
          <motion.path fill="#6c63ff" animate={controlsBlob2} initial={{ d: blobs2[0] }} />
        </motion.svg>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center">
        {letterMap.map((letter, index) => (
          <motion.span
            key={index}
            className="sm:text-4xl text-2xl whitespace-pre"
            style={{ rotate, opacity: opacityWords, y: index % 2 === 0 ? y1 : y2 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </>
  );
}
