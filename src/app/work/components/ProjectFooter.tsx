import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Project, projects, projectsMobile } from '@/app/consts';

interface ProjectFooterProps {
  project: Project;
  isMobile?: boolean;
}

export default function ProjectFooter({ project, isMobile = false }: ProjectFooterProps) {
  let nextProject: Project ;
  let previousProject: Project;

  if (isMobile) {
    const projectIndex = projectsMobile.findIndex(p => p.name === project.name);
    nextProject = projectsMobile[projectIndex + 1];
    previousProject = projectsMobile[projectIndex - 1];
  } else {
    const projectIndex = projects.findIndex(p => p.name === project.name);
    nextProject = projects[projectIndex + 1];
    previousProject = projects[projectIndex - 1];
  }

  return (
    <div className={`grid grid-cols-2 items-center ${isMobile ? 'text-lg' : 'text-3xl'}`}>
      <div className="flex justify-start">
        {previousProject && (
          <Link href={`${previousProject.link}`} scroll={false}>
            <div className="flex items-center gap-2 hover:underline">
              <ChevronLeftIcon className={`stroke-2 ${isMobile ? 'w-4 h-4' : 'w-8 h-8'}`} />
              <span className="radio-canada-big-bold hidden lg:block">{previousProject.tagline}</span>
              <span className="radio-canada-big-bold lg:hidden">Previous</span>
            </div>
          </Link>
        )}
      </div>
      <div className="flex justify-end hover:underline">
        {nextProject && (
          <Link href={`${nextProject.link}`} scroll={false}>
            <div className="flex items-center gap-2 hover:underline">
              <span className="radio-canada-big-bold text-right lg:hidden">Next</span>
              <span className="radio-canada-big-bold text-right hidden lg:block">{nextProject?.tagline}</span>
              <ChevronRightIcon className={`stroke-2 ${isMobile ? 'w-4 h-4' : 'w-8 h-8'}`} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}