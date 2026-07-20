import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiBriefcase, FiArrowUpRight } from 'react-icons/fi'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Growwpark Technologies Pvt. Ltd.',
    location: 'Hosur',
    period: 'Dec 2025 – Present',
    type: 'Full-time',
    color: '#0ea5e9',
    current: true,
    highlights: ['10+ Client Projects Delivered', 'React,HTML,JS & Tailwind Stack'],
    description: [
      'Design and develop responsive, user-friendly web interfaces across multiple client projects using HTML, React, JavaScript, and Tailwind CSS.',
      'Build reusable, component-based UI elements that accelerate development and maintain visual consistency.',
    ],
    tags: ['React.js', 'JavaScript', 'HTML', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'Web Design Intern',
    company: 'Nextbrain Technologies Pvt. Ltd.',
    location: 'Bangalore',
    period: 'Jul 2023',
    type: 'Internship',
    color: '#6366f1',
    current: false,
    highlights: ['Foundational Web Skills', 'HTML & CSS'],
    description: [
      'Built foundational web pages using HTML and CSS with responsive layouts.',
      'Strengthened understanding of structuring and styling web content for enhanced user experience.',
    ],
    tags: ['HTML', 'CSS', 'Responsive Design'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Experience</h2>
          <p className="c-muted mt-6 max-w-xl mx-auto">My professional journey building real-world applications</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => {
            return (
              <motion.div key={exp.role}
                className="relative group"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}>

                {/* Glow effect behind card */}
                <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `radial-gradient(ellipse at center, ${exp.color}12 0%, transparent 70%)` }} />

                <div className="relative glass-card rounded-2xl overflow-hidden border border-transparent hover:border-primary/10 transition-all duration-500">

                  {/* Top accent bar */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${exp.color}, ${exp.color}44, transparent)` }} />

                  <div className="relative p-6 md:p-8">
                    {/* Large background company name */}
                    <div className="absolute top-16 right-6 select-none pointer-events-none opacity-[0.04] dark:opacity-[0.06]">
                      <span className="text-6xl md:text-8xl font-black c-heading whitespace-nowrap tracking-tighter">
                        {exp.company.split(' ')[0]}
                      </span>
                    </div>

                    {/* Header row */}
                    <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                      <div className="flex items-start gap-4">
                        {/* Icon container */}
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 relative"
                          style={{ backgroundColor: `${exp.color}12`, border: `1px solid ${exp.color}25` }}>
                          <FiBriefcase size={24} style={{ color: exp.color }} />
                          {exp.current && (
                            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2"
                              style={{ borderColor: 'var(--bg)', backgroundColor: exp.color, boxShadow: `0 0 10px ${exp.color}80` }} />
                          )}
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-bold c-heading group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold border"
                            style={{ backgroundColor: `${exp.color}15`, color: exp.color, borderColor: `${exp.color}30` }}>
                            Current
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full text-xs font-medium c-tag">{exp.type}</span>
                      </div>
                    </div>

                    {/* Meta row */}
                    <div className="relative flex flex-wrap gap-4 text-xs c-muted mb-5">
                      <span className="flex items-center gap-1.5"><FiCalendar size={13} /> {exp.period}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={13} /> {exp.location}</span>
                    </div>

                    {/* Highlight pills */}
                    <div className="relative flex flex-wrap gap-2 mb-5">
                      {exp.highlights.map((h, j) => (
                        <span key={j} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                          style={{ backgroundColor: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}20` }}>
                          <FiArrowUpRight size={12} /> {h}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="relative pt-4 border-t c-border-subtle">
                      <ul className="space-y-3 mb-5">
                        {exp.description.map((desc, j) => (
                          <li key={j} className="c-body text-sm leading-relaxed flex gap-2.5">
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 c-tag rounded-md text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary stat */}
        <motion.div className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}>
          <div className="flex items-center gap-8 glass-card rounded-2xl px-8 py-5">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">2+</p>
              <p className="text-xs c-muted mt-0.5">Experiences</p>
            </div>
            <div className="w-px h-10 c-border-subtle" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: '#6366f1' }}>3+</p>
              <p className="text-xs c-muted mt-0.5">Projects Built</p>
            </div>
            <div className="w-px h-10 c-border-subtle" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: '#06b6d4' }}>2+</p>
              <p className="text-xs c-muted mt-0.5">Years Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
