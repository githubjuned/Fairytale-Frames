import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

interface FullscreenHeroVideoProps {
  onOpenInquiry?: () => void;
  onOpenVideoModal?: (filmId: string) => void;
}

const HERO_IMAGE_URL = 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/DSC02780_wjnhof.jpg';
const OPTIMIZED_HERO_IMAGE = getOptimizedImageUrl(HERO_IMAGE_URL, 2048);

export const FullscreenHeroVideo: React.FC<FullscreenHeroVideoProps> = () => {
  const handleScrollDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = document.querySelector('#capturing-moments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full h-[100dvh] min-h-[100svh] overflow-hidden bg-black flex items-center justify-center select-none"
    >
      {/* 4K Fullscreen Background Image - Edge-to-Edge Full Screen without text */}
      <img
        src={OPTIMIZED_HERO_IMAGE}
        alt="Fairytale Frames Hero Showcase"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Discrete Bottom-Center Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-1 cursor-pointer transition-transform"
          aria-label="Scroll down to content"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full bg-black/35 hover:bg-black/70 border border-white/25 group-hover:border-[#D4AF37] flex items-center justify-center backdrop-blur-sm shadow-md transition-colors"
          >
            <ChevronDown className="w-4 h-4 text-white group-hover:text-[#D4AF37] transition-colors" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};
