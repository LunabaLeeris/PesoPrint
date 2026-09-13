"use strict";
// ============================================================
// Peso Print — TypeScript Application Logic
// 1. Lightbox Modal (Pure image + X close button)
// 2. Section Scroll Animations
// 3. Smooth Navigation (Home & Back to top)
// ============================================================
class LightboxController {
    modal;
    img;
    constructor() {
        this.modal = document.getElementById('lightboxModal');
        this.img = document.getElementById('lightboxImg');
        this.scanItems();
        this.bindEvents();
    }
    scanItems() {
        const triggerElements = document.querySelectorAll('[data-lightbox-src]');
        triggerElements.forEach((el) => {
            const src = el.getAttribute('data-lightbox-src') || '';
            el.onclick = () => {
                if (src)
                    this.open(src);
            };
        });
    }
    bindEvents() {
        const closeBtn = document.getElementById('lightboxClose');
        const backdrop = document.getElementById('lightboxBackdrop');
        closeBtn?.addEventListener('click', () => this.close());
        backdrop?.addEventListener('click', () => this.close());
        window.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active'))
                return;
            if (e.key === 'Escape')
                this.close();
        });
    }
    open(src) {
        this.img.src = src;
        this.modal.classList.add('active');
        this.modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.modal.classList.remove('active');
        this.modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}
// ============================================================
// SECTION ENTRANCE ANIMATIONS
// ============================================================
function initSectionAnimations() {
    const sections = document.querySelectorAll('.section-reveal');
    if (!('IntersectionObserver' in window)) {
        sections.forEach((s) => s.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
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
