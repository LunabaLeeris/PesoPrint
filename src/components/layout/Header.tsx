import React from 'react';

const NAV_LINKS = [
  { label: '3D CAD', href: '#cadSection' },
  { label: 'Showcase', href: '#showcaseSection' },
  { label: 'Web App', href: '#webappSection' }
];

export const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header" id="top">
      <div className="header-container">
        <button
          className="nav-btn home-btn"
          id="homeBtn"
          aria-label="Go to top"
          onClick={scrollToTop}
        >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </button>

        <h1 className="site-title">PESO PRINT</h1>

        <nav className="header-nav" aria-label="Section navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
