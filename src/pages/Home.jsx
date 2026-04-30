import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { expeditions, disciplines } from '../data/expeditions'
import { asset } from '../utils/asset'
import styles from './Home.module.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

export default function Home() {
  const [storyRef, storyInView] = useInView(0.1)
  const [statsRef, statsInView] = useInView(0.2)
  const [disciplinesRef, disciplinesInView] = useInView(0.1)
  const [expeditionsRef, expeditionsInView] = useInView(0.1)
  const [credentialsRef, credentialsInView] = useInView(0.2)
  const [contactRef, contactInView] = useInView(0.2)

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src={asset('pictures/hero.mp4')}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine1}>Epic Living</span>
            <span className={styles.heroLine2}>Adventures</span>
          </h1>
          <p className={styles.heroTagline}>
            "I found freedom at age six.<br />I've been expanding the definition ever since."
          </p>
          <div className={styles.heroMeta}>
            <span>Silvia Castro Fernandez</span>
            <span className={styles.heroDot} aria-hidden="true">·</span>
            <span>Costa Rica</span>
            <span className={styles.heroDot} aria-hidden="true">·</span>
            <span>Available Globally</span>
          </div>
          <div className={styles.heroActions}>
            <a href="#story" className={styles.heroPrimary}>Read the story</a>
            <a href="mailto:silvi.casfer@gmail.com" className={styles.heroSecondary}>Get in touch</a>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={`${styles.stats} ${statsInView ? styles.visible : ''}`} ref={statsRef}>
        <div className={styles.statsInner}>
          {[
            { value: '7', label: 'Disciplines' },
            { value: '3', label: 'Continents' },
            { value: '3,420+', label: 'Expedition km' },
            { value: '7', label: 'Years Paragliding' },
            { value: '10km', label: 'Open Water Win' },
            { value: '2', label: 'Languages' },
          ].map((stat, i) => (
            <div key={stat.label} className={styles.stat} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className={`${styles.story} ${storyInView ? styles.visible : ''}`} ref={storyRef}>
        <div className={styles.storyInner}>
          <div className={styles.storyLeft}>
            <div className={styles.storyLabel}>The Story</div>
            <h2 className={styles.storyHeading}>
              I remember the first time I rode a bicycle by myself — my dad let go when I found my balance...
            </h2>
          </div>

          <div className={styles.storyRight}>
            <div className={styles.storyText}>
              <p className={styles.storyPara}>
                Suddenly there was wind in my face and nobody holding the back of the seat, and I felt
                something I didn’t have a word for yet. I was six years old. I didn’t know then that I would
                spend the rest of my life chasing that exact feeling — and that I would take it further than
                either of us imagined.
              </p>
              <p className={styles.storyPara}>
                Sport found me early and never let go. I grew up in a children’s triathlon group, where I learned to swim, bike, and run — and learned fearlessness along the way.
                By eleven, I was competing on Costa Rica’s national swimming team, racing across Latin America.

                Swimming became both discipline and direction: it funded my university education through a scholarship, where I continued to compete internationally.

                On the waters of Papagayo Bay, a beach close to my hometown I swam 10 kilometres across the peninsula and crossed the finish
                line first - a final race that marked the end of my years as a competitive swimmer.
              </p>
              <p className={styles.storyPara}>
                After graduating, I returned to triathlon — this time long-distance. Then came cycling. Then the sky.
              </p>
              <p className={styles.storyPara}>
                For the past seven years, I’ve been a paraglider pilot — APPI licensed, with SIV training in Ölüdeniz, Turkey — flying across Colombia, North Macedonia, Nepal, and Costa Rica. But the air was only part of it.

                On the ground, I kept moving. In 2020, I set off alone from Lisbon and cycled to Santiago de Compostela, my first long-distance expedition. That journey grew into others — across Europe in 2025, from Skopje to Vienna along EuroVelo 8 and 11, 1,350 kilometres, fully self-supported, wild camping each night.

                In 2026, I crossed Vietnam from Hanoi to Ho Chi Minh City — this time not alone, but with the man who once pushed my bike.

                Back in the water, somewhere along the way, I learned to kitesurf in the Red Sea, certified as an IKO independent rider.
                I also started scuba diving, certified as a PADI advanced open water diver.

              </p>
              <p className={styles.storyPara}>
                What I do can seem unexpected. To me, it’s always felt natural — just following what pulls me forward. I didn’t have a name for it at six. Now I do: freedom.
              </p>
              <p className={styles.storyPullQuote}>
                "The story is always better from inside the adventure. Let me be part of yours."
              </p>
            </div>
          </div>
        </div>

        <div className={styles.storyImageGrid}>
          <div className={styles.storyImgWrap} style={{ '--delay': '0s' }}>
            <img src={asset('pictures/cyclingAsKid.JPG')} alt="Young Silvia cycling with her father" loading="lazy" />
            <span className={styles.storyImgCaption}>Age 7 · My first mountain biking race</span>
          </div>
          <div className={styles.storyImgWrap} style={{ '--delay': '0.15s' }}>
            <img src={asset('pictures/meAsTriathlete.JPG')} alt="Silvia as triathlete" loading="lazy" />
            <span className={styles.storyImgCaption}>2019 · First Long Distance Triathlon</span>
          </div>
          <div className={styles.storyImgWrap} style={{ '--delay': '0.3s' }}>
            <img src={asset('pictures/meInParaglidingPodium.jpg')} alt="Paragliding podium" loading="lazy" />
            <span className={styles.storyImgCaption}>Paragliding Competition 2025 · Best Costa Rican Female Pilot</span>
          </div>
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section className={`${styles.disciplinesSection} ${disciplinesInView ? styles.visible : ''}`} ref={disciplinesRef}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Disciplines</div>
          <h2 className={styles.sectionTitle}>Multi-sport. Multi-continent.<br />Fully certified.</h2>
        </div>

        <div className={styles.disciplinesGrid}>
          {disciplines.map((d, i) => (
            <div key={d.name} className={styles.disciplineCard} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.disciplineImg}>
                <img src={d.image} alt={d.name} loading="lazy" />
                <div className={styles.disciplineImgOverlay} />
              </div>
              <div className={styles.disciplineBody}>
                <div className={styles.disciplineLabel}>{d.label}</div>
                <h3 className={styles.disciplineName}>{d.name}</h3>
                <p className={styles.disciplineCredential}>{d.credential}</p>
                <p className={styles.disciplineDetail}>{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPEDITIONS ── */}
      <section className={`${styles.expeditionsSection} ${expeditionsInView ? styles.visible : ''}`} ref={expeditionsRef}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Expeditions</div>
          <h2 className={styles.sectionTitle}>From the field.</h2>
        </div>

        <div className={styles.expeditionsList}>
          {expeditions.map((exp, i) => (
            <Link
              key={exp.slug}
              to={`/expeditions/${exp.slug}`}
              className={styles.expeditionRow}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.expYear}>{exp.year}</div>
              <div className={styles.expContent}>
                <h3 className={styles.expTitle}>{exp.title}</h3>
                <p className={styles.expSubtitle}>{exp.subtitle}</p>
                <div className={styles.expMeta}>
                  <span>{exp.distance}</span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.support}</span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.country}</span>
                </div>
              </div>
              <div className={styles.expImage}>
                <img src={exp.image} alt={exp.title} loading="lazy" />
              </div>
              <div className={styles.expArrow} aria-hidden="true">→</div>
            </Link>
          ))}
        </div>

        <div className={styles.expeditionsFooter}>
          <Link to="/expeditions" className={styles.expeditionsAll}>
            View all expeditions →
          </Link>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className={`${styles.credentialsSection} ${credentialsInView ? styles.visible : ''}`} ref={credentialsRef}>
        <div className={styles.credentialsInner}>
          <div className={styles.credLeft}>
            <div className={styles.sectionLabel}>Credentials</div>
            <h2 className={styles.sectionTitle}>Not just spirit.<br />Certified skill.</h2>
          </div>

          <div className={styles.credRight}>
            {[
              { cert: 'APPI Level 3 Paragliding Pilot License', note: 'Association of Paragliding Pilots & Instructors' },
              { cert: 'SIV Training Completed', note: 'Ölüdeniz, Turkey' },
              { cert: 'IKO Independent Rider — Kitesurfing', note: 'International Kiteboarding Organization' },
              { cert: 'PADI Advanced Open Water Diver', note: 'Certified to 30 metres' },
              { cert: 'Costa Rican National Swimming Team', note: 'Competed age 11 – university' },

            ].map((item, i) => (
              <div key={item.cert} className={styles.credItem} style={{ animationDelay: `${i * 0.07}s` }}>
                <span className={styles.credAccent} aria-hidden="true">—</span>
                <div>
                  <div className={styles.credCert}>{item.cert}</div>
                  <div className={styles.credNote}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={`${styles.contact} ${contactInView ? styles.visible : ''}`} ref={contactRef}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <div className={styles.sectionLabel}>Contact</div>
            <h2 className={styles.contactHeading}>
              Put me in the field.
            </h2>
            <p className={styles.contactBody}>
              Available for field work, expedition reporting, athlete interviews,
              and brand partnerships. Bilingual — Spanish / English.
              Based in Costa Rica, available globally.
            </p>
            <div className={styles.contactTags}>
              <span>Expedition Operators</span>
              <span>Athletic Brands</span>
              <span>Adventure Media</span>
            </div>
          </div>

          <div className={styles.contactRight}>
            <a href="mailto:silvi.casfer@gmail.com" className={styles.contactEmail}>
              <span className={styles.contactEmailLabel}>Email</span>
              <span className={styles.contactEmailAddress}>silvi.casfer@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/silcf.cr" target="_blank" rel="noreferrer" className={styles.contactEmail}>
              <span className={styles.contactEmailLabel}>Instagram</span>
              <span className={styles.contactEmailAddress}>@silcf.cr</span>
            </a>
            <div className={styles.contactEmail}>
              <span className={styles.contactEmailLabel}>Location</span>
              <span className={styles.contactEmailAddress}>Costa Rica · Available Globally</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span>© 2026 Epic Living Adventures · Silvia Castro Fernandez</span>
        <span className={styles.footerAccent}>Costa Rica</span>
      </footer>
    </main>
  )
}
