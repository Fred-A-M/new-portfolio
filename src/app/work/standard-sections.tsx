import MacWindowFrame from '@/app/components/MacWindowFrame';
import { Project } from '@/app/consts';

import { ReactNode } from 'react';

// Create a function that takes the project and returns the sections
export const StandardSections = (project: Project): ReactNode[] => {
  return [
    <div key={0} className="flex justify-center w-full">
      <div className="">
        <p>{project.description}</p>
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center w-full" key={1}>
      <MacWindowFrame
        mp4={project.galleryDesktop[1].mp4}
        webm={project.galleryDesktop[1].webm}
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
        className="rounded-xl border border-black shadow-xl"
        style={{ width: '250px', height: 'auto' }}
      >
        <source src={project.galleryMobile[0].mp4} type="video/mp4" />
        <source src={project.galleryMobile[0].webm} type="video/webm" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border border-black shadow-xl"
        style={{ width: '250px', height: 'auto' }}
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
      <div className="">
        <p>{project.description}</p>
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center w-full" key={2}>
      <MacWindowFrame
        mp4={project.galleryDesktop[1].mp4}
        webm={project.galleryDesktop[1].webm}
        alt={project.name}
        width={900}
        height={600}
      />
    </div>,
    <div className="flex max-w-full items-center justify-center gap-20" key={3}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={project.galleryMobile[0].image}
        className="rounded-xl border border-black shadow-xl"
        style={{ width: '150px', height: 'auto' }}
      >
        <source src={project.galleryMobile[0].mp4} type="video/mp4" />
        <source src={project.galleryMobile[0].webm} type="video/webm" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={project.galleryMobile[1].image}
        className="rounded-xl border border-black shadow-xl"
        style={{ width: '150px', height: 'auto' }}
      >
        <source src={project.galleryMobile[1].mp4} type="video/mp4" />
        <source src={project.galleryMobile[1].webm} type="video/webm" />
      </video>
    </div>,
  ];
};
