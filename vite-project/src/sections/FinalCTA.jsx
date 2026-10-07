import Container from '../components/Container';

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-20 sm:py-24 lg:py-32 bg-[var(--color-dark)] overflow-hidden"
    >
      {/* Green glow accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[300px] bg-[var(--color-primary)] opacity-[0.07] rounded-full blur-3xl" />
      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase mb-5">
            Final Step
          </p>

          <h2 className="fluid-h2 font-bold text-white text-balance mb-5">
            Before You Buy Solar, Know What It Can Do for Your Business.
          </h2>

          <p className="fluid-body text-gray-300 max-w-xl mx-auto text-balance leading-relaxed mb-10">
            Understand the technical feasibility, commercial model and long-term energy opportunity
            before making an investment decision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              id="final-primary-cta"
              className="inline-flex items-center justify-center gap-2 min-h-[56px] sm:min-h-[52px] px-8 py-4 bg-[var(--color-primary)] text-white text-sm sm:text-base font-semibold tracking-wide rounded-sm hover:bg-white hover:text-[var(--color-dark)] active:bg-white/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
            >
              Get My Solar Opportunity Assessment
            </a>

            <a
              href="#lead-form"
              id="final-secondary-cta"
              className="inline-flex items-center justify-center gap-2 min-h-[56px] sm:min-h-[52px] px-8 py-4 bg-transparent text-white border border-white/30 text-sm sm:text-base font-semibold tracking-wide rounded-sm hover:bg-white/10 hover:border-white/60 active:bg-white/15 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
            >
              Speak With Madhav Solar
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}
