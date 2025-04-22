"use client";

import { Project } from "@/app/consts";
import { ReactNode } from 'react';
import ProjectFooter from './ProjectFooter';
import ProjectHeader from './ProjectHeader';

interface ProjectPageProps {
  project: Project;
  sections: ReactNode[];
}

export default function ProjectPage({ project, sections }: ProjectPageProps) {
  

  if (!project) {
    return <div>Project not found</div>;
  }

  // Create an interleaved array of descriptions and images
  const createInterleavedContent = () => {
    const result = [];
    const maxLength = Math.max(
      Array.isArray(project.description) ? project.description.length : 1, 
      sections.length
    );
    
    for (let i = 0; i < maxLength; i++) {
      // Add gallery item if available first
      
      
      // Add description item if available
      if (Array.isArray(project.description) && i < project.description.length) {
        result.push({
          type: 'description',
          content: project.description[i],
          index: i
        });
      } else if (!Array.isArray(project.description) && i === 0) {
        // Handle case where description is a string
        result.push({
          type: 'description',
          content: project.description,
          index: 0
        });
      }

      if (i < sections.length) {
        result.push({
          type: 'section',
          content: sections[i],
          index: i
        });
      }
    }
    
    return result;
  };
  
  const interleavedContent = createInterleavedContent();

  return (
    <div className="flex flex-col w-full justify-center gap-5 mb-5">
      <ProjectHeader project={project as Project} isMobile={true} />
      
        {/* Interleaved content */}
        {interleavedContent.map((item, ) => {
          if (item.type === 'description') {
            return (
              <div key={`desc-${item.index}`} className="w-full">
                <p className="text-md">{item.content}</p>
              </div>
            );
          } else {
            return (
              <div key={`section-${item.index}`} className="w-full">
                {item.content}
              </div>
            );
          }
        })}
     
      <ProjectFooter project={project as Project} isMobile={true} />
    </div>
    
      
    
  );
}