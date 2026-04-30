import { useParams, Link, Navigate } from 'react-router-dom'
import { expeditions } from '../data/expeditions'
import styles from './ExpeditionDetail.module.css'

export default function ExpeditionDetail() {
  const { slug } = useParams()
  const exp = expeditions.find(e => e.slug === slug)

  if (!exp) return <Navigate to="/expeditions" replace />

  const currentIndex = expeditions.findIndex(e => e.slug === slug)
  const next = expeditions[currentIndex + 1]
  const prev = expeditions[currentIndex - 1]

  return (
    <main className={styles.main}>
      {/* Hero */}
      <div className={styles.hero}>
        <img
          className={styles.heroImg}
          src={exp.image}
          alt=""
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <span className={styles.heroYear}>{exp.year}</span>
            <span className={styles.heroDivider} aria-hidden="true">·</span>
            <span className={styles.heroCountry}>{exp.country}</span>
          </div>
          <h1 className={styles.heroTitle}>{exp.title}</h1>
          <p className={styles.heroSubtitle}>{exp.subtitle}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatVal}>{exp.distance}</span>
              <span className={styles.heroStatLabel}>Distance</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatVal}>{exp.duration}</span>
              <span className={styles.heroStatLabel}>Duration</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatVal}>{exp.support}</span>
              <span className={styles.heroStatLabel}>Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className={styles.article}>
        <div className={styles.articleInner}>
          <div className={styles.tags}>
            {exp.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>

          <div className={styles.significance}>
            <p>{exp.significance}</p>
          </div>

          <div className={styles.body}>
            {exp.body.split('\n\n').map(para => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Navigation */}
      <nav aria-label="Expedition" className={styles.expNav}>
        <div className={styles.expNavInner}>
          {prev ? (
            <Link to={`/expeditions/${prev.slug}`} className={styles.expNavLink}>
              <span className={styles.expNavDir}>← Previous</span>
              <span className={styles.expNavTitle}>{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/expeditions/${next.slug}`} className={`${styles.expNavLink} ${styles.expNavLinkRight}`}>
              <span className={styles.expNavDir}>Next →</span>
              <span className={styles.expNavTitle}>{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>

      <div className={styles.back}>
        <Link to="/expeditions">← All expeditions</Link>
      </div>
    </main>
  )
}
