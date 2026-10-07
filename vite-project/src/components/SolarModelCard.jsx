/**
 * SolarModelCard — a single solar model block for the decision-framework grid.
 *
 * Layout:
 *   Mobile:  vertical card — image top, text below
 *   Desktop: vertical card inside a 2×2 grid — image fills top half, text below
 *
 * The image slot renders a structured placeholder when `image` is null.
 * Drop in a real <img> by setting the `image` prop to an imported asset.
 */
export default function SolarModelCard({
  index,
  microLabel,
  title,
  description,
  suitedFor,
  image,
  imageAlt,
}) {
  return (
    <article
      className="
        group relative
        bg-[#16161d]
        flex flex-col
        overflow-hidden
        border border-white/[0.06]
        hover:border-white/[0.15]
        transition-all duration-500
        cursor-default
      "
    >
      {/* ── Image slot ──────────────────────────────────────────────── */}
      <div className="relative w-full h-44 sm:h-52 lg:h-56 overflow-hidden bg-[#0e0e14] flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="
              w-full h-full object-cover object-center
              group-hover:scale-105
              transition-transform duration-700 ease-out
            "
          />
        ) : (
          /* ── Placeholder ────────────────────────────────────────── */
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            {/* Technical grid pattern — subtle */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #4AAB3D 1px, transparent 1px), linear-gradient(to bottom, #4AAB3D 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white/15 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-white/15 text-[0.6rem] tracking-[0.2em] uppercase font-semibold">
              TODO: {imageAlt}
            </span>
          </div>
        )}

        {/* ── Index badge — top-left ──────────────────────────────── */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[0.6rem] font-bold tracking-[0.25em] text-[var(--color-primary)] tabular-nums">
            {index}
          </span>
        </div>

        {/* ── Gradient scrim on bottom of image for text readability ── */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#16161d] to-transparent"
        />
      </div>

      {/* ── Text content ────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col p-6 sm:p-7 lg:p-8">
        {/* Micro-label */}
        <span className="text-[0.55rem] sm:text-[0.6rem] font-bold tracking-[0.22em] text-[var(--color-primary)] uppercase mb-3">
          {microLabel}
        </span>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-[0.9375rem] text-gray-400 leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {/* Suited-for bullets */}
        <ul className="space-y-1.5" aria-label={`${title} — suited for`}>
          {suitedFor.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-xs sm:text-[0.8125rem] text-gray-500"
            >
              <span
                className="w-1 h-1 rounded-full bg-[var(--color-primary)] flex-shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Hover accent line — desktop only */}
        <div
          aria-hidden="true"
          className="
            mt-6 h-px w-0
            bg-[var(--color-primary)]
            group-hover:w-12
            transition-all duration-500 ease-out
          "
        />
      </div>
    </article>
  );
}
