import { Project } from '@/app/consts';
import { ReactNode } from 'react';
import Image from 'next/image';
// Create a function that takes the project and returns the sections
export const GossSections = (project: Project): ReactNode[] => {
  return [
    <div className="flex max-w-full items-center justify-center gap-20" key={3}>
      <div className="w-[300px] flex items-center justify-center">
        <Image
          src={project.galleryMobile[0].image}
          alt={project.name}
          width={200}
          height={0}
          className="rounded-xl border border-[var(--main)] shadow-xl w-full h-auto"
        />
      </div>
      <div className="w-[300px] flex items-center justify-center">
        <Image
          src={project.galleryMobile[1].image}
          alt={project.name}
          width={200}
          height={0}
          className="rounded-xl border border-[var(--main)] shadow-xl w-full h-auto"
        />
      </div>
    </div>,
  ];
};

export const GossSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key={1} className="flex justify-center text-sm w-full">
      <div className="text-md">
        <p>{project.description}</p>
      </div>
    </div>,
    <div className="flex max-w-full items-center justify-center gap-20" key={3}>
      <div className="w-[200px] flex items-center justify-center">
        <Image
          src={project.galleryMobile[0].image}
          alt={project.name}
          width={200}
          height={0}
          className="rounded-xl border border-[var(--main)] shadow-xl w-full h-auto"
        />
      </div>
      <div className="w-[200px] flex items-center justify-center">
        <Image
          src={project.galleryMobile[1].image}
          alt={project.name}
          width={200}
          height={0}
          className="rounded-xl border border-[var(--main)] shadow-xl w-full h-auto"
        />
      </div>
    </div>,
  ];
};
