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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white text-black rounded-3xl overflow-hidden shadow-2xl border border-black/10 max-h-[92vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md px-8 py-5 border-b border-black/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#B8860B]" />
            <span className="font-syne font-bold text-lg tracking-wider uppercase text-black">
              Maison Lumière Journal Vol. 14
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-black/20 hover:bg-black hover:text-white text-black transition-colors cursor-pointer"
            aria-label="Close Journal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-8 md:p-12 overflow-y-auto space-y-10">
          {/* Cover Hero */}
          <div className="space-y-4">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#B8860B] text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/40 font-mono">
              {story.vibe}
            </div>
            <h1 className="text-3xl sm:text-5xl font-syne font-bold uppercase text-black leading-tight">
              {story.title}
            </h1>
            <p className="text-lg font-syne italic text-black/80">
              {story.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-black/70 pt-2 border-t border-black/10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B8860B]" />
                {story.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                {story.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#B8860B]" />
                {story.specs.medium}
              </span>
            </div>
          </div>

          {/* Large Hero Cover Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[16/9] bg-neutral-100 border border-black/10">
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-full object-cover filter brightness-95"
            />
          </div>

          {/* Narrative Body */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-syne font-bold uppercase text-black">
              The Narrative &amp; Aesthetic Vision
            </h3>
            <p className="text-base font-sans text-black/80 leading-relaxed">
              {story.editorialText}
            </p>
            <blockquote className="p-6 rounded-2xl bg-neutral-50 border-l-4 border-[#D4AF37] text-xl font-syne italic text-black shadow-md border border-black/5">
              {story.filmQuote}
            </blockquote>
          </div>

          {/* Full Gallery Photo Grid */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B8860B] font-bold font-mono">
              Archival Gallery Selects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {story.galleryImages.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md aspect-[4/3] group">
                  <img src={img} alt={`Gallery frame ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 filter brightness-95" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-8 rounded-3xl bg-neutral-50 text-black border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h4 className="font-syne font-bold text-2xl uppercase text-black mb-1">Inspired By This Story?</h4>
              <p className="text-xs text-black/70 font-sans">Inquire about our worldwide availability for 2026/2027.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#B89628] transition-all flex items-center gap-2 whitespace-nowrap shadow-md cursor-pointer"
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
