import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingContact } from './components/FloatingContact.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { InspirationPage } from './pages/InspirationPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#191919] font-sans antialiased selection:bg-[#C6AA76]/30 selection:text-[#191919]">
        {/* Global Shared Header */}
        <Header />

        {/* Routed Page Content */}
        <main className="flex-1 pb-20 md:pb-0" id="main-content">
          <Routes>
            {/* 1. Home — / */}
            <Route path="/" element={<HomePage />} />

            {/* 2. About — /about */}
            <Route path="/about" element={<AboutPage />} />

            {/* 3. Services Directory — /services */}
            <Route path="/services" element={<ServicesPage />} />

            {/* Legacy Slug Redirects */}
            <Route
              path="/services/custom-wardrobes"
              element={<Navigate to="/services/wardrobes" replace />}
            />
            <Route
              path="/services/designer-tv-units"
              element={<Navigate to="/services/tv-units" replace />}
            />
            <Route
              path="/services/false-ceiling-designs"
              element={<Navigate to="/services/false-ceilings" replace />}
            />
            <Route
              path="/services/turnkey-interior-solutions"
              element={<Navigate to="/services/turnkey-interiors" replace />}
            />

            {/* 4. Individual Service Pages — /services/:slug */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* 5. Design Inspiration — /design-inspiration */}
            <Route path="/design-inspiration" element={<InspirationPage />} />

            {/* 6. Contact & Consultation Enquiry — /contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 7. Useful 404 Fallback for unknown URLs */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Shared Footer */}
        <Footer />

        {/* Global Floating Desktop WhatsApp Button & Mobile Fixed Bottom Bar */}
        <FloatingContact />
      </div>
    </BrowserRouter>
  );
}
