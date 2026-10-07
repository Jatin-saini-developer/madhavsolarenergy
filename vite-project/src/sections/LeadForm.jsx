import { useState } from 'react';
import Container from '../components/Container';
import { industryOptions } from '../data/content';

// ─── Step config (4 steps) ────────────────────────────────────────────────────
const STEPS = [
  { id: 1, code: '01', label: 'About You',          short: 'You'      },
  { id: 2, code: '02', label: 'Your Facility',      short: 'Facility' },
  { id: 3, code: '03', label: 'Energy Requirement', short: 'Energy'   },
  { id: 4, code: '04', label: 'Timeline',           short: 'Timeline' },
];

const SOLAR_TYPES = [
  { value: 'rooftop',     label: 'Rooftop Solar',           sub: 'On-site generation'     },
  { value: 'ground',      label: 'Ground-Mount',            sub: 'Large-scale generation' },
  { value: 'captive',     label: 'Captive / Group Captive', sub: 'Structured procurement' },
  { value: 'open-access', label: 'Open Access',             sub: 'Off-site renewable'     },
  { value: 'not-sure',    label: 'Not Sure Yet',            sub: 'Help me decide'         },
];

const TIMELINES = [
  { value: 'immediate',  label: 'Immediate',           sub: 'Ready to proceed now'    },
  { value: '3months',    label: 'Within 3 Months',     sub: 'Planning in progress'    },
  { value: '3-6months',  label: '3–6 Months',          sub: 'Evaluating options'      },
  { value: '6-12months', label: '6–12 Months',         sub: 'Early stage planning'    },
  { value: 'exploring',  label: 'Currently Exploring', sub: 'No fixed timeline yet'   },
];

const LEFT_PANEL_ITEMS = [
  { label: 'Your energy profile', desc: 'Consumption and billing context.'        },
  { label: 'Your facility',       desc: 'Infrastructure and location specifics.'  },
  { label: 'Project requirement', desc: 'The right solar model for your need.'    },
  { label: 'Your timeline',       desc: 'When you are ready to move forward.'     },
];

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(step, data) {
  const errs = {};
  if (step === 1) {
    if (!data.name.trim())        errs.name        = 'Name is required.';
    if (!data.company.trim())     errs.company     = 'Company name is required.';
    if (!data.designation.trim()) errs.designation = 'Designation is required.';
  }
  if (step === 2) {
    if (!data.email.trim())
      errs.email = 'Business email is required.';
    else if (!/\S+@\S+\.\S+/.test(data.email))
      errs.email = 'Enter a valid email address.';
    if (!data.mobile.trim())
      errs.mobile = 'Mobile number is required.';
    else if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\s/g, '')))
      errs.mobile = 'Enter a valid 10-digit Indian mobile number.';
    if (!data.industry)            errs.industry  = 'Please select your industry.';
    if (!data.location.trim())     errs.location  = 'Project location is required.';
  }
  if (step === 3) {
    if (!data.consumption.trim())
      errs.consumption = 'Please provide approximate consumption or bill amount.';
    if (!data.solarType)
      errs.solarType = 'Please select a solar model preference.';
  }
  if (step === 4) {
    if (!data.timeline) errs.timeline = 'Please select a timeline.';
  }
  return errs;
}

// ─── FormField wrapper ────────────────────────────────────────────────────────
function FormField({ label, id, error, required, hint, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block', fontSize: '0.8rem', fontWeight: 600,
          color: 'var(--color-dark)', marginBottom: '0.38rem', letterSpacing: '0.01em',
        }}
      >
        {label}
        {required && <span aria-hidden="true" style={{ color: 'var(--color-primary)', marginLeft: 2 }}>*</span>}
      </label>
      {hint && <p style={{ fontSize: '0.72rem', color: 'var(--color-gray)', marginBottom: '0.38rem', lineHeight: 1.5 }}>{hint}</p>}
      {children}
      {error && (
        <p role="alert" style={{ marginTop: '0.32rem', fontSize: '0.72rem', color: '#dc2626', fontWeight: 500 }}>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Text input ───────────────────────────────────────────────────────────────
function TextInput({ id, type = 'text', placeholder, value, onChange, autoComplete, inputMode, hasError }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id} name={id} type={type} placeholder={placeholder}
      value={value} onChange={onChange} autoComplete={autoComplete} inputMode={inputMode}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{
        width: '100%', minHeight: 48, padding: '0.7rem 0.9rem',
        background: '#ffffff', fontSize: '0.875rem', color: 'var(--color-dark)',
        border: `1px solid ${hasError ? '#dc2626' : focused ? 'var(--color-primary)' : 'rgba(31,31,37,0.18)'}`,
        boxShadow: focused && !hasError ? '0 0 0 2px rgba(74,171,61,0.12)' : 'none',
        outline: 'none', transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box', fontFamily: 'inherit',
      }}
    />
  );
}

// ─── Select input ─────────────────────────────────────────────────────────────
function SelectInput({ id, value, onChange, options, placeholder, hasError }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select
        id={id} name={id} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', minHeight: 48, padding: '0.7rem 2.5rem 0.7rem 0.9rem',
          background: '#ffffff', fontSize: '0.875rem', fontFamily: 'inherit',
          color: value ? 'var(--color-dark)' : 'rgba(116,120,124,0.8)',
          border: `1px solid ${hasError ? '#dc2626' : focused ? 'var(--color-primary)' : 'rgba(31,31,37,0.18)'}`,
          boxShadow: focused && !hasError ? '0 0 0 2px rgba(74,171,61,0.12)' : 'none',
          outline: 'none', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none',
          transition: 'border-color 0.15s ease, box-shadow 0.15s ease', boxSizing: 'border-box',
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <span aria-hidden="true" style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  );
}

// ─── Option card (radio-style) ────────────────────────────────────────────────
function OptionCard({ option, selected, onSelect }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button" role="radio" aria-checked={selected}
      onClick={() => onSelect(option.value)}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        width: '100%', minHeight: 56, padding: '0.7rem 0.9rem',
        background: selected ? 'var(--color-primary)' : hovered ? 'rgba(74,171,61,0.04)' : '#ffffff',
        border: `1.5px solid ${selected ? 'var(--color-primary)' : hovered ? 'var(--color-primary)' : 'rgba(31,31,37,0.15)'}`,
        cursor: 'pointer', textAlign: 'left', position: 'relative',
        transition: 'all 0.15s ease', outline: 'none', fontFamily: 'inherit',
      }}
      onFocus={e => { e.currentTarget.style.boxShadow = '0 0 0 2px rgba(74,171,61,0.25)'; }}
      onBlur={e => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: selected ? '#ffffff' : 'var(--color-dark)', lineHeight: 1.3 }}>
        {option.label}
      </span>
      {option.sub && (
        <span style={{ fontSize: '0.69rem', color: selected ? 'rgba(255,255,255,0.72)' : 'var(--color-gray)', marginTop: 2 }}>
          {option.sub}
        </span>
      )}
      {selected && (
        <span aria-hidden="true" style={{ position: 'absolute', top: 8, right: 9, width: 7, height: 7, background: '#ffffff', borderRadius: '50%', opacity: 0.85 }} />
      )}
    </button>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepIndicator({ current, total }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      {/* Desktop pill row */}
      <div className="si-desktop" style={{ display: 'flex', alignItems: 'flex-start' }}>
        {STEPS.map((step, idx) => {
          const done   = step.id < current;
          const active = step.id === current;
          const last   = idx === STEPS.length - 1;
          return (
            <div key={step.id} style={{ display: 'flex', alignItems: 'flex-start', flex: last ? 'none' : 1, minWidth: 0 }}>
              {/* Cell */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexShrink: 0 }}>
                {/* Badge */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 30, height: 30,
                  background: done ? 'var(--color-primary)' : active ? 'var(--color-dark)' : 'transparent',
                  border: `1.5px solid ${done || active ? 'transparent' : 'rgba(31,31,37,0.18)'}`,
                  transition: 'all 0.25s ease',
                }}>
                  {done ? (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em',
                      fontFamily: 'var(--font-heading)',
                      color: active ? '#ffffff' : 'rgba(31,31,37,0.35)',
                    }}>
                      {step.code}
                    </span>
                  )}
                </div>
                {/* Label */}
                <span style={{
                  display: 'block', marginTop: '0.35rem',
                  fontSize: '0.62rem', fontWeight: active ? 700 : done ? 600 : 500,
                  letterSpacing: '0.03em', whiteSpace: 'nowrap',
                  color: active ? 'var(--color-dark)' : done ? 'var(--color-primary)' : 'rgba(31,31,37,0.35)',
                  transition: 'color 0.25s ease',
                }}>
                  {step.label}
                </span>
              </div>
              {/* Connector */}
              {!last && (
                <div style={{
                  flex: 1, height: 1, marginTop: 15, minWidth: 10,
                  background: done ? 'var(--color-primary)' : 'rgba(31,31,37,0.1)',
                  transition: 'background 0.3s ease',
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile compact bar */}
      <div className="si-mobile" style={{ display: 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-gray)' }}>Step {current} of {total}</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {STEPS[current - 1].label}
          </span>
        </div>
        <div role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}
          style={{ height: 3, background: 'rgba(31,31,37,0.1)', overflow: 'hidden' }}>
          <div style={{
            height: '100%', background: 'var(--color-primary)',
            width: `${((current - 1) / (total - 1)) * 100}%`,
            transition: 'width 0.4s ease',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          .si-desktop { display: none !important; }
          .si-mobile  { display: block !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Left conversion panel ────────────────────────────────────────────────────
function LeftPanel({ currentStep }) {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to right, rgba(74,171,61,0.048) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,37,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--color-primary)' }} />

      <div style={{ position: 'relative', padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.25rem)' }}>
        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.4rem' }}>
          <span aria-hidden="true" style={{ display: 'block', width: 14, height: 2, background: 'var(--color-primary)' }} />
          <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
            Assess Your Opportunity
          </span>
        </div>

        {/* Heading */}
        <h2
          id="lead-form-heading"
          className="font-heading"
          style={{
            fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)', fontWeight: 800,
            color: 'var(--color-dark)', lineHeight: 1.15, maxWidth: '20ch',
            textWrap: 'balance', marginBottom: '0.85rem',
          }}
        >
          Tell Us About Your Energy Requirement
        </h2>

        <p style={{ fontSize: '0.86rem', lineHeight: 1.7, color: 'var(--color-gray)', maxWidth: '34ch', marginBottom: '1.75rem' }}>
          A few details help us understand your facility and the solar opportunity worth evaluating.
        </p>

        <div aria-hidden="true" style={{ height: 1, background: 'rgba(31,31,37,0.08)', marginBottom: '1.4rem' }} />

        <p style={{
          fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(31,31,37,0.38)', marginBottom: '1rem',
        }}>
          What you'll help us understand
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {LEFT_PANEL_ITEMS.map((item, i) => {
            const sid    = i + 1;
            const done   = sid < currentStep;
            const active = sid === currentStep;
            return (
              <li key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                <span aria-hidden="true" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, width: 20, height: 20, marginTop: 2,
                  background: done ? 'var(--color-primary)' : active ? 'rgba(74,171,61,0.1)' : 'transparent',
                  border: `1.5px solid ${done ? 'var(--color-primary)' : active ? 'var(--color-primary)' : 'rgba(31,31,37,0.15)'}`,
                  transition: 'all 0.25s ease',
                }}>
                  {done ? (
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: active ? 'var(--color-primary)' : 'rgba(31,31,37,0.18)', transition: 'background 0.25s ease' }} />
                  )}
                </span>
                <div>
                  <p style={{
                    fontSize: '0.8rem', fontWeight: done || active ? 600 : 500,
                    color: done ? 'var(--color-primary)' : active ? 'var(--color-dark)' : 'rgba(31,31,37,0.4)',
                    lineHeight: 1.3, transition: 'color 0.25s ease',
                  }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: active || done ? 'var(--color-gray)' : 'rgba(116,120,124,0.45)', lineHeight: 1.5, marginTop: 1 }}>
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div aria-hidden="true" style={{ marginTop: '2.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ flex: 1, height: 1, background: 'rgba(31,31,37,0.07)' }} />
          <span style={{ fontSize: '0.46rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.18)' }}>
            Madhav Solar Energy
          </span>
          <span style={{ flex: 1, height: 1, background: 'rgba(31,31,37,0.07)' }} />
        </div>
      </div>
    </div>
  );
}

// ─── Success state ────────────────────────────────────────────────────────────
function SuccessState({ onReset }) {
  return (
    <section id="lead-form" aria-label="Assessment captured" style={{ position: 'relative', background: '#F5F7F4', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(31,31,37,0.12) 30%, rgba(31,31,37,0.12) 70%, transparent)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to right, rgba(31,31,37,0.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,37,0.022) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }} />
      <Container>
        <div style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%', maxWidth: 560, position: 'relative',
            background: '#ffffff', border: '1px solid rgba(31,31,37,0.1)',
            boxShadow: '0 4px 24px rgba(31,31,37,0.08)', overflow: 'hidden',
          }}>
            <div style={{ height: 4, background: 'var(--color-primary)' }} />
            <div style={{ padding: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 52, height: 52, background: 'var(--color-primary)', margin: '0 auto 1.4rem',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.7rem' }}>
                Assessment Captured
              </p>
              <h2 className="font-heading" style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 800,
                color: 'var(--color-dark)', lineHeight: 1.18, marginBottom: '0.9rem', textWrap: 'balance',
              }}>
                Your Solar Opportunity Request Has Been Captured.
              </h2>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.72, color: 'var(--color-gray)', maxWidth: '38ch', margin: '0 auto 1.75rem' }}>
                Thank you for sharing your energy requirement. Your submitted information is ready for the next assessment step.
              </p>

              <div aria-hidden="true" style={{ height: 1, background: 'rgba(31,31,37,0.08)', marginBottom: '1.4rem' }} />

              <button
                type="button" onClick={onReset}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.6rem 1.2rem', border: '1px solid rgba(31,31,37,0.18)',
                  background: 'transparent', fontSize: '0.78rem', fontWeight: 600,
                  color: 'var(--color-gray)', cursor: 'pointer', transition: 'all 0.15s ease', fontFamily: 'inherit',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-dark)'; e.currentTarget.style.color = 'var(--color-dark)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(31,31,37,0.18)'; e.currentTarget.style.color = 'var(--color-gray)'; }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
                </svg>
                Start Again
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted,   setSubmitted]   = useState(false);
  const [errors,      setErrors]      = useState({});

  const [data, setData] = useState({
    name:'', company:'', designation:'',
    email:'', mobile:'', industry:'', location:'',
    consumption:'', solarType:'', timeline:'',
  });

  const set = (key) => (e) =>
    setData((prev) => ({ ...prev, [key]: e.target ? e.target.value : e }));

  const handleNext = () => {
    const errs = validate(currentStep, data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    if (currentStep < STEPS.length) setCurrentStep((s) => s + 1);
    else setSubmitted(true);
  };

  const handleBack = () => { setErrors({}); setCurrentStep((s) => Math.max(1, s - 1)); };

  const handleReset = () => {
    setData({ name:'', company:'', designation:'', email:'', mobile:'', industry:'', location:'', consumption:'', solarType:'', timeline:'' });
    setErrors({}); setCurrentStep(1); setSubmitted(false);
  };

  if (submitted) return <SuccessState onReset={handleReset} />;

  return (
    <section
      id="lead-form"
      aria-labelledby="lead-form-heading"
      style={{ position: 'relative', background: '#F5F7F4', overflow: 'hidden' }}
    >
      {/* Top hairline */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(31,31,37,0.12) 30%, rgba(31,31,37,0.12) 70%, transparent)',
      }} />
      {/* Background grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(to right, rgba(31,31,37,0.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,37,0.022) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }} />

      <Container>
        <div style={{ padding: 'clamp(3.5rem, 7vw, 5.5rem) 0' }}>
          <div
            className="lf-grid"
            style={{
              display: 'grid', gridTemplateColumns: '1fr',
              border: '1px solid rgba(31,31,37,0.1)',
              boxShadow: '0 2px 8px rgba(31,31,37,0.04), 0 12px 48px rgba(31,31,37,0.08)',
              overflow: 'hidden', background: '#ffffff',
            }}
          >
            {/* Left panel — hidden mobile */}
            <div className="lf-left" style={{ background: '#F8F9F7', display: 'none', borderRight: 'none' }}>
              <LeftPanel currentStep={currentStep} />
            </div>

            {/* Right: form panel */}
            <div className="lf-right" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem) clamp(1.25rem, 4vw, 2.5rem)' }}>

              {/* Mobile-only heading */}
              <div className="lf-mobile-heading" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
                  <span aria-hidden="true" style={{ display: 'block', width: 14, height: 2, background: 'var(--color-primary)' }} />
                  <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                    Assess Your Opportunity
                  </span>
                </div>
                <h2
                  id="lead-form-heading"
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.2rem, 4vw, 1.55rem)', fontWeight: 800,
                    color: 'var(--color-dark)', lineHeight: 1.18, marginBottom: '0.4rem',
                  }}
                >
                  Tell Us About Your Energy Requirement
                </h2>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'var(--color-gray)' }}>
                  A few details will help us evaluate the solar opportunity for your facility.
                </p>
              </div>

              <StepIndicator current={currentStep} total={STEPS.length} />

              <form noValidate onSubmit={(e) => e.preventDefault()}>

                {/* Step 1 */}
                {currentStep === 1 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.38)', marginBottom: '1.2rem' }}>
                      Step 1 — About You
                    </legend>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
                      <FormField label="Full Name" id="name" error={errors.name} required>
                        <TextInput id="name" placeholder="Your full name" value={data.name} onChange={set('name')} autoComplete="name" hasError={!!errors.name} />
                      </FormField>
                      <FormField label="Company Name" id="company" error={errors.company} required>
                        <TextInput id="company" placeholder="Your organisation" value={data.company} onChange={set('company')} autoComplete="organization" hasError={!!errors.company} />
                      </FormField>
                      <FormField label="Designation" id="designation" error={errors.designation} required>
                        <TextInput id="designation" placeholder="Your role or title" value={data.designation} onChange={set('designation')} autoComplete="organization-title" hasError={!!errors.designation} />
                      </FormField>
                    </div>
                  </fieldset>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.38)', marginBottom: '1.2rem' }}>
                      Step 2 — Your Facility
                    </legend>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
                      <FormField label="Business Email" id="email" error={errors.email} required>
                        <TextInput id="email" type="email" placeholder="you@company.com" value={data.email} onChange={set('email')} autoComplete="email" hasError={!!errors.email} />
                      </FormField>
                      <FormField label="Mobile Number" id="mobile" error={errors.mobile} required>
                        <TextInput id="mobile" type="tel" placeholder="10-digit mobile number" value={data.mobile} onChange={set('mobile')} autoComplete="tel" inputMode="numeric" hasError={!!errors.mobile} />
                      </FormField>
                      <FormField label="Industry" id="industry" error={errors.industry} required>
                        <SelectInput id="industry" value={data.industry} onChange={set('industry')} options={industryOptions} placeholder="Select your industry" hasError={!!errors.industry} />
                      </FormField>
                      <FormField label="Project / Facility Location" id="location" error={errors.location} required>
                        <TextInput id="location" placeholder="City, State" value={data.location} onChange={set('location')} autoComplete="address-level2" hasError={!!errors.location} />
                      </FormField>
                    </div>
                  </fieldset>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.38)', marginBottom: '1.2rem' }}>
                      Step 3 — Energy Requirement
                    </legend>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                      <FormField
                        label="Approx. Monthly Electricity Bill / Consumption"
                        id="consumption" error={errors.consumption} required
                        hint="e.g. ₹5 lakh/month or 1.5 lakh kWh/month — your best estimate is fine."
                      >
                        <TextInput id="consumption" placeholder="₹ amount or kWh volume" value={data.consumption} onChange={set('consumption')} hasError={!!errors.consumption} />
                      </FormField>
                      <FormField label="Which solar model interests you?" id="solarType" error={errors.solarType} required>
                        <div role="radiogroup" aria-label="Solar model preference"
                          className="opt-grid"
                          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem', marginTop: '0.25rem' }}
                        >
                          {SOLAR_TYPES.map((opt) => (
                            <OptionCard key={opt.value} option={opt}
                              selected={data.solarType === opt.value}
                              onSelect={(v) => setData((prev) => ({ ...prev, solarType: v }))}
                            />
                          ))}
                        </div>
                      </FormField>
                    </div>
                  </fieldset>
                )}

                {/* Step 4 */}
                {currentStep === 4 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(31,31,37,0.38)', marginBottom: '1.2rem' }}>
                      Step 4 — Timeline
                    </legend>
                    <FormField label="When are you looking to proceed?" id="timeline" error={errors.timeline} required>
                      <div role="radiogroup" aria-label="Project timeline"
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.25rem' }}
                      >
                        {TIMELINES.map((opt) => (
                          <OptionCard key={opt.value} option={opt}
                            selected={data.timeline === opt.value}
                            onSelect={(v) => setData((prev) => ({ ...prev, timeline: v }))}
                          />
                        ))}
                      </div>
                    </FormField>
                  </fieldset>
                )}

                {/* Navigation row */}
                <div style={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  alignItems: 'center', gap: '0.75rem',
                  marginTop: '1.75rem', paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(31,31,37,0.08)',
                }}>
                  {currentStep > 1 ? (
                    <button
                      type="button" onClick={handleBack}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        minHeight: 44, padding: '0.6rem 1.1rem',
                        border: '1px solid rgba(31,31,37,0.18)', background: 'transparent',
                        fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-dark)',
                        cursor: 'pointer', transition: 'border-color 0.15s ease', fontFamily: 'inherit', flexShrink: 0,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-dark)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(31,31,37,0.18)'; }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  ) : <span />}

                  <button
                    type="button" onClick={handleNext}
                    id={currentStep === STEPS.length ? 'form-submit-btn' : `form-next-step-${currentStep}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      minHeight: 52, padding: '0.875rem 1.75rem',
                      background: 'var(--color-primary)', color: '#ffffff',
                      fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.015em',
                      border: 'none', cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(74,171,61,0.2)',
                      transition: 'all 0.18s ease', fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-dark)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(31,31,37,0.18)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(74,171,61,0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {currentStep === STEPS.length ? 'Assess My Solar Opportunity' : 'Continue'}
                    {currentStep < STEPS.length && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Reassurance — last step */}
                {currentStep === STEPS.length && (
                  <p style={{
                    marginTop: '0.7rem', textAlign: 'center',
                    fontSize: '0.7rem', color: 'rgba(116,120,124,0.65)', lineHeight: 1.6,
                  }}>
                    Used only to understand your business energy requirement.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 900px) {
          .lf-grid  { grid-template-columns: 0.4fr 0.6fr !important; }
          .lf-left  { display: block !important; border-right: 1px solid rgba(31,31,37,0.08) !important; }
          .lf-mobile-heading { display: none !important; }
        }
        @media (max-width: 479px) {
          .opt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
