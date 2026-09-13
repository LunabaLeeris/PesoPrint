// ============================================================
// Peso Print — TypeScript Application Logic
// 1. Lightbox Modal (Pure image + X close button)
// 2. Section Scroll Animations
// 3. Smooth Navigation (Home & Back to top)
// 4. Vercel Web Analytics Support
// ============================================================

interface Window {
  va?: (event: string, options?: unknown) => void;
  vaq?: unknown[];
}

class LightboxController {
  private modal: HTMLElement;
  private img: HTMLImageElement;

  constructor() {
    this.modal = document.getElementById('lightboxModal') as HTMLElement;
    this.img = document.getElementById('lightboxImg') as HTMLImageElement;

    this.scanItems();
    this.bindEvents();
  }

  public scanItems(): void {
    const triggerElements = document.querySelectorAll<HTMLElement>('[data-lightbox-src]');

    triggerElements.forEach((el) => {
      const src = el.getAttribute('data-lightbox-src') || '';
      el.onclick = () => {
        if (src) this.open(src);
      };
    });
  }

  private bindEvents(): void {
    const closeBtn = document.getElementById('lightboxClose');
    const backdrop = document.getElementById('lightboxBackdrop');

    closeBtn?.addEventListener('click', () => this.close());
    backdrop?.addEventListener('click', () => this.close());

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
    });
  }

  public open(src: string): void {
    this.img.src = src;
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  public close(): void {
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ============================================================
// SECTION ENTRANCE ANIMATIONS
// ============================================================

function initSectionAnimations(): void {
  const sections = document.querySelectorAll<HTMLElement>('.section-reveal');

  if (!('IntersectionObserver' in window)) {
    sections.forEach((s) => s.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}

// ============================================================
// APPLICATION BOOTSTRAP
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Lightbox Controller
  new LightboxController();

  // 2. Section Scroll Animations
  initSectionAnimations();

  // 3. Smooth Navigation
  const homeBtn = document.getElementById('homeBtn');
  const footerBackTop = document.getElementById('footerBackTop');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  homeBtn?.addEventListener('click', scrollToTop);
  footerBackTop?.addEventListener('click', scrollToTop);
});
