import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ padding: '8rem 4rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'var(--accent)', lineHeight: 1 }}>
        404
      </h1>
      <p style={{ color: 'var(--text-mid)', marginTop: '1.5rem', fontSize: '1rem' }}>
        Page not found.
      </p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '2.5rem', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        ← Back to home
      </Link>
    </main>
  )
}
