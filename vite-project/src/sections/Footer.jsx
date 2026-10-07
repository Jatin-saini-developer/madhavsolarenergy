import Container from "../components/Container";

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
            <img
              src="https://madhavsolarenergy.com/wp-content/uploads/2023/07/MADHAV-SOLAR-ENERGY-scaled-1.png"
              alt="Madhav Solar Energy"
              className="h-10 sm:h-12 w-auto object-contain"
            />
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
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
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
