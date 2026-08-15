import React from 'react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS } from '../data/mockData';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-black border-t border-black/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: cubicEase }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-md">
              <Instagram className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B8860B] font-mono font-bold block">
                JOURNAL ON INSTAGRAM
              </span>
              <a
                href="https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm"
                target="_blank"
                rel="noreferrer"
                className="font-syne font-bold text-2xl text-black hover:text-[#B8860B] transition-colors"
              >
                @fairytale_frames._
              </a>
            </div>
          </div>

          <a
            href="https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-xs font-bold uppercase tracking-widest text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all shadow-sm"
          >
            <span>Follow Our Feed</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Live Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              initial={{ 
                opacity: 0, 
                y: 20
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: cubicEase }}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square bg-neutral-100 border border-black/10 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={getOptimizedImageUrl(post.imageUrl, 600)}
                alt={post.caption}
                className="w-full h-full object-cover img-editorial filter brightness-95 group-hover:scale-105 transition-all duration-500 ease-out"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 flex flex-col justify-between text-white text-xs">
                <div className="flex items-center justify-end gap-3 text-white/90">
                  <span className="flex items-center gap-1 font-mono text-[#D4AF37]">
                    <Heart className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                    {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-white/80">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>

                <p className="line-clamp-3 text-[10px] sm:text-[11px] font-sans text-white/90 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
