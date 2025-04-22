'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import BurgerIcon from './BurgerIcon';

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  
  // Track scroll direction and toggle navbar visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 300) {
      setIsVisible(true);
      lastScrollY.current = latest;
      return;
    }
    
    // Only trigger if scroll amount is significant (> 5px)
    if (latest > lastScrollY.current) {
      setIsVisible(false);
    } else if (latest < lastScrollY.current - 5) {
      setIsVisible(true);
    }
    
    lastScrollY.current = latest;
  });
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md px-5 sm:px-10"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-20 relative items-center">
          {/* Left div - positioned at the start */}
          <div className="flex items-center antique-olive md:text-4xl text-2xl text-background bg-foreground px-4 py-2 absolute">
            <Link href="/">PORTFOLIO</Link>
          </div>
          
          
          <div className="hidden sm:flex pl-40 xl:pl-0 items-center radio-canada-big text-xl gap-4 mx-auto h-full">
            <Link 
            href="/"
            className={`${pathname === '/' ? 'font-bold' : 'hover:underline'}`}
            >
              Work
            </Link>
            <Link 
            href="/contact"
            className={`${pathname === '/contact' ? 'font-bold' : 'hover:underline'}`}
            >
              Contact
            </Link>
          </div>
          
          {/* Right div - positioned at the end */}
          <div className="hidden sm:flex items-center gap-4 md:gap-8 absolute right-0">
            <Link href="https://www.instagram.com/alice_dowdall/">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/">
              <FaLinkedinIn size={20} />
            </Link>
          </div>

          <div className="flex absolute right-0 sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="hover:cursor-pointer"
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.2, y: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: 'var(--gradient)' }}
          >
            <div className="flex justify-between items-center h-24 px-5 sm:px-10">
              <div className="flex items-center antique-olive text-2xl text-background bg-foreground px-4 py-2">
                <Link href="/" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
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