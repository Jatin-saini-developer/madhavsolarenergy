import Container from '../components/Container';
import { caseStudy } from '../data/content';

const pendingCopy = {
  short: "Verified detail pending",
  long: "Project detail will be added after verification.",
};

const isUnavailable = (value) => {
  if (!value) return true;
  const normalized = String(value).trim().toLowerCase();
  return (
    normalized.startsWith("todo") ||
    normalized.includes("approved project") ||
    normalized.includes("approved actual") ||
    normalized.includes("approved verified")
  );
};

const displayValue = (value, fallback = pendingCopy.short) =>
  isUnavailable(value) ? fallback : value;

const proofRows = [
  {
    label: "Challenge",
    value: displayValue(caseStudy.challenge, pendingCopy.long),
  },
  {
    label: "Madhav Approach",
    value: displayValue(caseStudy.approach, pendingCopy.long),
  },
  {
    label: "Impact",
    value: displayValue(caseStudy.impact, pendingCopy.long),
  },
];

function ProjectImagePanel() {
  return (
    <div className="group relative min-h-[300px] overflow-hidden bg-[#11161d] sm:min-h-[390px] lg:min-h-[540px]">
      {caseStudy.imageUrl ? (
        <img
          src={caseStudy.imageUrl}
          alt={caseStudy.imageAlt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      ) : (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#121820_0%,#20252c_48%,#0f141a_100%)]" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 opacity-50"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 18px)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-6 right-6 h-28 border border-white/10 sm:bottom-12 sm:left-10 sm:right-10 sm:h-36"
          >
            <div className="h-full w-2/3 border-r border-white/10 bg-white/[0.025]" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

      <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
        <span className="inline-flex bg-[var(--color-primary)] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white">
          Manufacturing
        </span>
      </div>

      {!caseStudy.imageUrl && (
        <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
          <p className="max-w-xs text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Project image pending approval
          </p>
        </div>
      )}
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <dt className="mb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {label}
      </dt>
      <dd className="font-heading text-lg font-bold leading-tight text-[var(--color-dark)] sm:text-xl">
        {value}
      </dd>
    </div>
  );
}

function ProofRow({ label, value }) {
  return (
    <div className="border-t border-gray-200 py-4 sm:py-5">
      <dt className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-[var(--color-gray)] sm:text-base">
        {value}
      </dd>
    </div>
  );
}

export default function ProjectProof() {
  const location = displayValue(caseStudy.location);
  const capacity = displayValue(caseStudy.capacity);

  return (
    <section
      id="project-proof"
      className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-0">
          <ProjectImagePanel />

          <div className="relative border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(31,31,37,0.08)] sm:p-8 lg:-ml-10 lg:self-center lg:p-10 xl:p-12">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-24 w-24 border-l border-b border-gray-100"
            />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="h-px w-5 bg-[var(--color-primary)]" aria-hidden="true" />
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)] sm:text-[0.65rem]">
                  Project Proof
                </span>
              </div>

              <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight text-[var(--color-dark)] text-balance sm:text-4xl lg:text-[2.55rem]">
                Real Projects. Real Engineering. Real Outcomes.
              </h2>

              <dl className="mt-7 grid gap-5 border-y border-gray-200 py-5 sm:grid-cols-3">
                <Fact label="Industry" value={caseStudy.industry} />
                <Fact label="Location" value={location} />
                <Fact label="Capacity" value={capacity} />
              </dl>

              <dl className="mt-2">
                {proofRows.map((row) => (
                  <ProofRow key={row.label} label={row.label} value={row.value} />
                ))}
              </dl>

              <a
                href="#project-proof"
                className="group mt-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
                aria-label="Explore Manufacturing Projects"
              >
                Explore Manufacturing Projects
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
