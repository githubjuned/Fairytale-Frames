import React from 'react';
import { motion } from 'motion/react';
import { Camera, Compass, Award, HeartHandshake } from 'lucide-react';

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const EditorialManifesto: React.FC = () => {
  return (
    <section id="philosophy" className="py-28 md:py-36 bg-gradient-to-b from-[#070604] via-[#141007] to-[#070604] text-white relative overflow-hidden border-t border-[#D4AF37]/25">
      {/* Decorative ambient golden glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative background typography watermark */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 pointer-events-none select-none text-[#D4AF37]/5 font-syne text-[14vw] font-black uppercase leading-none whitespace-nowrap z-0">
        FAIRYTALEFRAMES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#D4AF37]/20 pb-10"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-gradient mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>THE PHILOSOPHY & MANIFESTO</span>
            </div>
            <h2 className="heading-h2 text-white leading-tight max-w-2xl">
              WE DO NOT JUST PHOTOGRAPH WEDDINGS. WE CURATE <span className="font-cormorant italic text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">VISUAL LEGACIES.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-white/70 max-w-md leading-relaxed tracking-wide">
            Rooted in fine-art portraiture and modern cinema, Fairytaleframes Studio balances unscripted authentic emotion with Vogue-level editorial composition.
          </p>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Handcrafted Storytelling Details */}
          <div className="lg:col-span-7 space-y-8">
            <motion.blockquote 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.85, ease: easeCurve }}
              className="heading-h3 text-white leading-snug border-l-4 border-[#D4AF37] pl-6 py-2"
            >
              “True luxury is unhurried. It lives in the delicate turn of a silk veil, the silent tear before the altar, and the sun spilling over an ancient Italian terrace.”
            </motion.blockquote>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeCurve } },
                }}
                className="p-6 rounded-2xl bg-golden-black-card transition-all shadow-lg hover:border-[#D4AF37]/50 border border-transparent"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="heading-h4 text-white mb-2">Analog & Medium Format</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  We blend Hasselblad medium format digital clarity with timeless 35mm Kodak Portra film to capture true texture and romantic skin tones.
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeCurve } },
                }}
                className="p-6 rounded-2xl bg-golden-black-card transition-all shadow-lg hover:border-[#D4AF37]/50 border border-transparent"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="heading-h4 text-white mb-2">Global Scouting & Styling</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Every destination shoot includes bespoke lighting architecture, venue scouting, and timing mapped to optimal golden hour light.
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeCurve } },
                }}
                className="p-6 rounded-2xl bg-golden-black-card transition-all shadow-lg hover:border-[#D4AF37]/50 border border-transparent"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-syne font-bold uppercase text-lg text-white mb-2">Editorial Commission</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  Only 15 couples accepted worldwide each year to guarantee undivided artistic devotion and custom heirloom archival albums.
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeCurve } },
                }}
                className="p-6 rounded-2xl bg-golden-black-card transition-all shadow-lg hover:border-[#D4AF37]/50 border border-transparent"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-syne font-bold uppercase text-lg text-white mb-2">Invisible Presence</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  We capture unguarded intimacy without intrusive setup, allowing you and your guests to remain immersed in the celebration.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Hero Framing Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: easeCurve }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 bg-[#0A0804]">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1200"
                alt="Editorial Portraiture"
                className="w-full h-[520px] object-cover filter brightness-90 contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060503]/95 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white p-6 rounded-2xl bg-[#0B0905]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl">
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold-gradient font-mono font-bold mb-1">
                  Fairytaleframes Archival Masterpiece #084
                </div>
                <div className="font-syne text-xl font-bold uppercase mb-1">
                  “The Silk & Sunset Series”
                </div>
                <div className="flex items-center justify-between text-[11px] text-white/70 font-mono">
                  <span>Villa Balbiano, Como</span>
                  <span>Kodak Portra 400</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-golden-black-card text-white p-6 rounded-2xl shadow-2xl hidden sm:block max-w-[220px]"
            >
              <div className="text-3xl font-syne font-black text-gold-gradient mb-1">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-white/80 font-mono">
                Analog Film & Museum Grade Prints
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

