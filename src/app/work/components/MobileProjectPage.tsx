'use client';

import { Project } from '@/app/consts';
import { ReactNode } from 'react';
import ProjectFooter from './ProjectFooter';
import ProjectHeaderMobile from './ProjectHeaderMobile';

interface ProjectPageProps {
  project: Project;
  sections: ReactNode[];
}

export default function ProjectPage({ project, sections }: ProjectPageProps) {
  if (!project) {
    return <div>Project not found</div>;
  }

  // Create an interleaved array of descriptions and image

  return (
    <div className="flex flex-col w-full justify-center gap-10 pt-28">
      <ProjectHeaderMobile project={project as Project} />

      {sections.map((section, index) => (
        <div key={index} className="w-full">
          {section}
        </div>
      ))}

      <ProjectFooter project={project as Project} isMobile={true} />
    </div>
  );
}
