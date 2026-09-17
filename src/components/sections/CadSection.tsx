import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const CadSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="cad-section section-reveal" id="cadSection" ref={sectionRef}>
      <div className="section-container">
        <div className="cad-viewer-wrapper">
          <div className="cad-iframe-container">
            <iframe
              className="cad-iframe"
              id="cadIframe"
              title="PesoPrint 3D CAD Model Viewer"
              src="https://students130386.autodesk360.com/g/shares/SH28cd1QT2badd0ea72b2495b62b417c25d8"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
