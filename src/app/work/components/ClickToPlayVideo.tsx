'use client';

import { useRef, useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

interface ClickToPlayVideoProps {
  mp4: string;
  webm: string;
  poster: string;
}

export default function ClickToPlayVideo({
  mp4,
  webm,
  poster,
}: ClickToPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
      setHasPlayed(true);
    }
  };

  return (
    <div className="relative w-[150px] rounded-xl border border-black shadow-xl overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        className="w-full h-auto rounded-xl"
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>

      {!hasPlayed && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center transition"
        >
          <PlayCircleIcon className="w-8 h-8 text-white" />
        </button>
      )}
    </div>
  );
}
