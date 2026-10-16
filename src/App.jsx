import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import HeroCarousel from './components/HeroCarousel';
import ProgramFinder from './components/ProgramFinder';
import ImpactPillars from './components/ImpactPillars';
import CategoryGrid from './components/CategoryGrid';
import HowItWorks from './components/HowItWorks';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import RequestInfoForm from './components/RequestInfoForm';
import Keynotes from './components/Keynotes';
import Enterprise from './components/Enterprise';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ProgramModal from './components/ProgramModal';
import VideoModal from './components/VideoModal';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';
import PolicyView from './components/PolicyView';

export default function App() {
  // Navigation / View State
  const [currentView, setCurrentView] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('privacy')) return 'privacy';
    if (path.includes('terms')) return 'terms';
    if (path.includes('refund')) return 'refund';
    if (path.includes('delivery')) return 'delivery';
    if (path.includes('accessibility')) return 'accessibility';
    if (path.includes('programs')) return 'programs';
    return 'home';
  });

  // Filter & Search State
  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('category') || 'all';
    }
    return 'all';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMode, setSortMode] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  // Modals & Drawers State
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('');

  // Toast State
  const [toast, setToast] = useState({ message: '', visible: false });

  const showToast = useCallback((message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  }, []);

  const performScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const header = document.getElementById('mainHeader');
      const headerHeight = header ? header.offsetHeight : 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 12;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = useCallback((sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      setCurrentView('home');
      window.history.pushState({}, '', '/');
      setTimeout(() => {
        performScroll(sectionId);
      }, 120);
    } else {
      performScroll(sectionId);
    }
  }, []);

  const navigatePolicy = useCallback((policyKey) => {
    setCurrentView(policyKey);
    const filenames = {
      privacy: 'privacy-policy.html',
      terms: 'terms-and-conditions.html',
      refund: 'refund-policy.html',
      delivery: 'service-delivery.html',
      accessibility: 'accessibility-statement.html'
    };
    window.history.pushState({}, '', `/${filenames[policyKey] || ''}`);
  }, []);

  const navigatePrograms = useCallback((category = 'all', query = '', shouldScrollToFinder = false) => {
    setCurrentView('programs');
    const cat = category || 'all';
    setActiveCategory(cat);
    setSearchQuery(query || '');

    const url = cat !== 'all' ? `/programs?category=${encodeURIComponent(cat)}` : '/programs';
    window.history.pushState({}, '', url);

    if (shouldScrollToFinder || (cat && cat !== 'all')) {
      setTimeout(() => {
        performScroll('programFinderSection');
      }, 70);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateHome = useCallback(() => {
    setCurrentView('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync back/forward button
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('privacy')) setCurrentView('privacy');
      else if (path.includes('terms')) setCurrentView('terms');
      else if (path.includes('refund')) setCurrentView('refund');
      else if (path.includes('delivery')) setCurrentView('delivery');
      else if (path.includes('accessibility')) setCurrentView('accessibility');
      else if (path.includes('programs')) {
        setCurrentView('programs');
        const params = new URLSearchParams(window.location.search);
        setActiveCategory(params.get('category') || 'all');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title based on view
  useEffect(() => {
    if (currentView === 'home') {
      document.title = "Cambridge Learning Services | Online Certifications & Executive Programs";
    } else if (currentView === 'programs') {
      document.title = "Course Catalogue (155 Programs) | Cambridge Learning Services";
    }
  }, [currentView]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
        setSelectedProgramId(null);
        setSelectedVideoId(null);
        setIsMobileDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFilterCategory = (catId) => {
    setActiveCategory(catId);
    setSearchQuery('');
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortMode('featured');
    setPriceFilter('all');
    setDurationFilter('all');
    if (currentView === 'programs') {
      window.history.pushState({}, '', '/programs');
    }
  };

  const handleInquireCourse = (courseTitle) => {
    setPreselectedCourse(courseTitle);
    showToast(`Selected: ${courseTitle} - Complete inquiry below for 30% savings.`);
    scrollToSection('requestInfoSection');
  };

  return (
    <div className="cambridge-react-app">
      {/* Main Header */}
      <Header
        onScrollToSection={scrollToSection}
        onFilterCategory={handleFilterCategory}
        onOpenProgramModal={(id) => setSelectedProgramId(id)}
        onToggleMobileDrawer={() => setIsMobileDrawerOpen(true)}
        onNavigateHome={navigateHome}
        onNavigatePrograms={navigatePrograms}
        currentView={currentView}
      />

      {/* Mobile Drawer Navigation */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onScrollToSection={scrollToSection}
        onSearch={(term) => navigatePrograms('all', term)}
        onNavigatePrograms={navigatePrograms}
        onNavigatePolicy={navigatePolicy}
      />

      {/* Main Content: Home, Programs, or Policy View */}
      {currentView === 'home' ? (
        <main>
          {/* Hero Carousel with CTA to Programs (NO VIDEO) */}
          <HeroCarousel 
            onScrollToSection={scrollToSection} 
            onNavigatePrograms={navigatePrograms}
          />

          {/* Designed For Impact (6 Pillars) */}
          <ImpactPillars />

          {/* Cambridge Professional Education Visual Category Cards */}
          <CategoryGrid 
            onFilterCategory={handleFilterCategory} 
            onScrollToSection={scrollToSection} 
            onNavigatePrograms={navigatePrograms}
          />

          {/* How It Works Showcase */}
          <HowItWorks 
            onScrollToSection={scrollToSection} 
            onOpenVideoModal={(vidId) => setSelectedVideoId(vidId)} 
          />

          {/* By The Numbers Statistics */}
          <StatsSection />

          {/* Student Stories Testimonials Carousel */}
          <Testimonials />

          {/* Request Information Form */}
          <RequestInfoForm 
            preselectedCourse={preselectedCourse} 
            onShowToast={showToast}
            onNavigatePolicy={navigatePolicy}
          />

          {/* Keynotes & Events Spotlight */}
          <Keynotes 
            onOpenVideoModal={(vidId) => setSelectedVideoId(vidId)} 
            onShowToast={showToast} 
          />

          {/* Enterprise & Corporate Training */}
          <Enterprise onScrollToSection={scrollToSection} />

          {/* Social Impact / Education For All */}
          <ImpactSection />
        </main>
      ) : currentView === 'programs' ? (
        <main className="programs-view-page">
          {/* Programs Dedicated Hero Banner */}
          <section className="programs-hero-banner" id="programsHeroBanner">
            <div className="container">
              <nav className="programs-breadcrumbs" aria-label="Breadcrumb">
                <button type="button" className="breadcrumb-btn" onClick={navigateHome}>
                  Home
                </button>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb-active">Programs</span>
              </nav>

              <div className="programs-banner-inner">
                <span className="programs-badge-pill">ACADEMIC & VOCATIONAL CATALOGUE</span>
                <h1 className="programs-heading">Online Certifications & Masterclasses</h1>
                <p className="programs-lead">
                  Explore over 100 industry-aligned certificate programs delivered 100% online. Designed by distinguished Cambridge faculty and industry experts for career advancement.
                </p>

                <div className="programs-key-features">
                  <div className="feature-pill">
                    <span className="icon">🎓</span> 100+ Professional Certifications
                  </div>
                  <div className="feature-pill">
                    <span className="icon">⏱️</span> 10 to 30 Days Flexible cohorts
                  </div>
                  <div className="feature-pill">
                    <span className="icon">📜</span> Verifiable Digital Credential
                  </div>
                  <div className="feature-pill">
                    <span className="icon">🤝</span> 1-on-1 Faculty Feedback
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Certificate Finder Bar & Grid (Course Catalogue) */}
          <ProgramFinder
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortMode={sortMode}
            onSortChange={setSortMode}
            priceFilter={priceFilter}
            onPriceChange={setPriceFilter}
            durationFilter={durationFilter}
            onDurationChange={setDurationFilter}
            onResetFilters={handleResetFilters}
            onOpenProgramModal={(id) => setSelectedProgramId(id)}
            onInquireCourse={handleInquireCourse}
            onScrollToSection={scrollToSection}
          />

          {/* In-page Request Info Form for seamless conversion */}
          <RequestInfoForm 
            preselectedCourse={preselectedCourse} 
            onShowToast={showToast}
            onNavigatePolicy={navigatePolicy}
          />
        </main>
      ) : (
        <PolicyView 
          policyKey={currentView} 
          onNavigatePolicy={navigatePolicy} 
          onNavigateHome={navigateHome} 
        />
      )}

      {/* Main Footer */}
      <Footer
        onFilterCategory={handleFilterCategory}
        onScrollToSection={scrollToSection}
        onNavigatePrograms={navigatePrograms}
        onNavigatePolicy={navigatePolicy}
      />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProgram={(id) => setSelectedProgramId(id)}
      />

      <ProgramModal
        programId={selectedProgramId}
        onClose={() => setSelectedProgramId(null)}
        onScrollToSection={scrollToSection}
      />

      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />


      {/* Floating Notifications & Controls */}
      <Toast 
        message={toast.message} 
        visible={toast.visible} 
      />

      <BackToTop />
    </div>
  );
}
