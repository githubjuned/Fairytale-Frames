import React from 'react';
import { motion } from 'motion/react';
import { FEATURED_STORIES } from '../data/mockData';
import { FeaturedStory } from '../types';
import { BookOpen, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

interface FeaturedStoriesProps {
  onOpenStory: (story: FeaturedStory) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ onOpenStory }) => {
  return (
    <section id="stories" className="py-28 bg-gradient-to-b from-[#070604] via-[#110E07] to-[#070604] text-white relative overflow-hidden border-t border-[#D4AF37]/20">
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
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>EDITORIAL JOURNALS</span>
            </div>
            <h2 className="heading-h2 text-white">
              FEATURED <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">LOVE STORIES</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-white/60 max-w-md leading-relaxed">
            Immerse yourself in complete three-day celebrations across Europe, captured with cinematic breadth and analog soul.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="space-y-20">
          {FEATURED_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: index * 0.15, ease: easeCurve }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Cover Image & Mini Gallery Preview */}
              <div
                onClick={() => onOpenStory(story)}
                className="lg:col-span-7 group cursor-pointer relative"
              >
                <div className="rounded-3xl overflow-hidden bg-[#0A0A0A] shadow-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all aspect-[16/10] relative">
                  <img
                    src={getOptimizedImageUrl(story.coverImage, 1200)}
                    alt={story.title}
                    className="w-full h-full object-cover img-editorial filter contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:opacity-95 transition-opacity p-8 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-center">
                      <span className="px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-mono text-[#D4AF37] border border-[#D4AF37]/30 font-bold">
                        {story.specs.medium}
                      </span>
                      <span className="p-3 rounded-full bg-[#D4AF37] text-black group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        <BookOpen className="w-4 h-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                        {story.couple}
                      </span>
                      <h3 className="heading-h3 uppercase mt-1 mb-2 text-white">
                        {story.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-white/80 font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                          {story.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                          {story.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-gallery thumbnail strip */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {story.galleryImages.slice(0, 3).map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-[#0A0A0A]">
                      <img src={img} alt="Story Detail" className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Narrative Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 text-[11px] font-bold tracking-wider uppercase">
                  {story.vibe}
                </div>

                <h3 className="heading-h3 uppercase text-white">
                  {story.subtitle}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-white/70 leading-relaxed">
                  {story.editorialText}
                </p>

                <blockquote className="p-4 rounded-2xl bg-[#0A0A0A] border-l-2 border-[#D4AF37] text-xs italic font-syne text-white/90 leading-relaxed">
                  {story.filmQuote}
                </blockquote>

                {/* Technical Specifications List */}
                <div className="grid grid-cols-2 gap-3 text-xs border-t border-b border-[#D4AF37]/20 py-4 text-white/70">
                  <div>
                    <span className="block text-[10px] text-[#D4AF37] uppercase tracking-wider font-mono font-bold">Duration</span>
                    <span className="font-medium text-white">{story.specs.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#D4AF37] uppercase tracking-wider font-mono font-bold">Lead Artist</span>
                    <span className="font-medium text-white">{story.specs.masterPhotographer}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenStory(story)}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B89628] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <span>Read Full Journal & Gallery</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

