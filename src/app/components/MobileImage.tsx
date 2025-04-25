import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Project } from '../consts';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function MobileImage({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.play().catch(() => {}); // play if in view
    } else {
      video.pause(); // pause if out of view
    }
  }, [inView]);

  return (
    <Link href={project.link} className="flex flex-col gap-2 w-full" ref={ref}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        poster={project.image.image}
        className="rounded-xl rounded-br-[100px] shadow-lg border-2 border-black"
      >
        <source src={project.image.webm} type="video/webm" />
        <source src={project.image.mp4} type="video/mp4" />
      </video>

      <div className="text-sm flex flex-col pl-1">
        <p className="font-bold">{project.name}</p>
        <p>{project.tagline}</p>
      </div>
    </Link>
  );
}
