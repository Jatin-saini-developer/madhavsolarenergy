export default function SectionHeading({ title, subtitle, align = "left", className = "" }) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "";

  return (
    <div className={`max-w-3xl flex flex-col ${alignClass} ${className}`}>
      <h2 className="fluid-h2 font-bold tracking-tight text-balance text-[var(--color-dark)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="fluid-body text-[var(--color-gray)] max-w-2xl text-balance leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
