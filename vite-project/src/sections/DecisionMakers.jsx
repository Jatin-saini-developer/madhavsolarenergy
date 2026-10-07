import Container from '../components/Container';
import { stakeholders } from '../data/content';

export default function DecisionMakers() {
  const featured  = stakeholders.find((s) => s.featured);
  const secondary = stakeholders.filter((s) => !s.featured);

  return (
    <section
      id="decision-makers"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-gray-light)] overflow-hidden"
    >
      <Container>

        {/* Heading */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <p className="text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase mb-4">
            Decision-Maker Relevance
          </p>
          <h2 className="fluid-h2 font-bold text-[var(--color-dark)] text-balance max-w-2xl">
            Solar Decisions. Made for Business.
          </h2>
          <p className="fluid-body text-[var(--color-gray)] mt-3 max-w-xl text-balance">
            One solar project. Multiple business questions.
          </p>
        </div>

        {/* Layout: featured left + 2×2 grid right on lg+ */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 sm:mb-14">

          {/* Featured card — CEO/MD */}
          {featured && (
            <article className="lg:w-2/5 flex-shrink-0 bg-[var(--color-dark)] p-8 sm:p-10 flex flex-col justify-between min-h-[220px] lg:min-h-[320px]">
              <div>
                <span className="inline-block px-2 py-0.5 bg-[var(--color-primary)] text-white text-[0.6rem] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">
                  {featured.role}
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white leading-snug text-balance">
                  "{featured.question}"
                </p>
              </div>
              <div className="mt-8 h-px w-10 bg-[var(--color-primary)]" aria-hidden="true" />
            </article>
          )}

          {/* 2×2 grid of secondary stakeholders */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secondary.map((s) => (
              <article
                key={s.id}
                className="bg-white border border-gray-100 p-6 sm:p-7 hover:border-[var(--color-primary)] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[0.6rem] font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-3">
                    {s.role}
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-[var(--color-dark)] leading-snug text-balance">
                    "{s.question}"
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Closing statement */}
        <div className="border-l-4 border-[var(--color-primary)] pl-5 sm:pl-6 max-w-2xl">
          <p className="text-base sm:text-lg font-semibold text-[var(--color-dark)] leading-relaxed">
            Madhav Solar should answer the business case,{' '}
            <span className="text-[var(--color-gray)] font-normal">not just the technical case.</span>
          </p>
        </div>

      </Container>
    </section>
  );
}
