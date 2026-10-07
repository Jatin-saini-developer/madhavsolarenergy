import Container from '../components/Container';
import { valueCards } from '../data/content';
// import facilityImg from '../assets/images/strategic-value-facility.jpg'; // swap to your local import

const icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="#3A6B40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#3A6B40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#3A6B40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#3A6B40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M12 12C12 12 8 9 8 6a4 4 0 0 1 8 0c0 3-4 6-4 6z"/><path d="M8 17c-2.5-1-4-3-4-5"/><path d="M16 17c2.5-1 4-3 4-5"/></svg>,
];

const stats = [
  { num: '200+', label: 'MW Delivered' },
  { num: '550+', label: 'Projects' },
  { num: '25 yr', label: 'Performance Warranty' },
  { num: 'Tier 1', label: 'Hardware Only' },
];

export default function StrategicValue() {
  return (
    <section id="strategic-value" className="bg-[#F5F6F3] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] min-h-[600px]">

        {/* ── LEFT ── */}
        <div className="flex flex-col justify-between px-10 lg:px-14 py-16">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[.13em] uppercase text-[#6B8F71] mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-[#6B8F71]" />
              Strategic value
            </p>
            <h2 className="font-['Barlow'] text-4xl lg:text-[44px] font-extrabold leading-[1.06] text-[#141A12] max-w-[420px] mb-3">
              Solar Engineered Around Your Business
            </h2>
            <p className="text-sm text-[#6B7A68] leading-relaxed max-w-[400px] mb-10">
              Your facility, consumption pattern and investment priorities determine the right solar strategy.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-[2px] bg-[#D2D6CD] border-2 border-[#D2D6CD] overflow-hidden mb-9 flex-1">
            {valueCards.map((card, i) => (
              <div
                key={card.id}
                className="bg-[#F5F6F3] hover:bg-[#ECEEE9] transition-colors duration-200 px-6 py-7 flex flex-col relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#6B8F71] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="w-8 h-8 rounded-lg bg-[#D9E8D4] flex items-center justify-center mb-3.5">
                  <div className="w-4 h-4">{icons[i]}</div>
                </div>
                <p className="text-[10px] font-bold tracking-[.1em] text-[#B8CDB5] mb-1.5">0{i + 1}</p>
                <h3 className="font-['Barlow'] text-[15px] font-bold text-[#141A12] leading-tight mb-2">{card.title}</h3>
                <p className="text-[12.5px] text-[#6B7A68] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <a href="#lead-form" className="inline-flex items-center gap-2 bg-[#141A12] text-[#F5F6F3] text-[13.5px] font-medium px-6 py-3 hover:bg-[#2F3A2C] transition-colors">
              Find the Right Solar Model
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
            {/* <a href="#projects" className="text-[13px] font-medium text-[#6B8F71] hover:text-[#3A6B40] flex items-center gap-1 transition-colors">
              See our projects
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a> */}
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="relative hidden lg:block bg-[#1A2118]">
          {/* Diagonal left edge */}
          <div className="absolute top-0 left-0 bottom-0 w-10 z-10"
            style={{ background: '#F5F6F3', clipPath: 'polygon(0 0, 40px 0, 12px 100%, 0 100%)' }} />

          <img
            src="https://madhavsolarenergy.com/wp-content/uploads/2026/07/1-1.jpg"
            alt="Madhav Solar industrial solar installation"
            className="w-full h-full object-cover opacity-[.88]"
            style={{ filter: 'saturate(0.85)' }}
          />

          {/* Gradient + stat strip */}
          {/* <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(20,26,18,0.82) 100%)' }} /> */}

          {/* <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-[1px] bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-5 py-5 bg-[rgba(20,26,18,0.55)] backdrop-blur-sm">
                <p className="font-['Barlow'] text-[26px] font-extrabold text-white leading-none mb-1">{s.num}</p>
                <p className="text-[10px] font-medium tracking-[.08em] uppercase text-white/55">{s.label}</p>
              </div>
            ))}
          </div> */}
        </div>

      </div>
    </section>
  );
}