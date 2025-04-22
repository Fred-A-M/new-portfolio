"use client";

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { features } from '../consts';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickSlider extends Slider {
  slickPlay: () => void;
  slickPause: () => void;
}

export default function FeaturesLoop() {
  const sliderRef = useRef<SlickSlider>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Handle visibility changes to prevent catch-up behavior
  useEffect(() => {
    const handleVisibilityChange = () => {
      // Stop and restart slider when visibility changes
      if (sliderRef.current) {
        const slider = sliderRef.current;
        
        if (document.hidden) {
          // Page is hidden, pause the slider
          slider.slickPause();
        } else {
          // Page is visible again, restart from current position without catch-up
          slider.slickPlay();
        }
      }
    };

    // Check if element is in viewport
    const handleScroll = () => {
      if (containerRef.current && sliderRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInViewport = (
          rect.top >= -rect.height &&
          rect.top <= window.innerHeight
        );
        
        if (isInViewport) {
          sliderRef.current.slickPlay();
        } else {
          sliderRef.current.slickPause();
        }
      }
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Clean up
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="-mx-5 sm:-mx-10 w-screen relative" ref={containerRef}>
      <div className="px-5 sm:px-10 font-bold sm:text-2xl text-lg mb-3">
        Work featured in...
      </div>

      <div className="w-full">
        <Slider ref={sliderRef} {...settings}>
          {features.map((src, index) => (
            <div key={index} className="h-[80px] flex items-center justify-center box-border">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={src}
                  alt={`featured-logo-${index}`}
                  width={150}
                  height={80}
                  className="object-contain max-h-[80px] max-w-[150px] w-auto h-auto"
                  priority={true}
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}