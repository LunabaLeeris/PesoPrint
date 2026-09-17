import React from 'react';
import { WebAppScreen } from '../../types';
import { useLightbox } from '../../context/LightboxContext';

interface WebAppTileProps {
  item: WebAppScreen;
}

export const WebAppTile: React.FC<WebAppTileProps> = ({ item }) => {
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

  return (
    <div
      className="webapp-tile"
      title={item.title}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Enlarge screen: ${item.title}`}
    >
      <img src={item.src} alt={item.alt} loading="lazy" />
    </div>
  );
};
