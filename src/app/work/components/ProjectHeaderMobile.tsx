import MacWindowFrame from '@/app/components/MacWindowFrame';
import { Project } from '@/app/consts';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderMobile({ project }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="self-center">
        <MacWindowFrame
          src={project.galleryDesktop[0].gif ?? project.galleryDesktop[0].image}
          alt={project.name}
          width={900}
          height={600}
        />
      </div>

      <p className="text-2xl font-bold">{project.name}</p>

      <div className="text-sm grid grid-cols-2 gap-2 ">
        <div className="col-span-1 flex flex-col w-fit">
          <p className="font-bold">Client</p>
          <p>{project.client}</p>
        </div>
        <div className="col-span-1 row-span-2 flex w-fit flex-col">
          <p className="font-bold">Tools</p>
          {project.tools.map((tool, idx) => (
            <p key={idx}>{tool}</p>
          ))}
        </div>
        <div className="col-span-1 flex flex-col w-fit self-end">
          <p className="font-bold">Roles</p>
          {project.roles.map((role, idx) => (
            <p key={idx}>{role}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
