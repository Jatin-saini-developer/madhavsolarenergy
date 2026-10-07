import { useState } from 'react';
import Container from '../components/Container';
import { industryOptions } from '../data/content';

// ─── Step Config ──────────────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: 'About You' },
  { id: 2, label: 'Contact' },
  { id: 3, label: 'Energy Profile' },
  { id: 4, label: 'Requirement' },
  { id: 5, label: 'Timeline' },
];

const SOLAR_TYPES = [
  { value: 'rooftop',     label: 'Rooftop Solar' },
  { value: 'ground',      label: 'Ground-Mount' },
  { value: 'captive',     label: 'Captive / Group Captive' },
  { value: 'open-access', label: 'Open Access' },
  { value: 'not-sure',    label: 'Not Sure Yet' },
];

const TIMELINES = [
  { value: 'immediate',   label: 'Immediate' },
  { value: '3months',     label: 'Within 3 Months' },
  { value: '3-6months',   label: '3–6 Months' },
  { value: '6-12months',  label: '6–12 Months' },
  { value: 'exploring',   label: 'Currently Exploring' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function FormField({ label, id, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[var(--color-dark)] mb-1.5">
        {label}
        {required && <span className="text-[var(--color-primary)] ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Input({ id, type = 'text', placeholder, value, onChange, autoComplete, inputMode }) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className="w-full min-h-[48px] px-4 py-3 bg-white border border-gray-200 text-[var(--color-dark)] text-sm rounded-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors duration-200"
    />
  );
}

function SelectInput({ id, value, onChange, options, placeholder }) {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full min-h-[48px] px-4 py-3 bg-white border border-gray-200 text-[var(--color-dark)] text-sm rounded-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors duration-200 appearance-none"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

function CardSelect({ options, selected, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(opt.value)}
            className={`min-h-[52px] px-5 py-3.5 text-left text-sm font-semibold rounded-sm border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
              isSelected
                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                : 'bg-white border-gray-200 text-[var(--color-dark)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
function ProgressBar({ current, total }) {
  return (
    <div className="mb-8">
      {/* Step labels — hidden on very small screens, shown md+ */}
      <div className="hidden md:flex justify-between mb-3">
        {STEPS.map((step) => (
          <span
            key={step.id}
            className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
              step.id === current
                ? 'text-[var(--color-primary)]'
                : step.id < current
                  ? 'text-[var(--color-dark)]'
                  : 'text-gray-400'
            }`}
          >
            {step.label}
          </span>
        ))}
      </div>

      {/* Mobile step counter */}
      <div className="flex md:hidden justify-between items-center mb-2">
        <span className="text-xs font-semibold text-[var(--color-dark)]">
          Step {current} of {total}
        </span>
        <span className="text-xs text-[var(--color-primary)] font-semibold">
          {STEPS[current - 1].label}
        </span>
      </div>

      {/* Progress track */}
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        <div
          className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((current - 1) / (total - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ─── Validate each step ───────────────────────────────────────────────────────
function validate(step, data) {
  const errs = {};
  if (step === 1) {
    if (!data.name.trim())        errs.name        = 'Name is required.';
    if (!data.company.trim())     errs.company     = 'Company name is required.';
    if (!data.designation.trim()) errs.designation = 'Designation is required.';
  }
  if (step === 2) {
    if (!data.email.trim())    errs.email    = 'Business email is required.';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errs.email = 'Enter a valid email address.';
    if (!data.mobile.trim())   errs.mobile   = 'Mobile number is required.';
    else if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\s/g, '')))
      errs.mobile = 'Enter a valid 10-digit Indian mobile number.';
    if (!data.location.trim()) errs.location = 'Project location is required.';
  }
  if (step === 3) {
    if (!data.industry)         errs.industry    = 'Please select your industry.';
    if (!data.consumption.trim()) errs.consumption = 'Please provide approximate consumption or bill amount.';
  }
  if (step === 4) {
    if (!data.solarType) errs.solarType = 'Please select a solar model.';
  }
  if (step === 5) {
    if (!data.timeline) errs.timeline = 'Please select a timeline.';
  }
  return errs;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted]     = useState(false);
  const [errors, setErrors]           = useState({});

  const [data, setData] = useState({
    name:        '',
    company:     '',
    designation: '',
    email:       '',
    mobile:      '',
    location:    '',
    industry:    '',
    consumption: '',
    solarType:   '',
    timeline:    '',
  });

  const set = (key) => (e) => setData((prev) => ({ ...prev, [key]: e.target ? e.target.value : e }));

  const handleNext = () => {
    const errs = validate(currentStep, data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    if (currentStep < STEPS.length) setCurrentStep((s) => s + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = () => {
    // Frontend-only — no actual submission. Display success state.
    setSubmitted(true);
  };

  // ── Success State ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section id="lead-form" className="py-16 sm:py-20 lg:py-28 bg-[var(--color-gray-light)]">
        <Container>
          <div className="max-w-xl mx-auto text-center py-12 px-6">
            <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark)] mb-4">
              Thank You.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-dark)] font-semibold mb-3">
              Your solar opportunity details have been captured.
            </p>
            <p className="text-sm sm:text-base text-[var(--color-gray)] leading-relaxed">
              Our team can review your requirement and determine the appropriate next step. We will
              be in touch with you shortly.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 sm:py-20 lg:py-28 bg-[var(--color-gray-light)] overflow-hidden">
      <Container>

        {/* Section header */}
        <div className="max-w-xl mb-10 sm:mb-12">
          <p className="text-[0.65rem] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase mb-4">
            Get Your Assessment
          </p>
          <h2 className="fluid-h2 font-bold text-[var(--color-dark)] text-balance mb-3">
            Tell Us About Your Energy Requirement.
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-gray)] leading-relaxed">
            A few details will help us understand your facility and the right solar opportunity to
            evaluate.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-2xl bg-white shadow-sm border border-gray-100">
          <div className="p-6 sm:p-8 lg:p-10">

            <ProgressBar current={currentStep} total={STEPS.length} />

            {/* ── Step 1: About You ─────────────────────────── */}
            {currentStep === 1 && (
              <fieldset className="space-y-5">
                <legend className="text-lg font-bold text-[var(--color-dark)] mb-6">
                  About You
                </legend>
                <FormField label="Full Name" id="name" error={errors.name} required>
                  <Input id="name" placeholder="Your full name" value={data.name} onChange={set('name')} autoComplete="name" />
                </FormField>
                <FormField label="Company Name" id="company" error={errors.company} required>
                  <Input id="company" placeholder="Your company name" value={data.company} onChange={set('company')} autoComplete="organization" />
                </FormField>
                <FormField label="Designation" id="designation" error={errors.designation} required>
                  <Input id="designation" placeholder="Your role / designation" value={data.designation} onChange={set('designation')} autoComplete="organization-title" />
                </FormField>
              </fieldset>
            )}

            {/* ── Step 2: Contact ───────────────────────────── */}
            {currentStep === 2 && (
              <fieldset className="space-y-5">
                <legend className="text-lg font-bold text-[var(--color-dark)] mb-6">
                  Contact & Location
                </legend>
                <FormField label="Business Email" id="email" error={errors.email} required>
                  <Input id="email" type="email" placeholder="you@company.com" value={data.email} onChange={set('email')} autoComplete="email" />
                </FormField>
                <FormField label="Mobile Number" id="mobile" error={errors.mobile} required>
                  <Input id="mobile" type="tel" placeholder="10-digit mobile number" value={data.mobile} onChange={set('mobile')} autoComplete="tel" inputMode="numeric" />
                </FormField>
                <FormField label="Project / Facility Location" id="location" error={errors.location} required>
                  <Input id="location" placeholder="City, State" value={data.location} onChange={set('location')} autoComplete="address-level2" />
                </FormField>
              </fieldset>
            )}

            {/* ── Step 3: Energy Profile ────────────────────── */}
            {currentStep === 3 && (
              <fieldset className="space-y-5">
                <legend className="text-lg font-bold text-[var(--color-dark)] mb-6">
                  Energy Profile
                </legend>
                <FormField label="Industry" id="industry" error={errors.industry} required>
                  <SelectInput
                    id="industry"
                    value={data.industry}
                    onChange={set('industry')}
                    options={industryOptions}
                    placeholder="Select your industry"
                  />
                </FormField>
                <FormField
                  label="Approx. Monthly Electricity Bill / Consumption"
                  id="consumption"
                  error={errors.consumption}
                  required
                >
                  <Input
                    id="consumption"
                    placeholder="e.g., ₹5 lakh/month or 1.5 lakh kWh/month"
                    value={data.consumption}
                    onChange={set('consumption')}
                  />
                </FormField>
              </fieldset>
            )}

            {/* ── Step 4: Solar Requirement ─────────────────── */}
            {currentStep === 4 && (
              <fieldset className="space-y-5">
                <legend className="text-lg font-bold text-[var(--color-dark)] mb-6">
                  Solar Requirement
                </legend>
                <FormField label="Which solar model interests you?" id="solarType" error={errors.solarType} required>
                  <CardSelect
                    options={SOLAR_TYPES}
                    selected={data.solarType}
                    onChange={(v) => setData((prev) => ({ ...prev, solarType: v }))}
                  />
                </FormField>
              </fieldset>
            )}

            {/* ── Step 5: Timeline ──────────────────────────── */}
            {currentStep === 5 && (
              <fieldset className="space-y-5">
                <legend className="text-lg font-bold text-[var(--color-dark)] mb-6">
                  Timeline
                </legend>
                <FormField label="When are you looking to proceed?" id="timeline" error={errors.timeline} required>
                  <CardSelect
                    options={TIMELINES}
                    selected={data.timeline}
                    onChange={(v) => setData((prev) => ({ ...prev, timeline: v }))}
                  />
                </FormField>
              </fieldset>
            )}

            {/* ── Nav buttons ───────────────────────────────── */}
            <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 mt-10 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 border border-gray-200 text-[var(--color-dark)] text-sm font-semibold rounded-sm hover:border-gray-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <div /> /* spacer */
              )}

              <button
                type="button"
                onClick={handleNext}
                id={currentStep === STEPS.length ? 'form-submit-btn' : `form-next-step-${currentStep}`}
                className="inline-flex items-center justify-center gap-2 min-h-[52px] sm:min-h-[48px] px-8 py-3 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-sm hover:bg-[var(--color-dark)] active:bg-[var(--color-dark)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
              >
                {currentStep === STEPS.length ? 'Assess My Solar Opportunity' : 'Continue'}
                {currentStep < STEPS.length && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
