import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const services = [
    {
      id: 'editing',
      title: 'Editing',
      imageUrl: 'https://res.cloudinary.com/dyvmqkxok/image/upload/v1785866009/WhatsApp_Image_2026-08-02_at_18.26.24_jkjm60.jpg',
    },
    {
      id: 'video',
      title: 'Video',
      imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=90&w=1200',
    },
    {
      id: 'photography',
      title: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=90&w=1200',
    },
  ];

  return (
    <section id="services" className="pt-2 sm:pt-8 pb-12 md:py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 items-start">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
              onClick={onOpenInquiry}
              className="group cursor-pointer relative flex flex-col pt-8 sm:pt-14"
            >
              {/* Overlapping Floating Title at top center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full text-center px-2">
                <h3 className="font-cormorant italic font-normal text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                  {service.title}
                </h3>
              </div>

              {/* Card Image Frame */}
              <div className="relative w-full aspect-square overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              {/* Bottom Footer: Know More + Golden Arrow */}
              <div className="mt-5 flex items-center justify-between px-1">
                <span className="font-cormorant italic font-normal text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#F4E0A5] transition-colors">
                  Know More
                </span>

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-[#F4E0A5] group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

