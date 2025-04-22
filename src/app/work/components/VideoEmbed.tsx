export default function VideoEmbed({ video }: { video: string }) {
  
  return (
    <div key="video" className="flex justify-center items-center w-full">
    <div className="w-full max-w-4xl aspect-video">
      <iframe
        src={video}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full rounded-sm"
      />
    </div>
  </div>
  );
}