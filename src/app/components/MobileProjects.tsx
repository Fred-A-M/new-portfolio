import { projects } from '../consts';
import Image from 'next/image';
import Link from 'next/link';

export default function DesktopProjects() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Work</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>

      {/* Left column with scrolling images */}
      <div className="flex flex-col gap-10">
        {projects.map(project => (
          <Link href={project.link} className="flex flex-col gap-2 w-full" key={project.name}>
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={600}
              className="rounded-xl rounded-br-[100px] border-2 border-black shadow-lg"
            />
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
