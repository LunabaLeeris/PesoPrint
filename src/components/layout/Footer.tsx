import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-logo">PESO PRINT 2026</p>
          <p className="footer-tagline">Automated Printing Kiosk</p>
        </div>
        <div className="footer-right">
          <button
            className="footer-back-top"
            id="footerBackTop"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
