export default function ValueCard({ title, description, iconPath }) {
  return (
    <div className="
      flex gap-4
      items-start
      p-5 sm:p-6
      bg-white border border-gray-100
      hover:border-gray-300
      transition-all duration-300 hover:shadow-sm
      rounded-sm
    ">
      {/* Icon */}
      <div className="
        flex-shrink-0
        w-10 h-10 mt-0.5
        flex items-center justify-center
        rounded-full
        bg-[var(--color-primary)]/10 text-[var(--color-primary)]
      ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={iconPath} />
        </svg>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h4 className="text-base sm:text-lg font-bold mb-1 text-[var(--color-dark)] leading-snug">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-[var(--color-gray)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
