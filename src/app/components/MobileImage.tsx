import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { Project } from '../consts';

export default function MobileImage({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current
        .play()
        .catch(err => console.log(`Failed to play: ${err}`));
    }
  }, [inView]);

  return (
    <Link href={project.link} className="flex flex-col gap-2 w-full" ref={ref}>
      <div className="relative">
        {inView ? (
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
        ) : null}
        <div
          className={`absolute inset-0 w-full h-full bg-gray-100 rounded-xl rounded-br-[100px] border-2 border-black shadow-lg ${inView ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url(${project.image.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 0.3s ease',
          }}
        />
      </div>

      <div className="text-sm flex flex-col pl-1">
        <p className="font-bold">{project.name}</p>
        <p>{project.tagline}</p>
      </div>
    </Link>
  );
}
