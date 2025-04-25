import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Project } from '../consts';

export default function MobileImage({ project }: { project: Project }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px 0px',
  });

  return (
    <Link href={project.link} className="flex flex-col gap-2 w-full" ref={ref}>
      {inView ? (
        <video
          autoPlay
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
      ) : (
        <div className="aspect-video w-full bg-gray-100 rounded-xl rounded-br-[100px] border-2 border-black shadow-lg" />
      )}

      <div className="text-sm flex flex-col pl-1">
        <p className="font-bold">{project.name}</p>
        <p>{project.tagline}</p>
      </div>
    </Link>
  );
}
