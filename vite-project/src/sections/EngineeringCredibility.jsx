import Container from '../components/Container';
import CapabilityBlock from '../components/CapabilityBlock';
import { capabilityBlocks } from '../data/content';

export default function EngineeringCredibility() {
  return (
    <section
      id="engineering-credibility"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* ── Blueprint grid overlay — subtle technical texture ─────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1F1F25 1px, transparent 1px),
            linear-gradient(to bottom, #1F1F25 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <Container className="relative z-10">

        {/* ── Top row: heading left + image right ──────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-14 sm:mb-16 lg:mb-20">

          {/* Heading column */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[var(--color-primary)]" aria-hidden="true" />
              <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase">
                Why Madhav Solar
              </span>
            </div>

            <h2 className="fluid-h2 font-bold text-[var(--color-dark)] text-balance">
              A Solar Project Is a Long-Term Business Asset.
            </h2>

            <p className="fluid-body text-[var(--color-gray)] mt-4 text-balance leading-relaxed max-w-xl">
              Choosing an EPC partner is not only about installation. It is about engineering,
              execution, economics and scale.
            </p>
          </div>

          {/* Image placeholder — desktop only */}
          {/*
            TODO: Replace with a real Madhav project / engineering image.
            Recommended path: src/assets/images/engineering-project.jpg
            Example:
              import engineeringImg from '../assets/images/engineering-project.jpg';
              <img src={engineeringImg} alt="Madhav Solar engineering and project execution" className="w-full h-full object-cover" />
          */}
          <div
            className="
              hidden lg:flex
              w-72 xl:w-80 h-48 xl:h-56
              flex-shrink-0
              bg-[var(--color-gray-light)] border border-gray-200
              items-center justify-center
              overflow-hidden
            "
          >
            {/* Technical grid inside placeholder */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #4AAB3D 1px, transparent 1px), linear-gradient(to bottom, #4AAB3D 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <p className="relative text-xs text-gray-400 tracking-widest uppercase text-center px-4 leading-relaxed">
                TODO: Engineering /<br />project image
              </p>
            </div>
          </div>

        </div>

        {/* ── Four capability blocks ───────────────────────────────────── */}
        {/*
         * Mobile  (< sm):  1 column stack
         * Tablet  (sm):    2×2
         * Desktop (lg+):   4 columns — one per capability
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-10">
          {capabilityBlocks.map((block, idx) => (
            <CapabilityBlock
              key={block.id}
              index={idx}
              title={block.title}
              description={block.description}
            />
          ))}
        </div>

        {/* ── Strong positioning statement ──────────────────────────────── */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-10 sm:pt-12 border-t border-gray-100">
          <blockquote className="max-w-3xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-dark)] leading-snug text-balance">
              "Madhav Solar does not only build solar projects.{' '}
              <span className="text-[var(--color-primary)]">
                It helps businesses make better energy decisions.
              </span>"
            </p>
          </blockquote>
        </div>

      </Container>
    </section>
  );
}
