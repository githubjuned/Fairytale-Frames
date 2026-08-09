import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
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
  <div className="absolute left-1.5 sm:left-6 md:left-14 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-between w-8 sm:w-11 h-32 sm:h-44 py-2 sm:py-3.5 px-1 sm:px-2 bg-black/85 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
    <button
      onClick={onPrev}
      disabled={currentIndex === 0}
      className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer ${
        currentIndex === 0 ? 'text-white/20 cursor-not-allowed' : 'text-white hover:text-[#D4AF37]'
      }`}
      title="Previous Project"
    >
      {String(currentIndex + 1).padStart(2, '0')}
    </button>

    {/* Vertical Indicator Line with Clickable Dots */}
    <div className="w-[2px] h-12 sm:h-20 bg-white/20 relative rounded-full flex flex-col items-center justify-between py-1 my-1">
      {Array.from({ length: totalProjects }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelectIndex(idx)}
          title={`Go to project ${idx + 1}`}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all cursor-pointer ${
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
      className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-wider transition-colors cursor-pointer ${
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
  <div className="relative z-20 px-3 sm:px-6 select-none text-center pointer-events-none flex flex-col items-center">
    <h2 className="heading-h3 text-white tracking-wider drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] group-hover:text-[#F4E0A5] group-active:text-[#F4E0A5] transition-colors">
      {title}
    </h2>
  </div>
);

// Sub-component 4: Project Index Tag (Optional / Unused)
export const ProjectIndex: React.FC<{ index: number; total: number }> = () => null;

// Sub-component 5: Project Overlay
export const ProjectOverlay: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:via-transparent transition-colors duration-500 pointer-events-none" />
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
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-500 ease-out will-change-transform"
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
    className="project-card cursor-pointer absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center group will-change-transform select-none touch-manipulation active:scale-[0.98] transition-transform duration-200"
  >
    <ProjectImage ref={imageRef} src={item.imageUrl} alt={item.title} />
    <ProjectOverlay />
    <ProjectIndex index={index} total={total} />
    {item.videoUrl && (
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] text-xs font-mono font-bold border border-[#D4AF37]/40 shadow-xl">
        <Play className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
        <span className="tracking-wider">4K FILM REEL</span>
      </div>
    )}
    <div ref={titleRef} className="will-change-transform">
      <ProjectTitle title={item.title} />
    </div>
  </div>
));
ProjectCard.displayName = 'ProjectCard';

// Sub-component 8: Project Stack
export const ProjectStack: React.FC<{
  children: React.ReactNode;
  onTouchStart?: React.TouchEventHandler;
  onTouchEnd?: React.TouchEventHandler;
}> = ({ children, onTouchStart, onTouchEnd }) => (
  <div
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    className="relative z-10 w-[78vw] sm:w-[80vw] max-w-[660px] aspect-[4/5] sm:aspect-[16/10] overflow-hidden ml-8 sm:ml-0 rounded-xl sm:rounded-none shadow-2xl"
  >
    {children}
  </div>
);

// Main Component / Section Container: WorkSection
export const WorkSection: React.FC<PortfolioCategoriesProps> = ({ onSelectItem }) => {
  const featuredWorks = PORTFOLIO_ITEMS;
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isAnimatingRef = useRef<boolean>(false);
  const activeIndexRef = useRef<number>(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

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

    // Prevent mobile URL bar resize triggers from destroying GSAP ScrollTrigger pins
    ScrollTrigger.config({ ignoreMobileResize: true });

    const isMobile = window.innerWidth < 640;
    const distancePerCard = isMobile ? window.innerHeight * 0.9 : window.innerHeight * 1.0;

    // Create GSAP Timeline with ScrollTrigger scrub and smooth snapping
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${total * distancePerCard}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: isMobile ? 0.4 : 0.6,
        fastScrollEnd: true,
        snap: {
          snapTo: 1 / Math.max(1, total - 1),
          duration: { min: 0.35, max: 0.6 },
          delay: 0.02,
          ease: 'power2.inOut',
        },
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const prog = self.progress;
          const idx = Math.min(
            total - 1,
            Math.max(0, Math.round(prog * (total - 1)))
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
          gsap.set(images[i], { clipPath: 'inset(0%)', yPercent: 0 });
        }
        if (titles[i]) {
          gsap.set(titles[i], { opacity: 1, scale: 1, y: 0 });
        }
      } else {
        gsap.set(card, { yPercent: 100, scale: 0.92, autoAlpha: 0, zIndex: 10 + i });
        if (images[i]) {
          gsap.set(images[i], { clipPath: 'inset(8%)', yPercent: 15 });
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
            clipPath: 'inset(8%)',
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
            clipPath: 'inset(0%)',
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

    // Wheel listener to lock scroll to 1 card per wheel scroll step when pinned
    const handleWheel = (e: WheelEvent) => {
      const st = tl.scrollTrigger;
      if (!st || !st.isActive) return;

      const currentIdx = activeIndexRef.current;
      const isAtStart = currentIdx === 0 && e.deltaY < 0;
      const isAtEnd = currentIdx === total - 1 && e.deltaY > 0;

      // If inside pinned range, step 1 card per wheel gesture
      if (!isAtStart && !isAtEnd) {
        e.preventDefault();
        if (isAnimatingRef.current) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        const targetIndex = Math.min(total - 1, Math.max(0, currentIdx + direction));

        if (targetIndex !== currentIdx) {
          isAnimatingRef.current = true;
          const start = st.start;
          const end = st.end;
          const totalDist = end - start;
          const step = totalDist / Math.max(1, total - 1);
          const targetScroll = start + targetIndex * step;

          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth',
          });

          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 500);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [featuredWorks.length]);

  // Jump to specific project index when index button is clicked or swiped
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

  // Touch gesture handler for swiping up/down on cards on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;
    touchStartY.current = null;

    if (Math.abs(diffY) > 40) {
      if (diffY > 0 && activeIndex < featuredWorks.length - 1) {
        handleSelectIndex(activeIndex + 1);
      } else if (diffY < 0 && activeIndex > 0) {
        handleSelectIndex(activeIndex - 1);
      }
    }
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="bg-black text-white relative select-none"
    >
      {/* Sticky Viewport Container */}
      <div className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden bg-black px-2 sm:px-4">
        
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
        <ProjectStack onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
