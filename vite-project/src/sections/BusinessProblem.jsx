import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ProblemCard from '../components/ProblemCard';
import { problemCards } from '../data/content';

export default function BusinessProblem() {
  return (
    <section
      id="business-problem"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* ── Subtle dot-grid background ─────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1F1F25 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <Container className="relative z-10">

        {/* ── Section heading ─────────────────────────────── */}
        <SectionHeading
          title="Your Factory Runs on Energy. Your Growth Shouldn't Be Limited by Its Cost."
          subtitle="Electricity isn't just another operating expense for manufacturing businesses. It can influence profitability, production economics, cost predictability and competitiveness."
          className="mb-10 sm:mb-14 lg:mb-16"
        />

        {/* ── Problem cards grid ──────────────────────────── */}
        {/*
         * Mobile  (< sm):  1-column — full-width horizontal cards
         * Tablet  (sm–lg): 2-column — vertical cards
         * Desktop (lg+):   4-column — vertical cards
         */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4 sm:gap-5 lg:gap-6
          mb-12 sm:mb-16 lg:mb-20
        ">
          {problemCards.map((card) => (
            <ProblemCard
              key={card.id}
              title={card.title}
              description={card.description}
              iconPath={card.iconPath}
            />
          ))}
        </div>

        {/* ── Callout block ────────────────────────────────── */}
        <div className="
          relative overflow-hidden
          bg-[var(--color-dark-alt)]
          p-7 sm:p-10 md:p-14
          rounded-sm
        ">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              absolute -top-20 -right-20
              w-56 h-56 sm:w-80 sm:h-80
              bg-[var(--color-primary)] opacity-[0.12] rounded-full blur-3xl
              pointer-events-none
            "
          />

          <div className="relative z-10 max-w-2xl">
            <p className="
              text-gray-400
              text-sm sm:text-base md:text-lg
              mb-2 sm:mb-3
            ">
              The question isn't just "Should we install solar?"
            </p>
            <h3 className="
              text-xl sm:text-2xl md:text-3xl
              font-bold text-white text-balance leading-tight
            ">
              How should solar fit into our{' '}
              <span className="text-[var(--color-primary)]">
                long-term energy strategy?
              </span>
            </h3>
          </div>
        </div>

      </Container>
    </section>
  );
}
