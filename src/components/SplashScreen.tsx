import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hold splash screen for 2.4s then trigger fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="ftf-splash-screen"
          initial={{ y: '0%' }}
          animate={{ y: '0%' }}
          exit={{ 
            y: '-100%',
            transition: { duration: 1.0, ease: [0.77, 0, 0.175, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow in Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />

          {/* Film Grain Texture */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

          {/* Logo Container with Motion Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(8px)', y: 15 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, y: -60, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center max-w-sm sm:max-w-md w-full"
          >
            {/* The Logo Graphic (Monogram + Overlay) */}
            <div className="relative flex flex-col items-center justify-center my-4">
              
              {/* Giant Serif Monogram F T F */}
              <div className="flex items-center justify-center gap-1 sm:gap-3 font-cormorant text-7xl sm:text-9xl font-bold tracking-tight text-white leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                <span className="inline-block transform -translate-y-1">F</span>
                <span className="inline-block text-6xl sm:text-8xl transform translate-y-1">T</span>
                <span className="inline-block transform -translate-y-1">F</span>
              </div>

              {/* Overlaid Horizontal Banner Text "FAIRYTALE FRAMES" */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.7 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-black/90 py-1 sm:py-1.5 px-3 border-y border-white/20 text-center backdrop-blur-xs shadow-2xl"
              >
                <span className="font-montserrat font-black text-xs sm:text-base tracking-[0.3em] text-white uppercase whitespace-nowrap block">
                  FAIRYTALE FRAMES
                </span>
              </motion.div>
            </div>

            {/* Sub-Tagline below logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <p className="font-cormorant italic text-sm sm:text-base text-white/70 tracking-widest uppercase">
                PHOTOGRAPHY & CINEMATOGRAPHY
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Loading Progress Bar Effect */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
