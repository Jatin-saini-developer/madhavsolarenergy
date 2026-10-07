import Container from '../components/Container';
import { trustPoints } from '../data/content';

export default function TrustReinforcement() {
  return (
    <section
      id="trust"
      className="py-12 sm:py-16 bg-white border-t border-b border-gray-100 overflow-hidden"
    >
      <Container>

        {/* Compact heading */}
        <p className="text-sm sm:text-base font-semibold text-[var(--color-dark)] text-center mb-8 sm:mb-10">
          Built for the Questions Behind the Investment.
        </p>

        {/* 4-column trust grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPoints.map((tp) => (
            <div key={tp.id} className="flex flex-col gap-2">
              <div className="w-6 h-0.5 bg-[var(--color-primary)] mb-1" aria-hidden="true" />
              <h3 className="text-sm font-bold text-[var(--color-dark)] tracking-wide">{tp.title}</h3>
              <p className="text-sm text-[var(--color-gray)] leading-relaxed">{tp.body}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
