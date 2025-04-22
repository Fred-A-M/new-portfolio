import StaticImage from '@/app/components/StaticImage';
import { Project } from '@/app/consts';

interface ProjectHeaderProps {
  project: Project;
  isMobile?: boolean;
}

export default function ProjectHeader({ project, isMobile }: ProjectHeaderProps) {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col sm:gap-2 gap-0 sm:text-4xl text-xl">
          <p className="radio-canada-big-bold">{project.name}</p>
          <p>{project.client}</p>
        </div>
        {!isMobile && <div className="flex flex-col gap-2">
          {project.description.map((description, index) => (
            <p key={index} className="text-lg">{description}</p>
          ))}
        </div>}
      </div>
      <div className={`flex ${isMobile ? 'justify-end' : 'justify-center'} items-center h-full`}>
        <StaticImage 
          src={project.gallery[0].image} 
          alt={project.name}
          width={project.gallery[0].width || undefined}
          height={project.gallery[0].height || undefined}
        />
      </div>
    </div>
  );
}