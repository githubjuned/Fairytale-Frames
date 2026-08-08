import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { Star } from 'lucide-react';

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Testimonials: React.FC = () => {
  const clientLogos = [
    { name: 'VOGUE', desc: 'GLOBAL EDITORIAL' },
    { name: 'HARPER\'S BAZAAR', desc: 'FINE ART' },
    { name: 'BRIDES', desc: 'WEDDING FEATURE' },
    { name: 'LEICA', desc: 'OFFICIAL PARTNER' },
    { name: 'AWWWARDS', desc: 'STUDIO OF THE YEAR' },
    { name: 'HASSELBLAD', desc: 'AMBASSADOR' },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gradient-to-b from-[#070604] via-[#141007] to-[#070604] text-white border-t border-[#D4AF37]/20 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* OUR CLIENTS Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: cubicEase }}
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              <span>PARTNERSHIPS</span>
            </div>
            <h2 className="heading-h2 text-white mb-10">
              OUR <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">CLIENTS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: cubicEase }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-golden-black-card rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 group"
              >
                <span className="font-syne font-extrabold text-lg sm:text-xl text-white group-hover:text-gold-gradient transition-colors tracking-tight">
                  {client.name}
                </span>
                <span className="text-[9px] font-mono text-[#F4E0A5]/60 uppercase tracking-widest mt-1">
                  {client.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: cubicEase }}
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="heading-h2 text-white mb-12">
              TESTIMONIALS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.85, delay: idx * 0.12, ease: cubicEase }}
                whileHover={{ y: -4 }}
                className="bg-golden-black-card rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300"
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
          </div>
        </div>
      </div>
    </section>
  );
};
