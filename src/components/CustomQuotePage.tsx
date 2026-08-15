import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Heart, 
  Gem, 
  Package, 
  Calendar, 
  Send, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  Camera, 
  Film, 
  Layers,
  ArrowRight,
  ShieldCheck,
  LucideIcon
} from 'lucide-react';

interface CustomQuotePageProps {
  onBackToHome: () => void;
  onOpenWhatsApp: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as const;

interface ShootType {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  idealFor: string;
  popularFeatures: string[];
  icon: LucideIcon;
}

const SHOOT_TYPES: ShootType[] = [
  {
    id: 'prewedding-wedding',
    name: 'Prewedding and Wedding',
    badge: 'MOST REQUESTED',
    tagline: 'Grand celebrations, sacred rituals & timeless heirloom frames.',
    description: 'Complete wedding storytelling with fine-art stills, 4K anamorphic motion, drone aerials, and handcrafted luxury albums.',
    idealFor: 'Couples planning destination, traditional, or intimate weddings.',
    popularFeatures: ['Multi-Day & Single-Day Coverage', '4K Cinematic Film & Reels', 'Handcrafted Archival Album', 'Licensed Drone Aerials'],
    icon: Heart,
  },
  {
    id: 'engagement',
    name: 'Engagement',
    badge: 'COUPLE SESSIONS',
    tagline: 'The easiest "Yes" and the radiant start of your love story.',
    description: 'Intimate, magazine-grade couple sessions focused on genuine romance, effortless chemistry, and editorial aesthetics in scenic venues.',
    idealFor: 'Ring ceremonies, save-the-date shoots & romantic portraiture.',
    popularFeatures: ['2-3 Outfit Changes', 'Curated Color-Graded Stills', 'Cinematic Instagram Teaser', 'Same-Week Sneak Peeks'],
    icon: Gem,
  },
  {
    id: 'product',
    name: 'Product',
    badge: 'COMMERCIAL & BRAND',
    tagline: 'High-impact commercial visuals that elevate brand perception.',
    description: 'Precision studio and lifestyle product photography, 4K promotional video reels, and aesthetic catalog shoots for luxury brands.',
    idealFor: 'Jewelry, fashion, luxury merchandise, apparel & digital brands.',
    popularFeatures: ['Studio Lighting & Staging', 'Macro Detail Photography', 'Social Ad Video Formats', 'High-End Retouching'],
    icon: Package,
  },
  {
    id: 'other-events',
    name: 'Other Events',
    badge: 'MILESTONES & CELEBRATIONS',
    tagline: 'Maternity, baby portraits, birthdays, corporate & milestone galas.',
    description: 'Candid, warm documentation of life’s special milestones. From newborn tenderness to vibrant private anniversaries and corporate summits.',
    idealFor: 'Baby shoots, maternity sessions, birthdays, anniversaries & galas.',
    popularFeatures: ['Flexible Hourly Rates', 'Candid Emotional Stills', 'Family Group Portraits', 'Online Shareable Gallery'],
    icon: Calendar,
  },
];

export const CustomQuotePage: React.FC<CustomQuotePageProps> = ({
  onBackToHome,
  onOpenWhatsApp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    shootType: '',
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    coverageType: 'Both Photography & 4K Cinema',
    budget: 'Standard Collection',
    notes: '',
  });

  // Scroll to top on initial page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCardClick = (shoot: ShootType) => {
    setSelectedCategory(shoot.id);
    setIsFormOpen(true);
    setFormData((prev) => ({
      ...prev,
      shootType: shoot.name,
    }));

    // Scroll smoothly to the form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `*New Custom Quote Request - Fairytaleframes Studio*\n\n` +
      `*Shoot Category:* ${formData.shootType}\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Event Date:* ${formData.eventDate || 'Flexible / TBD'}\n` +
      `*Location/Venue:* ${formData.location || 'To be decided'}\n` +
      `*Required Coverage:* ${formData.coverageType}\n` +
      `*Budget Preference:* ${formData.budget}\n` +
      `*Additional Details:* ${formData.notes || 'None'}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917709434402?text=${encodedText}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white text-black min-h-screen">
      {/* Top Breadcrumb / Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-10">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black/70 hover:text-black py-2 px-4 rounded-full border border-black/15 hover:border-black bg-neutral-50 transition-all cursor-pointer shadow-sm group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="max-w-4xl text-center mx-auto"
        >
          <h1 className="font-montserrat font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider text-black leading-tight mb-3">
            Plan Your Shoot –{' '}
            <span className="font-cormorant italic font-normal text-gold-gradient">
              Get a Free Estimate Today
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black/80 font-cormorant italic max-w-2xl mx-auto leading-relaxed">
            Write to us and we will get back to you as soon as possible.
          </p>
          <p className="text-xs sm:text-sm text-black/60 font-sans mt-2">
            Select a shoot category below to configure your tailored package and instant consultation.
          </p>
        </motion.div>
      </section>

      {/* Category Selection Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SHOOT_TYPES.map((shoot, idx) => {
            const isSelected = selectedCategory === shoot.id;
            const IconComponent = shoot.icon;

            return (
              <motion.div
                key={shoot.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: easeCurve }}
                whileHover={{ y: -6 }}
                onClick={() => handleCardClick(shoot)}
                className={`group relative rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 border ${
                  isSelected
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37] shadow-xl bg-white scale-[1.02]'
                    : 'border-black/10 bg-neutral-50 hover:bg-white hover:border-black/30 hover:shadow-lg'
                }`}
              >
                {/* Header with Icon & Selection Indicator */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#D4AF37] text-black shadow-sm' : 'bg-white border border-black/10 text-[#B8860B] group-hover:bg-[#D4AF37]/15'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-montserrat font-bold uppercase tracking-wider text-black bg-[#D4AF37] px-2.5 py-1 rounded-full shadow-sm">
                      <CheckCircle className="w-3 h-3" />
                      <span>Selected</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-montserrat font-semibold uppercase tracking-wider text-black/50 group-hover:text-black transition-colors">
                      Click To Enquire
                    </span>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="space-y-2.5 flex-1">
                  <h3 className="font-montserrat font-extrabold text-base sm:text-lg uppercase text-black tracking-wide group-hover:text-[#B8860B] transition-colors">
                    {shoot.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-cormorant italic text-black/85 leading-snug">
                    "{shoot.tagline}"
                  </p>
                  <p className="text-xs text-black/65 font-sans leading-relaxed pt-1">
                    {shoot.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="pt-3 border-t border-black/5 space-y-1.5">
                    {shoot.popularFeatures.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-black/75">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-[#B8860B]">
                    {isSelected ? 'Form Active' : 'Enquire Now'}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${
                    isSelected ? 'bg-[#D4AF37] text-black' : 'bg-black/5 group-hover:bg-[#D4AF37] group-hover:text-black text-black'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Quotation Form Section (Rendered Only When Card Clicked) */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.section
            ref={formRef}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: easeCurve }}
            className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 mb-12"
          >
            <div className="bg-neutral-50 rounded-3xl border border-black/10 shadow-xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA771C]" />

          {submitted ? (
            <div className="text-center py-12 sm:py-16 space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37]/20 text-[#B8860B] flex items-center justify-center mx-auto border border-[#D4AF37]/40 shadow-inner animate-bounce">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#B8860B]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-montserrat font-black text-2xl sm:text-4xl uppercase text-black">
                  Quote Request Sent!
                </h3>
                <p className="text-sm text-black/70 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We have opened WhatsApp with your custom estimate breakdown. Our team will review and reply with our availability and tailored pricing.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full border border-black/20 hover:border-black text-xs font-bold uppercase tracking-widest text-black bg-white transition-all cursor-pointer shadow-sm"
                >
                  Submit Another Inquiry
                </button>
                <button
                  onClick={onBackToHome}
                  className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B89628] text-black text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md"
                >
                  Return To Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form Title & Current Selected Category */}
              <div className="border-b border-black/10 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h2 className="font-montserrat font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-black">
                    Estimate &amp; Availability Details
                  </h2>
                  <p className="text-xs sm:text-sm font-cormorant italic text-black/70 mt-1">
                    Share your schedule and vision — we craft custom proposals tailored to your celebration.
                  </p>
                </div>

                {/* Selected Shoot Badge Switcher */}
                <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-sm self-start sm:self-auto">
                  <span className="text-[11px] font-sans text-black/60 uppercase tracking-wider">Package:</span>
                  <span className="text-xs font-montserrat font-bold text-[#B8860B] uppercase tracking-wide">
                    {formData.shootType}
                  </span>
                </div>
              </div>

              {/* Step 1: Category Buttons for quick switching inside the form */}
              <div>
                <label className="block text-xs font-montserrat font-bold uppercase tracking-widest text-black mb-2.5">
                  1. Shoot Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {SHOOT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleCardClick(type)}
                      className={`py-3 px-3 rounded-xl text-xs font-montserrat font-bold uppercase tracking-wider transition-all text-center border cursor-pointer ${
                        selectedCategory === type.id
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-black/80 border-black/15 hover:border-black hover:bg-neutral-100'
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Client Contact Details */}
              <div className="space-y-3">
                <label className="block text-xs font-montserrat font-bold uppercase tracking-widest text-black">
                  2. Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-black/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-black/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-black/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Event & Shoot Logistics */}
              <div className="space-y-3">
                <label className="block text-xs font-montserrat font-bold uppercase tracking-widest text-black">
                  3. Dates &amp; Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Estimated Date or Month"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-black/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Location / Venue */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black/40">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="City / Destination / Venue"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-black/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Coverage Requirements & Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-montserrat font-bold uppercase tracking-widest text-black mb-2">
                    4. Desired Deliverables
                  </label>
                  <select
                    value={formData.coverageType}
                    onChange={(e) => setFormData({ ...formData, coverageType: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] cursor-pointer"
                  >
                    <option value="Both Photography & 4K Cinema">Fine-Art Stills &amp; 4K Anamorphic Cinema</option>
                    <option value="Fine Art Photography Only">Fine-Art Photography Stills Only</option>
                    <option value="4K Cinematic Film Only">4K Cinematic Film &amp; Instagram Reels</option>
                    <option value="Full Comprehensive Suite (Photo + Cinema + Drone + Album)">Full Luxury Suite (Stills + Cinema + Drone + Handcrafted Album)</option>
                    <option value="Post-Production & Color Grading Only">Post-Production Color Grading &amp; LUT Mastering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-bold uppercase tracking-widest text-black mb-2">
                    5. Collection Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] cursor-pointer"
                  >
                    <option value="Standard Collection">Curated Essentials Collection</option>
                    <option value="Signature Master Suite">Signature Full-Story Suite</option>
                    <option value="Haute Couture / Destination Luxury">Haute Couture / Destination Archive</option>
                    <option value="Custom / Tailored Scope">Bespoke Custom Scope</option>
                  </select>
                </div>
              </div>

              {/* Step 5: Message Notes */}
              <div>
                <label className="block text-xs font-montserrat font-bold uppercase tracking-widest text-black mb-2">
                  6. Tell Us About Your Vision
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Tell us about the atmosphere, special moments, outfit palette, or any specific requests..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-4 bg-white border border-black/15 rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-black/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA Buttons */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-cormorant italic text-black/80 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
                  <span>Free custom quotation • Direct response via WhatsApp &amp; Phone</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#B89628] text-black text-xs font-montserrat font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Preparing Estimate...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Custom Estimate</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.section>
    )}
  </AnimatePresence>

      {/* Direct WhatsApp Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-montserrat font-bold text-base uppercase text-black">
              Need Instant Answers?
            </h4>
            <p className="text-xs text-black/70 font-sans mt-0.5">
              Connect directly with lead artist Kiran Hire via WhatsApp hotline.
            </p>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="px-6 py-3 rounded-full border border-black/20 hover:border-black bg-neutral-50 text-black text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat On WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};
