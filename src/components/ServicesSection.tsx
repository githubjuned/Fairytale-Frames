import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

const cubicEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const services = [
    {
      id: 'editing',
      title: 'Editing',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786276403/WhatsApp_Image_2026-08-09_at_17.21.00_wqpbvo.jpg',
    },
    {
      id: 'video',
      title: 'Video',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786276403/WhatsApp_Image_2026-08-09_at_17.21.54_gbkgpt.jpg',
    },
    {
      id: 'photography',
      title: 'Photography',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1786276403/WhatsApp_Image_2026-08-09_at_17.22.28_yhddss.jpg',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 md:py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.85, delay: index * 0.15, ease: cubicEase }}
              onClick={onOpenInquiry}
              className="group cursor-pointer relative flex flex-col pt-6 sm:pt-12 max-w-[280px] sm:max-w-none mx-auto w-full"
            >
              {/* Overlapping Floating Title with translateY(30px) -> translateY(0) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full text-center px-2">
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.12, ease: cubicEase }}
                  className="font-cormorant italic font-normal text-4xl sm:text-6xl md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500"
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Card Image Frame with Clip-Path Mask Reveal */}
              <motion.div 
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0.2 }}
                whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.0, delay: index * 0.15, ease: cubicEase }}
                className="relative w-full aspect-square overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl rounded-sm group-hover:border-[#D4AF37]/50 transition-colors duration-500"
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              </motion.div>

              {/* Bottom Footer: Know More + Golden Arrow */}
              <div className="mt-4 sm:mt-5 flex items-center justify-between px-1">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: cubicEase }}
                  className="font-cormorant italic font-normal text-lg sm:text-2xl text-white tracking-wide group-hover:text-[#F4E0A5] transition-colors"
                >
                  Know More
                </motion.span>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 + index * 0.1, ease: cubicEase }}
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-[#F4E0A5] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
