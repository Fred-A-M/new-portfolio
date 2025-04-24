'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface ImageProps {
  src?: string;
  alt: string;
  mp4?: string;
  webm?: string;
  rotation?: number;
  position?: {
    x: number | string;
    y: number | string;
  };
  width?: number;
  height?: number;
  zIndex?: number;
  onInView?: () => void;
  isSmallerScreen?: boolean;
}

export default function SlidingImage({
  src,
  alt,
  mp4,
  webm,
  rotation = 2,
  width,
  height,
  zIndex = 20,
  onInView,
  isSmallerScreen,
}: ImageProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.6,
    margin: isSmallerScreen ? '-35% 0px -35% 0px' : '-25% 0px -25% 0px',
    once: false,
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
              filter: 'blur(10px)',
            }
      }
      transition={
        isInView
          ? {
              duration: 0.3,
              ease: 'easeInOut',
            }
          : {}
      }
      ref={ref}
    >
      {!mp4 && !webm && (
        <Image
          src={src ?? ''}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-xl rounded-br-[100px] hover:rounded-br-xl object-contain transition-all duration-300 shadow-lg border-2 border-black`}
          priority
          loading="eager"
        />
      )}
      {mp4 && isInView && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={src} // optional fallback image
          className="rounded-xl rounded-br-[100px] hover:rounded-br-xl object-contain transition-all duration-300 shadow-lg border-2 border-black"
        >
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
        </video>
      )}
      <div className="pl-1">{alt}</div>
    </motion.div>
  );
}
