import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

          <motion.div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}>

            <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center glass-card"
                  style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                  <project.icon size={44} style={{ color: project.color }} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
              <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all z-10"><FiX size={20} /></button>
              {project.image && <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />}
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: project.color }}>{project.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl font-bold c-heading mb-4">{project.title}</h2>

              <div className="mb-6">
                <h4 className="text-sm font-semibold c-heading uppercase tracking-wider mb-3">Overview</h4>
                <p className="c-body leading-relaxed">{project.description}</p>
              </div>

              {project.detailedDescription && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold c-heading uppercase tracking-wider mb-3">How I Built It</h4>
                  <div className="space-y-3">
                    {project.detailedDescription.map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                          style={{ backgroundColor: `${project.color}20`, color: project.color }}>{i + 1}</div>
                        <p className="c-body text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-semibold c-heading uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>{tag}</span>
                  ))}
                </div>
              </div>

              {project.features && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold c-heading uppercase tracking-wider mb-3">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm c-body">
                        <FiCheckCircle size={14} style={{ color: project.color }} />{feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold c-heading uppercase tracking-wider mb-3">Challenges & Solutions</h4>
                  <p className="c-body text-sm leading-relaxed">{project.challenges}</p>
                </div>
              )}

              <div className="mb-6 glass-card rounded-xl p-4 border border-dashed c-border">
                <p className="c-muted text-xs text-center">
                  Add your project screenshot at <code className="text-primary font-mono">public/projects/{project.id}.png</code> to display it here
                </p>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 c-tag border c-border rounded-xl c-heading text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all">
                    <FiGithub size={16} /> Source Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all"
                    style={{ backgroundColor: project.color }}>
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
