import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioCategoriesProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOpenInquiry?: () => void;
}

// Sub-component 1: Huge Background Typography "WORK"
export const WorkBackgroundTitle: React.FC<{ text?: string }> = ({ text = "WORK" }) => (
  <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-0">
    <h1 className="text-[27vw] font-montserrat font-[900] text-white/90 leading-none tracking-tighter uppercase">
      {text}
    </h1>
  </div>
);

// Sub-component 2: Left Vertical Progress & Index Widget
export const ProjectProgress: React.FC<{
  currentIndex: number;
  totalProjects: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}> = ({ currentIndex, totalProjects, onPrev, onNext, onSelectIndex }) => (
  <div className="absolute left-4 sm:left-6 md:left-14 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-between w-11 h-44 py-3.5 px-2 bg-black/85 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
    <button
      onClick={onPrev}
      disabled={currentIndex === 0}
      className={`text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer ${
        currentIndex === 0 ? 'text-white/20 cursor-not-allowed' : 'text-white hover:text-[#D4AF37]'
      }`}
      title="Previous Project"
    >
      {String(currentIndex + 1).padStart(2, '0')}
    </button>

    {/* Vertical Indicator Line with Clickable Dots */}
    <div className="w-[2px] h-20 bg-white/20 relative rounded-full flex flex-col items-center justify-between py-1 my-1">
      {Array.from({ length: totalProjects }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelectIndex(idx)}
          title={`Go to project ${idx + 1}`}
          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
            idx === currentIndex
              ? 'bg-[#D4AF37] scale-125 shadow-[0_0_8px_rgba(212,175,55,0.8)]'
              : 'bg-white/40 hover:bg-white'
          }`}
        />
      ))}
    </div>

    <button
      onClick={onNext}
      disabled={currentIndex === totalProjects - 1}
      className={`text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer ${
        currentIndex === totalProjects - 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-[#D4AF37]'
      }`}
      title="Next Project"
    >
      {String(totalProjects).padStart(2, '0')}
    </button>
  </div>
);

// Sub-component 3: Project Title
export const ProjectTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="relative z-20 px-6 select-none text-center pointer-events-none">
    <h2 className="heading-h3 text-white tracking-wider drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] group-hover:text-[#F4E0A5] transition-colors">
      {title}
    </h2>
  </div>
);

// Sub-component 4: Project Index Tag
export const ProjectIndex: React.FC<{ index: number; total: number }> = ({ index, total }) => (
  <div className="absolute top-4 left-5 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

// Sub-component 5: Project Overlay
export const ProjectOverlay: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:via-black/10 transition-colors duration-500 pointer-events-none" />
);

// Sub-component 6: Project Image
export const ProjectImage = React.forwardRef<
  HTMLImageElement,
  { src: string; alt: string }
>(({ src, alt }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
  />
));
ProjectImage.displayName = 'ProjectImage';

// Sub-component 7: Project Card
export const ProjectCard = React.forwardRef<
  HTMLDivElement,
  {
    item: PortfolioItem;
    index: number;
    total: number;
    onClick: () => void;
    imageRef: (el: HTMLImageElement | null) => void;
    titleRef: (el: HTMLDivElement | null) => void;
  }
>(({ item, index, total, onClick, imageRef, titleRef }, ref) => (
  <div
    ref={ref}
    onClick={onClick}
    className="project-card cursor-pointer absolute inset-0 w-full h-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-black flex items-center justify-center border border-white/15 group shadow-[0_25px_70px_rgba(0,0,0,0.95)] will-change-transform select-none"
  >
    <ProjectImage ref={imageRef} src={item.imageUrl} alt={item.title} />
    <ProjectOverlay />
    <ProjectIndex index={index} total={total} />
    <div ref={titleRef} className="will-change-transform">
      <ProjectTitle title={item.title} />
    </div>
  </div>
));
ProjectCard.displayName = 'ProjectCard';

// Sub-component 8: Project Stack
export const ProjectStack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative z-10 w-[86vw] max-w-[660px] aspect-[16/10] overflow-hidden">
    {children}
  </div>
);

// Main Component / Section Container: WorkSection
export const WorkSection: React.FC<PortfolioCategoriesProps> = ({ onSelectItem }) => {
  const featuredWorks = PORTFOLIO_ITEMS.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const images = imagesRef.current.filter(Boolean) as HTMLImageElement[];
    const titles = titlesRef.current.filter(Boolean) as HTMLDivElement[];
    const total = featuredWorks.length;

    if (cards.length === 0) return;

    // Ensure ScrollTrigger refreshes properly
    ScrollTrigger.refresh();

    // Create GSAP Timeline with ScrollTrigger scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${total * 130}vh`,
        pin: true,
        pinSpacing: true,
        scrub: 0.7,
        onUpdate: (self) => {
          const prog = self.progress;
          const idx = Math.min(
            total - 1,
            Math.max(0, Math.floor(prog * total))
          );
          setActiveIndex(idx);
        },
      },
    });

    timelineRef.current = tl;

    // Set initial layout for all cards
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { yPercent: 0, scale: 1, autoAlpha: 1, zIndex: 20 });
        if (images[i]) {
          gsap.set(images[i], { clipPath: 'inset(0% round 24px)', yPercent: 0 });
        }
        if (titles[i]) {
          gsap.set(titles[i], { opacity: 1, scale: 1, y: 0 });
        }
      } else {
        gsap.set(card, { yPercent: 100, scale: 0.92, autoAlpha: 0, zIndex: 10 + i });
        if (images[i]) {
          gsap.set(images[i], { clipPath: 'inset(10% round 24px)', yPercent: 15 });
        }
        if (titles[i]) {
          gsap.set(titles[i], { opacity: 0, scale: 0.9, y: 20 });
        }
      }
    });

    // Build timeline transitions: Bottom -> Center -> Top for each card
    for (let i = 0; i < total - 1; i++) {
      const currentCard = cards[i];
      const nextCard = cards[i + 1];
      const currentImg = images[i];
      const nextImg = images[i + 1];
      const currentTitle = titles[i];
      const nextTitle = titles[i + 1];

      const tTime = i; // duration 1 unit per card transition

      // 1. Current card moves out to TOP
      tl.to(
        currentCard,
        {
          yPercent: -100,
          scale: 0.92,
          autoAlpha: 0,
          duration: 1,
          ease: 'power2.inOut',
        },
        tTime
      );

      if (currentImg) {
        tl.to(
          currentImg,
          {
            yPercent: -15,
            clipPath: 'inset(10% round 24px)',
            duration: 1,
            ease: 'power2.inOut',
          },
          tTime
        );
      }

      if (currentTitle) {
        tl.to(
          currentTitle,
          {
            opacity: 0,
            scale: 0.9,
            y: -20,
            duration: 0.6,
            ease: 'power2.inOut',
          },
          tTime
        );
      }

      // 2. Next card moves in from BOTTOM to CENTER simultaneously
      tl.to(
        nextCard,
        {
          yPercent: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.inOut',
        },
        tTime
      );

      if (nextImg) {
        tl.to(
          nextImg,
          {
            yPercent: 0,
            clipPath: 'inset(0% round 24px)',
            duration: 1,
            ease: 'power2.inOut',
          },
          tTime
        );
      }

      if (nextTitle) {
        tl.to(
          nextTitle,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            delay: 0.2,
            ease: 'power2.out',
          },
          tTime
        );
      }
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [featuredWorks.length]);

  // Jump to specific project index when index button is clicked
  const handleSelectIndex = (targetIndex: number) => {
    if (!timelineRef.current || !timelineRef.current.scrollTrigger) return;
    const st = timelineRef.current.scrollTrigger;
    const start = st.start;
    const end = st.end;
    const totalDist = end - start;
    const step = totalDist / Math.max(1, featuredWorks.length - 1);
    const targetScroll = start + targetIndex * step;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSelectIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < featuredWorks.length - 1) {
      handleSelectIndex(activeIndex + 1);
    }
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="bg-black text-white relative select-none"
    >
      {/* Sticky Viewport Container */}
      <div className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden bg-black px-4">
        
        {/* Background Typography "WORK" */}
        <WorkBackgroundTitle text="WORK" />

        {/* Left Side Vertical Index Widget */}
        <ProjectProgress
          currentIndex={activeIndex}
          totalProjects={featuredWorks.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectIndex={handleSelectIndex}
        />

        {/* Centered Stack of Overlapping Project Cards */}
        <ProjectStack>
          {featuredWorks.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={index}
              total={featuredWorks.length}
              onClick={() => onSelectItem(item)}
              ref={(el) => { cardsRef.current[index] = el; }}
              imageRef={(el) => { imagesRef.current[index] = el; }}
              titleRef={(el) => { titlesRef.current[index] = el; }}
            />
          ))}
        </ProjectStack>

      </div>
    </section>
  );
};

// Default Export alias for backward compatibility with App.tsx
export const PortfolioCategories = WorkSection;
