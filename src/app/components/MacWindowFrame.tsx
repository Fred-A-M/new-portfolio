'use client';
import Image from 'next/image';

interface MacWindowFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function MacWindowFrame({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
}: MacWindowFrameProps) {
  return (
    <div
      className={`shadow-xl w-full max-w-full ${className}`}
      style={{ maxWidth: width ? `${width}px` : '100%' }}
    >
      <div className="border overflow-hidden text-[6px] md:text-[.6vw] rounded-[4px] md:rounded-[8px]">
        {/* Header with traffic light dots */}
        <div className="flex w-full border-b  p-[4px] md:px-[1em] md:py-[0.8em]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border border-blue relative mr-[.6em] h-[1em] w-[1em] rounded-full last:mr-0"
            />
          ))}
        </div>
        {/* Image */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          priority
          loading="eager"
        />
      </div>
    </div>
  );
}
