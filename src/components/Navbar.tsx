import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenWhatsApp: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero', hasDropdown: true },
    { name: 'WORKS', href: '#portfolio' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070707]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Fairytaleframes Brandmark */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 group">
          <span className="text-gold-gradient text-base sm:text-lg font-black font-montserrat">/</span>
          <span className="font-montserrat text-xs sm:text-sm font-extrabold tracking-[0.22em] text-white uppercase group-hover:text-[#F4E0A5] transition-colors">
            Fairytaleframes
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-white/90 hover:text-[#F4E0A5] transition-colors flex items-center gap-1"
            >
              <span>{link.name}</span>
              {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-white/60" />}
            </a>
          ))}
        </nav>

        {/* Right CTA Area & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Desktop Hire Me Button */}
          <motion.button
            onClick={onOpenInquiry}
            initial={false}
            whileHover="hover"
            whileTap="tap"
            className="hidden sm:inline-flex group relative items-center gap-2 py-1.5 pl-4 pr-1.5 rounded-full border border-[#D4AF37]/60 overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300"
          >
            {/* Smooth Motion Graphics Background Fill Overlay */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#F4E0A5] via-[#D4AF37] to-[#AA771C] z-0 rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              variants={{
                hover: { scaleX: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
                tap: { scaleX: 1 }
              }}
            />

            {/* Button Text */}
            <span className="relative z-10 font-serif italic text-base sm:text-lg font-semibold tracking-wide text-white group-hover:text-black transition-colors duration-300">
              Hire Me
            </span>

            <div className="relative z-10 flex items-center">
              {/* Short connecting line - pure black matching the arrow */}
              <span className="w-4 sm:w-6 h-[2px] bg-black transition-all duration-300 group-hover:w-7" />

              {/* Solid Golden Circle Badge */}
              <motion.div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.5)] group-hover:bg-black group-hover:text-[#D4AF37] transition-all duration-300"
                variants={{
                  hover: { scale: 1.08, rotate: -8, transition: { duration: 0.25 } }
                }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </motion.div>
            </div>
          </motion.button>

          {/* Mobile Menu Toggle Button (Right Side Mobile View) */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2.5 rounded-full border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-black/60 text-white transition-all active:scale-95 shadow-[0_0_12px_rgba(212,175,55,0.2)]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#F4E0A5]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 top-[68px] bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Dropdown Panel */}
          <div className="fixed top-[68px] left-0 right-0 bg-[#0B0B0B] text-white border-b border-[#D4AF37]/30 p-6 z-50 md:hidden shadow-2xl space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 px-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] text-white/90 hover:text-black hover:bg-[#D4AF37] transition-all flex items-center justify-between border border-white/5 hover:border-[#D4AF37]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA771C] text-black font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
