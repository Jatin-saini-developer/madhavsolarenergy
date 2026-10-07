import Container from '../components/Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--color-dark)] border-t border-white/10 py-8 sm:py-10"
    >
      <Container>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">

          {/* Logo */}
          {/* TODO: Replace text logo with real Madhav Solar logo asset */}
          <a
            href="/"
            aria-label="Madhav Solar Energy — home"
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-sm flex items-center justify-center text-white font-bold text-base group-hover:bg-white group-hover:text-[var(--color-primary)] transition-colors duration-200">
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm tracking-wide text-white leading-tight">MADHAV</span>
              <span className="text-[0.55rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary-muted)]">
                Solar Energy
              </span>
            </div>
          </a>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center order-last sm:order-none">
            © {year} Madhav Solar Energy. All rights reserved.
          </p>

          {/* Minimal links */}
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-5">
              {/* TODO: Link to actual privacy policy and terms pages */}
              <li>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
                  Terms of Use
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </Container>
    </footer>
  );
}
