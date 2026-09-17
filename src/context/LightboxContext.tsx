import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LightboxImage } from '../types';

interface LightboxContextType {
  activeImage: LightboxImage | null;
  openLightbox: (image: LightboxImage) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  const openLightbox = useCallback((image: LightboxImage) => {
    setActiveImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Lock body scroll and listen for Escape key when lightbox is open
  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage, closeLightbox]);

  return (
    <LightboxContext.Provider value={{ activeImage, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
