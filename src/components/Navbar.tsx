import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'services' | 'quote' | 'about';
  onNavigate?: (page: 'home' | 'services' | 'quote' | 'about', sectionId?: string) => void;
  onOpenInquiry: () => void;
  onOpenWhatsApp: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
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
    { name: 'HOME', page: 'home' as const, href: '#hero', hasDropdown: true },
    { name: 'WORKS', page: 'home' as const, href: '#portfolio' },
    { name: 'SERVICES', page: 'services' as const, href: '#services' },
    { name: 'GET A CUSTOM QUOTE', page: 'quote' as const, href: '#quote' },
    { name: 'ABOUT', page: 'about' as const, href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.page === 'services') {
      if (onNavigate) {
        onNavigate('services');
      }
      return;
    }

    if (link.page === 'quote') {
      if (onNavigate) {
        onNavigate('quote');
      }
      return;
    }

    if (link.page === 'about') {
      if (onNavigate) {
        onNavigate('about');
      }
      return;
    }

    if (onNavigate) {
      onNavigate('home', link.href);
    } else {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHeroMode = currentPage === 'home' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-black/10 shadow-sm'
          : currentPage === 'home'
          ? 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Fairytaleframes Brandmark */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) {
              onNavigate('home', '#hero');
            }
          }} 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-gold-gradient text-base sm:text-lg font-black font-montserrat">/</span>
          <span className={`font-montserrat text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase transition-colors ${
            isHeroMode ? 'text-white group-hover:text-[#D4AF37]' : 'text-black group-hover:text-[#B8860B]'
          }`}>
            Fairytaleframes
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.page === currentPage && (!link.href.startsWith('#') || link.href === '#hero');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-0.5'
                    : isHeroMode
                    ? 'text-white/85 hover:text-[#D4AF37]'
                    : 'text-black/80 hover:text-[#B8860B]'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className={`w-3.5 h-3.5 ${isHeroMode ? 'text-white/50' : 'text-black/50'}`} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Area & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Desktop Hire Me Button */}
          <motion.button
            onClick={onOpenInquiry}
            initial={false}
            whileHover="hover"
            whileTap="tap"
            className={`hidden sm:inline-flex group relative items-center gap-2 py-1.5 pl-4 pr-1.5 rounded-full border border-[#D4AF37] overflow-hidden cursor-pointer shadow-sm transition-all duration-300 ${
              isHeroMode ? 'bg-black/40 backdrop-blur-sm' : 'bg-white'
            }`}
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
            <span className={`relative z-10 font-serif italic text-base sm:text-lg font-semibold tracking-wide transition-colors duration-300 ${
              isHeroMode ? 'text-white group-hover:text-black' : 'text-black'
            }`}>
              Hire Me
            </span>

            <div className="relative z-10 flex items-center">
              {/* Short connecting line */}
              <span className={`w-4 sm:w-6 h-[2px] transition-all duration-300 group-hover:w-7 ${
                isHeroMode ? 'bg-white group-hover:bg-black' : 'bg-black'
              }`} />

              {/* Solid Golden Circle Badge */}
              <motion.div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-[#D4AF37] transition-all duration-300"
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
            className={`md:hidden p-2.5 rounded-full border transition-all active:scale-95 shadow-sm ${
              isHeroMode
                ? 'bg-black/60 border-white/30 text-white hover:border-[#D4AF37]'
                : 'border-black/20 hover:border-[#D4AF37] bg-white text-black'
            }`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 top-[68px] bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Dropdown Panel */}
          <div className="fixed top-[68px] left-0 right-0 bg-white text-black border-b border-black/10 p-6 z-50 md:hidden shadow-2xl space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => {
                const isActive = link.page === currentPage;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`py-3 px-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'text-black bg-[#D4AF37]/25 border-[#D4AF37]'
                        : 'text-black hover:text-black hover:bg-[#D4AF37]/15 border-black/5 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8860B]" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA771C] text-black font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
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
