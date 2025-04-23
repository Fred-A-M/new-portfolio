'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md px-5 sm:px-10">
        <div className="flex h-20 relative items-center">
          {/* Left div - positioned at the start */}
          <div className="flex items-center md:text-4xl transition-all duration-300 text-2xl">
            <Link href="/">Fred Moore</Link>
          </div>

          <div className="flex absolute text-2xl md:text-4xl right-0">
            <button onClick={() => setIsOpen(!isOpen)} className="hover:cursor-pointer">
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.2, y: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: 'white' }}
          >
            <div className="flex justify-between items-center h-24 px-5 sm:px-10">
              <div className="flex items-center text-2xl md:text-4xl">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Fred Moore
                </Link>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="w-10 h-10" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-10 radio-canada-big text-4xl">
              <Link
                href="/"
                className={`${pathname === '/' ? 'font-bold' : 'hover:underline'}`}
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>

              <Link
                href="/contact"
                className={`${pathname === '/contact' ? 'font-bold' : 'hover:underline'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Social links in mobile menu */}
              <div className="flex gap-8 mt-8">
                <Link href="https://www.instagram.com/" onClick={() => setIsOpen(false)}>
                  <FaInstagram size={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/" onClick={() => setIsOpen(false)}>
                  <FaLinkedinIn size={30} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
