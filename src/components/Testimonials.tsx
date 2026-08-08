import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS, PRESS_LOGOS } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clientLogos = [
    { name: 'VOGUE', desc: 'GLOBAL EDITORIAL' },
    { name: 'HARPER\'S BAZAAR', desc: 'FINE ART' },
    { name: 'BRIDES', desc: 'WEDDING FEATURE' },
    { name: 'LEICA', desc: 'OFFICIAL PARTNER' },
    { name: 'AWWWARDS', desc: 'STUDIO OF THE YEAR' },
    { name: 'HASSELBLAD', desc: 'AMBASSADOR' },
  ];

  return (
    <section id="testimonials" className="py-28 bg-gradient-to-b from-[#070604] via-[#141007] to-[#070604] text-white border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* OUR CLIENTS Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: easeCurve }}
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-gradient mb-2">
              <span>PARTNERSHIPS</span>
            </div>
            <h2 className="heading-h2 text-white mb-10">
              OUR <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">CLIENTS</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {clientLogos.map((client) => (
              <motion.div
                key={client.name}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeCurve } },
                }}
                className="bg-golden-black-card rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all group duration-300"
              >
                <span className="font-syne font-extrabold text-lg sm:text-xl text-white group-hover:text-gold-gradient transition-colors tracking-tight">
                  {client.name}
                </span>
                <span className="text-[9px] font-mono text-[#F4E0A5]/60 uppercase tracking-widest mt-1">
                  {client.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TESTIMONIAL Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: easeCurve }}
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-gradient mb-2">
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="heading-h2 text-white mb-12">
              TESTIMONIALS
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {TESTIMONIALS.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: easeCurve } },
                }}
                className="bg-golden-black-card rounded-3xl p-8 flex flex-col justify-between shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-syne font-bold uppercase text-white">
                      {item.coupleNames}
                    </h3>
                    <span className="text-xs font-mono text-[#F4E0A5]/70 uppercase">
                      {item.eventLocation}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    “{item.quote}”
                  </p>
                </div>

                {/* Gold Rating Tag */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F4E0A5] font-mono font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                    <span>Ratings - 5.0 / 5</span>
                  </div>

                  <span className="text-[11px] font-mono text-white/50 uppercase">
                    {item.publication}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

