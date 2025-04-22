"use client";
import Image from 'next/image';

interface StaticImageProps {
  src: string;
  alt: string;
  rotation?: number;
  position?: {
    x: number | string;
    y: number | string;
  };
  isMobile?: boolean;
  width?: number;
  height?: number;
  zIndex?: number;
  className?: string;
}

export default function StaticImage({
  src,
  alt,
  rotation = 0,
  isMobile = false,
  width = 0,
  height = 0,
  zIndex = 20,
  className = "",
}: StaticImageProps) {
  return (
    <div 
      style={{
        zIndex: zIndex,
        transform: `rotate(${rotation}deg)`,
        transition: 'all 0.3s ease-in-out',
      }}
      className="hover:scale-120 hover:z-30"
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width ? width : 800}
        height={height ? height : 800}
        style={{
          maxWidth: width ? `${width}px` : (isMobile ? "250px" : "450px"),
          maxHeight: height ? `${height}px` : (isMobile ? "300px" : "600px"),
          width: "auto",
          height: "auto",
          objectFit: "contain",
          filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
        }}
        className={`rounded-sm ${className}`}
        priority={true}
        loading="eager"
      />
    </div>
  );
}