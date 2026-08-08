import React from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#070604] via-[#120E07] to-[#070604] text-white relative overflow-hidden border-t border-[#D4AF37]/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Top Headline */}
        <motion.div variants={fadeUpVariants} className="max-w-4xl mb-12">
          <motion.h2 variants={fadeUpVariants} className="heading-h2 text-white mb-6">
            HI, I AM <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">ALEX TURNER</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-base font-sans text-white/70 leading-relaxed max-w-2xl">
            I'm absolutely thrilled to share my photography journey with you! With over a decade of experience behind the lens, photography is more than just a job for me—it's my ultimate passion and a way of life.
          </motion.p>
        </motion.div>

        {/* Wide Hero Image with Smooth Reveal */}
        <motion.div
          variants={imageVariants}
          className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl mb-16 h-[380px] sm:h-[500px] w-full bg-[#0A0A0A]"
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1600"
            alt="Alex Turner Photography"
            className="w-full h-full object-cover filter brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />
        </motion.div>

        {/* Bio Copy Blocks */}
        <motion.div variants={containerVariants} className="max-w-4xl space-y-6 mb-16">
          <motion.p variants={fadeUpVariants} className="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
            An <strong className="text-[#D4AF37] font-semibold">independent photographer</strong> with a decade of experience, skillfully blending artistic vision with thoughtful storytelling through a diverse array of photographic genres. From capturing mesmerizing landscapes to intimate portraits and unforgettable events, my work reflects a genuine passion for immortalizing life's most precious moments in timeless images that evoke emotion and create lasting memories for my clients.
          </motion.p>
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-base text-white/60 font-sans leading-relaxed">
            With an unwavering commitment to excellence and a keen eye for detail, I strive to deliver visually stunning photographs that leave a lasting impression and showcase the beauty in every frame.
          </motion.p>
        </motion.div>

      </motion.div>
    </section>
  );
};
