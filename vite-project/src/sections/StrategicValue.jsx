import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ValueCard from '../components/ValueCard';
import { valueCards } from '../data/content';

export default function StrategicValue() {
  return (
    <section
      id="strategic-value"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-gray-light)] overflow-hidden"
    >
      <Container>
        {/*
         * Layout strategy:
         *   Mobile  (< lg): stacked — heading → value cards → image → CTA
         *   Desktop (lg+):  side-by-side — content left, image right
         *
         * Image is hidden on mobile to avoid a placeholder taking up excessive space.
         * On desktop it fills the right column as an editorial block.
         */}
        <div className="
          flex flex-col lg:flex-row
          gap-10 lg:gap-16
          items-start lg:items-center
        ">

          {/* ── Left: text column ─────────────────────────── */}
          <div className="w-full lg:w-1/2 flex-shrink-0">

            <SectionHeading
              title="Solar Engineered Around Your Business."
              subtitle="Your facility, consumption pattern and investment priorities determine the right solar strategy."
              className="mb-8 sm:mb-10 lg:mb-12"
            />

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {valueCards.map((card) => (
                <ValueCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  iconPath={card.iconPath}
                />
              ))}
            </div>

            {/* CTA — full-width on mobile, auto on larger */}
            <a
              href="#assessment"
              id="strategic-value-cta"
              className="
                inline-flex items-center justify-center gap-2
                w-full sm:w-auto
                min-h-[52px] sm:min-h-[48px]
                px-6 sm:px-8 py-3
                bg-[var(--color-primary)] text-white
                text-sm sm:text-base font-semibold tracking-wide
                rounded-sm
                hover:bg-[var(--color-dark)] active:bg-[var(--color-dark)]
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
              "
            >
              Find the Right Solar Model for My Business
            </a>
          </div>

          {/* ── Right: image block ──────────────────────────── */}
          {/*
           * Hidden below lg to avoid large placeholder on mobile.
           * TODO: Replace with real Madhav Solar industrial/engineering image.
           *       Place it at: src/assets/images/strategic-value-facility.jpg
           *       Use:
           *         <img
           *           src={facilityImg}
           *           alt="Madhav Solar industrial installation"
           *           className="w-full h-full object-cover object-center"
           *         />
           */}
          <div className="
            hidden lg:flex
            w-full lg:w-1/2
            relative h-[560px] xl:h-[640px]
            items-center justify-center
            bg-gray-200 border border-gray-300
            overflow-hidden
            flex-shrink-0
          ">
            {/* Inner placeholder content */}
            <div className="
              absolute inset-0 flex flex-col items-center justify-center
              p-8 text-center
            ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-gray-400 mb-4"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
                [ Editorial / Industrial Image ]
              </p>
              <p className="text-gray-400 text-xs mt-2 max-w-xs leading-relaxed">
                High-quality engineering or facility shot showing scale and premium quality.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
