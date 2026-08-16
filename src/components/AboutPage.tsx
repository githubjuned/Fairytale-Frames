import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Camera, 
  Award, 
  Heart, 
  Film, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/mediaOptimizer';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenInquiry: () => void;
  onOpenWhatsApp: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenInquiry,
  onOpenWhatsApp,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const milestones = [
    { number: '10+', label: 'Years Behind The Lens' },
    { number: '350+', label: 'Weddings & Stories Documented' },
    { number: '100%', label: 'Unscripted Authentic Moments' },
    { number: '4K DCI', label: 'Cinema Quality Deliverables' },
  ];

  const pillars = [
    {
      icon: Film,
      title: 'Cinematic Storytelling',
      desc: 'Treating every celebration like a feature film with bespoke color grading, rhythmic pacing, and natural soundscapes.',
    },
    {
      icon: Heart,
      title: 'Unobtrusive Candid Soul',
      desc: 'Guiding when needed, but mostly melting into the background to capture unfiltered tears, laughter, and sacred rituals.',
    },
    {
      icon: Camera,
      title: 'Masterclass Gear & Craft',
      desc: 'Utilizing flagship cinema cameras, prime lenses, and heritage film color profiles calibrated for breathtaking skin tones.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-24 sm:pt-28 pb-20 sm:pb-28">
      {/* Top Breadcrumb / Back Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-widest text-black/70 hover:text-[#B8860B] transition-colors cursor-pointer"
        >
          <div className="p-2 rounded-full bg-black/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
          </div>
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Studio Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 sm:mb-24">
        {/* Top Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="max-w-4xl mb-10 sm:mb-14"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase text-black tracking-tight leading-tight mb-5">
            HI, I AM <span className="font-cormorant italic font-normal text-gold-gradient underline underline-offset-4 decoration-[#D4AF37]">KIRAN HIRE</span>
          </h1>
          <p className="text-base sm:text-lg text-black/80 font-sans leading-relaxed max-w-3xl">
            I'm thrilled to welcome you into my visual world. With over a decade of dedication behind the viewfinder, photography and cinematography are more than a career—they are my lifelong passion and way of experiencing the magic of human connection.
          </p>
        </motion.div>

        {/* Wide Studio Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: easeCurve }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 shadow-xl mb-12 sm:mb-16 h-[280px] xs:h-[360px] sm:h-[520px] w-full bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/dyvmqkxok/image/upload/v1786364968/file_00000000829881fa9df0eb8f59c8e23b_eqyf7y.png", 1600)}
            alt="Kiran Hire Photography Studio"
            className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </motion.div>

        {/* Numbers & Milestones Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.08, ease: easeCurve }}
              className="p-6 rounded-2xl bg-neutral-50 border border-black/10 text-center flex flex-col justify-center"
            >
              <div className="font-montserrat font-black text-2xl sm:text-4xl text-[#B8860B] mb-1">
                {m.number}
              </div>
              <div className="text-xs sm:text-sm font-sans font-medium text-black/70">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Biography */}
        <div className="max-w-4xl space-y-6 mb-16 sm:mb-20 text-black/85 font-sans leading-relaxed text-base sm:text-lg">
          <p>
            As an <strong className="text-[#B8860B] font-semibold">independent photographer & cinematographer</strong>, I skillfully blend high-fashion artistic vision with thoughtful documentary storytelling across diverse genres—from royal destination weddings to intimate portraits and unforgettable celebrations.
          </p>
          <p className="text-black/75 text-sm sm:text-base">
            Every frame is captured with intentional light, raw emotional honesty, and delicate composition. My work immortalizes fleeting glances, jubilant laughs, and timeless sacred vows so that decades from now, you will feel every heartbeat exactly as it happened.
          </p>
          <p className="text-black/75 text-sm sm:text-base">
            With an unwavering commitment to perfection and bespoke color mastery, I deliver photographs and films that stand gracefully beyond passing trends.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#B8860B] mb-6">
            OUR ARTISTIC APPROACH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-black/10 hover:border-[#D4AF37] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#B8860B] flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-black mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4AF37]/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-2 block">
              RESERVE YOUR DATE
            </span>
            <h3 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-3">
              Let's Create Timeless Art Together
            </h3>
            <p className="text-sm font-sans text-white/70 leading-relaxed">
              We take on a limited number of commissions each year to ensure uncompromising craft, personal attention, and meticulous post-production.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA771C] text-black font-montserrat font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <span>Book A Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-montserrat font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
