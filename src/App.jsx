import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechBand from './components/TechBand'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Page loader
function Loader({ onDone }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onAnimationComplete={onDone}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--dark)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          width: 60, height: 60,
          background: 'linear-gradient(135deg, var(--gold), var(--gold-dim))',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1rem',
        }}>
          <span style={{ fontFamily: 'Cormorant Garamond', fontWeight: 700, fontSize: '1.6rem', color: '#050505' }}>D</span>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: 'Space Mono', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}
        >Devcorex</motion.p>
      </motion.div>

      {/* Loading bar */}
      <div style={{ width: 200, height: 1, background: 'rgba(201,168,76,0.15)', overflow: 'hidden' }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))' }}
        />
      </div>
    </motion.div>
  )
}

import { useState } from 'react'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Cursor />
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <TechBand />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Team />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
