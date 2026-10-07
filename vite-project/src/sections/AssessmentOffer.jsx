import Container from '../components/Container';
import { assessmentDeliverables } from '../data/content';

export default function AssessmentOffer() {
  return (
    <section
      id="assessment-offer"
      className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <Container>

        {/* High-contrast offer block */}
        <div className="bg-[var(--color-dark-alt)] overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left: value proposition */}
            <div className="flex-1 p-8 sm:p-12 lg:p-14 xl:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase mb-5">
                Your Solar Opportunity Assessment
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance leading-snug mb-5">
                Before You Invest in Solar, Know What the Opportunity Is Worth.
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Get a preliminary view of the solar model, technical feasibility and commercial
                opportunity for your facility.
              </p>

              {/* Deliverables list */}
              <ul className="space-y-3" aria-label="Assessment deliverables">
                {assessmentDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[var(--color-primary)] flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10" height="10"
                        viewBox="0 0 24 24"
                        fill="none" stroke="white"
                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-200 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA / form teaser */}
            <div className="lg:w-80 xl:w-96 flex-shrink-0 p-8 sm:p-12 lg:p-14 flex flex-col justify-center gap-6 bg-white/5">
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">No cost. No commitment.</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A quick exchange of information is all it takes for us to evaluate your solar
                  opportunity.
                </p>
              </div>
              <a
                href="#lead-form"
                id="assessment-offer-cta"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] w-full px-6 py-3.5 bg-[var(--color-primary)] text-white text-sm sm:text-base font-semibold tracking-wide rounded-sm hover:bg-white hover:text-[var(--color-dark)] active:bg-white/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark-alt)]"
              >
                Get My Solar Opportunity Assessment
              </a>
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                For manufacturing and energy-intensive businesses across India.
              </p>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
