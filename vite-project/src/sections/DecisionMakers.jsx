import { useRef, useState } from 'react';

const personas = [
  {
    id: 'ceo',
    role: 'CEO / BU Head',
    num: '01',
    quote: '"Will this improve our long-term competitiveness?"',
    answer: 'We model 25-year energy cost trajectories and benchmark your solar ROI against grid tariff escalation — giving leadership a defensible business case.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=75',
    imageAlt: 'CEO in boardroom',
  },
  {
    id: 'cfo',
    role: 'CFO',
    num: '02',
    quote: '"Does the investment make commercial sense?"',
    answer: 'Detailed payback analysis, IRR, DSCR and capex vs opex trade-offs — structured for your CFO\'s investment committee review.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=75',
    imageAlt: 'CFO reviewing financials',
  },
  {
    id: 'plant',
    role: 'Plant Head',
    num: '03',
    quote: '"Can this be executed without compromising operations?"',
    answer: 'Zero-disruption installation methodology with phased commissioning — your production schedule is never the casualty.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=75',
    imageAlt: 'Plant head on factory floor',
  },
  {
    id: 'procurement',
    role: 'Procurement Head',
    num: '04',
    quote: '"Can this partner deliver at the required quality and scale?"',
    answer: '200+ MW delivered. Tier-1 hardware only. Every project backed by a 25-year performance warranty and structured SLA.',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=700&q=75',
    imageAlt: 'Procurement team',
  },
  {
    id: 'sustainability',
    role: 'Sustainability Head',
    num: '05',
    quote: '"How does this support our decarbonisation goals?"',
    answer: 'Carbon offset reports, Scope 2 reduction metrics and ESG documentation — everything your sustainability reporting requires.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=700&q=75',
    imageAlt: 'Sustainability strategy meeting',
  },
];

export default function DecisionMakers() {
  const stripRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    const cardW = 320 + 4; // card width + gap
    setActiveIdx(Math.round(el.scrollLeft / cardW));
  };

  return (
    <section id="decision-makers" className="bg-[#0E1310] overflow-hidden py-[72px] pb-20">

      {/* Heading */}
      <div className="px-8 sm:px-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#6B8F71]" />
            <span className="text-[10.5px] font-bold tracking-[.22em] uppercase text-[#6B8F71]">
              Decision Makers
            </span>
          </div>
          <h2 className="font-['Barlow'] text-4xl lg:text-[48px] font-black leading-[1.04] text-white">
            Solar Decisions.<br />
            <span className="text-[#6B8F71]">Made for</span> Business.
          </h2>
        </div>
        <p className="text-[13.5px] text-[#5A6858] leading-[1.7] sm:text-right max-w-[260px]">
          One solar project.<br />Multiple business questions.<br />We answer all of them.
        </p>
      </div>

      {/* Scroll strip */}
      <div
        ref={stripRef}
        onScroll={handleScroll}
        className="flex gap-1 px-8 sm:px-12 overflow-x-auto scroll-smooth
                   snap-x snap-mandatory scrollbar-none
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {personas.map((p) => (
          <div
            key={p.id}
            className="group flex-none w-[300px] sm:w-[320px] h-[440px] rounded-xl overflow-hidden
                       relative snap-start cursor-pointer"
          >
            {/* Background image */}
            <img
              src={p.image}
              alt={p.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center
                         saturate-[0.6] brightness-[0.55]
                         transition-transform duration-[600ms] ease-out
                         group-hover:scale-[1.06]"
            />
            {/* Gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(14,19,16,.15) 0%, rgba(14,19,16,.3) 30%, rgba(14,19,16,.88) 65%, rgba(14,19,16,.97) 100%)' }}
            />
            {/* Top accent bar */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[3px] bg-[#6B8F71]
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-7
                            transition-transform duration-[350ms] ease-out
                            group-hover:-translate-y-1.5">
              <span
                aria-hidden="true"
                className="absolute top-5 right-5 font-['Barlow'] text-[13px] font-bold
                           tracking-[.06em] text-white/20"
              >
                {p.num}
              </span>

              {/* Role badge */}
              <span className="inline-flex w-fit text-[9.5px] font-bold tracking-[.16em] uppercase
                               text-[#9BC49F] bg-[rgba(107,143,113,.22)] border border-[rgba(107,143,113,.35)]
                               px-2.5 py-1 rounded backdrop-blur-sm mb-4">
                {p.role}
              </span>

              <div className="w-6 h-[2px] bg-[#6B8F71] mb-3" />

              <p className="font-['Barlow'] text-[21px] font-extrabold leading-[1.2] text-white mb-3">
                {p.quote}
              </p>

              {/* Answer — revealed on hover */}
              <p className="text-[12px] text-white/50 leading-relaxed
                             max-h-0 overflow-hidden opacity-0
                             group-hover:max-h-[80px] group-hover:opacity-100
                             transition-all duration-[400ms] ease-out">
                {p.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-9" aria-hidden="true">
        {personas.map((p, i) => (
          <div
            key={p.id}
            className={`h-[3px] rounded-full transition-all duration-200
                        ${i === activeIdx ? 'w-10 bg-[#6B8F71]' : 'w-6 bg-white/[.12]'}`}
          />
        ))}
      </div>
      <p className="text-center mt-4 text-[11.5px] text-[#3A4A38] tracking-[.06em]">
        scroll to explore →
      </p>

    </section>
  );
}