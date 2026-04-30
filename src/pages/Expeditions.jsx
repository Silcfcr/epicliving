import { Link } from 'react-router-dom'
import { expeditions } from '../data/expeditions'
import styles from './Expeditions.module.css'

export default function Expeditions() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerBg} />
        <div className={styles.headerContent}>
          <div className={styles.eyebrow}>Field Journals</div>
          <h1 className={styles.title}>Expeditions</h1>
          <p className={styles.subtitle} />
        </div>
      </header>

      <section className={styles.list}>
        {expeditions.map((exp, i) => (
          <Link key={exp.slug} to={`/expeditions/${exp.slug}`} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={exp.image} alt={exp.title} loading={i === 0 ? 'eager' : 'lazy'} />
              <div className={styles.cardImageOverlay} />
              <span className={styles.cardYear}>{exp.year}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTags}>
                {exp.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <h2 className={styles.cardTitle}>{exp.title}</h2>
              <p className={styles.cardSubtitle}>{exp.subtitle}</p>
              <div className={styles.cardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Distance</span>
                  <span className={styles.metaValue}>{exp.distance}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>{exp.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Support</span>
                  <span className={styles.metaValue}>{exp.support}</span>
                </div>
              </div>
              <p className={styles.cardSignificance}>{exp.significance}</p>
              <span className={styles.cardReadMore}>Read journal →</span>
            </div>
          </Link>
        ))}
      </section>

      <div className={styles.backHome}>
        <Link to="/">← Back to home</Link>
      </div>
    </main>
  )
}
