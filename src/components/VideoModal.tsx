import React, { useState } from 'react';
import { CINEMATIC_FILMS } from '../data/mockData';
import { X, Play, Pause, Volume2, VolumeX, Clapperboard, Award, ArrowUpRight } from 'lucide-react';

interface VideoModalProps {
  filmId: string | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  filmId,
  onClose,
  onOpenInquiry,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!filmId) return null;

  const film = CINEMATIC_FILMS.find((f) => f.id === filmId) || CINEMATIC_FILMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-black transition-colors border border-[#D4AF37]/30"
        aria-label="Close Film Player"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-5xl bg-[#0A0A0A] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col">
        {/* Simulated Video Player Container */}
        <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
          {/* Background Poster Visual with Motion scale */}
          <img
            src={film.thumbnailUrl}
            alt={film.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105 filter brightness-90 contrast-[1.05]' : 'filter brightness-50'
            }`}
          />

          {/* Animated Overlay Waveform indicating live video play */}
          {isPlaying && (
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] text-[11px] font-mono border border-[#D4AF37]/30 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span>4K CINEMA STREAM • {film.duration}</span>
            </div>
          )}

          {/* Player Central Controls */}
          <div className="absolute inset-0 flex items-center justify-center gap-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-[#D4AF37] hover:bg-[#B89628] text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all transform hover:scale-110"
              aria-label={isPlaying ? 'Pause Film' : 'Play Film'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Video Progress Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between gap-4 text-white text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors"
                aria-label="Toggle Mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px] text-white/80">02:14 / {film.duration}</span>
            </div>

            {/* Progress bar track */}
            <div className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden max-w-md">
              <div className="h-full bg-[#D4AF37] w-[35%] transition-all shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>

            <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider font-bold">
              Anamorphic 2.39:1
            </span>
          </div>
        </div>

        {/* Film Description Footer */}
        <div className="p-8 bg-[#050505] border-t border-[#D4AF37]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono font-bold">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>{film.location}</span>
            </div>
            <h3 className="text-2xl font-syne font-bold uppercase text-white">{film.title}</h3>
            <p className="text-xs text-white/70 max-w-xl font-sans leading-relaxed">{film.directorNotes}</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#B89628] transition-all flex items-center gap-2 whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <span>Commission A Film</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
