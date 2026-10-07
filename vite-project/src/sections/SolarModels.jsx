import Container from '../components/Container';
import SolarModelCard from '../components/SolarModelCard';
import { solarModels } from '../data/content';

export default function SolarModels() {
  return (
    <section
      id="solar-models"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-dark)] overflow-hidden"
    >
      <Container>
        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="mb-12 sm:mb-14 lg:mb-16 max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[var(--color-primary)]" aria-hidden="true" />
            <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase">
              Choose the Right Solar Model
            </span>
          </div>

          {/* Headline */}
          <h2 className="fluid-h2 font-bold text-white text-balance mb-5">
            Your Factory. Your Energy Profile. Your Solar Model.
          </h2>

          {/* Supporting copy */}
          <p className="fluid-body text-gray-400 text-balance leading-relaxed max-w-2xl">
            There is no single solar solution that fits every business. The right model depends
            on your consumption, infrastructure, investment preference and long-term energy
            strategy.
          </p>
        </div>

        {/* ── Solar model cards ───────────────────────────────────────── */}
        {/*
         * Mobile  (< sm):   1-column stack
         * Tablet  (sm–lg):  2×2 grid
         * Desktop (lg+):    2×2 grid with generous gap
         *
         * The 2×2 layout feels more editorial/industrial than a flat 4-column
         * strip, and gives each card enough room for the image + text block.
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-16 sm:mb-20">
          {solarModels.map((model) => (
            <SolarModelCard
              key={model.id}
              index={model.index}
              microLabel={model.microLabel}
              title={model.title}
              description={model.description}
              suitedFor={model.suitedFor}
              image={model.image}
              imageAlt={model.imageAlt}
            />
          ))}
        </div>

        {/* ── CTA block ───────────────────────────────────────────────── */}
        <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 sm:p-10 lg:p-12 overflow-hidden">
          {/* Decorative green glow */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-48 h-48 bg-[var(--color-primary)] opacity-[0.06] rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
            <div className="max-w-lg">
              <p className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                Not Sure Which Model Fits Your Business?
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Let us evaluate your energy profile, infrastructure and long-term business goals
                to identify the right solar approach.
              </p>
            </div>

            {/* Primary CTA — scrolls to #assessment (future form section) */}
            <a
              href="#lead-form"
              id="solar-model-cta"
              className="
                inline-flex items-center justify-center gap-2
                w-full sm:w-auto flex-shrink-0
                min-h-[52px] sm:min-h-[48px]
                px-7 sm:px-8 py-3
                bg-[var(--color-primary)] text-white
                text-sm sm:text-base font-semibold tracking-wide
                rounded-sm whitespace-nowrap
                hover:bg-white hover:text-[var(--color-dark)]
                active:bg-white/90
                transition-all duration-200
                focus:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]
              "
            >
              Find the Right Solar Model for My Business
            </a>
          </div>
        </div>

        {/* ── Transition line into the next section ────────────────────── */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <p className="text-sm text-gray-500 tracking-wide italic">
            Choosing the right model is only the beginning.
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </div>

      </Container>
    </section>
  );
}
