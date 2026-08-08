import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

interface PortfolioCategoriesProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOpenInquiry?: () => void;
}

export const PortfolioCategories: React.FC<PortfolioCategoriesProps> = ({
  onSelectItem,
}) => {
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<number>(1); // 1 = down, -1 = up

  // Top items for the giant WORKS section
  const featuredWorks = PORTFOLIO_ITEMS.slice(0, 5);
  const activeWork = featuredWorks[featuredIndex] || featuredWorks[0];

  // Ref for the sticky scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Framer motion scroll hook for sticky container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress (0 to 1) to featuredIndex
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = featuredWorks.length;
    const newIndex = Math.min(
      Math.floor(latest * total),
      total - 1
    );

    if (newIndex !== featuredIndex && newIndex >= 0) {
      setScrollDirection(newIndex > featuredIndex ? 1 : -1);
      setFeaturedIndex(newIndex);
    }
  });

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (featuredIndex > 0) {
      setScrollDirection(-1);
      setFeaturedIndex((prev) => prev - 1);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (featuredIndex < featuredWorks.length - 1) {
      setScrollDirection(1);
      setFeaturedIndex((prev) => prev + 1);
    }
  };

  // Motion graphics 3D rolling wheel transition variants
  const motionGraphicsVariants = {
    initial: (dir: number) => ({
      y: dir > 0 ? '110%' : '-110%',
      rotateX: dir > 0 ? 55 : -55,
      scale: 0.86,
      opacity: 0,
      transformOrigin: dir > 0 ? '50% 100%' : '50% 0%',
    }),
    animate: {
      y: '0%',
      rotateX: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? '-110%' : '110%',
      rotateX: dir > 0 ? -55 : 55,
      scale: 0.86,
      opacity: 0,
      transformOrigin: dir > 0 ? '50% 0%' : '50% 100%',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  // Handle direct mouse wheel inside the hero card zone
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0 && featuredIndex < featuredWorks.length - 1) {
        setScrollDirection(1);
        setFeaturedIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && featuredIndex > 0) {
        setScrollDirection(-1);
        setFeaturedIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <section id="portfolio" className="bg-black text-white relative">
      
      {/* =========================================================================
          1. EXACT VIDEO REFERENCE: GIANT "WORKS" STICKY HERO WITH MOTION GRAPHICS
         ========================================================================= */}
      <div 
        ref={scrollContainerRef}
        className="relative h-[320vh] md:h-[380vh] bg-black"
        onWheel={handleWheel}
      >
        {/* Sticky Viewport Frame */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black px-4">
          
          {/* Giant "WORKS" Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-0">
            <h1 className="text-[27vw] font-montserrat font-[900] text-white leading-none tracking-tighter uppercase opacity-95">
              WORKS
            </h1>
          </div>

          {/* Left Vertical Index Widget (Shown on tablet & desktop, hidden on mobile) */}
          <div className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center justify-between w-11 h-40 py-3.5 px-2 bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <button
              onClick={handlePrev}
              disabled={featuredIndex === 0}
              className={`text-[11px] font-mono font-bold tracking-wider transition-colors ${
                featuredIndex === 0 ? 'text-white/30' : 'text-white hover:text-[#D4AF37]'
              }`}
              title="Previous Image"
            >
              {String(featuredIndex + 1).padStart(2, '0')}
            </button>

            {/* Vertical Line with Dynamic Indicator Dot */}
            <div className="w-[1.5px] h-20 bg-white/20 relative rounded-full overflow-visible my-1">
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-white border border-black absolute -left-[4px]"
                animate={{
                  top: `${(featuredIndex / (featuredWorks.length - 1)) * 100}%`,
                  translateY: '-50%',
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <button
              onClick={handleNext}
              disabled={featuredIndex === featuredWorks.length - 1}
              className={`text-[11px] font-mono font-bold tracking-wider transition-colors ${
                featuredIndex === featuredWorks.length - 1 ? 'text-white/30' : 'text-white/60 hover:text-[#D4AF37]'
              }`}
              title="Next Image"
            >
              {String(featuredWorks.length).padStart(2, '0')}
            </button>
          </div>

          {/* Centered Image Card with 3D Rolling Motion Graphics Animation */}
          <div 
            className="relative z-10 w-[88vw] max-w-[660px] aspect-[16/10] sm:aspect-[16/10] overflow-visible"
            style={{ perspective: 1200 }}
          >
            <AnimatePresence custom={scrollDirection} mode="popLayout">
              <motion.div
                key={activeWork.id}
                custom={scrollDirection}
                variants={motionGraphicsVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => onSelectItem(activeWork)}
                className="cursor-pointer absolute inset-0 w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden bg-black flex items-center justify-center border border-white/10 group shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Inner Image with Parallax Rolling Motion */}
                <motion.img
                  src={activeWork.imageUrl}
                  alt={activeWork.title}
                  initial={{ y: scrollDirection > 0 ? '15%' : '-15%', scale: 1.12 }}
                  animate={{ y: '0%', scale: 1.05 }}
                  exit={{ y: scrollDirection > 0 ? '-15%' : '15%', scale: 1.12 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] group-hover:scale-110 transition-transform duration-700"
                />

                {/* Subtle Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 group-hover:via-black/10 transition-colors duration-500" />

                {/* Clean Centered Title with Motion Graphics Reveal */}
                <motion.h2 
                  initial={{ y: scrollDirection > 0 ? 25 : -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 heading-h3 text-white tracking-wider text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] px-6 select-none group-hover:text-gold-gradient transition-colors"
                >
                  {activeWork.title}
                </motion.h2>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

