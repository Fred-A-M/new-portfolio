import { projects } from '../consts';
import MobileImage from './MobileImage';

export default function MobileProjects() {
  return (
    <div id="work" className="flex flex-col gap-10 w-full scroll-mt-24">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Work</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>

      {/* Left column with scrolling images */}
      <div className="flex flex-col gap-15">
        {projects.map(project => (
          <MobileImage key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
