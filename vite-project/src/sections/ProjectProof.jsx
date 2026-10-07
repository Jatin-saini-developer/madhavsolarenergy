import Container from '../components/Container';
import { caseStudy } from '../data/content';

const MetaItem = ({ label, value }) => (
  <div className="py-4 border-b border-white/10 last:border-0">
    <dt className="text-[0.6rem] font-bold tracking-[0.22em] text-[var(--color-primary)] uppercase mb-1.5">
      {label}
    </dt>
    <dd className="text-sm sm:text-base text-gray-200 leading-relaxed">
      {value}
    </dd>
  </div>
);

export default function ProjectProof() {
  return (
    <section
      id="project-proof"
      className="py-16 sm:py-20 lg:py-28 bg-[var(--color-dark)] overflow-hidden"
    >
      <Container>

        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase mb-4">
            Project Proof
          </p>
          <h2 className="fluid-h2 font-bold text-white text-balance max-w-2xl">
            Real Projects. Real Engineering. Real Outcomes.
          </h2>
        </div>

        {/* Case Study Layout */}
        <div className="flex flex-col lg:flex-row gap-0 border border-white/10">

          {/* Project image */}
          <div className="w-full lg:w-1/2 relative min-h-[260px] sm:min-h-[360px] lg:min-h-[480px] bg-[#0f1218] overflow-hidden flex-shrink-0">
            {/*
              TODO: Replace with approved Madhav project photograph.
              Place at: src/assets/images/case-study-project.jpg
              Example:
                <img
                  src={caseStudyImg}
                  alt="Madhav Solar manufacturing installation"
                  className="w-full h-full object-cover object-center"
                />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white/20 mb-4"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-white/20 text-xs tracking-widest uppercase">
                TODO: Approved project image
              </p>
            </div>

            {/* Industry badge overlay */}
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1.5 bg-[var(--color-primary)] text-white text-[0.6rem] font-bold tracking-[0.2em] uppercase">
                {caseStudy.industry}
              </span>
            </div>
          </div>

          {/* Metadata panel */}
          <div className="flex-1 p-7 sm:p-10 bg-[#16161d]">
            <dl className="space-y-0">
              <MetaItem label="Location"        value={caseStudy.location} />
              <MetaItem label="Capacity"        value={caseStudy.capacity} />
              <MetaItem label="Challenge"       value={caseStudy.challenge} />
              <MetaItem label="Madhav Approach" value={caseStudy.approach} />
              <MetaItem label="Impact"          value={caseStudy.impact} />
            </dl>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#assessment"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-white transition-colors duration-200 group"
              >
                Explore Manufacturing Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16"
                  viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
