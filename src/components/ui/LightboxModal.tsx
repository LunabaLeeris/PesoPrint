import React from 'react';
import { useLightbox } from '../../context/LightboxContext';

export const LightboxModal: React.FC = () => {
  const { activeImage, closeLightbox } = useLightbox();

  if (!activeImage) return null;

  return (
    <div
      className="lightbox-modal active"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      <div
        className="lightbox-backdrop"
        id="lightboxBackdrop"
        onClick={closeLightbox}
      />
      <div className="lightbox-content">
        <button
          className="lightbox-close"
          id="lightboxClose"
          onClick={closeLightbox}
          aria-label="Close modal"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="lightbox-img-wrap">
          <img
            className="lightbox-img"
            src={activeImage.src}
            alt={activeImage.alt}
          />
        </div>
      </div>
    </div>
  );
};
