import { projects } from '../consts';
import Link from 'next/link';

export default function DesktopProjects() {
  return (
    <div id="work" className="flex flex-col gap-10 w-full scroll-mt-24">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Work</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>

      {/* Left column with scrolling images */}
      <div className="flex flex-col gap-10">
        {projects.map(project => (
          <Link
            href={project.link}
            className="flex flex-col gap-2 w-full"
            key={project.name}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl rounded-br-[100px] shadow-lg border-2 border-black"
            >
              <source src={project.image.mp4} type="video/mp4" />
              <source src={project.image.webm} type="video/webm" />
            </video>
            <div className="text-sm flex flex-col pl-1">
              <p className="font-bold">{project.name}</p>
              <p>{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
