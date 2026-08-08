import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

interface BestCapturesProps {
  onSelectItem: (item: PortfolioItem) => void;
}

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const BestCaptures: React.FC<BestCapturesProps> = ({ onSelectItem }) => {
  // Select top captures
  const topCaptures = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: cubicEase }}
          className="mb-10 sm:mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            <span>CURATED GALLERY</span>
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white">
            BEST <span className="font-cormorant italic font-normal text-gold-gradient">CAPTURES</span>
          </h2>
        </motion.div>

        {/* Gallery Bento Grid with Staggered Clip-Path & Fade Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCaptures.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ 
                opacity: 0, 
                y: 35, 
                scale: 0.95, 
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' 
              }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.85, delay: idx * 0.1, ease: cubicEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => onSelectItem(item)}
              className={`group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-2xl transition-all duration-500 cursor-pointer ${
                idx === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover img-editorial filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-cormorant italic text-xl text-white font-normal">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
