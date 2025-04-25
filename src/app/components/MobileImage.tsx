import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Project } from '../consts';
import Image from 'next/image';
export default function MobileImage({ project }: { project: Project }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Link href={project.link} className="flex flex-col gap-2 w-full" ref={ref}>
      {inView ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={project.image.image} // optional fallback image
          className="rounded-xl rounded-br-[100px] shadow-lg border-2 border-black"
        >
          <source src={project.image.webm} type="video/webm" />
          <source src={project.image.mp4} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={project.image.image ?? ''}
          alt={project.name}
          width={900}
          height={600}
          className="rounded-xl rounded-br-[100px] shadow-lg border-2 border-black h-auto w-full"
          priority
          loading="eager"
        />
      )}

      <div className="text-sm flex flex-col pl-1">
        <p className="font-bold">{project.name}</p>
        <p>{project.tagline}</p>
      </div>
    </Link>
  );
}
