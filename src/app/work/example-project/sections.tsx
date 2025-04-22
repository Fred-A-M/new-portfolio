import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";

// Create a function that takes the project and returns the sections
export const GiffGaffSections = (project: Project): ReactNode[] => {
  return [
    <div key="videoandimage" className="grid grid-cols-2 items-center w-full lg:w-[80%] mx-auto"> 
      <div className="flex justify-center">
        <iframe
          src={project.video}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-[400px] h-[400px] rounded-sm"
        />
      </div>
      <div className="flex justify-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
        />
      </div>
    </div>,

    <div key="gallery" className="grid grid-cols-2 lg:w-[70%] w-[100%] mx-auto">
      <div className="flex col-span-1 justify-start items-center">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1.5}
          width={550}
          height={550}
        />
      </div>
      <div className="flex flex-col col-span-1 gap-4">
        <div className="self-end">
          <StaticImage 
            src={project.gallery[3].image} 
            alt={project.name} 
            rotation={2}
            width={800}
            height={800}
          />
        </div>
        <div className="self-start">
          <StaticImage 
            src={project.gallery[4].image} 
            alt={project.name} 
            rotation={-2}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  ];
};

export const GiffGaffSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="videoandimage" className="grid grid-cols-2 items-center w-full sm:w-[80%] mx-auto"> 
      <div className="flex justify-center">
        <iframe
          src={project.video}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-[200px] h-[200px] rounded-sm"
        />
      </div>
      <div className="flex justify-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
          isMobile={true}
        />
      </div>
    </div>,

    <div key="gallery" className="grid grid-cols-2 sm:w-[70%] w-full mx-auto">
      <div className="flex col-span-1 justify-start items-center">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1.5}
          isMobile={true}
        />
      </div>
      <div className="flex flex-col col-span-1 gap-4">
        <div className="self-end">
          <StaticImage 
            src={project.gallery[3].image} 
            alt={project.name} 
            rotation={2}
            isMobile={true}
          />
        </div>
        <div className="self-start">
          <StaticImage 
            src={project.gallery[4].image} 
            alt={project.name} 
            rotation={-2}
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  ];
};

  