import { projects } from '../consts';
import Image from 'next/image';

export default function MobileProjects() {
  return (
    <div id="work" className="flex flex-col gap-10 w-full scroll-mt-24">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Work</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>

      {/* Left column with scrolling images */}
      <div className="flex flex-col gap-16">
        {projects.map(project => (
          <Image
            key={project.name}
            src={project.image.gif ?? project.image.image}
            alt={project.name}
            width={900}
            height={600}
            className="rounded-xl rounded-br-[100px] shadow-lg border-2 border-black h-auto w-full"
            priority
            loading="eager"
          />
        ))}
      </div>
    </div>
  );
}
