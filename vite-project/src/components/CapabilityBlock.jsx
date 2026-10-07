/**
 * CapabilityBlock — a single capability/pillar for the Why Madhav section.
 *
 * Renders as a numbered block with title + description, separated by
 * a top border rule. The large index number provides visual hierarchy
 * and anchors the eye; on hover the number tints green for subtle feedback.
 *
 * Props:
 *   index       – 0-based index (used to generate "01", "02", etc.)
 *   title       – capability name ("Engineering", "Execution", etc.)
 *   description – one-line supporting copy
 */
export default function CapabilityBlock({ index, title, description }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative pt-7 sm:pt-8">
      {/* Top accent rule — grows on hover */}
      <div
        aria-hidden="true"
        className="
          absolute top-0 left-0
          h-[2px] w-8
          bg-gray-200
          group-hover:w-14 group-hover:bg-[var(--color-primary)]
          transition-all duration-500 ease-out
        "
      />

      {/* Large index number */}
      <span
        className="
          block text-4xl sm:text-5xl lg:text-6xl
          font-bold tabular-nums leading-none select-none
          text-gray-100
          group-hover:text-[var(--color-primary)]/15
          transition-colors duration-500
          mb-4 sm:mb-5
        "
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-[var(--color-dark)] tracking-tight mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[0.9375rem] text-[var(--color-gray)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
