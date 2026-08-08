import React from 'react';
import { FeaturedStory } from '../types';
import { X, MapPin, Calendar, Camera, BookOpen, ArrowUpRight } from 'lucide-react';

interface StoryModalProps {
  story: FeaturedStory | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  story,
  onClose,
  onOpenInquiry,
}) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] text-white rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-[#D4AF37]/30 max-h-[92vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#050505]/90 backdrop-blur-md px-8 py-5 border-b border-[#D4AF37]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-syne font-bold text-lg tracking-wider uppercase text-white">
              Maison Lumière Journal Vol. 14
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black text-white transition-colors"
            aria-label="Close Journal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-8 md:p-12 overflow-y-auto space-y-10">
          {/* Cover Hero */}
          <div className="space-y-4">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/30 font-mono">
              {story.vibe}
            </div>
            <h1 className="text-3xl sm:text-5xl font-syne font-bold uppercase text-white leading-tight">
              {story.title}
            </h1>
            <p className="text-lg font-syne italic text-white/80">
              {story.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/70 pt-2 border-t border-[#D4AF37]/20">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                {story.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                {story.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#D4AF37]" />
                {story.specs.medium}
              </span>
            </div>
          </div>

          {/* Large Hero Cover Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] bg-black border border-[#D4AF37]/20">
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-full object-cover filter brightness-95"
            />
          </div>

          {/* Narrative Body */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-syne font-bold uppercase text-white">
              The Narrative & Aesthetic Vision
            </h3>
            <p className="text-base font-sans text-white/80 leading-relaxed">
              {story.editorialText}
            </p>
            <blockquote className="p-6 rounded-2xl bg-[#050505] border-l-4 border-[#D4AF37] text-xl font-syne italic text-white shadow-xl">
              {story.filmQuote}
            </blockquote>
          </div>

          {/* Full Gallery Photo Grid */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold font-mono">
              Archival Gallery Selects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {story.galleryImages.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/20 shadow-xl aspect-[4/3] group">
                  <img src={img} alt={`Gallery frame ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 filter brightness-95" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-8 rounded-3xl bg-[#050505] text-white border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h4 className="font-syne font-bold text-2xl uppercase text-white mb-1">Inspired By This Story?</h4>
              <p className="text-xs text-white/70 font-sans">Inquire about our worldwide availability for 2026/2027.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#B89628] transition-all flex items-center gap-2 whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              <span>Book A Vision Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
