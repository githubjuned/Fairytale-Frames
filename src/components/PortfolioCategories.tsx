import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

interface PortfolioCategoriesProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOpenInquiry?: () => void;
}

// Sub-component 1: Background Typography "WORK"
export const WorkBackgroundTitle: React.FC<{ text?: string }> = ({ text = "WORK" }) => (
  <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-0">
    <h1 className="text-[26vw] font-montserrat font-[900] text-black/[0.04] leading-none tracking-tighter uppercase">
      {text}
    </h1>
  </div>
);

// Sub-component 2: Left Vertical Progress & Index Widget
export const ProjectProgress: React.FC<{
  currentIndex: number;
  totalProjects: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}> = ({ currentIndex, totalProjects, onPrev, onNext, onSelectIndex }) => (
  <div className="absolute left-1.5 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-between w-9 sm:w-12 h-36 sm:h-48 py-2.5 sm:py-4 px-1 sm:px-2 bg-white/95 backdrop-blur-md rounded-2xl border border-black/10 shadow-lg">
    <button
      onClick={onPrev}
      disabled={currentIndex === 0}
      className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer p-1 ${
        currentIndex === 0 ? 'text-black/20 cursor-not-allowed' : 'text-black hover:text-[#B8860B]'
      }`}
      title="Previous Project"
    >
      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-90" />
    </button>

    {/* Vertical Indicator Line with Clickable Dots */}
    <div className="w-[2px] h-14 sm:h-24 bg-black/15 relative rounded-full flex flex-col items-center justify-between py-1 my-1">
      {Array.from({ length: totalProjects }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelectIndex(idx)}
          title={`Go to project ${idx + 1}`}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all cursor-pointer ${
            idx === currentIndex
              ? 'bg-[#D4AF37] scale-125 shadow-[0_0_8px_rgba(212,175,55,0.8)]'
              : 'bg-black/30 hover:bg-black'
          }`}
        />
      ))}
    </div>

    <button
      onClick={onNext}
      disabled={currentIndex === totalProjects - 1}
      className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer p-1 ${
        currentIndex === totalProjects - 1 ? 'text-black/20 cursor-not-allowed' : 'text-black/80 hover:text-[#B8860B]'
      }`}
      title="Next Project"
    >
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90" />
    </button>
  </div>
);

// Sub-component 3: Project Title
export const ProjectTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="relative z-20 px-3 sm:px-6 select-none text-center pointer-events-none flex flex-col items-center">
    <h2 className="heading-h3 text-white tracking-wider drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] group-hover:text-[#F4E0A5] transition-colors">
      {title}
    </h2>
  </div>
);

// Sub-component 4: Project Index Tag
export const ProjectIndex: React.FC<{ index: number; total: number }> = ({ index, total }) => (
  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white/90 text-xs font-mono border border-white/20 shadow-xl">
    <span className="text-[#D4AF37] font-bold">{String(index + 1).padStart(2, '0')}</span>
    <span className="text-white/40">/</span>
    <span>{String(total).padStart(2, '0')}</span>
  </div>
);

// Sub-component 5: Project Overlay
export const ProjectOverlay: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-transparent transition-colors duration-500 pointer-events-none" />
);

// Sub-component 6: Slide Animation Variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: '0%',
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  }),
};

// Main Component / Section Container: WorkSection
export const WorkSection: React.FC<PortfolioCategoriesProps> = ({ onSelectItem }) => {
  const featuredWorks = PORTFOLIO_ITEMS;
  const [[activeIndex, direction], setPage] = useState<[number, number]>([0, 0]);

  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    if (activeIndex < featuredWorks.length - 1) {
      setPage([activeIndex + 1, 1]);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setPage([activeIndex - 1, -1]);
    }
  };

  const handleSelectIndex = (targetIndex: number) => {
    if (targetIndex !== activeIndex) {
      setPage([targetIndex, targetIndex > activeIndex ? 1 : -1]);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const activeItem = featuredWorks[activeIndex];

  return (
    <section 
      id="portfolio" 
      className="bg-white text-black relative select-none py-16 sm:py-24 min-h-screen flex items-center justify-center overflow-hidden border-t border-black/5"
    >
      {/* Background Typography "WORK" */}
      <WorkBackgroundTitle text="WORK" />

      {/* Left Side Vertical Index Widget */}
      <ProjectProgress
        currentIndex={activeIndex}
        totalProjects={featuredWorks.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={handleSelectIndex}
      />

      {/* Centered Slide Card Container */}
      <div className="relative z-10 w-[82vw] sm:w-[80vw] max-w-[680px] aspect-[4/5] sm:aspect-[16/10] overflow-hidden ml-8 sm:ml-0 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-black/10 bg-neutral-100">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeItem.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => onSelectItem(activeItem)}
            className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center group select-none touch-manipulation"
          >
            {/* Image */}
            <img
              src={getOptimizedImageUrl(activeItem.imageUrl, 1100)}
              alt={activeItem.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            
            <ProjectOverlay />
            <ProjectIndex index={activeIndex} total={featuredWorks.length} />

            {activeItem.videoUrl && (
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] text-xs font-mono font-bold border border-[#D4AF37]/40 shadow-xl">
                <Play className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                <span className="tracking-wider">4K FILM REEL</span>
              </div>
            )}

            <ProjectTitle title={activeItem.title} />
          </motion.div>
        </AnimatePresence>

        {/* Floating Left Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          disabled={activeIndex === 0}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-black transition-all cursor-pointer shadow-md ${
            activeIndex > 0 ? 'hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95' : 'opacity-20 cursor-not-allowed'
          }`}
          title="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Floating Right Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          disabled={activeIndex === featuredWorks.length - 1}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-black transition-all cursor-pointer shadow-md ${
            activeIndex < featuredWorks.length - 1 ? 'hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95' : 'opacity-20 cursor-not-allowed'
          }`}
          title="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

// Default Export alias for backward compatibility with App.tsx
export const PortfolioCategories = WorkSection;


