import Container from '../components/Container';

/* ── Arrow icon ──────────────────────────────────────────── */
function ArrowRight({ color = 'currentColor' }) {
  return (
    <svg
      aria-hidden="true"
      width="14" height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ── Main section ────────────────────────────────────────── */
export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      style={{ position: 'relative', background: 'var(--color-dark)', overflow: 'hidden' }}
    >
      {/* ── Engineering grid overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(to right, rgba(74,171,61,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Restrained green centre glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 320,
          background: 'var(--color-primary)',
          opacity: 0.055,
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* ── Top hairline ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(to right, transparent, rgba(74,171,61,0.35) 30%, rgba(74,171,61,0.35) 70%, transparent)',
        }}
      />

      {/* ── Bottom hairline ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)',
        }}
      />

      <Container>
        <div style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>

          {/* ── 2-column composition ── */}
          <div
            className="final-cta-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >

            {/* ── LEFT: Heading block ── */}
            <div className="final-cta-left">

              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.4rem' }}>
                <span
                  aria-hidden="true"
                  style={{ display: 'block', width: 18, height: 2, background: 'var(--color-primary)', flexShrink: 0 }}
                />
                <span style={{
                  fontSize: '0.57rem', fontWeight: 700,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                }}>
                  Make the Next Energy Decision with Clarity
                </span>
              </div>

              {/* Heading */}
              <h2
                id="final-cta-heading"
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  textWrap: 'balance',
                  maxWidth: '22ch',
                  marginBottom: '1.1rem',
                }}
              >
                Before You Buy Solar, Know What It Can Do for Your Business.
              </h2>

              {/* Supporting copy */}
              <p style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                lineHeight: 1.72,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '44ch',
              }}>
                Understand the technical feasibility, commercial model and long-term energy opportunity before making an investment decision.
              </p>

              {/* Decorative rule */}
              <div
                aria-hidden="true"
                className="final-cta-rule"
                style={{
                  display: 'none', /* shown desktop via media query */
                  marginTop: '2rem',
                  height: 1,
                  background: 'linear-gradient(to right, rgba(74,171,61,0.35), transparent)',
                  maxWidth: '80%',
                }}
              />
            </div>

            {/* ── RIGHT: CTA block ── */}
            <div
              className="final-cta-right"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Industrial accent card wrapping CTAs */}
              <div style={{
                position: 'relative',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                overflow: 'hidden',
              }}>
                {/* Corner ticks */}
                {[
                  { top: 0, left: 0, borderTop: '1.5px solid', borderLeft: '1.5px solid' },
                  { top: 0, right: 0, borderTop: '1.5px solid', borderRight: '1.5px solid' },
                  { bottom: 0, right: 0, borderBottom: '1.5px solid', borderRight: '1.5px solid' },
                  { bottom: 0, left: 0, borderBottom: '1.5px solid', borderLeft: '1.5px solid' },
                ].map((s, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      width: 10, height: 10,
                      borderColor: 'rgba(74,171,61,0.4)',
                      ...s,
                    }}
                  />
                ))}

                {/* Label above CTAs */}
                <p style={{
                  fontSize: '0.56rem', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '1rem',
                }}>
                  Next step
                </p>

                {/* Primary CTA */}
                <a
                  id="final-primary-cta"
                  href="#lead-form"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    width: '100%',
                    minHeight: 56,
                    padding: '0.9rem 1.5rem',
                    background: 'var(--color-primary)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.015em',
                    textDecoration: 'none',
                    marginBottom: '0.6rem',
                    transition: 'all 0.18s ease',
                    boxShadow: '0 8px 28px rgba(74,171,61,0.28)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = 'var(--color-dark)';
                    e.currentTarget.style.boxShadow = '0 10px 32px rgba(255,255,255,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(74,171,61,0.28)';
                  }}
                  onFocus={e => { e.currentTarget.style.outline = '2px solid var(--color-primary)'; e.currentTarget.style.outlineOffset = '3px'; }}
                  onBlur={e => { e.currentTarget.style.outline = 'none'; }}
                >
                  <span>Get My Solar Opportunity Assessment</span>
                  <ArrowRight />
                </a>

                {/* Secondary CTA */}
                <a
                  id="final-secondary-cta"
                  href="#lead-form"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    width: '100%',
                    minHeight: 52,
                    padding: '0.8rem 1.5rem',
                    background: 'transparent',
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.18)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                  }}
                  onFocus={e => { e.currentTarget.style.outline = '2px solid rgba(255,255,255,0.4)'; e.currentTarget.style.outlineOffset = '3px'; }}
                  onBlur={e => { e.currentTarget.style.outline = 'none'; }}
                >
                  <span>Speak With Madhav Solar</span>
                  <svg
                    aria-hidden="true"
                    width="14" height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>

                {/* Reassurance note */}
                <p style={{
                  marginTop: '0.9rem',
                  fontSize: '0.68rem',
                  color: 'rgba(255,255,255,0.28)',
                  lineHeight: 1.6,
                  textAlign: 'center',
                }}>
                  No obligation. Helps you understand the right next step for your facility.
                </p>
              </div>

              {/* Industrial bottom strip */}
              <div
                aria-hidden="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0 0.25rem',
                }}
              >
                <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
                <span style={{
                  fontSize: '0.46rem', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.15)',
                }}>
                  Madhav Solar Energy · Commercial & Industrial
                </span>
                <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 900px) {
          .final-cta-grid {
            grid-template-columns: 1fr 0.85fr !important;
          }
          .final-cta-rule {
            display: block !important;
          }
        }
        @media (max-width: 899px) {
          .final-cta-right {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
