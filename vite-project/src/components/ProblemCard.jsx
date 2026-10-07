export default function ProblemCard({ title, description, iconPath }) {
  return (
    /*
     * Mobile: full-width card, horizontal icon+title row, description below
     * Tablet+: vertical card with icon above
     * All: generous touch-friendly padding, no overflow
     */
    <div className="
      group relative bg-white border border-gray-100
      flex flex-row sm:flex-col
      gap-4 sm:gap-0
      p-5 sm:p-7 lg:p-8
      hover:border-[var(--color-primary)]
      transition-all duration-300 hover:shadow-md
      overflow-hidden
    ">
      {/* Hover accent fill */}
      <div className="
        absolute inset-0 bg-[var(--color-primary)] opacity-0
        group-hover:opacity-[0.025] transition-opacity duration-300 pointer-events-none
      " />

      {/* Icon */}
      <div className="
        flex-shrink-0
        w-11 h-11 sm:w-12 sm:h-12 sm:mb-5
        flex items-center justify-center
        bg-[var(--color-gray-light)] text-[var(--color-primary)]
        group-hover:bg-[var(--color-primary)] group-hover:text-white
        transition-colors duration-300
        rounded-sm
      ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22" height="22"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={iconPath} />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center sm:flex-grow">
        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-[var(--color-dark)]">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[var(--color-gray)] leading-relaxed">
          {description}
        </p>
        {/* Accent rule — only visible on tablet+ vertical layout */}
        <div className="
          hidden sm:block
          w-8 h-0.5 bg-gray-200 mt-6
          group-hover:bg-[var(--color-primary)] transition-colors duration-300
        " />
      </div>
    </div>
  );
}
