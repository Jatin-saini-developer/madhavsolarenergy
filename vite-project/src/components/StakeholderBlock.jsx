const blockStyles = {
  featured: {
    shell:
      "bg-[var(--color-dark)] text-white border-[var(--color-dark)] lg:col-span-5 lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[420px]",
    role: "bg-[var(--color-primary)] text-white",
    question: "text-2xl sm:text-3xl lg:text-4xl text-white",
    marker: "bg-[var(--color-primary)]",
  },
  finance: {
    shell:
      "bg-white text-[var(--color-dark)] border-gray-200 lg:col-span-4 lg:min-h-[220px]",
    role: "bg-[var(--color-gray-light)] text-[var(--color-primary)]",
    question: "text-xl sm:text-2xl text-[var(--color-dark)]",
    marker: "bg-[var(--color-primary)]",
  },
  operations: {
    shell:
      "bg-white text-[var(--color-dark)] border-gray-200 lg:col-span-3 lg:mt-10 lg:min-h-[240px]",
    role: "bg-[var(--color-gray-light)] text-[var(--color-primary)]",
    question: "text-lg sm:text-xl text-[var(--color-dark)]",
    marker: "bg-[var(--color-dark)]",
  },
  procurement: {
    shell:
      "bg-[var(--color-dark-alt)] text-white border-[var(--color-dark-alt)] lg:col-span-3 lg:min-h-[240px]",
    role: "bg-white/10 text-[var(--color-primary-muted)]",
    question: "text-lg sm:text-xl text-white",
    marker: "bg-[var(--color-primary)]",
  },
  sustainability: {
    shell:
      "bg-white text-[var(--color-dark)] border-gray-200 lg:col-span-7 lg:min-h-[220px]",
    role: "bg-[var(--color-gray-light)] text-[var(--color-primary)]",
    question: "text-xl sm:text-2xl text-[var(--color-dark)]",
    marker: "bg-[var(--color-primary)]",
  },
};

export default function StakeholderBlock({ role, question, variant = "finance", number }) {
  const style = blockStyles[variant] || blockStyles.finance;

  return (
    <article
      tabIndex={0}
      className={`
        group relative overflow-hidden border p-6 sm:p-7 lg:p-8
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_18px_45px_rgba(31,31,37,0.08)]
        focus:outline-none focus-visible:-translate-y-1 focus-visible:border-[var(--color-primary)]
        focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
        ${style.shell}
      `}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gray-100"
      />
      <div
        aria-hidden="true"
        className={`absolute left-0 top-0 h-[3px] w-12 transition-all duration-300 group-hover:w-24 group-focus-visible:w-24 ${style.marker}`}
      />

      <div
        aria-hidden="true"
        className="absolute right-4 top-4 text-5xl sm:text-6xl font-bold leading-none text-current opacity-[0.045]"
      >
        {number}
      </div>

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div>
          <span
            className={`inline-flex px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] ${style.role}`}
          >
            {role}
          </span>
        </div>

        <p className={`font-heading font-bold leading-snug text-balance ${style.question}`}>
          &ldquo;{question}&rdquo;
        </p>
      </div>
    </article>
  );
}
