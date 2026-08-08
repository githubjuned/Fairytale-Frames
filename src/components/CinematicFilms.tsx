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
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {CINEMATIC_FILMS.map((film) => (
            <motion.div
              key={film.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easeCurve } },
              }}
              onClick={() => onOpenVideoModal(film.id)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0A0A0A] border border-[#D4AF37]/20 shadow-2xl hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  className="w-full h-full object-cover img-editorial opacity-90 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-transparent" />

                {/* Top Badge */}
                {film.awardBadge && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest shadow-md">
                    <Award className="w-3.5 h-3.5" />
                    <span>{film.awardBadge}</span>
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] text-[10px] font-mono tracking-widest uppercase border border-[#D4AF37]/30 font-bold">
                  {film.duration}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Text Info Container */}
              <div className="p-8 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-1">
                    {film.location}
                  </div>
                  <h3 className="heading-h4 text-white group-hover:text-[#D4AF37] transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-xs italic text-white/60 mt-1 font-syne">
                    {film.subtitle}
                  </p>
                </div>

                <p className="text-xs font-sans text-white/70 leading-relaxed">
                  {film.directorNotes}
                </p>

                <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs font-mono text-white/50">
                  <span className="truncate max-w-[80%]">{film.specs}</span>
                  <span className="text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform">
                    PLAY REEL →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

