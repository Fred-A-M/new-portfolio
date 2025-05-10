import MacWindowFrame from '@/app/components/MacWindowFrame';
import { Project } from '@/app/consts';
import { ReactNode } from 'react';
import Image from 'next/image';
// Create a function that takes the project and returns the sections
export const StandardSections = (project: Project): ReactNode[] => {
  return [
    <div className="flex flex-col items-center justify-center w-full" key={1}>
      <MacWindowFrame
        mp4={project.galleryDesktop[1].mp4}
        webm={project.galleryDesktop[1].webm}
        src={project.galleryDesktop[1].image}
        alt={project.name}
        width={900}
        height={600}
      />
    </div>,
    <div className="flex w-full items-center justify-center gap-20" key={2}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border border-[var(--main)] shadow-xl"
        style={{ width: '250px', height: 'auto' }}
        poster={project.galleryMobile[0].image}
      >
        <source src={project.galleryMobile[0].mp4} type="video/mp4" />
        <source src={project.galleryMobile[0].webm} type="video/webm" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border border-[var(--main)] shadow-xl"
        style={{ width: '250px', height: 'auto' }}
        poster={project.galleryMobile[1].image}
      >
        <source src={project.galleryMobile[1].mp4} type="video/mp4" />
        <source src={project.galleryMobile[1].webm} type="video/webm" />
      </video>
    </div>,
  ];
};

export const StandardSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key={1} className="flex justify-center text-sm w-full">
      <div className="text-md">
        <p>{project.description}</p>
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center w-full" key={2}>
      <MacWindowFrame
        src={project.galleryDesktop[1].gif ?? project.galleryDesktop[1].image}
        alt={project.name}
        width={900}
        height={600}
      />
    </div>,
    <div className="flex max-w-full items-center justify-center gap-20" key={3}>
      <div className="w-[200px] flex items-center justify-center">
        <Image
          src={project.galleryMobile[0].gif ?? project.galleryMobile[0].image}
          alt={project.name}
          width={200}
          height={0}
          className="rounded-xl border border-[var(--main)] shadow-xl w-full h-auto"
        />
      </div>
      <div className="w-[200px] flex items-center justify-center">
        <Image
          src={project.galleryMobile[1].gif ?? project.galleryMobile[1].image}
          alt={project.name}
          width={200}
          height={0}
          className="rounded-xl border border-[var(--main)] shadow-xl w-full h-auto"
        />
      </div>
    </div>,
  ];
};
