import MacWindowFrame from '@/app/components/MacWindowFrame';
import { Project } from '@/app/consts';
import Image from 'next/image';

import { ReactNode } from 'react';

// Create a function that takes the project and returns the sections
export const MutantTrumpsSections = (project: Project): ReactNode[] => {
  return [
    <div key={0} className="flex justify-center w-full">
      <div className="">
        <p>{project.description}</p>
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center w-full" key={1}>
      <MacWindowFrame
        src={project.galleryDesktop[1].image}
        alt={project.name}
        width={900}
        height={600}
      />
    </div>,
    <div className="flex w-full items-center justify-center gap-20" key={2}>
      <Image
        src={project.galleryMobile[0].image}
        alt={project.name}
        width={250}
        height={250}
        className="rounded-xl border border-black shadow-xl"
      />
      <Image
        src={project.galleryMobile[1].image}
        alt={project.name}
        width={250}
        height={250}
        className="rounded-xl border border-black shadow-xl"
      />
    </div>,
  ];
};

export const MutantTrumpsSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key={1} className="flex justify-center text-sm w-full">
      <div className="">
        <p>{project.description}</p>
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center w-full" key={2}>
      <MacWindowFrame
        src={project.galleryDesktop[1].image}
        alt={project.name}
        width={900}
        height={600}
      />
    </div>,
    <div className="flex max-w-full items-center justify-center gap-20" key={3}>
      <Image
        src={project.galleryMobile[0].image}
        alt={project.name}
        width={150}
        height={150}
        className="rounded-xl border border-black shadow-xl"
      />
      <Image
        src={project.galleryMobile[1].image}
        alt={project.name}
        width={150}
        height={150}
        className="rounded-xl border border-black shadow-xl"
      />
    </div>,
  ];
};
