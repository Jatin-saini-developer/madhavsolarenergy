import Container from '../components/Container';
import StakeholderBlock from '../components/StakeholderBlock';
import { stakeholders } from '../data/content';

export default function DecisionMakers() {
  const variantById = {
    ceo: "featured",
    cfo: "finance",
    "plant-head": "operations",
    procurement: "procurement",
    sustainability: "sustainability",
  };

  return (
    <section
      id="decision-makers"
      className="relative py-16 sm:py-20 lg:py-28 bg-[var(--color-gray-light)] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1F1F25 1px, transparent 1px),
            linear-gradient(to bottom, #1F1F25 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      <Container className="relative z-10">
        <div className="mb-12 sm:mb-14 lg:mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[var(--color-primary)]" aria-hidden="true" />
              <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase">
                Decision Makers
              </span>
            </div>

            <h2 className="fluid-h2 font-bold text-[var(--color-dark)] text-balance max-w-2xl">
              Solar Decisions. Made for Business.
            </h2>
          </div>

          <p className="fluid-body text-[var(--color-gray)] lg:col-span-5 lg:pb-2 max-w-xl text-balance">
            One solar project. Multiple business questions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-fr lg:gap-5 mb-12 sm:mb-14">
          {stakeholders.map((stakeholder, index) => (
            <StakeholderBlock
              key={stakeholder.id}
              role={stakeholder.role}
              question={stakeholder.question}
              variant={variantById[stakeholder.id]}
              number={String(index + 1).padStart(2, '0')}
            />
          ))}
        </div>

        <div className="relative border-t border-gray-200 pt-7 sm:pt-8">
          <div className="absolute left-0 top-0 h-[2px] w-20 bg-[var(--color-primary)]" aria-hidden="true" />
          <p className="max-w-3xl text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-[var(--color-dark)] leading-snug text-balance">
            Madhav Solar answers the business case &mdash; not just the technical case.
          </p>
        </div>
      </Container>
    </section>
  );
}
