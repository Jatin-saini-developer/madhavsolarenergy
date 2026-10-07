import Container from '../components/Container';
import { companyData } from '../data/content';

const HERO_IMAGE =
  'https://madhavsolarenergy.com/wp-content/uploads/2026/08/3-2.jpg';

export default function Hero() {
  const trustMetrics = [
    {
      value: companyData.commissionedCapacity,
      label: 'Commissioned Capacity',
    },
    {
      value: companyData.industrialProjects,
      label: 'Industrial Projects',
    },
    {
      value: companyData.footprint,
      label: 'Pan-India Footprint',
    },
  ];

  return (
    <section
      id="hero"
      className="
        relative isolate flex min-h-[720px] items-center overflow-hidden
        bg-[var(--color-dark)]
        pt-28 pb-16
        sm:min-h-[760px] sm:pt-32 sm:pb-20
        lg:min-h-[800px] lg:pt-36 lg:pb-24
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[68%_center]
            sm:object-[68%_center]
            lg:object-[64%_center]
          "
        />

        {/* Overall image contrast */}
        <div className="absolute inset-0 bg-[#111217]/35" />

        {/* Strong left-side readability gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#111217]/[0.98]
            via-[#111217]/[0.78]
            to-[#111217]/[0.10]
          "
        />

        {/* Bottom depth */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-40
            bg-gradient-to-t from-[#111217]/70 to-transparent
          "
        />

        {/* Mobile readability layer */}
        <div className="absolute inset-0 bg-[#111217]/20 sm:hidden" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3 sm:mb-7">
            <span
              className="
                hidden h-px w-7
                bg-[var(--color-primary)]
                sm:block
              "
              aria-hidden="true"
            />

            <span
              className="
                inline-flex items-center
                border border-white/15
                bg-black/10
                px-3 py-1.5
                text-[0.62rem] font-bold uppercase
                tracking-[0.24em]
                text-[var(--color-primary)]
                backdrop-blur-sm
                sm:text-xs
              "
            >
              Solar for Manufacturing
            </span>
          </div>

          {/* Headline */}
          <h1
            className="
              fluid-h1
              max-w-4xl
              font-bold
              leading-[0.98]
              tracking-[-0.03em]
              text-white
              text-balance
            "
          >
            Your Energy Cost Shouldn&apos;t Control Your Growth.
          </h1>

          {/* Supporting copy */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base leading-7
              text-white/75
              sm:mt-7
              sm:text-lg sm:leading-8
            "
          >
            For manufacturing businesses, power cost directly impacts margins,
            production economics and long-term planning. Madhav Solar helps you
            evaluate the right solar opportunity around your facility, energy
            profile and business goals.
          </p>

          {/* CTA group */}
          <div
            className="
              mt-8
              flex flex-col gap-3
              sm:mt-9 sm:flex-row sm:items-center sm:gap-4
            "
          >
            <a
              href="#assessment"
              id="hero-primary-cta"
              className="
                inline-flex min-h-[54px]
                items-center justify-center
                border border-[var(--color-primary)]
                bg-[var(--color-primary)]
                px-6 py-3
                text-center
                text-sm font-semibold tracking-wide text-white
                transition-all duration-200
                hover:border-white hover:bg-white hover:text-[var(--color-dark)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--color-primary)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--color-dark)]
                sm:min-h-[52px]
                sm:px-8
                sm:text-base
              "
            >
              Get My Solar Opportunity Assessment
            </a>

            <a
              href="#contact"
              id="hero-secondary-cta"
              className="
                inline-flex min-h-[54px]
                items-center justify-center
                border border-white/35
                bg-white/5
                px-6 py-3
                text-center
                text-sm font-semibold tracking-wide text-white
                backdrop-blur-sm
                transition-all duration-200
                hover:border-white
                hover:bg-white
                hover:text-[var(--color-dark)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--color-dark)]
                sm:min-h-[52px]
                sm:px-8
                sm:text-base
              "
            >
              Speak With a Solar Expert
            </a>
          </div>

          {/* Qualification line */}
          <p
            className="
              mt-5
              text-xs font-medium
              text-white/55
              sm:mt-6 sm:text-sm
            "
          >
            For manufacturing and energy-intensive businesses across India.
          </p>

          {/* =======================================================
              TRUST METRICS
          ======================================================== */}
          <div
            className="
              mt-10
              grid max-w-2xl
              grid-cols-3
              border-t border-white/15
              pt-6
              sm:mt-14 sm:pt-7
            "
          >
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  min-w-0
                  pr-3
                  sm:pr-6
                "
              >
                <div
                  className="
                    text-lg font-bold
                    leading-none text-white
                    tabular-nums
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {metric.value}
                </div>

                <div
                  className="
                    mt-2
                    text-[0.55rem]
                    font-semibold uppercase
                    leading-snug
                    tracking-[0.14em]
                    text-[var(--color-primary)]
                    sm:text-[0.65rem]
                    sm:tracking-[0.18em]
                  "
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom brand accent */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 h-px
          bg-gradient-to-r
          from-transparent
          via-[var(--color-primary)]/70
          to-transparent
        "
      />
    </section>
  );
}