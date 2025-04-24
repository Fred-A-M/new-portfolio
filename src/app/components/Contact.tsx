import { about } from '../consts';

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 w-full h-screen items-center">
      <div className="flex flex-col gap-1 w-full">
        <div className="text-lg">About</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>
      <div className="flex flex-col sm:w-[80%] w-full gap-2">
        <p className="sm:text-4xl text-2xl">{about}</p>
      </div>
    </div>
  );
}
