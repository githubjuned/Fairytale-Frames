import React from 'react';
import { motion } from 'motion/react';

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-b from-[#070604] via-[#120E07] to-[#070604] text-white relative overflow-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Headline with Blur-to-Sharp Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: cubicEase }}
          className="max-w-4xl mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            <span>ABOUT THE STUDIO</span>
          </div>
          <h2 className="heading-h2 text-white mb-6">
            HI, I AM <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">ALEX TURNER</span>
          </h2>
          <p className="text-sm sm:text-base font-sans text-white/70 leading-relaxed max-w-2xl">
            I'm absolutely thrilled to share my photography journey with you! With over a decade of experience behind the lens, photography is more than just a job for me—it's my ultimate passion and a way of life.
          </p>
        </motion.div>

        {/* Wide Studio Hero Image with Mask Clip-Path & Blur Reveal */}
        <motion.div
          initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0.2, filter: 'blur(8px)' }}
          whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: cubicEase }}
          className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl mb-16 h-[380px] sm:h-[500px] w-full bg-[#0A0A0A]"
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1600"
            alt="Alex Turner Photography Studio"
            className="w-full h-full object-cover filter brightness-90 contrast-105 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />
        </motion.div>

        {/* Bio Copy Blocks with Staggered Blur-to-Sharp Text Reveal */}
        <div className="max-w-4xl space-y-6 mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
            className="text-base sm:text-lg text-white/80 font-sans leading-relaxed"
          >
            An <strong className="text-[#D4AF37] font-semibold">independent photographer & cinematographer</strong> with a decade of experience, skillfully blending artistic vision with thoughtful storytelling through a diverse array of photographic genres. From capturing mesmerizing landscapes to intimate portraits and unforgettable events, my work reflects a genuine passion for immortalizing life's most precious moments in timeless images.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.22, ease: cubicEase }}
            className="text-sm sm:text-base text-white/60 font-sans leading-relaxed"
          >
            With an unwavering commitment to excellence and a keen eye for detail, I strive to deliver visually stunning photographs that leave a lasting impression and showcase the beauty in every frame.
          </motion.p>
        </div>

      </div>
    </section>
  );
};
