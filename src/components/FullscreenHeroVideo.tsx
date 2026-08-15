import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { getOptimizedImageUrl, getOptimizedVideoUrl } from '../utils/mediaOptimizer';

interface FullscreenHeroVideoProps {
  onOpenInquiry?: () => void;
  onOpenVideoModal?: (filmId: string) => void;
}

const RAW_POSTER = 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786298668/Screenshot_2026-08-09_233345_jcjrth.png';
const RAW_VIDEO = 'https://res.cloudinary.com/dyvmqkxok/video/upload/v1786298296/kiran_vaidik_final_-compressed_o3jnke.mp4';

const POSTER_IMAGE = getOptimizedImageUrl(RAW_POSTER, 1920);
const VIDEO_SRC = getOptimizedVideoUrl(RAW_VIDEO);

export const FullscreenHeroVideo: React.FC<FullscreenHeroVideoProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isPlayingRef = useRef(false);

  const startPlayback = () => {
    setIsPlaying(true);
    isPlayingRef.current = true;
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policies safely
      });
    }
  };

  useEffect(() => {
    // 5-second automatic countdown to start playing if the user does not click first
    const timer = setTimeout(() => {
      startPlayback();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Pause video when scrolled out of view to preserve 60fps across the whole app
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          if (isPlayingRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          // Offscreen: pause video to free up GPU hardware decoders
          videoRef.current.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleImageClick = () => {
    startPlayback();
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      if (!nextMuteState && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = document.querySelector('#capturing-moments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="relative w-full h-[100dvh] min-h-[100svh] overflow-hidden bg-black flex items-center justify-center select-none"
    >
      {/* 4K Fullscreen Background Video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={POSTER_IMAGE}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Fullscreen Template Poster Image (Click to play immediately or automatically disappears after 5 seconds) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleImageClick}
            className="absolute inset-0 w-full h-full cursor-pointer z-20 group"
          >
            <img
              src={POSTER_IMAGE}
              alt="Kiran x Vaidik Film Cover"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discrete Bottom-Right Sound Toggle (Visible when playing) */}
      <div className="absolute bottom-6 sm:bottom-8 right-5 sm:right-8 z-30">
        <button
          onClick={toggleSound}
          className="p-3 rounded-full bg-black/40 hover:bg-black/80 border border-white/20 hover:border-[#D4AF37] text-white backdrop-blur-md shadow-lg transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center group"
          aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white/80 group-hover:text-[#D4AF37] transition-colors" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#D4AF37] animate-pulse" />
          )}
        </button>
      </div>

      {/* Discrete Bottom-Center Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-1 cursor-pointer transition-transform"
          aria-label="Scroll down to content"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full bg-black/35 hover:bg-black/70 border border-white/25 group-hover:border-[#D4AF37] flex items-center justify-center backdrop-blur-sm shadow-md transition-colors"
          >
            <ChevronDown className="w-4 h-4 text-white group-hover:text-[#D4AF37] transition-colors" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};
