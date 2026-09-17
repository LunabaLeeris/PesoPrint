import React from 'react';
import { ShowcaseItem } from '../../types';
import { useLightbox } from '../../context/LightboxContext';

interface PosterTileProps {
  item: ShowcaseItem;
  className?: string;
}

export const PosterTile: React.FC<PosterTileProps> = ({ item, className = '' }) => {
  const { openLightbox } = useLightbox();

  const handleClick = () => {
    openLightbox({
      src: item.src,
      alt: item.alt,
      title: item.title
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const combinedClassName = `poster-tile ${item.className || ''} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      title={item.title}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Enlarge ${item.title}`}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
    </div>
  );
};
