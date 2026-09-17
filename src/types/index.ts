export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
}

export interface ShowcaseItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export interface WebAppScreen {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export interface NavItem {
  label: string;
  href: string;
}
