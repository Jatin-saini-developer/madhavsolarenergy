import { useState, useEffect } from 'react';
import Container from './Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'}
      `}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">

          {/* ── Logo ────────────────────────────────────────── */}
          {/* TODO: Replace the text logo with the real Madhav Solar logo SVG/PNG
                    Place it at src/assets/logo/madhav-solar-logo.png */}
          <a
            href="/"
            aria-label="Madhav Solar Energy — home"
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <div className="
              w-9 h-9 sm:w-10 sm:h-10
              bg-[var(--color-primary)] rounded-sm
              flex items-center justify-center
              text-white font-bold text-lg sm:text-xl
              group-hover:bg-[var(--color-dark)]
              transition-colors duration-200
            ">
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className={`
                font-bold text-base sm:text-lg tracking-wide leading-tight
                ${isScrolled ? 'text-[var(--color-dark)]' : 'text-white'}
                transition-colors duration-200
              `}>
                MADHAV
              </span>
              <span className={`
                text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-[0.18em] uppercase
                ${isScrolled ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary-muted)]'}
                transition-colors duration-200
              `}>
                Solar Energy
              </span>
            </div>
          </a>

          {/* ── CTA ─────────────────────────────────────────── */}
          {/* Full label on tablet+, abbreviated on small mobile */}
          <div className="flex-shrink-0">
            {/* ≥ 480px: full label */}
            <a
              href="#assessment"
              id="header-cta"
              className="
                hidden xs:inline-flex
                items-center justify-center gap-2
                min-h-[44px] px-5 sm:px-6 py-2.5
                bg-[var(--color-primary)] text-white
                text-xs sm:text-sm font-semibold tracking-wide leading-none
                rounded-sm whitespace-nowrap
                hover:bg-[var(--color-dark)] active:bg-[var(--color-dark)]
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
              "
            >
              <span className="hidden sm:inline">Get My Solar Opportunity Assessment</span>
              <span className="inline sm:hidden">Assess Opportunity</span>
            </a>

            {/* < 480px: icon button for very small screens */}
            <a
              href="#assessment"
              aria-label="Get My Solar Opportunity Assessment"
              className="
                inline-flex xs:hidden
                items-center justify-center
                min-h-[44px] min-w-[44px] px-3 py-2.5
                bg-[var(--color-primary)] text-white
                rounded-sm
                hover:bg-[var(--color-dark)]
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
              "
            >
              {/* Arrow-right icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </Container>
    </header>
  );
}
