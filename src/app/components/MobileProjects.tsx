import { useRef } from 'react';
import { useEffect } from 'react';
import { projects } from '../consts';
import Link from 'next/link';

export default function MobileProjects() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // iOS hack to enable autoplay on user interaction
    const handleUserInteraction = () => {
      videoRefs.current.forEach(video => {
        if (video) video.play().catch(e => console.log(e));
      });
    };

    document.documentElement.addEventListener(
      'touchstart',
      handleUserInteraction,
      { once: true }
    );

    // Use IntersectionObserver to load videos when they become visible
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            // When video comes into view, make sure it's playing
            video.play().catch(e => console.log(e));

            // Force load by setting the current time
            if (video.readyState === 0) {
              video.load();
              video.currentTime = 0.1;
            }
          } else {
            // Optionally pause when out of view to save resources
            // video.pause();
          }
        });
      },
      { threshold: 0.1 }
    ); // Start loading when 10% visible

    // Observe all video elements
    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="work" className="flex flex-col gap-10 w-full scroll-mt-24">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Work</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>

      {/* Left column with scrolling images */}
      <div className="flex flex-col gap-10">
        {projects.map(project => (
          <Link
            href={project.link}
            className="flex flex-col gap-2 w-full"
            key={project.name}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl rounded-br-[100px] shadow-lg border-2 border-black"
            >
              <source src={project.image.mp4} type="video/mp4" />
              <source src={project.image.webm} type="video/webm" />
            </video>
            <div className="text-sm flex flex-col pl-1">
              <p className="font-bold">{project.name}</p>
              <p>{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
