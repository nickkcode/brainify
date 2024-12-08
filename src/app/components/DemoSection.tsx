'use client';
import { motion, useAnimation, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef } from 'react';

interface DemoSectionProps {
  videoUrl: string;
  ss_1: StaticImageData;
}

const DemoSection: React.FC<DemoSectionProps> = ({ videoUrl, ss_1 }) => {
  const mainControls = useAnimation();
  const sideControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mainControls.start('visible');
          sideControls.start('visible');
        } else {
          sideControls.start('hidden');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [mainControls, sideControls]);

  // Add scaling effect based on scroll position for the main element
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the scroll factor (0 to 1)
      const scrollFactor = Math.min(1, Math.max(0, (windowHeight - top) / height));

      // Trigger scaling based on scrollFactor
      mainControls.start({
        scale: 1 + scrollFactor * 0.1, // Scale between 1.0 and 1.1
        transition: {
          duration: 0.3,
        },
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mainControls]);

  // Variants for side elements
  const sideVariants: Variants = {
    hidden: (direction: number) => ({
      scale: 1,
      opacity: 0.6,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    }),
    visible: {
      scale: 0.9,
      opacity: 0.2,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="flex justify-center -translate-y-[100px] relative"
    >
      {/* Main Element */}
      <motion.div
        className="relative overflow-hidden z-10 rounded-lg shadow-2xl w-[60%] border"
        animate={mainControls}
      >
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-lg"
        ></video>
      </motion.div>

      {/* Right Side Element */}
      <motion.div
        className="absolute -right-96 bottom-10 opacity-60 z-0 overflow-hidden rounded-lg shadow-2xl w-[50%] border"
        custom={1} // Right direction
        variants={sideVariants}
        initial="hidden"
        animate={sideControls}
      >
        <Image
          src={ss_1}
          alt="Right Side Element"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>

      {/* Left Side Element */}
      <motion.div
        className="absolute -left-96 bottom-10 opacity-60 z-0 overflow-hidden rounded-lg shadow-2xl w-[50%] border"
        custom={-1} // Left direction
        variants={sideVariants}
        initial="hidden"
        animate={sideControls}
      >
        <Image
          src={ss_1}
          alt="Left Side Element"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default DemoSection;
