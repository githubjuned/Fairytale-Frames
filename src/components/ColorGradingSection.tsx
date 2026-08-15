import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { COLOR_GRADE_SAMPLES } from '../data/mockData';
import { ChevronsLeftRight } from 'lucide-react';

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const ColorGradingSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Default sample images
  const sample = COLOR_GRADE_SAMPLES[0];
  const beforeImg = sample.beforeImage;
  const afterImg = sample.afterImage;

  // Calculate percentage based on pointer position
  const updateSliderPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  // Pointer event handlers for smooth, responsive dragging on desktop and mobile
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSliderPos(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons === 1) {
      updateSliderPos(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section id="color-grading" className="py-12 md:py-20 bg-white text-black relative overflow-hidden select-none border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: easeCurve }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-black">
            BEFORE & <span className="font-cormorant italic font-normal text-gold-gradient">AFTER</span>
          </h2>
        </motion.div>

        {/* Remini-style Comparison Slider Card with Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: easeCurve }}
          className="max-w-5xl mx-auto rounded-2xl border border-black/10 shadow-2xl overflow-hidden"
        >
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[380px] sm:h-[540px] md:h-[620px] overflow-hidden bg-neutral-100 cursor-ew-resize touch-none group rounded-2xl"
          >
            {/* 1. AFTER Image (Full background layer) */}
            <img
              src={afterImg}
              alt="After Color Grade"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* 2. BEFORE Image (Clipped top layer) */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImg}
                alt="Before Original RAW"
                className="absolute top-0 left-0 h-full w-full max-w-none object-cover pointer-events-none"
                style={{ width: containerRef.current?.clientWidth || '100%' }}
                draggable={false}
              />
            </div>

            {/* Remini-style Floating Badges */}
            <div className="absolute top-5 left-5 pointer-events-none z-20">
              <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-widest border border-white/20 shadow-lg">
                BEFORE
              </span>
            </div>

            <div className="absolute top-5 right-5 pointer-events-none z-20">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-widest border border-emerald-400/30 shadow-lg">
                AFTER
              </span>
            </div>

            {/* 3. Draggable Vertical Slider Handle & Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-30 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Center Handle Button */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-[0_0_25px_rgba(0,0,0,0.8)] border-2 border-emerald-400 flex items-center justify-center transition-transform duration-150 ${
                  isDragging ? 'scale-110 ring-4 ring-emerald-400/40 bg-emerald-400 text-black' : 'group-hover:scale-105'
                }`}
              >
                <ChevronsLeftRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};


