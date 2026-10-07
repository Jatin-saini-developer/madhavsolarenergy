import Container from '../components/Container';
import { companyData } from '../data/content';

export default function Hero() {
  return (
    /*
     * Section strategy:
     * – Mobile (320–414): stacked, text fills width, buttons are full-width
     * – Tablet (768): same stacked layout, slightly more generous padding
     * – Desktop (1024+): content left, image reveals right side more
     *
     * The background image must be added at:
     *   src/assets/images/hero-manufacturing-facility.jpg
     * TODO: Add premium industrial manufacturing facility image (with solar naturally visible).
     *       Use object-position: center right so the facility stays in frame on mobile crops.
     */
    <section
      className="
        relative flex items-center
        min-h-screen
        pt-24 pb-16
        sm:pt-28 sm:pb-20
        lg:pt-32 lg:pb-24
        overflow-hidden
        bg-[var(--color-dark)]
      "
    >
      {/* ── Background ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace div below with <img> or CSS background-image once the real
                  facility photo is available.
            Example:
              <img
                src="/src/assets/images/hero-manufacturing-facility.jpg"
                alt=""
                className="w-full h-full object-cover object-center-right"
              />
        */}
        <div className="w-full h-full bg-[#0f1218]" />

        {/* Gradient overlay — stronger on mobile so text is always readable */}
        <div className="
          absolute inset-0
          bg-gradient-to-b from-[var(--color-dark)]/90 via-[var(--color-dark)]/75 to-[var(--color-dark)]/90
          sm:bg-gradient-to-r sm:from-[var(--color-dark)] sm:via-[var(--color-dark)]/85 sm:to-[var(--color-dark)]/20
        " />

        {/* Subtle green glow accent */}
        <div className="
          absolute bottom-0 left-0 right-0 h-1
          bg-gradient-to-r from-transparent via-[var(--color-primary)]/60 to-transparent
        " />
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <Container className="relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center mb-5 sm:mb-6">
            <div className="w-5 h-px bg-[var(--color-primary)] mr-3 hidden sm:block" />
            <span className="
              px-3 py-1
              bg-white/8 backdrop-blur-sm border border-white/15
              rounded-sm
              text-[var(--color-primary)] font-bold
              text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase
            ">
              Solar for Manufacturing
            </span>
          </div>

          {/* Headline — fluid-h1 ensures it never overflows */}
          <h1 className="fluid-h1 font-bold text-white mb-5 sm:mb-6 text-balance">
            Your Energy Cost Shouldn't Control Your Growth.
          </h1>

          {/* Supporting copy */}
          <p className="
            fluid-body text-gray-300
            mb-8 sm:mb-10
            max-w-xl
            text-balance leading-relaxed
          ">
            For manufacturing businesses, power cost directly impacts margins, production
            economics and long-term planning. Madhav Solar helps you evaluate the right solar
            opportunity around your facility, energy profile and business goals.
          </p>

          {/* CTA group — stacked on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a
              href="#assessment"
              id="hero-primary-cta"
              className="
                inline-flex items-center justify-center gap-2
                min-h-[52px] sm:min-h-[48px]
                px-6 py-3 sm:px-8
                bg-[var(--color-primary)] text-white
                text-sm sm:text-base font-semibold tracking-wide
                rounded-sm
                hover:bg-[var(--color-dark)] active:bg-[var(--color-dark)]
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]
              "
            >
              Get My Solar Opportunity Assessment
            </a>

            <a
              href="#contact"
              id="hero-secondary-cta"
              className="
                inline-flex items-center justify-center gap-2
                min-h-[52px] sm:min-h-[48px]
                px-6 py-3 sm:px-8
                bg-transparent text-white
                border border-white/35
                text-sm sm:text-base font-semibold tracking-wide
                rounded-sm
                hover:bg-white/10 hover:border-white/60
                active:bg-white/15
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]
              "
            >
              Speak With a Solar Expert
            </a>
          </div>

          {/* Small qualifier line */}
          <p className="text-xs sm:text-sm text-gray-400 font-medium mb-10 sm:mb-14">
            For manufacturing and energy-intensive businesses across India.
          </p>

          {/* ── Trust Metrics ─────────────────────────────── */}
          {/*
           * Mobile: 3-column (all 3 visible, numbers slightly smaller)
           * Tablet+: 3-column with more spacing
           * Numbers use tabular figures to prevent layout shift
           */}
          <div className="
            grid grid-cols-3
            gap-4 sm:gap-8
            pt-6 sm:pt-8
            border-t border-white/10
          ">
            {[
              { value: companyData.commissionedCapacity, label: "Commissioned Capacity" },
              { value: companyData.industrialProjects,   label: "Industrial Projects" },
              { value: companyData.footprint,            label: "Pan-India Footprint" },
            ].map(({ value, label }) => (
              <div key={label} className="min-w-0">
                <div className="
                  text-xl sm:text-2xl lg:text-3xl
                  font-bold text-white
                  mb-1 leading-none tabular-nums
                ">
                  {value}
                </div>
                <div className="
                  text-[0.6rem] sm:text-xs
                  text-[var(--color-primary)]
                  tracking-wider uppercase font-semibold
                  leading-snug
                ">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
