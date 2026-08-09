import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Grid, Image as ImageIcon, Layers, Play } from 'lucide-react';

interface ImageLightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onOpenInquiry: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  onOpenInquiry,
}) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  // Reset image index when item changes
  useEffect(() => {
    setSelectedImgIdx(0);
    setViewMode('single');
  }, [item?.id]);

  const galleryList = item?.galleryImages && item.galleryImages.length > 0 
    ? item.galleryImages 
    : (item ? [item.imageUrl] : []);

  const currentPhotoUrl = galleryList[selectedImgIdx] || item?.imageUrl || '';

  const isVideoUrl = (url?: string) => {
    if (!url) return false;
    return url.includes('.mp4') || url.includes('/video/upload/') || url.includes('.webm') || url.includes('.mov');
  };

  const isCurrentVideo = (selectedImgIdx === 0 && item?.videoUrl) || isVideoUrl(currentPhotoUrl);
  const activeVideoSrc = (selectedImgIdx === 0 && item?.videoUrl) ? item.videoUrl : currentPhotoUrl;

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImgIdx < galleryList.length - 1) {
      setSelectedImgIdx((prev) => prev + 1);
    } else {
      // Loop or go to next project
      onNext();
      setSelectedImgIdx(0);
    }
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImgIdx > 0) {
      setSelectedImgIdx((prev) => prev - 1);
    } else {
      // Go to prev project
      onPrev();
      setSelectedImgIdx(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImgIdx, galleryList.length, item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Background Dim */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Top Floating Bar */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between px-3 sm:px-6 py-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-white">
          <h4 className="font-montserrat font-bold text-sm sm:text-lg text-white truncate max-w-[200px] sm:max-w-md">
            {item.title}
          </h4>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white transition-all border border-white/20 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Lightbox Modal Window */}
      <div className="relative z-10 w-full max-w-7xl h-[88vh] sm:h-[85vh] mt-12 bg-[#09090b] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col lg:flex-row">
        
        {/* Left / Main Gallery Display Area */}
        <div className="lg:w-3/4 bg-black flex flex-col justify-between relative overflow-hidden h-full">
          
          {/* View Mode 1: Single Featured Image View */}
          {viewMode === 'single' ? (
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
              <AnimatePresence mode="wait">
                {isCurrentVideo ? (
                  <motion.video
                    key={activeVideoSrc}
                    src={activeVideoSrc}
                    poster={item.imageUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-w-full max-h-[62vh] sm:max-h-[68vh] object-contain shadow-2xl rounded-lg"
                  />
                ) : (
                  <motion.img
                    key={currentPhotoUrl}
                    src={currentPhotoUrl}
                    alt={`${item.title} photo ${selectedImgIdx + 1}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-full max-h-[62vh] sm:max-h-[68vh] object-contain shadow-2xl"
                  />
                )}
              </AnimatePresence>

              {/* Prev / Next Image Navigation overlay buttons */}
              {galleryList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black transition-all border border-white/20 shadow-xl cursor-pointer"
                    title="Previous Photo"
                  >
                    <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                  </button>

                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black transition-all border border-white/20 shadow-xl cursor-pointer"
                    title="Next Photo"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </button>
                </>
              )}

            </div>
          ) : (
            /* View Mode 2: Full Gallery Photo Grid */
            <div className="flex-1 p-4 sm:p-8 overflow-y-auto custom-scrollbar">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-montserrat font-bold text-lg text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#D4AF37]" />
                  All Photographs in {item.title} ({galleryList.length})
                </h3>
                <span className="text-xs font-mono text-white/50">Click any photograph to view full resolution</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {galleryList.map((imgUrl, index) => {
                  const isVid = (index === 0 && Boolean(item.videoUrl)) || isVideoUrl(imgUrl);
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03, y: -2 }}
                      onClick={() => {
                        setSelectedImgIdx(index);
                        setViewMode('single');
                      }}
                      className={`group relative aspect-[4/3] overflow-hidden cursor-pointer transition-all ${
                        selectedImgIdx === index
                          ? 'ring-2 ring-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                          : 'hover:opacity-90'
                      }`}
                    >
                      {isVideoUrl(imgUrl) ? (
                        <video
                          src={imgUrl}
                          muted
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <img
                          src={imgUrl}
                          alt={`Gallery thumbnail ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      {isVid && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                          <Play className="w-6 h-6 text-white drop-shadow-md fill-white/80" />
                        </div>
                      )}
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-mono text-white font-bold">
                        #{index + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Thumbnail Strip Bar */}
          {galleryList.length > 1 && viewMode === 'single' && (
            <div className="p-3 bg-[#0d0c0e] border-t border-white/10 flex items-center gap-3 overflow-x-auto custom-scrollbar select-none">
              <div className="flex items-center gap-2.5">
                {galleryList.map((imgUrl, idx) => {
                  const isVid = (idx === 0 && Boolean(item.videoUrl)) || isVideoUrl(imgUrl);
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      className={`relative w-14 h-10 sm:w-16 sm:h-12 overflow-hidden transition-all flex-shrink-0 cursor-pointer ${
                        selectedImgIdx === idx
                          ? 'ring-2 ring-[#D4AF37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.5)]'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      {isVideoUrl(imgUrl) ? (
                        <video src={imgUrl} muted className="w-full h-full object-cover" />
                      ) : (
                        <img src={imgUrl} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                      )}
                      {isVid && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                          <Play className="w-3.5 h-3.5 text-white fill-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Right Details Panel */}
        <div className="lg:w-1/4 p-6 sm:p-8 bg-[#0a0a0d] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between space-y-6 text-white overflow-y-auto">
          <div>
            <h3 className="text-2xl sm:text-3xl font-montserrat font-black uppercase leading-tight mb-2 text-white">
              {item.title}
            </h3>

            {item.clientNames && (
              <p className="text-sm font-cormorant italic text-[#F4E0A5] mb-4">
                Couple / Client: {item.clientNames}
              </p>
            )}

            <p className="text-xs font-sans text-white/70 leading-relaxed mb-6 font-light">
              {item.description}
            </p>
          </div>

          {/* Project Switcher & Inquiry CTA */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA771C] text-black text-xs font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              <span>Book / Inquire For Collection</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
