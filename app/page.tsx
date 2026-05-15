import Image from 'next/image';

const features = [
  'Pipeline tracking',
  'Automated sequences',
  'AI-assisted follow-up',
  'Revenue analytics',
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Sticky lightweight header — logo only, links back to parent */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              priority
              style={{ height: 28, width: 'auto' }}
            />
            <span
              className="font-semibold text-base tracking-tight"
              style={{ color: 'var(--color-text-dark)' }}
            >
              Persistent Sales
            </span>
          </div>
          <a
            href="https://persistentmomentum.com"
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--color-text-dark-muted)' }}
          >
            persistentmomentum.com →
          </a>
        </div>
      </header>

      {/* Centered hero */}
      <section className="flex-1 px-6 py-24 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 mb-8"
            style={{
              color: 'var(--color-primary)',
              background: 'rgba(21,68,142,0.06)',
              border: '1px solid rgba(21,68,142,0.18)',
              borderRadius: '999px',
              letterSpacing: '0.12em',
            }}
          >
            Coming soon
          </span>

          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-[1.05]"
            style={{
              color: 'var(--color-text-dark)',
              letterSpacing: '-0.02em',
            }}
          >
            A modern sales workflow,
            <br />
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--color-text-dark-muted)',
              }}
            >
              for small teams.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ color: 'var(--color-text-dark-muted)' }}
          >
            Pipeline tracking, automated outreach, and AI-assisted follow-up —
            built on the same foundation as Persistent Recruiter. Currently in
            design at{' '}
            <a
              href="https://persistentmomentum.com"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              Persistent Momentum
            </a>
            .
          </p>

          {/* Feature pills */}
          <ul className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {features.map((f) => (
              <li
                key={f}
                className="text-sm font-medium px-3.5 py-1.5"
                style={{
                  color: 'var(--color-text-dark)',
                  background: 'var(--color-bg-light-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '999px',
                }}
              >
                {f}
              </li>
            ))}
          </ul>

          <a
            href="mailto:info@persistentmomentum.com?subject=Persistent%20Sales%20early%20access"
            className="inline-flex items-center justify-center gap-2 text-base font-semibold px-7 py-3.5 text-white transition-colors"
            style={{
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius)',
            }}
          >
            Email us for early access <span aria-hidden>→</span>
          </a>
          <p
            className="mt-4 text-sm"
            style={{ color: 'var(--color-text-dark-muted)' }}
          >
            info@persistentmomentum.com
          </p>
        </div>
      </section>

      {/* Sibling product link */}
      <section
        className="px-6 py-12"
        style={{
          background: 'var(--color-bg-light)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{
              color: 'var(--color-text-dark-muted)',
              letterSpacing: '0.12em',
            }}
          >
            Also from Persistent Momentum
          </p>
          <p
            className="text-base"
            style={{ color: 'var(--color-text-dark)' }}
          >
            <a
              href="https://recruiter.persistentmomentum.com"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              Persistent Recruiter
            </a>{' '}
            — recruiting software small teams actually use. Live today.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: 'var(--color-bg-light-secondary)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-dark-muted)' }}
          >
            &copy; {new Date().getFullYear()} Persistent Momentum &middot; All rights reserved
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-dark-muted)' }}
          >
            sales.persistentmomentum.com
          </p>
        </div>
      </footer>
    </main>
  );
}
