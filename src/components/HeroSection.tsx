import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenVideoModal: (filmId: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-2 sm:pb-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Main Headline with Staggered Motion Graphics Text Animation */}
        <div className="text-center max-w-6xl mx-auto mb-10 sm:mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeCurve }}
            className="heading-h1 text-white"
          >
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
              className="inline-block mr-2 sm:mr-4"
            >
              CAPTURING
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: easeCurve }}
              className="font-cormorant italic font-normal text-gold-gradient underline underline-offset-[8px] sm:underline-offset-[14px] decoration-[#D4AF37] decoration-2 sm:decoration-4 tracking-normal inline-block"
            >
              MOMENTS
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: easeCurve }}
              className="block mt-2 sm:mt-3 text-white"
            >
              THROUGH THE LENS.
            </motion.span>
          </motion.h1>
        </div>

        {/* Professional DSLR Camera Image Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: easeCurve }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)] border border-white/10 group"
        >
          <img
            src="https://res.cloudinary.com/dyvmqkxok/image/upload/v1785866103/WhatsApp_Image_2026-08-04_at_22.36.54_wp1xn4.jpg"
            alt="Flagship Professional Camera Showcase"
            className="w-full h-[380px] sm:h-[500px] lg:h-[600px] object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Secondary Banner Ticker / Tagline matching exact reference */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: 0.2, ease: easeCurve }}
          className="mt-12 sm:mt-16 text-center max-w-5xl mx-auto flex flex-col items-center justify-center gap-3 sm:gap-6"
        >
          {/* Row 1: FREEZING MOMENTS + Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCurve }}
              className="font-cormorant italic font-semibold text-2xl sm:text-6xl lg:text-[72px] text-white tracking-wide leading-none"
            >
              FREEZING
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
              className="font-montserrat font-black text-2xl sm:text-6xl lg:text-[72px] text-[#D4AF37] tracking-tight leading-none"
            >
              MOMENTS
            </motion.span>
            {/* Pill Capsule with glowing star artwork */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeCurve }}
              className="relative inline-flex items-center justify-center w-16 sm:w-28 h-8 sm:h-14 rounded-full overflow-hidden bg-neutral-800 border border-white/20 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300"
                alt="Visual Art"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute text-orange-500 font-bold text-sm sm:text-2xl drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">✦</span>
            </motion.div>
          </div>

          {/* Row 2: Pill with camera + TELL STORIES */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
            {/* Pill Capsule with vintage camera */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeCurve }}
              className="inline-flex items-center justify-center w-20 sm:w-36 h-8 sm:h-14 rounded-full overflow-hidden bg-neutral-800 border border-white/20 shadow-lg p-0.5 sm:p-1"
            >
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=300"
                alt="Camera"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.45, ease: easeCurve }}
              className="font-cormorant italic font-semibold text-2xl sm:text-6xl lg:text-[72px] text-white tracking-wide leading-none"
            >
              TELL STORIES.
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Slanted Crossed / Bent Infinite Marquee Ribbon Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeCurve }}
        className="relative mt-6 sm:mt-12 mb-2 sm:mb-6 py-6 sm:py-10 overflow-hidden w-full z-10"
      >
        <div className="relative w-[114%] -ml-[7%] flex flex-col justify-center items-center min-h-[90px] sm:min-h-[120px]">
          
          {/* Bent Ribbon Marquee */}
          <div className="relative w-full py-3 sm:py-4 bg-black border-y border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.9)] -rotate-1 -skew-x-2 scale-105 z-10 backdrop-blur-sm">
            <div className="animate-marquee-fast whitespace-nowrap flex items-center gap-6 sm:gap-10 text-sm sm:text-lg md:text-2xl font-montserrat font-black tracking-[0.2em] text-white uppercase">
              <div className="flex items-center gap-6 sm:gap-10">
                <span>✦ FROM MOMENTS TO MEMORIES</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>PHOTOGRAPHY THAT TELLS STORIES</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>YOUR STORY, OUR ART</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>4K CINEMATIC MOTION</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>WORLDWIDE COMMISSIONS</span>
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="flex items-center gap-6 sm:gap-10">
                <span>✦ FROM MOMENTS TO MEMORIES</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>PHOTOGRAPHY THAT TELLS STORIES</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>YOUR STORY, OUR ART</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>4K CINEMATIC MOTION</span>
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>WORLDWIDE COMMISSIONS</span>
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

