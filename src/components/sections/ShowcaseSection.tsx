import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PosterTile } from '../ui/PosterTile';
import {
  topQuartetItems,
  middleHeroItems,
  bottomSubsystemItems
} from '../../data/showcaseData';

export const ShowcaseSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="showcase-section section-reveal" id="showcaseSection" ref={sectionRef}>
      <div className="section-container">
        <div className="showcase-header">
          <h2 className="showcase-title">PROTOTYPE &amp; DOCUMENTATION</h2>
        </div>

        <div className="poster-board-wrapper">
          <div className="poster-board">
            {/* ROW 1: DETAIL QUARTET */}
            <div className="poster-row-top">
              {topQuartetItems.map((item) => (
                <PosterTile key={item.id} item={item} />
              ))}
            </div>

            {/* ROW 2: HERO ISOMETRIC & TOP DECK */}
            <div className="poster-row-middle">
              {middleHeroItems.map((item) => (
                <PosterTile key={item.id} item={item} />
              ))}
            </div>

            {/* ROW 3: INTERNAL ARCHITECTURE & SUBSYSTEMS */}
            <div className="poster-row-bottom">
              {/* Left: Open Cutaway Full Body */}
              <PosterTile item={bottomSubsystemItems.mainCutaway} />

              {/* Right: Mechanism & Elevation Cluster */}
              <div className="poster-cluster-right">
                <div className="cluster-subrow">
                  {bottomSubsystemItems.subrow.map((item) => (
                    <PosterTile key={item.id} item={item} />
                  ))}
                </div>

                <PosterTile item={bottomSubsystemItems.sensorCloseup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
