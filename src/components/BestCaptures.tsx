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
    <section className="py-12 sm:py-20 md:py-24 bg-black text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="mb-8 sm:mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-2 sm:mb-3">
            <span>CURATED GALLERY</span>
          </div>
          <h2 className="font-montserrat font-black text-2xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white">
            BEST <span className="font-cormorant italic font-normal text-gold-gradient">CAPTURES</span>
          </h2>
        </motion.div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {topCaptures.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ 
                opacity: 0, 
                y: 30, 
                scale: 0.96
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: cubicEase }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => onSelectItem(item)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37] active:border-[#D4AF37] shadow-2xl transition-all duration-300 cursor-pointer touch-manipulation active:scale-[0.98] ${
                idx === 0 ? 'col-span-1 sm:col-span-2 aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover img-editorial filter brightness-95 group-hover:scale-105 group-active:scale-105 group-hover:brightness-105 transition-all duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-95 sm:opacity-0 sm:group-hover:opacity-100 sm:group-active:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <span className="font-cormorant italic text-lg sm:text-2xl text-white font-medium drop-shadow-md">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-wider mt-1 opacity-90">
                  Tap to view details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
