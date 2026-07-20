import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBookOpen, FiCheckCircle, FiX, FiExternalLink } from 'react-icons/fi'

const education = [
  { degree: 'B.E. Computer Science & Engineering', school: 'Er. Perumal Manimekalai College of Engineering, Hosur', university: 'Anna University', period: '2021 – 2025', score: 'CGPA: 8.81', color: '#0ea5e9' },
  { degree: 'HSC (Higher Secondary)', school: 'Selva Matric Higher Secondary School, Bargur', period: '2021', score: '93%', color: '#6366f1' },
  { degree: 'SSLC (Secondary)', school: "St. Paul's Matriculation School, Mallapadi", period: '2019', score: '93%', color: '#06b6d4' },
]

const certifications = [
  { name: 'Full Stack Development', org: 'NoviTech', color: '#0ea5e9', image: '/certifications/Full Stack Certificate.jpeg' },
  { name: 'Python and AI for India 2.0', org: 'GUVI', color: '#3776AB', image: '/certifications/AI for India 2.O Certificate.jpeg' },
  { name: 'Basics of Python', org: 'Infosys Springboard', color: '#6366f1', image: '/certifications/Python Certificate.jpeg' },
  { name: 'Elements of an AI Architect', org: 'Infosys Springboard', color: '#8b5cf6', image: '/certifications/Elements of AI Architect Certificate.jpeg' },
  { name: 'UI/UX Design', org: 'SimpliLearn', color: '#06b6d4', image: '/certifications/UIUX Design Certificate.jpeg' },
  { name: 'Microsoft Data Analytics', org: 'Infosys ICT Academy', color: '#f59e0b', image: '/certifications/data-analytics.jpg' },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="education" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Education & Certifications</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><FiBookOpen size={20} /></div>
              <h3 className="text-xl font-bold c-heading">Education</h3>
            </motion.div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div key={edu.degree} className="glass-card rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="c-heading font-semibold group-hover:text-primary transition-colors">{edu.degree}</h4>
                      <p className="c-body text-sm">{edu.school}</p>
                      {edu.university && <p className="c-muted text-xs">{edu.university}</p>}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}>{edu.score}</span>
                      <p className="c-muted text-xs mt-1">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary"><FiAward size={20} /></div>
              <h3 className="text-xl font-bold c-heading">Certifications</h3>
            </motion.div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div key={cert.name}
                  className="glass-card rounded-xl p-4 hover:border-primary/20 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  onClick={() => setSelectedCert(cert)}>
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cert.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="c-heading text-sm font-medium group-hover:text-primary transition-colors truncate">{cert.name}</p>
                    <p className="c-muted text-xs">{cert.org}</p>
                  </div>
                  <FiExternalLink size={14} className="text-primary/40 shrink-0 group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-3xl"
              onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close">
                <FiX size={28} />
              </button>
              <div className="text-center mb-4">
                <p className="text-white font-semibold text-lg">{selectedCert.name}</p>
                <p className="text-white/50 text-sm">{selectedCert.org}</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto block"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden flex-col items-center justify-center py-16 text-center" style={{ display: 'none' }}>
                  <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${selectedCert.color}20` }}>
                    <FiAward size={28} style={{ color: selectedCert.color }} />
                  </div>
                  <p className="c-heading font-semibold mb-1">Certificate not uploaded yet</p>
                  <p className="c-muted text-sm">Place your certificate image at:</p>
                  <code className="mt-2 px-3 py-1.5 rounded-lg text-xs font-mono" style={{ backgroundColor: `${selectedCert.color}15`, color: selectedCert.color }}>
                    public{selectedCert.image}
                  </code>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
