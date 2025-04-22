"use client";

import { Project } from "@/app/consts";
import ProjectFooter from '../components/ProjectFooter';
import ProjectHeaderDesktop from '../components/ProjectHeaderDesktop';

interface ProjectPageProps {
  project: Project | undefined;
  sections: React.ReactNode[];
}

export default function DesktopProjectPage({ project, sections }: ProjectPageProps) {

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-20 w-full h-full mb-10">
      <ProjectHeaderDesktop project={project} />

      {sections && sections.map((section, index) => (
        <div key={index}>
          {section}
        </div>
      ))}

      <ProjectFooter project={project} />
    </div>
  );
}