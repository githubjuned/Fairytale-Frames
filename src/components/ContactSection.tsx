import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
}

const easeCurve = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `*New Inquiry - Fairy Tale Frames Studio*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917709434402?text=${encodedText}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const autoInquiryText = encodeURIComponent('Hello! I would like to inquire about your photography and videography services.');

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm' },
    { name: 'WhatsApp', url: `https://wa.me/917709434402?text=${autoInquiryText}` },
    { name: 'YouTube', url: 'https://www.youtube.com/@kiranhirephotography4654' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-black text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* GET IN TOUCH Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
            We invite you to share your vision with us. Whether planning a grand destination celebration, an intimate editorial portrait session, or bespoke cinematic storytelling, we are here to immortalize your finest moments.
          </p>
        </motion.div>

        {/* Main Reference Layout Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: easeCurve }}
          className="bg-[#0A0A0A] p-8 sm:p-12 md:p-16 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Based In & Follow Us Social Box Grid */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs text-white/50 font-sans block mb-2">Based In</span>
                <p className="text-2xl sm:text-3xl font-cormorant italic font-normal text-white">
                  Nashik, India
                </p>
              </div>

              <div>
                <span className="text-xs text-white/50 font-sans block mb-4">Follow Us</span>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 sm:px-4 rounded-none border border-white/30 text-center text-xs sm:text-sm font-cormorant italic text-white hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                    >
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Underlined Minimal Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40 shadow-lg animate-pulse">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-montserrat font-bold uppercase text-white">
                    REDIRECTING TO WHATSAPP
                  </h4>
                  <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Friend'}. Your form details have been compiled and sent to WhatsApp.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        const whatsappMessage = `*New Inquiry - Fairy Tale Frames Studio*\n\n` +
                          `*Name:* ${formData.name}\n` +
                          `*Email:* ${formData.email}\n` +
                          `*Phone:* ${formData.phone || 'Not provided'}\n` +
                          `*Message:* ${formData.message}`;
                        window.open(`https://wa.me/917709434402?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                      }}
                      className="px-6 py-2 bg-[#25D366] text-black font-sans font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#20bd5a] transition-colors"
                    >
                      Open WhatsApp Again
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="px-6 py-2 border border-white/50 text-xs font-cormorant italic text-white hover:bg-white hover:text-black transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 pt-1 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 pt-1 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 pt-1 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-3 pt-1 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors font-sans resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="border border-white/80 hover:border-white px-8 sm:px-10 py-2.5 text-sm sm:text-base font-cormorant italic text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};



