import Link from 'next/link';

import { about, tools } from '../consts';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-10 w-full items-center scroll-mt-24 inter-thin"
    >
      <div className="flex flex-col gap-1 w-full">
        <div className="sm:text-xl text-lg">Contact</div>
        <span className="w-full h-[1px] bg-black"></span>
      </div>
      <div className="flex flex-col lg:w-[80%] w-full gap-10 sm:text-2xl text-xl">
        <p className="text-color">{about}</p>
        <p>
          Currently freelancing part-time at{' '}
          <a
            href="https://argoxyz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Argo AI
          </a>
          {', helping to build their\u00A0front-end.'}
        </p>
        <p>
          Handy with the following tools but just as eager to pick up new ones:
          {' ' + tools.join(', ')}.
        </p>
        <p>
          I&apos;m always looking for new projects and collaborations. If
          you&apos;d like to get in touch, email me at{' '}
          <a href="mailto:fred.a.m.dev@gmail.com" className="underline">
            fred.a.m.dev@gmail.com
          </a>
          , or use the links below.
        </p>
        <div className="flex gap-10">
          <Link href="https://github.com/Fred-A-M">
            <FaGithub className="sm:w-15 sm:h-15 w-10 h-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/frederic-moore/">
            <FaLinkedinIn className="sm:w-15 sm:h-15 w-10 h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
