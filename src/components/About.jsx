import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiMapPin, FiHeart, FiCompass,
} from 'react-icons/fi'

const stats = [
  { value: 6, suffix: '+', label: 'Certifications', color: '#0ea5e9' },
  { value: 4, suffix: '+', label: 'Projects', color: '#6366f1' },
  { value: 10, suffix: '+', label: 'Technologies', color: '#8b5cf6' },
]

const approach = [
  { step: '01', label: 'Plan', desc: 'Research, sketch, and architect the right solution' },
  { step: '02', label: 'Build', desc: 'Write clean, modular, and maintainable code' },
  { step: '03', label: 'Test', desc: 'Validate functionality, performance, and accessibility' },
  { step: '04', label: 'Iterate', desc: 'Refine based on feedback and real-world usage' },
]

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [inView, target])

  return <span>{count}{suffix}</span>
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">About Me</h2>
        </motion.div>

        {/* ═══ Bento Grid ═══ */}
        <div className="bento-grid">
          {/* ── Profile Card (left, spans full height) ── */}
          <motion.div
            className="bento-profile"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-7 h-full relative overflow-hidden flex flex-col">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl" style={{ background: 'var(--hero-blur1)' }} />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl" style={{ background: 'var(--hero-blur2)' }} />

              <div className="relative flex-1 flex flex-col">
                {/* Avatar */}
                <div className="relative w-20 h-20 mb-5">
                  <div className="absolute inset-0 rounded-2xl animate-spin-slow" style={{
                    background: 'conic-gradient(from 0deg, #0ea5e9, #6366f1, #06b6d4, #0ea5e9)',
                    padding: '2px',
                  }}>
                    <div className="w-full h-full rounded-2xl" style={{ background: 'var(--card-solid)' }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary/30">
                      SP
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold c-heading mb-1">Sathiya Priya S</h3>
                <p className="gradient-text font-semibold text-sm mb-3">Frontend & Full Stack Developer</p>

                <p className="c-body text-sm leading-relaxed mb-4 flex-1">
                  I build clean, performant web applications with a focus on user experience.
                  Passionate about turning complex problems into elegant solutions.
                </p>

                <div className="flex items-center gap-1.5 c-muted text-xs font-mono">
                  <FiMapPin size={11} />
                  <span>Bargur, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Stats (center column, stacked) ── */}
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bento-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-5 h-full flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${stat.color}08 0%, transparent 70%)` }} />
                <p className="text-3xl md:text-4xl font-bold mb-1 relative" style={{ color: stat.color }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="c-muted text-xs font-medium relative">{stat.label}</p>
              </div>
            </motion.div>
          ))}

          {/* ── My Approach (right, spans full height) ── */}
          <motion.div
            className="bento-quote"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-7 h-full relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-40" style={{ background: 'var(--hero-blur3)' }} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FiCompass size={14} className="text-primary" />
                  </div>
                  <span className="c-muted text-xs font-semibold uppercase tracking-wider">My approach</span>
                </div>

                <div className="space-y-4">
                  {approach.map(({ step, label, desc }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-xs font-bold gradient-text mt-0.5 shrink-0 w-6">{step}</span>
                      <div>
                        <p className="c-heading text-sm font-bold group-hover:text-primary transition-colors duration-300">{label}</p>
                        <p className="c-muted text-[11px] leading-snug">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── What Drives Me (full width bottom) ── */}
          <motion.div
            className="bento-capabilities"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-7 h-full relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30" style={{ background: 'var(--hero-blur3)' }} />

              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <FiHeart size={14} className="text-secondary" />
                  </div>
                  <span className="c-muted text-xs font-semibold uppercase tracking-wider">What drives me</span>
                </div>
                <blockquote className="text-base md:text-lg font-bold c-heading leading-snug">
                  "I believe great software is built at the intersection of
                  <span className="gradient-text"> clean code </span>
                  and
                  <span className="gradient-text"> thoughtful design</span>."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ Bento Grid Styles ═══ */}
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          gap: 1rem;
          min-height: 420px;
        }
        .bento-profile     { grid-column: 1; grid-row: 1 / 4; }
        .bento-stat:nth-child(2) { grid-column: 2; grid-row: 1; }
        .bento-stat:nth-child(3) { grid-column: 2; grid-row: 2; }
        .bento-stat:nth-child(4) { grid-column: 2; grid-row: 3; }
        .bento-quote       { grid-column: 3; grid-row: 1 / 4; }
        .bento-capabilities { grid-column: 1 / -1; }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            min-height: unset;
          }
          .bento-profile      { grid-column: 1 / -1; grid-row: auto; }
          .bento-stat:nth-child(2) { grid-column: 1; grid-row: auto; }
          .bento-stat:nth-child(3) { grid-column: 2; grid-row: auto; }
          .bento-stat:nth-child(4) { grid-column: 1 / -1; grid-row: auto; }
          .bento-quote       { grid-column: 1 / -1; grid-row: auto; }
          .bento-capabilities { grid-column: 1 / -1; grid-row: auto; }
        }

        @media (max-width: 480px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-stat:nth-child(n+2) { grid-column: 1; }
        }
      `}</style>
    </section>
  )
}
