import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenVideoModal: (filmId: string) => void;
}

// Universal cinematic easing cubic-bezier(0.22, 1, 0.36, 1)
const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked parallax and scale transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  // Words for Split Text stagger animation
  const headingLine1Words = ['CAPTURING'];
  const headingLine2Words = ['THROUGH', 'THE', 'LENS.'];

  return (
    <section 
      ref={containerRef}
      id="capturing-moments" 
      className="relative pt-16 sm:pt-24 pb-4 sm:pb-8 bg-white text-black overflow-hidden"
    >
      <motion.div 
        style={{ y: shouldReduceMotion ? 0 : contentY, opacity: shouldReduceMotion ? 1 : contentOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12"
      >
        
        {/* =========================================================================
            1. HERO HEADLINE WITH SPLIT-TEXT STAGGERED REVEAL
            ========================================================================= */}
        <div className="text-center max-w-6xl mx-auto mb-10 sm:mb-14 select-none">
          <h1 className="heading-h1 text-black flex flex-col items-center justify-center gap-1 sm:gap-2">
            
            {/* Top Line: "CAPTURING" + Highlighted "MOMENTS" */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 overflow-hidden py-1">
              {headingLine1Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1 + i * 0.1, ease: cubicEase }}
                  className="inline-block text-black"
                >
                  {word}
                </motion.span>
              ))}

              {/* Italic Highlighted Word with Slightly Delayed Stagger Reveal */}
              <motion.span 
                initial={{ opacity: 0, y: 35, scale: 0.92, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.95, delay: 0.3, ease: cubicEase }}
                className="font-cormorant italic font-normal text-gold-gradient underline underline-offset-[8px] sm:underline-offset-[14px] decoration-[#D4AF37] decoration-2 sm:decoration-4 tracking-normal inline-block"
              >
                MOMENTS
              </motion.span>
            </div>

            {/* Bottom Line: "THROUGH THE LENS." */}
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 overflow-hidden py-1 mt-1 sm:mt-2">
              {headingLine2Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.42 + i * 0.12, ease: cubicEase }}
                  className="inline-block text-black"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>
        </div>

        {/* =========================================================================
            2. MAIN HERO IMAGE SHOWCASE WITH SCALE-UP & PARALLAX
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: cubicEase }}
          className="relative w-full max-w-5xl mx-auto overflow-hidden group"
        >
          <motion.img
            style={{ scale: shouldReduceMotion ? 1 : imageScale, y: shouldReduceMotion ? 0 : imageY }}
            src={getOptimizedImageUrl("https://res.cloudinary.com/dyvmqkxok/image/upload/v1786274669/DSC08356_eqdbzt.jpg", 1400)}
            alt="Flagship Professional Camera Showcase"
            className="w-full h-auto max-h-[700px] object-cover object-center transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* =========================================================================
            3. SECONDARY EDITORIAL TAGLINE WITH STAGGERED PILL CAPSULES
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.15, ease: cubicEase }}
          className="mt-12 sm:mt-16 text-center max-w-5xl mx-auto flex flex-col items-center justify-center gap-3 sm:gap-6 select-none"
        >
          {/* Row 1: FREEZING MOMENTS + Pill Capsule */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
            <motion.span 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
              className="font-cormorant italic font-semibold text-2xl sm:text-6xl lg:text-[72px] text-black tracking-wide leading-none"
            >
              FREEZING
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
              className="font-montserrat font-black text-2xl sm:text-6xl lg:text-[72px] text-[#B8860B] tracking-tight leading-none"
            >
              MOMENTS
            </motion.span>

            {/* Pill Capsule 1 with scale-in + fade-in */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.78, x: 15 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: cubicEase }}
              className="relative inline-flex items-center justify-center w-16 sm:w-28 h-8 sm:h-14 rounded-full overflow-hidden bg-neutral-100 border border-black/10 shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300"
                alt="Visual Art"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-black/10" />
              <span className="absolute text-[#D4AF37] font-bold text-sm sm:text-2xl drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">✦</span>
            </motion.div>
          </div>

          {/* Row 2: Pill Capsule + TELL STORIES. */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
            {/* Pill Capsule 2 with scale-in + fade-in */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.78, x: -15 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: cubicEase }}
              className="inline-flex items-center justify-center w-20 sm:w-36 h-8 sm:h-14 rounded-full overflow-hidden bg-neutral-100 border border-black/10 shadow-md p-0.5 sm:p-1"
            >
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=300"
                alt="Camera"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.48, ease: cubicEase }}
              className="font-cormorant italic font-semibold text-2xl sm:text-6xl lg:text-[72px] text-black tracking-wide leading-none"
            >
              TELL STORIES.
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* =========================================================================
          4. INFINITE LINEAR HORIZONTAL MARQUEE
          ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="relative mt-8 sm:mt-14 mb-2 sm:mb-6 py-4 sm:py-8 overflow-hidden w-full z-10 select-none"
      >
        <div className="relative w-full py-3 sm:py-4 bg-black border-y border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.9)] -rotate-3 sm:-rotate-4 -skew-x-3 sm:-skew-x-4 scale-105 z-10 backdrop-blur-sm overflow-hidden flex">
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            className="whitespace-nowrap flex items-center gap-6 sm:gap-10 text-sm sm:text-lg md:text-2xl font-montserrat font-black tracking-[0.2em] text-white uppercase pr-6 sm:pr-10 shrink-0"
          >
            <span>✦ FROM MOMENTS TO MEMORIES</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>PHOTOGRAPHY THAT TELLS STORIES</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>YOUR STORY, OUR ART</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>4K CINEMATIC MOTION</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>WORLDWIDE COMMISSIONS</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />

            <span>✦ FROM MOMENTS TO MEMORIES</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>PHOTOGRAPHY THAT TELLS STORIES</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>YOUR STORY, OUR ART</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>4K CINEMATIC MOTION</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>WORLDWIDE COMMISSIONS</span>
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
