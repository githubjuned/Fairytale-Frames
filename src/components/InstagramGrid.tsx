import React from 'react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS } from '../data/mockData';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] text-white border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: easeCurve }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Instagram className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-mono font-bold block">
                JOURNAL ON INSTAGRAM
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="font-syne font-bold text-2xl text-white hover:text-[#D4AF37] transition-colors"
              >
                @maisonlumiere.official
              </a>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            <span>Follow Our Feed</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Live Feed Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {INSTAGRAM_POSTS.map((post) => (
            <motion.a
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeCurve } },
              }}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover img-editorial filter brightness-90 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white text-xs">
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

                <p className="line-clamp-3 text-[11px] font-sans text-white/90 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

