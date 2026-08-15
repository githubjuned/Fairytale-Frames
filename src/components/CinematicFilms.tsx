import React from 'react';
import { motion } from 'motion/react';
import { CINEMATIC_FILMS } from '../data/mockData';
import { Play, Film, Award, Sparkles, Clapperboard } from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

interface CinematicFilmsProps {
  onOpenVideoModal: (filmId: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const CinematicFilms: React.FC<CinematicFilmsProps> = ({ onOpenVideoModal }) => {
  return (
    <section id="films" className="py-14 sm:py-24 md:py-28 bg-white text-black relative border-t border-black/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16 border-b border-black/10 pb-6 sm:pb-8"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#B8860B] mb-2 sm:mb-3">
              <Clapperboard className="w-4 h-4 text-[#D4AF37]" />
              <span>4K ANAMORPHIC MOTION</span>
            </div>
            <h2 className="heading-h2 text-black">
              CINEMATIC <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">FILMS</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-black/70 max-w-md leading-relaxed">
            Crafted like independent cinema reels using vintage Cooke lenses, live acoustic orchestrations, and immersive sound design.
          </p>
        </motion.div>

        {/* Films Showcase Cards - 2 Columns on all devices */}
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
          className="grid grid-cols-2 gap-2.5 sm:gap-6 md:gap-8"
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
              className="group cursor-pointer relative overflow-hidden bg-neutral-100 rounded-lg sm:rounded-xl border border-black/10 shadow-sm sm:shadow-md transition-all duration-300 touch-manipulation active:scale-[0.98]"
            >
              {/* Thumbnail Container - Pure sharp original video style */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black rounded-lg sm:rounded-xl">
                <img
                  src={getOptimizedImageUrl(film.thumbnailUrl, 900)}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Title Overlay on hover or subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2 sm:p-5 md:p-6 opacity-95 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-cormorant italic text-xs sm:text-lg md:text-2xl text-white font-medium drop-shadow-md line-clamp-1 sm:line-clamp-none">
                    {film.title}
                  </span>
                  {film.subtitle && (
                    <span className="hidden sm:block text-[11px] sm:text-xs text-white/80 font-sans mt-0.5 line-clamp-1">
                      {film.subtitle}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Play className="w-3.5 h-3.5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current ml-0.5 sm:ml-1" />
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

