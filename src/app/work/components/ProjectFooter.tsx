import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Project, projects } from '@/app/consts';

interface ProjectFooterProps {
  project: Project;
  isMobile?: boolean;
}

export default function ProjectFooter({
  project,
  isMobile = false,
}: ProjectFooterProps) {
  const projectIndex = projects.findIndex(p => p.name === project.name);
  const nextProject = projects[projectIndex + 1];
  const previousProject = projects[projectIndex - 1];

  return (
    <div
      className={`grid grid-cols-2 items-center ${isMobile ? 'text-lg' : 'text-3xl'}`}
    >
      <div className="flex justify-start">
        {previousProject && (
          <Link href={`${previousProject.link}`} scroll={false}>
            <div className="flex items-center gap-2 hover:underline">
              <ChevronLeftIcon
                className={`stroke-2 ${isMobile ? 'w-4 h-4' : 'w-8 h-8'}`}
              />
              <span className="hidden lg:block">{previousProject.name}</span>
              <span className="lg:hidden">Previous</span>
            </div>
          </Link>
        )}
      </div>
      <div className="flex justify-end hover:underline">
        {nextProject && (
          <Link href={`${nextProject.link}`} scroll={false}>
            <div className="flex items-center gap-2 hover:underline">
              <span className="text-right lg:hidden">Next</span>
              <span className="text-right hidden lg:block">
                {nextProject?.name}
              </span>
              <ChevronRightIcon
                className={`stroke-2 ${isMobile ? 'w-4 h-4' : 'w-8 h-8'}`}
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
