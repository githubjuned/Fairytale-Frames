import React, { useState, useRef, useEffect } from 'react';
import { CINEMATIC_FILMS } from '../data/mockData';
import { X, Play, Pause, Volume2, VolumeX, Clapperboard, Maximize, Minimize, ArrowUpRight } from 'lucide-react';

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeText, setCurrentTimeText] = useState('00:00');
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const film = CINEMATIC_FILMS.find((f) => f.id === filmId) || CINEMATIC_FILMS[0];

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
  }, [filmId]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, filmId]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else if ((containerRef.current as any).webkitRequestFullscreen) {
        (containerRef.current as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  if (!filmId) return null;

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((cur / dur) * 100);

    const mins = Math.floor(cur / 60);
    const secs = Math.floor(cur % 60);
    setCurrentTimeText(`${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-black transition-colors border border-[#D4AF37]/30 cursor-pointer"
        aria-label="Close Film Player"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden border border-black/10 shadow-2xl flex flex-col">
        {/* Video Player Container */}
        <div 
          ref={containerRef}
          className={`relative bg-black overflow-hidden flex items-center justify-center group ${
            isFullscreen ? 'w-full h-full min-h-screen' : 'aspect-[16/9]'
          }`}
        >
          {film.videoUrl ? (
            <video
              ref={videoRef}
              src={film.videoUrl}
              poster={film.thumbnailUrl}
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={() => setIsPlaying(!isPlaying)}
            />
          ) : (
            <img
              src={film.thumbnailUrl}
              alt={film.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? 'scale-105 filter brightness-90 contrast-[1.05]' : 'filter brightness-50'
              }`}
            />
          )}

          {/* Player Central Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-[#D4AF37] hover:bg-[#B89628] text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all transform hover:scale-110 pointer-events-auto cursor-pointer"
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
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between gap-4 text-white text-xs z-30">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer"
                aria-label="Toggle Mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px] text-white/80">
                {film.videoUrl ? currentTimeText : '02:14'} / {film.duration}
              </span>
            </div>

            {/* Progress bar track */}
            <div
              onClick={handleSeek}
              className="flex-1 h-2 rounded-full bg-white/20 overflow-hidden max-w-md cursor-pointer relative"
            >
              <div
                className="h-full bg-[#D4AF37] transition-all shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                style={{ width: `${film.videoUrl ? progress : 35}%` }}
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider font-bold hidden sm:inline">
                Anamorphic 2.39:1
              </span>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer"
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Film Description Footer */}
        <div className="p-8 bg-neutral-50 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-black">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#B8860B] font-mono font-bold">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>{film.location}</span>
            </div>
            <h3 className="text-2xl font-syne font-bold uppercase text-black">{film.title}</h3>
            <p className="text-xs text-black/75 max-w-xl font-sans leading-relaxed">{film.directorNotes}</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#B89628] transition-all flex items-center gap-2 whitespace-nowrap shrink-0 shadow-md cursor-pointer"
          >
            <span>Commission A Film</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};

