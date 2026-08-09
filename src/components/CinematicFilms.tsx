import React from 'react';
import { motion } from 'motion/react';
import { CINEMATIC_FILMS } from '../data/mockData';
import { Play, Film, Award, Sparkles, Clapperboard } from 'lucide-react';

interface CinematicFilmsProps {
  onOpenVideoModal: (filmId: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const CinematicFilms: React.FC<CinematicFilmsProps> = ({ onOpenVideoModal }) => {
  return (
    <section id="films" className="py-28 bg-gradient-to-b from-[#070604] via-[#141007] to-[#070604] text-white relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#D4AF37]/20 pb-8"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-gradient mb-3">
              <Clapperboard className="w-4 h-4 text-[#D4AF37]" />
              <span>4K ANAMORPHIC MOTION</span>
            </div>
            <h2 className="heading-h2 text-white">
              CINEMATIC <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">FILMS</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-white/60 max-w-md leading-relaxed">
            Crafted like independent cinema reels using vintage Cooke lenses, live acoustic orchestrations, and immersive sound design.
          </p>
        </motion.div>

        {/* Films Showcase Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
        >
          {CINEMATIC_FILMS.map((film) => (
            <motion.div
              key={film.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easeCurve } },
              }}
              whileHover={{ scale: 1.01, y: -4 }}
              onClick={() => onOpenVideoModal(film.id)}
              className="group cursor-pointer relative overflow-hidden bg-black transition-all duration-300 touch-manipulation active:scale-[0.98]"
            >
              {/* Thumbnail Container - Pure sharp original video style */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                />

                {/* Title Overlay on hover or subtle gradient at bottom like Best Captures */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-cormorant italic text-lg sm:text-2xl text-white font-medium drop-shadow-md">
                    {film.title}
                  </span>
                  {film.subtitle && (
                    <span className="text-xs text-white/70 font-sans mt-0.5">
                      {film.subtitle}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

