import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { CINEMATIC_FILMS } from '../data/mockData';
import { getOptimizedImageUrl, getOptimizedVideoUrl } from '../utils/mediaOptimizer';

interface CandidReelsSectionProps {
  onOpenVideoModal?: (filmId: string) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface ReelCardProps {
  film: typeof CINEMATIC_FILMS[0];
  idx: number;
  isMuted: boolean;
  onToggleSound: (e: React.MouseEvent, filmId: string) => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ film, idx, isMuted, onToggleSound }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const videoSrc = film.videoUrl ? getOptimizedVideoUrl(film.videoUrl) : undefined;
  const posterSrc = getOptimizedImageUrl(film.thumbnailUrl, 720);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay: (idx % 4) * 0.06, ease: easeCurve }}
      className="group relative rounded-none overflow-hidden bg-black border border-black/15 shadow-sm aspect-[9/16] select-none"
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={posterSrc}
          alt="Candid Reel"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}

      {/* Sound Toggle Button Only */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <button
          onClick={(e) => onToggleSound(e, film.id)}
          className="p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#D4AF37] hover:text-black border border-white/20 transition-colors cursor-pointer shadow-md"
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          ) : (
            <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export const CandidReelsSection: React.FC<CandidReelsSectionProps> = () => {
  // Take 4 curated reel videos from CINEMATIC_FILMS
  const reelFilms = CINEMATIC_FILMS.slice(0, 4);

  // Track muted status per video (default muted for autoplay compliance)
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    [reelFilms[0]?.id || '']: true,
    [reelFilms[1]?.id || '']: true,
    [reelFilms[2]?.id || '']: true,
    [reelFilms[3]?.id || '']: true,
  });

  const toggleSound = (e: React.MouseEvent, filmId: string) => {
    e.stopPropagation();
    const currentMuted = mutedStates[filmId] ?? true;
    const newMuted = !currentMuted;
    
    setMutedStates((prev) => ({
      ...prev,
      [filmId]: newMuted,
    }));
  };

  return (
    <section id="candid-reels" className="py-12 sm:py-18 md:py-20 bg-white text-black relative z-10 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="mb-8 sm:mb-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider text-black">
            Candid Moments Captured in Motion – <span className="font-cormorant italic font-normal text-gold-gradient">Watch the Reels</span>
          </h2>
        </motion.div>

        {/* Reels Grid: 2 Columns on Mobile, 4 Columns on Desktop with Straight/Square Borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {reelFilms.map((film, idx) => (
            <ReelCard
              key={film.id}
              film={film}
              idx={idx}
              isMuted={mutedStates[film.id] ?? true}
              onToggleSound={toggleSound}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

