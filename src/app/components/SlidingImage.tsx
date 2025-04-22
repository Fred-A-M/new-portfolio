'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  rotation?: number;
  position?: {
    x: number | string;
    y: number | string;
  };
  width?: number;
  height?: number;
  zIndex?: number;
  onInView?: () => void;
}

export default function SlidingImage({
  src,
  alt,
  rotation = 2,
  width,
  height,
  zIndex = 20,
  onInView,
}: ImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: '-25% 0px -25% 0px',
  });

  useEffect(() => {
    if (isInView && onInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <motion.div
      style={{
        transformOrigin: 'center center',
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      animate={
        isInView
          ? {
              rotate: rotation,
              x: 100,
              y: 0,
              zIndex: 30,
            }
          : {
              rotate: 0,
              zIndex: zIndex ? zIndex : 20,
              filter: 'blur(4px)',
            }
      }
      transition={
        isInView
          ? {
              duration: 0.5,
              ease: 'easeInOut',
            }
          : {}
      }
      ref={ref}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-xl rounded-br-[100px] hover:rounded-br-xl object-contain transition-all duration-300 shadow-lg border-2 border-black`}
        priority={true}
        loading="eager"
      />
    </motion.div>
  );
}
