import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { SmoothScrollWrapper } from './components/SmoothScrollWrapper';
import { Navbar } from './components/Navbar';
import { FullscreenHeroVideo } from './components/FullscreenHeroVideo';
import { HeroSection } from './components/HeroSection';
import { PortfolioCategories } from './components/PortfolioCategories';
import { ServicesPage } from './components/ServicesPage';
import { CustomQuotePage } from './components/CustomQuotePage';
import { CandidReelsSection } from './components/CandidReelsSection';
import { BestCaptures } from './components/BestCaptures';
import { ColorGradingSection } from './components/ColorGradingSection';
import { AboutStudio } from './components/AboutStudio';
import { CinematicFilms } from './components/CinematicFilms';
import { InstagramGrid } from './components/InstagramGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { StoryModal } from './components/StoryModal';
import { VideoModal } from './components/VideoModal';
import { InquiryModal } from './components/InquiryModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PortfolioItem, FeaturedStory } from './types';
import { PORTFOLIO_ITEMS } from './data/mockData';
import { audioEngine } from './utils/audio';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'quote'>('home');
  const [showSplash, setShowSplash] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [storyModalItem, setStoryModalItem] = useState<FeaturedStory | null>(null);
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent('Hello Fairytaleframes Studio, I would like to inquire about your services.');
    window.open('https://wa.me/917709434402?text=' + text, '_blank');
  };

  const handleNavigate = (page: 'home' | 'services' | 'quote', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'services' || page === 'quote') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId) {
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync ambient sound
  useEffect(() => {
    audioEngine.toggle(soundEnabled);
  }, [soundEnabled]);

  // Lightbox navigation helpers
  const handleLightboxNext = () => {
    if (!lightboxItem) return;
    const idx = PORTFOLIO_ITEMS.findIndex((item) => item.id === lightboxItem.id);
    const nextIdx = (idx + 1) % PORTFOLIO_ITEMS.length;
    setLightboxItem(PORTFOLIO_ITEMS[nextIdx]);
  };

  const handleLightboxPrev = () => {
    if (!lightboxItem) return;
    const idx = PORTFOLIO_ITEMS.findIndex((item) => item.id === lightboxItem.id);
    const prevIdx = (idx - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setLightboxItem(PORTFOLIO_ITEMS[prevIdx]);
  };

  return (
    <SmoothScrollWrapper>
      <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#D4AF37] selection:text-black relative">
        {/* Opening Fullscreen Animated Logo Splash Screen */}
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}

        {/* Floating Glass Navbar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenInquiry={() => setInquiryModalOpen(true)}
          onOpenWhatsApp={handleDirectWhatsApp}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

        {/* Dynamic Page Router */}
        {currentPage === 'services' ? (
          /* Dedicated Services & Capabilities Page */
          <main>
            <ServicesPage
              onBackToHome={() => handleNavigate('home')}
              onOpenInquiry={() => setInquiryModalOpen(true)}
              onOpenWhatsApp={handleDirectWhatsApp}
            />
          </main>
        ) : currentPage === 'quote' ? (
          /* Dedicated Custom Quote & Estimate Page */
          <main>
            <CustomQuotePage
              onBackToHome={() => handleNavigate('home')}
              onOpenWhatsApp={handleDirectWhatsApp}
            />
          </main>
        ) : (
          /* Main Homepage Flow (Without Services Section) */
          <main>
            {/* Fullscreen Edge-to-Edge Autoplay Wedding Film Hero */}
            <FullscreenHeroVideo
              onOpenInquiry={() => setInquiryModalOpen(true)}
              onOpenVideoModal={(filmId) => setActiveFilmId(filmId)}
            />

            {/* Capturing Moments Through The Lens Hero Section */}
            <HeroSection
              onOpenInquiry={() => setInquiryModalOpen(true)}
              onOpenVideoModal={(filmId) => setActiveFilmId(filmId)}
            />

            {/* Candid Moments Captured in Motion – Watch the Reels */}
            <CandidReelsSection />

            {/* Best Captures Highlight Section */}
            <BestCaptures
              onSelectItem={(item) => setLightboxItem(item)}
            />

            {/* Selected Works Portfolio Categories & Gallery */}
            <PortfolioCategories
              onSelectItem={(item) => setLightboxItem(item)}
              onOpenInquiry={() => setInquiryModalOpen(true)}
            />

            {/* Cinematic Films Section */}
            <CinematicFilms
              onOpenVideoModal={(filmId) => setActiveFilmId(filmId)}
            />

            {/* Before & After Color Grading Comparison */}
            <ColorGradingSection />

            {/* About the Studio & Equipment */}
            <AboutStudio />

            {/* Live Instagram Feed */}
            <InstagramGrid />

            {/* Commission Contact & Inquiry Form */}
            <ContactSection
              onOpenWhatsApp={handleDirectWhatsApp}
            />
          </main>
        )}

        {/* Studio Footer */}
        <Footer
          onOpenInquiry={() => setInquiryModalOpen(true)}
          onOpenWhatsApp={handleDirectWhatsApp}
        />

        {/* Floating WhatsApp Quick Concierge */}
        <WhatsAppFloatingButton phoneNumber="917709434402" />

        {/* Interactive Modals */}
        <ImageLightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
          onNext={handleLightboxNext}
          onPrev={handleLightboxPrev}
          onOpenInquiry={() => setInquiryModalOpen(true)}
        />

        <StoryModal
          story={storyModalItem}
          onClose={() => setStoryModalItem(null)}
          onOpenInquiry={() => setInquiryModalOpen(true)}
        />

        <VideoModal
          filmId={activeFilmId}
          onClose={() => setActiveFilmId(null)}
          onOpenInquiry={() => setInquiryModalOpen(true)}
        />

        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
        />
      </div>
    </SmoothScrollWrapper>
  );
}

export default App;
