import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { WebAppTile } from '../ui/WebAppTile';
import { webAppScreens } from '../../data/webAppData';

export const WebAppSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="webapp-section section-reveal" id="webappSection" ref={sectionRef}>
      <div className="section-container">
        <div className="webapp-header">
          <h2 className="webapp-title">WEB APPLICATION</h2>
        </div>

        <div className="webapp-images-grid" id="webappGrid">
          {webAppScreens.map((screen) => (
            <WebAppTile key={screen.id} item={screen} />
          ))}

          {/* More Screens Card */}
          <div className="webapp-tile webapp-tile-more" aria-hidden="true">
            <span className="more-text">+ many more</span>
          </div>
        </div>
      </div>
    </section>
  );
};
