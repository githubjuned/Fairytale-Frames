import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

interface BestCapturesProps {
  onSelectItem: (item: PortfolioItem) => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const BestCaptures: React.FC<BestCapturesProps> = ({ onSelectItem }) => {
  // Select top captures
  const topCaptures = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section className="py-12 md:py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: easeCurve }}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white">
            BEST <span className="font-cormorant italic font-normal text-gold-gradient">CAPTURES</span>
          </h2>
        </motion.div>

        {/* Gallery Bento Grid with Staggered Scroll Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topCaptures.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.75, ease: easeCurve },
                },
              }}
              whileHover={{ scale: 1.025, y: -4 }}
              onClick={() => onSelectItem(item)}
              className={`group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-2xl transition-all duration-500 cursor-pointer ${
                idx === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover img-editorial filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

