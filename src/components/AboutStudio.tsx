import React from 'react';
import { motion } from 'motion/react';

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-black relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Headline with Blur-to-Sharp Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: cubicEase }}
          className="max-w-4xl mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#B8860B] mb-3">
            <span>ABOUT THE STUDIO</span>
          </div>
          <h2 className="heading-h2 text-black mb-6">
            HI, I AM <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">KIRAN HIRE</span>
          </h2>
          <p className="text-sm sm:text-base font-sans text-black/75 leading-relaxed max-w-2xl">
            I'm absolutely thrilled to share my photography journey with you! With over a decade of experience behind the lens, photography is more than just a job for me—it's my ultimate passion and a way of life.
          </p>
        </motion.div>

        {/* Wide Studio Hero Image with Blur Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.9, ease: cubicEase }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 shadow-xl mb-12 sm:mb-16 h-[260px] xs:h-[320px] sm:h-[500px] w-full bg-neutral-100"
        >
          <img
            src="https://res.cloudinary.com/dyvmqkxok/image/upload/v1786364968/file_00000000829881fa9df0eb8f59c8e23b_eqyf7y.png"
            alt="Kiran Hire Photography Studio"
            className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Bio Copy Blocks with Staggered Blur-to-Sharp Text Reveal */}
        <div className="max-w-4xl space-y-6 mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
            className="text-base sm:text-lg text-black/85 font-sans leading-relaxed"
          >
            An <strong className="text-[#B8860B] font-semibold">independent photographer & cinematographer</strong> with a decade of experience, skillfully blending artistic vision with thoughtful storytelling through a diverse array of photographic genres. From capturing mesmerizing landscapes to intimate portraits and unforgettable events, my work reflects a genuine passion for immortalizing life's most precious moments in timeless images.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.22, ease: cubicEase }}
            className="text-sm sm:text-base text-black/70 font-sans leading-relaxed"
          >
            With an unwavering commitment to excellence and a keen eye for detail, I strive to deliver visually stunning photographs that leave a lasting impression and showcase the beauty in every frame.
          </motion.p>
        </div>

      </div>
    </section>
  );
};
