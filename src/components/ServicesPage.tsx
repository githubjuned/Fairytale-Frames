import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Film, 
  Camera, 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Award,
  ShieldCheck,
  Send
} from 'lucide-react';

interface ServicesPageProps {
  onBackToHome: () => void;
  onOpenInquiry: () => void;
  onOpenWhatsApp: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onOpenInquiry,
  onOpenWhatsApp,
}) => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceCategories = [
    {
      id: 'editing',
      number: '01',
      title: 'Cinematic Editing & Color Alchemy',
      badge: 'POST-PRODUCTION & COLOR GRADING',
      tagline: 'Transforming raw footage into timeless, magazine-grade visual art.',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786276403/WhatsApp_Image_2026-08-09_at_17.21.00_wqpbvo.jpg',
      icon: Sliders,
      description:
        'Every frame undergoes meticulous color grading, micro-contrast enhancement, and tone-curve mastery inspired by Kodak & Fujifilm heritage film stocks. We eliminate digital harshness and infuse lush skin tones and cinematic warmth.',
      features: [
        'Custom 3D LUT Formulation calibrated for each lighting condition',
        'Advanced skin tone preservation & delicate beauty retouching',
        'Dynamic sound design, dialogue de-noising & atmospheric scoring',
        '4K DCI master color grading (Rec.709 & HDR deliverables)',
        'Social reel highlight edits & cinematic wide-aspect trailer cuts',
      ],
      turnaround: '7 - 14 Business Days',
      software: 'DaVinci Resolve Studio • Adobe Premiere Pro • Capture One Pro',
      deliverables: '4K Master ProRes/H.265 Files + Web-Optimized MP4 Versions',
    },
    {
      id: 'video',
      number: '02',
      title: '4K Anamorphic Video & Cinematography',
      badge: 'MOTION & CINEMA PRODUCTION',
      tagline: 'High-definition unscripted storytelling with fluid motion and depth.',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786276403/WhatsApp_Image_2026-08-09_at_17.21.54_gbkgpt.jpg',
      icon: Film,
      description:
        'We capture real, unposed moments using cinema-grade cameras, anamorphic glass, and fluid 3-axis stabilization. From intimate exchange of vows to high-energy celebrations, every memory is preserved like a high-budget motion picture.',
      features: [
        'Multi-camera 4K anamorphic coverage with high dynamic range',
        'Licensed cinematic drone aerial cinematography (weather permitted)',
        'Crisp multi-channel lavalier & ambient shotgun audio recording',
        'Same-Day Teaser Reels formatted for instant Instagram sharing',
        'Full ceremony & speeches extended documentary film',
      ],
      turnaround: '15 - 30 Business Days',
      software: 'Sony FX3 Cine Line • G-Master & Sirui Anamorphic Lenses • DJI Ronin',
      deliverables: '1 Cinematic Feature Film (5-8 min) + Full Doc Cut + 3 Social Reels',
    },
    {
      id: 'photography',
      number: '03',
      title: 'Fine Art & Editorial Photography',
      badge: 'STILL IMAGERY & PORTRAITURE',
      tagline: 'Elegantly composed stills crafted for generational archives.',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786276403/WhatsApp_Image_2026-08-09_at_17.22.28_yhddss.jpg',
      icon: Camera,
      description:
        'Our photography philosophy blends high-fashion editorial aesthetics with raw candid photojournalism. We capture both the quiet stolen glances and monumental celebratory moments in timeless, breathtaking compositions.',
      features: [
        'Complete pre-wedding, ceremony, and reception coverage',
        'Natural light mastery paired with subtle directional flash',
        'Private high-resolution online client proofing & download gallery',
        'Bespoke hardcover fine art archival Italian leather photo album',
        'Full high-resolution print release included with every collection',
      ],
      turnaround: '10 - 20 Business Days',
      software: 'Sony A7R V High-Res Systems • 35mm / 50mm / 85mm Prime Optics',
      deliverables: '500+ Hand-Curated Color Graded Photos + Custom Archival Album',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Consultation & Vision Call',
      description: 'We connect over a call or coffee to align on your aesthetic preferences, timeline, and custom requirements.',
    },
    {
      step: '02',
      title: 'The Production & Capture',
      description: 'Our team shoots with discretion and artistic direction, ensuring you stay comfortable, natural, and present.',
    },
    {
      step: '03',
      title: 'Post-Production & Grading',
      description: 'Footage and frames enter our digital darkroom for color harmonization, audio engineering, and editorial flow.',
    },
    {
      step: '04',
      title: 'Archival Master Delivery',
      description: 'You receive high-res cloud links, social-ready clips, and bespoke handcrafted physical albums.',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white text-black min-h-screen">
      {/* Top Breadcrumb / Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black/70 hover:text-black py-2 px-4 rounded-full border border-black/15 hover:border-black bg-neutral-50 transition-all cursor-pointer shadow-sm group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#B8860B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>BESPOKE SERVICES &amp; CRAFTSMANSHIP</span>
          </div>
          <h1 className="font-montserrat font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black leading-tight mb-6">
            Everything We Create Is{' '}
            <span className="font-cormorant italic font-normal text-gold-gradient">
              Tailored For Eternity
            </span>
          </h1>
          <p className="text-base sm:text-lg text-black/75 font-sans leading-relaxed max-w-3xl">
            From high-fashion still photography to anamorphic 4K cinema films and signature color alchemy, discover our comprehensive production services designed for discerning couples and commercial brands.
          </p>
        </motion.div>
      </section>

      {/* Services Detailed Breakdown Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-24 mb-24 sm:mb-32">
        {serviceCategories.map((service, index) => {
          const IconComp = service.icon;
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: easeCurve }}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 sm:gap-12 lg:gap-16 items-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-neutral-50 border border-black/10 shadow-sm`}
            >
              {/* Service Visual Preview */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-black/10 shadow-md group">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#F4E0A5] border border-white/20">
                    {service.badge}
                  </div>
                </div>
              </div>

              {/* Service Detailed Information */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 text-[#B8860B] flex items-center justify-center font-mono font-bold text-xs">
                    {service.number}
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8860B]">
                    {service.badge}
                  </span>
                </div>

                <h2 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl uppercase text-black leading-tight">
                  {service.title}
                </h2>

                <p className="text-sm font-cormorant italic text-black/80 text-lg">
                  "{service.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2.5 pt-2 border-t border-black/10">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                    Included Capabilities &amp; Standards:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-black/80 font-sans">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs font-mono text-black/75 bg-white p-4 rounded-xl border border-black/10">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span><strong>Turnaround:</strong> {service.turnaround}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span className="truncate"><strong>Gear:</strong> {service.software.split('•')[0]}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenInquiry}
                    className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B89628] text-black text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm cursor-pointer active:scale-95"
                  >
                    <span>Inquire For This Service</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Our Production Process / Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-24 sm:mb-32">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-900 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              <Award className="w-4 h-4" />
              <span>THE PRODUCTION PHILOSOPHY</span>
            </div>
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl uppercase text-white mb-3">
              How We Bring Your Vision To Life
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              Every commission follows a refined, seamless four-step roadmap ensuring clarity, creative freedom, and world-class deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {workflowSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="font-mono text-2xl sm:text-3xl font-black text-[#D4AF37]">
                  {step.step}
                </span>
                <h3 className="font-montserrat font-bold text-sm sm:text-base uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-lg text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#B8860B] text-xs font-mono font-bold uppercase tracking-widest border border-[#D4AF37]/30">
            <ShieldCheck className="w-4 h-4" />
            <span>COMMISSION AVAILABILITY 2026 / 2027</span>
          </div>

          <h2 className="font-montserrat font-black text-2xl sm:text-4xl uppercase text-black">
            Ready to Commission Your Next Story?
          </h2>

          <p className="text-xs sm:text-sm text-black/70 font-sans max-w-xl mx-auto leading-relaxed">
            Reach out directly for custom collection pricing, destination shoot travel details, or tailored commercial project briefs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#B89628] text-black text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95"
            >
              <span>Schedule A Vision Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-black/20 hover:border-black bg-neutral-50 text-black text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
