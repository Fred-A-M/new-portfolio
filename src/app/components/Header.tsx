import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { blobs1, blobs2 } from '../consts';

export default function Header() {
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
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.05]);

  return (
    <>
      {/* Scrollable container */}
      <div className="relative h-[200vh]" ref={ref}>
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
    </>
  );
}
