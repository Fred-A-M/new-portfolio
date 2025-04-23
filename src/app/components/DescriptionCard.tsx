import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Project } from '../consts';
import { useRef } from 'react';

interface DescriptionCardProps {
  isFlipped: boolean;
  activeProject: Project;
}

export default function DescriptionCard({ isFlipped, activeProject }: DescriptionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 1,
    margin: '-20% 0px -20% 0px',
  });

  return (
    <div
      style={{ perspective: '1000px' }}
      className="flex justify-end lg:justify-center pt-10 lg:pt-15"
    >
      <motion.div
        className="sticky top-1/2 -translate-y-1/4 flex flex-col justify-center items-center shadow-xl bg-amber-100/20 h-32 lg:h-48 rounded-xs text-black border border-black w-[70%] text-center"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        ref={ref}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateY: isFlipped ? 180 : 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-xs md:text-sm px-12 xl:whitespace-pre-line">
              {activeProject.tagline}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
