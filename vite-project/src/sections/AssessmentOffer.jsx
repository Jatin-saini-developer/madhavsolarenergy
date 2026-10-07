import Container from '../components/Container';
import { assessmentDeliverables } from '../data/content';

/* ─── Tiny SVG helpers ───────────────────────────────── */
function CheckIcon({ size = 12 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Assessment Preview Panel ───────────────────────── */
const facilityRows = [
  { label: 'Energy consumption',  unit: 'kWh / month' },
  { label: 'Infrastructure type', unit: 'Rooftop / Ground' },
  { label: 'Location',            unit: 'State / Grid zone' },
];

const reviewItems = [
  'Solar model',
  'Technical feasibility',
  'Commercial fit',
  'Investment structure',
];

function PanelSectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem' }}>
      <span style={{
        fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'rgba(31,31,37,0.45)', whiteSpace: 'nowrap',
      }}>
        {children}
      </span>
      <span aria-hidden="true" style={{ display: 'block', flex: 1, height: '1px', background: 'rgba(31,31,37,0.1)' }} />
    </div>
  );
}

function AssessmentPreview() {
  return (
    <aside
      aria-label="Solar opportunity assessment preview"
      style={{
        position: 'relative',
        background: '#ffffff',
        border: '1px solid rgba(31,31,37,0.13)',
        boxShadow: '0 2px 6px rgba(31,31,37,0.04), 0 16px 48px rgba(31,31,37,0.09)',
        overflow: 'hidden',
      }}
    >
      {/* Engineering grid overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(to right, rgba(74,171,61,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,37,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Corner tick marks */}
      {[
        { top: 0, left: 0, borderTop: '2px solid', borderLeft: '2px solid' },
        { top: 0, right: 0, borderTop: '2px solid', borderRight: '2px solid' },
        { bottom: 0, right: 0, borderBottom: '2px solid', borderRight: '2px solid' },
        { bottom: 0, left: 0, borderBottom: '2px solid', borderLeft: '2px solid' },
      ].map((s, i) => (
        <span key={i} aria-hidden="true" style={{
          position: 'absolute', width: 12, height: 12,
          borderColor: 'rgba(74,171,61,0.5)', ...s, zIndex: 2,
        }} />
      ))}

      {/* Left accent rule */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, width: 3, height: '100%',
        background: 'var(--color-primary)', opacity: 0.9, zIndex: 2,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, padding: 'clamp(1.4rem, 3.5vw, 2rem) clamp(1.2rem, 3vw, 1.8rem)' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: '1rem', marginBottom: '1.4rem', paddingBottom: '1.2rem',
          borderBottom: '1px solid rgba(31,31,37,0.1)',
        }}>
          <div>
            <p style={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
              Solar Opportunity Assessment
            </p>
            <h3 className="font-heading" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', fontWeight: 700, color: 'var(--color-dark)', lineHeight: 1.2 }}>
              Facility Review Sheet
            </h3>
          </div>
          <div style={{ flexShrink: 0, border: '1px solid rgba(31,31,37,0.12)', padding: '0.3rem 0.55rem', textAlign: 'right' }}>
            <p style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.3)', marginBottom: '0.1rem' }}>Ref</p>
            <p className="font-heading" style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-dark)' }}>01</p>
          </div>
        </div>

        {/* Facility Profile */}
        <div style={{ marginBottom: '1.4rem' }}>
          <PanelSectionLabel>Facility Profile</PanelSectionLabel>
          <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {facilityRows.map((row) => (
              <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.5rem 0.75rem', alignItems: 'center' }}>
                <dt style={{ fontSize: '0.79rem', fontWeight: 500, color: 'var(--color-gray)' }}>{row.label}</dt>
                {/* Dotted leader line */}
                <span aria-hidden="true" style={{
                  display: 'block', height: '1px', minWidth: 20, width: '100%',
                  background: 'repeating-linear-gradient(to right, rgba(31,31,37,0.18) 0, rgba(31,31,37,0.18) 2px, transparent 2px, transparent 5px)',
                }} />
                <dd className="font-heading" style={{ fontSize: '0.88rem', fontWeight: 700, color: 'rgba(31,31,37,0.2)', textAlign: 'right', whiteSpace: 'nowrap' }}>—</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Divider */}
        <div aria-hidden="true" style={{ height: '1px', background: 'rgba(31,31,37,0.08)', marginBottom: '1.4rem' }} />

        {/* Opportunity Review */}
        <div style={{ marginBottom: '1.4rem' }}>
          <PanelSectionLabel>Opportunity Review</PanelSectionLabel>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem 0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {reviewItems.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.79rem', fontWeight: 600, color: 'var(--color-dark)' }}>
                <span aria-hidden="true" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, width: 17, height: 17,
                  background: 'var(--color-primary)', color: '#fff',
                }}>
                  <CheckIcon size={10} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div aria-hidden="true" style={{ height: '1px', background: 'rgba(31,31,37,0.08)', marginBottom: '1.2rem' }} />

        {/* Next Step */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center',
          gap: '1rem', background: 'rgba(74,171,61,0.06)',
          border: '1px solid rgba(74,171,61,0.2)', padding: '0.85rem 1rem',
        }}>
          <div>
            <p style={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>
              Next Step
            </p>
            <p className="font-heading" style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-dark)' }}>
              Assessment discussion
            </p>
          </div>
          <span aria-hidden="true" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, width: 30, height: 30, border: '1.5px solid var(--color-primary)',
          }}>
            <span style={{ display: 'block', width: 7, height: 7, background: 'var(--color-primary)', opacity: 0.65 }} />
          </span>
        </div>

        {/* Bottom reference strip */}
        <div aria-hidden="true" style={{ marginTop: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.22)' }}>
            Madhav Solar Energy · Preliminary
          </span>
          <span style={{ flex: 1, height: '1px', background: 'rgba(31,31,37,0.07)' }} />
          <span style={{ fontSize: '0.48rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(74,171,61,0.45)' }}>
            CONFIDENTIAL
          </span>
        </div>
      </div>
    </aside>
  );
}

/* ─── Deliverables list (left col) ──────────────────── */
function DeliverablesList() {
  const half = Math.ceil(assessmentDeliverables.length / 2);
  const col1 = assessmentDeliverables.slice(0, half);
  const col2 = assessmentDeliverables.slice(half);

  return (
    <div style={{
      borderTop: '1px solid rgba(31,31,37,0.1)',
      borderBottom: '1px solid rgba(31,31,37,0.1)',
      paddingTop: '1.2rem', paddingBottom: '1.2rem',
      marginTop: '1.6rem',
    }}>
      <p style={{
        fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'rgba(31,31,37,0.38)',
        marginBottom: '0.9rem',
      }}>
        What the assessment covers
      </p>
      <div className="deliverables-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem' }}>
        {[col1, col2].map((col, ci) => (
          <ul key={ci} style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {col.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.81rem', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.45 }}>
                <span aria-hidden="true" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, width: 15, height: 15, marginTop: '0.1rem',
                  border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)',
                }}>
                  <CheckIcon size={8} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/* ─── Section export ────────────────────────────────── */
export default function OpportunityAssessmentSection() {
  return (
    <section
      id="assessment-offer"
      aria-labelledby="assessment-heading"
      style={{ position: 'relative', overflow: 'hidden', background: '#F5F7F4' }}
    >
      {/* Top edge hairline */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(31,31,37,0.12) 30%, rgba(31,31,37,0.12) 70%, transparent)',
      }} />

      {/* Section background grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to right, rgba(31,31,37,0.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,37,0.022) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }} />

      <Container>
        <div style={{ padding: 'clamp(3.5rem, 7vw, 5.5rem) 0' }}>

          {/* Outer card */}
          <div style={{
            position: 'relative',
            background: '#ffffff',
            border: '1px solid rgba(31,31,37,0.1)',
            boxShadow: '0 1px 3px rgba(31,31,37,0.04), 0 8px 36px rgba(31,31,37,0.08)',
            overflow: 'hidden',
          }}>
            {/* Left accent border on outer card */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
              background: 'linear-gradient(to bottom, var(--color-primary) 0%, rgba(74,171,61,0.15) 100%)',
            }} />

            {/* 2-column grid */}
            <div className="assessment-grid" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>

              {/* Left */}
              <div className="assessment-left" style={{ padding: 'clamp(2rem, 5vw, 3.25rem) clamp(1.5rem, 4vw, 2.75rem)' }}>

                {/* Eyebrow */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                  <span aria-hidden="true" style={{ display: 'block', width: 16, height: 2, background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                    Your Solar Opportunity
                  </span>
                </div>

                {/* Heading */}
                <h2
                  id="assessment-heading"
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.7rem, 3.5vw, 2.55rem)',
                    fontWeight: 800,
                    color: 'var(--color-dark)',
                    lineHeight: 1.12,
                    maxWidth: '22ch',
                    textWrap: 'balance',
                  }}
                >
                  Before You Invest in Solar, Know What the Opportunity Is Worth.
                </h2>

                {/* Supporting copy */}
                <p style={{
                  marginTop: '1rem',
                  fontSize: 'clamp(0.88rem, 1.5vw, 1.02rem)',
                  lineHeight: 1.72,
                  color: 'var(--color-gray)',
                  maxWidth: '44ch',
                }}>
                  Get a preliminary view of the right solar model, technical feasibility and commercial opportunity for your facility.
                </p>

                {/* Deliverables */}
                <DeliverablesList />

                {/* CTA */}
                <div style={{ marginTop: '1.6rem' }}>
                  <a
                    id="assessment-offer-cta"
                    href="#lead-form"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                      minHeight: 52, padding: '0.875rem 1.75rem',
                      background: 'var(--color-primary)', color: '#ffffff',
                      fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.015em',
                      textDecoration: 'none',
                      boxShadow: '0 8px 24px rgba(74,171,61,0.22)',
                      transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-dark)';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(31,31,37,0.2)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(74,171,61,0.22)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onFocus={e => { e.currentTarget.style.outline = '2px solid var(--color-primary)'; e.currentTarget.style.outlineOffset = '3px'; }}
                    onBlur={e => { e.currentTarget.style.outline = 'none'; }}
                  >
                    Get My Solar Opportunity Assessment
                    <ArrowRight />
                  </a>
                  <p style={{ marginTop: '0.7rem', fontSize: '0.73rem', color: 'rgba(116,120,124,0.75)', lineHeight: 1.6, maxWidth: '40ch' }}>
                    No obligation. Helps you understand the right next step for your facility.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div
                className="assessment-right"
                style={{
                  padding: 'clamp(2rem, 5vw, 3.25rem) clamp(1.5rem, 4vw, 2.75rem)',
                  background: '#F8F9F7',
                  borderTop: '1px solid rgba(31,31,37,0.07)',
                  display: 'flex', alignItems: 'center',
                  position: 'relative',
                }}
              >
                {/* Right-column inner grid */}
                <div aria-hidden="true" style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  backgroundImage: 'linear-gradient(to right, rgba(74,171,61,0.032) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,37,0.028) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                  <AssessmentPreview />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>

      {/* Responsive layout styles */}
      <style>{`
        @media (min-width: 900px) {
          .assessment-grid {
            grid-template-columns: 0.48fr 0.52fr !important;
          }
          .assessment-left {
            border-right: 1px solid rgba(31,31,37,0.08) !important;
          }
          .assessment-right {
            border-top: none !important;
          }
        }
        @media (max-width: 479px) {
          .deliverables-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
