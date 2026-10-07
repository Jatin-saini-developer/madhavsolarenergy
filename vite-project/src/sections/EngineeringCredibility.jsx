import Container from '../components/Container';
import CapabilityBlock from '../components/CapabilityBlock';
import { capabilityBlocks } from '../data/content';

export default function EngineeringCredibility() {
  return (
    <section
      id="engineering-credibility"
      className="bg-[#f6f7f5] py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span
              className="block h-px w-6 bg-[var(--color-primary)]"
              aria-hidden="true"
            />

            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Why Madhav Solar
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-end">
            <h2 className="fluid-h2 font-bold leading-[1.05] text-[var(--color-dark)] text-balance max-w-4xl">
              A Solar Project Is a Long-Term Business Asset.
            </h2>

            <p className="fluid-body text-[var(--color-gray)] leading-relaxed max-w-xl lg:pb-1">
              Choosing an EPC partner is not only about installation. It is about
              engineering, execution, economics and scale.
            </p>
          </div>
        </div>

        {/* Main credibility layout */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-stretch">
          
          {/* Capability side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {capabilityBlocks.map((block, idx) => (
              <div
                key={block.id}
                className="
                  group
                  bg-white
                  border border-black/[0.06]
                  px-6 py-6 sm:px-7 sm:py-7
                  transition-all duration-300
                  hover:border-[var(--color-primary)]/30
                  hover:-translate-y-0.5
                "
              >
                <div className="flex items-start gap-5">
                  <span
                    className="
                      mt-1
                      text-xs
                      font-bold
                      tracking-[0.18em]
                      text-[var(--color-primary)]
                      tabular-nums
                    "
                  >
                    0{idx + 1}
                  </span>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-dark)] mb-2">
                      {block.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--color-gray)]">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image side */}
          <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[620px] overflow-hidden bg-[var(--color-dark)]">
            <img
              src="https://madhavsolarenergy.com/wp-content/uploads/2026/07/3-2.jpg"
              alt="Madhav Solar project engineering and execution"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-center
                transition-transform duration-700
                hover:scale-[1.02]
              "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* Image label */}
            <div className="absolute left-5 bottom-5 sm:left-7 sm:bottom-7">
              <p className="text-[0.6rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-2">
                Engineering & Execution
              </p>

              <p className="text-lg sm:text-xl font-semibold text-white max-w-sm">
                Built around real operating conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-black/[0.08] pt-8 sm:pt-10">
          <div className="max-w-5xl">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.15] text-[var(--color-dark)] text-balance">
              Madhav Solar does not only build solar projects.
              <span className="text-[var(--color-primary)]">
                {' '}
                It helps businesses make better energy decisions.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}