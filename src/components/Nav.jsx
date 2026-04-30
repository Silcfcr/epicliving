import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <nav aria-label="Site" className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoMark}>ELA</span>
        <span className={styles.logoFull}>Epic Living Adventures</span>
      </Link>

      <div id="nav-links" className={`${styles.links} ${open ? styles.open : ''}`}>
        <Link to="/" className={styles.link} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/expeditions" className={styles.link} onClick={() => setOpen(false)}>Expeditions</Link>
        <a href="/#contact" className={styles.link} onClick={() => setOpen(false)}>Contact</a>
        <a href="mailto:silvi.casfer@gmail.com" className={styles.cta}>Get in touch</a>
      </div>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="nav-links">
        <span className={open ? styles.burgerLineOpen : styles.burgerLine} />
        <span className={open ? styles.burgerLineOpen2 : styles.burgerLine} />
      </button>
    </nav>
  )
}
