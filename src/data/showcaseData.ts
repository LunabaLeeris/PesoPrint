import { ShowcaseItem } from '../types';

export const topQuartetItems: ShowcaseItem[] = [
  {
    id: 'dispenser',
    src: '/assets/kiosk_base.png',
    alt: 'PesoPrint Dispenser Slot',
    title: 'Dispenser Tray',
    className: 'tile-dispenser'
  },
  {
    id: 'back-panel',
    src: '/assets/kiosk_back.png',
    alt: 'PesoPrint Rear Ventilation',
    title: 'Rear Enclosure',
    className: 'tile-back-panel'
  },
  {
    id: 'partnership',
    src: '/assets/kiosk_partnerhip.png',
    alt: 'National University Partnership Banner',
    title: 'National University Partnership',
    className: 'tile-partnership'
  },
  {
    id: 'console',
    src: '/assets/kiosk_front_zooned.png',
    alt: 'PesoPrint Screen & Coin Slot Interface',
    title: 'Front Console',
    className: 'tile-console'
  }
];

export const middleHeroItems: ShowcaseItem[] = [
  {
    id: 'hero-iso',
    src: '/assets/kiosk_side.png',
    alt: 'PesoPrint 3D Isometric View',
    title: 'Hero Isometric Prototype',
    className: 'tile-hero-iso'
  },
  {
    id: 'top-deck',
    src: '/assets/kiosk_top.png',
    alt: 'PesoPrint Top Elevation',
    title: 'Top Elevation',
    className: 'tile-top-deck'
  }
];

export const bottomSubsystemItems = {
  mainCutaway: {
    id: 'cutaway-main',
    src: '/assets/kiosk_opened.png',
    alt: 'PesoPrint Internal Component Assembly',
    title: 'Internal Hardware Architecture',
    className: 'tile-cutaway-main'
  } as ShowcaseItem,
  subrow: [
    {
      id: 'maintenance-bay',
      src: '/assets/kiosk_opened_maintenance.png',
      alt: 'PesoPrint Rear Maintenance Bay',
      title: 'Rear Service Bay',
      className: 'tile-maintenance-bay'
    },
    {
      id: 'front-elevation',
      src: '/assets/kiosk_birrds.png',
      alt: 'PesoPrint Front Perspective',
      title: 'Front Perspective',
      className: 'tile-front-elevation'
    }
  ] as ShowcaseItem[],
  sensorCloseup: {
    id: 'sensor-closeup',
    src: '/assets/kiosk_camera_closeup.png',
    alt: 'Internal Camera Sensor and Bracket',
    title: 'Internal Sensor & Mechanism',
    className: 'tile-sensor-closeup'
  } as ShowcaseItem
};
