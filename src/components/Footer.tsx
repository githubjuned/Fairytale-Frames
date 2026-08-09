import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Flame } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenWhatsApp?: () => void;
}

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-[#D4AF37]/20 font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HUGE IMPACT CTA BANNER WITH LARGE TYPOGRAPHY REVEAL */}
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: cubicEase }}
            className="space-y-1.5 sm:space-y-3"
          >
            {/* Line 1: LET'S TALK */}
            <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-black uppercase tracking-tight text-white leading-none">
              LET'S TALK
            </h2>

            {/* Line 2: GET TO */}
            <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-black uppercase tracking-tight text-white leading-none">
              GET TO
            </div>

            {/* Line 3: WORKING with enlarged animated 'O' */}
            <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-black uppercase tracking-tight text-white leading-none flex items-center flex-nowrap">
              <span>W</span>
              {/* Circular Emblem replacing 'O' */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="relative inline-flex items-center justify-center w-[1.2em] h-[1.2em] mx-[0.05em] shrink-0 align-middle"
              >
                <svg className="w-full h-full animate-[spin_16s_linear_infinite]" viewBox="0 0 100 100">
                  <path
                    id="circlePathFooter"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-mono tracking-[0.18em] fill-[#D4AF37] font-bold uppercase">
                    <textPath href="#circlePathFooter" startOffset="0%">
                      FAIRYTALEFRAMES • FAIRYTALEFRAMES •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Flame className="w-[38%] h-[38%] text-[#D4AF37] fill-[#D4AF37]/30" />
                </div>
              </motion.div>
              <span>RKING</span>
            </div>
          </motion.div>

          {/* Green / Golden Circle Arrow Button with Scale-In & Rotation Hover Interaction */}
          <motion.button
            initial={{ opacity: 0, scale: 0.75, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: cubicEase }}
            whileHover={{ scale: 1.15, rotate: 12 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenInquiry}
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#D4AF37] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] shrink-0 group cursor-pointer"
            aria-label="Get in touch"
          >
            <ArrowUpRight className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[2.5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* Horizontal Divider Line */}
        <hr className="border-t border-[#D4AF37]/20 mb-8" />

        {/* Subfooter (3 Columns: Left Copyright, Middle Contact, Right Brand/Links) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-xs font-sans text-white/80">
          {/* Column 1: Copyright */}
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} <a href="#" className="text-gold-gradient font-bold underline hover:text-[#F4E0A5]">Fairytaleframes</a>. All rights reserved.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div className="space-y-1.5 md:text-center">
            <h5 className="font-semibold text-[#D4AF37] font-mono uppercase text-xs mb-2">Contact Us</h5>
            <p>
              <a href="https://wa.me/917709434402" target="_blank" rel="noreferrer" className="underline hover:text-[#25D366] transition-colors">
                +91 77094 34402 (WhatsApp)
              </a>
            </p>
            <p>
              <a href="mailto:fairytalesframe@gmail.com" className="underline hover:text-[#D4AF37] transition-colors">
                fairytalesframe@gmail.com
              </a>
            </p>
          </div>

          {/* Column 3: Brand */}
          <div className="space-y-1.5 md:text-right">
            <div className="font-syne font-black text-xl text-white mb-2 tracking-tight">
              <span className="text-[#D4AF37]">/</span>FAIRYTALEFRAMES
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
