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
    amount: 0.3,
    margin: '-30% 0px -30% 0px',
  });

  return (
    <div style={{ perspective: '1000px' }} className="flex justify-center pt-15">
      <motion.div
        className="sticky top-1/2 -translate-y-1/4 flex justify-center items-center shadow-xl bg-amber-100/20  h-52 rounded-xs text-black/70 flex-col border-2 border-black w-[70%] text-center"
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
            <h2 className="text-xl font-bold mb-4">{activeProject.name}</h2>
            <p className="text-lg">{activeProject.client}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
