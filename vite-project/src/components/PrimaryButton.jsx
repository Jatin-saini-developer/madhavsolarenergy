/**
 * PrimaryButton — handles both <a> and <button> with full responsive touch support.
 *
 * Props:
 *   href        – renders as <a>, otherwise <button>
 *   secondary   – alternate style variant
 *   fullWidth   – makes button full-width on mobile (default false)
 *   size        – "sm" | "md" (default)
 *   className   – additional Tailwind classes
 */
export default function PrimaryButton({
  children,
  href,
  className = "",
  secondary = false,
  fullWidth = false,
  size = "md",
  onClick,
}) {
  const base = [
    // Layout
    "inline-flex items-center justify-center gap-2",
    // Touch target – minimum 44px height on all devices
    "min-h-[44px]",
    // Spacing
    size === "sm"
      ? "px-5 py-2.5 text-sm"
      : "px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base",
    // Typography
    "font-semibold leading-none tracking-wide",
    // Shape
    "rounded-sm",
    // Transition
    "transition-all duration-200 ease-in-out",
    // Focus ring – keyboard + screen reader accessible
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // Full width
    fullWidth ? "w-full" : "",
    // No text overflow
    "whitespace-nowrap",
  ].join(" ");

  const primary = [
    "bg-[var(--color-primary)] text-white",
    "hover:bg-[var(--color-dark)] active:bg-[var(--color-dark)]",
    "focus-visible:ring-[var(--color-primary)]",
  ].join(" ");

  const secondary_ = [
    "bg-transparent text-white",
    "border border-white/40",
    "hover:bg-white hover:text-[var(--color-dark)] hover:border-white",
    "active:bg-white/90",
    "focus-visible:ring-white",
  ].join(" ");

  const style = `${base} ${secondary ? secondary_ : primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={style}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={style}>
      {children}
    </button>
  );
}
