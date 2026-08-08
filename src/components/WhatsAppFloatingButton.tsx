import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber = '917709434402',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent('Hello Fairytaleframes Studio, I would like to inquire about your services.');
    // Clean phone number format for wa.me
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/95 border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md text-[11px] font-sans tracking-wide text-white pointer-events-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <span className="text-white/90">Chat on WhatsApp</span>
            <span className="text-[#D4AF37] font-mono font-bold">+91 7709434402</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Direct WhatsApp Button */}
      <motion.button
        onClick={handleSendWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        aria-label="Direct WhatsApp Chat"
        className="group relative flex items-center justify-center p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] text-white border border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_15px_rgba(37,211,102,0.25)] hover:border-[#25D366] hover:shadow-[0_10px_35px_rgba(37,211,102,0.4)] transition-all duration-300"
      >
        {/* Subtle glowing ring effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

        {/* Pulse ring indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border-2 border-black" />
        </span>

        {/* Authentic Crisp WhatsApp Vector Icon */}
        <div className="relative flex items-center justify-center text-[#25D366] group-hover:text-white transition-colors duration-300">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current drop-shadow-[0_0_6px_rgba(37,211,102,0.6)]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12 21.84c-1.8 0-3.565-.487-5.111-1.41l-.367-.218-3.797.996 1.013-3.699-.239-.38A9.78 9.78 0 012.16 12c0-5.422 4.418-9.84 9.84-9.84 5.422 0 9.84 4.418 9.84 9.84 0 5.422-4.418 9.84-9.84 9.84zm0-21.68C5.463.16 0 5.623 0 12.16c0 2.12.553 4.187 1.602 6.012L0 24l5.992-1.571A11.95 11.95 0 0012 24c6.537 0 12-5.463 12-12C24 5.463 18.537.16 12 .16z" />
          </svg>
        </div>

        {/* Small arrow badge */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#D4AF37] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      </motion.button>
    </div>
  );
};
