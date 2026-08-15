import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

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

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/fairytale_frames._?igsh=bDJhc2ZjNWJ3MGpm' },
    { name: 'Facebook', url: '#' },
    { name: 'YouTube', url: '#' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-black rounded-3xl border border-black/10 shadow-2xl p-6 sm:p-10 md:p-12 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black hover:text-white text-black transition-all z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* GET IN TOUCH Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-montserrat font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-black mb-3">
            GET IN TOUCH
          </h2>
          <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed">
            We invite you to share your vision with us. Whether planning a grand destination celebration, an intimate editorial portrait session, or bespoke cinematic storytelling, we are here to immortalize your finest moments.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Based In & Follow Us */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs text-black/60 font-sans block mb-1">Based In</span>
              <p className="text-2xl sm:text-3xl font-cormorant italic font-normal text-black">
                Nashik, India
              </p>
            </div>

            <div>
              <span className="text-xs text-black/60 font-sans block mb-3">Follow Us</span>
              <div className="grid grid-cols-3 gap-2.5">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    className="py-2 px-2.5 rounded-none border border-black/20 text-center text-xs font-cormorant italic text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
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
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/40 animate-pulse">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-montserrat font-bold uppercase text-black">
                  REDIRECTING TO WHATSAPP
                </h4>
                <p className="text-xs text-black/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Friend'}. Your details have been formatted and sent directly to WhatsApp.
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
                    className="px-5 py-2 bg-[#25D366] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#20bd5a] transition-colors shadow-sm"
                  >
                    Open WhatsApp Again
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 border border-black/30 text-xs font-cormorant italic text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 pb-2.5 pt-1 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors font-sans"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 pb-2.5 pt-1 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors font-sans"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 pb-2.5 pt-1 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors font-sans"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 pb-2.5 pt-1 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors font-sans resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="border border-black/80 hover:border-black px-8 py-2 text-sm font-cormorant italic text-black hover:bg-black hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

