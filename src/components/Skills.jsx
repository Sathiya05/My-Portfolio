import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript, SiReact, SiTailwindcss, SiHtml5,
  SiPython, SiGit, SiFigma, SiWordpress,
  SiNodedotjs, SiExpress, SiMongodb,
} from 'react-icons/si'
import { FiDatabase, FiLayout, FiTool, FiPenTool, FiServer, FiCode } from 'react-icons/fi'

const skillCategories = [
  {
    id: 'frontend', title: 'Frontend', icon: FiLayout, color: '#0ea5e9',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    ],
  },
  {
    id: 'backend', title: 'Backend', icon: FiServer, color: '#6366f1',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#888' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'REST APIs', icon: FiDatabase, color: '#8B5CF6' },
    ],
  },
  {
    id: 'tools', title: 'Tools & Design', icon: FiPenTool, color: '#06b6d4',
    skills: [
      { name: 'Git & GitHub', icon: SiGit, color: '#F05032' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
      { name: 'VS Code', icon: FiTool, color: '#007ACC' },
    ],
  },
  {
    id: 'languages', title: 'Languages', icon: FiCode, color: '#8b5cf6',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'SQL', icon: FiDatabase, color: '#CC2927' },
      { name: 'CSS3', icon: FiLayout, color: '#1572B6' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeTab, setActiveTab] = useState('frontend')

  const active = skillCategories.find(c => c.id === activeTab)

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Technical Skills</h2>
          <p className="c-muted mt-6 max-w-xl mx-auto">Full Stack technologies I work with to build end-to-end solutions</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {skillCategories.map(cat => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={activeTab === cat.id
                ? { background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`, boxShadow: `0 8px 24px ${cat.color}30`, color: '#fff' }
                : { background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--heading)' }
              }>
              <cat.icon size={16} />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid — key forces full remount so SkillCard initial animation replays */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-[200px]">
          {active.skills.map((skill, i) => (
            <SkillCard key={`${activeTab}-${skill.name}`} skill={skill} index={i} />
          ))}
        </div>

        {/* Tech Stack Overview */}
        <motion.div className="mt-16" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
          <p className="c-muted text-center text-sm mb-6 font-medium">Tech Stack Overview</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: SiReact, name: 'React', color: '#61DAFB' },
              { icon: SiNodedotjs, name: 'Node', color: '#339933' },
              { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
              { icon: SiExpress, name: 'Express', color: '#888' },
              { icon: SiJavascript, name: 'JS', color: '#F7DF1E' },
              { icon: SiPython, name: 'Python', color: '#3776AB' },
              { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
              { icon: SiGit, name: 'Git', color: '#F05032' },
              { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
              { icon: SiHtml5, name: 'HTML', color: '#E34F26' },
              { icon: SiWordpress, name: 'WP', color: '#21759B' },
            ].map(({ icon: Icon, name, color }) => (
              <motion.div key={name} className="flex items-center gap-2 px-3 py-2 glass-card rounded-lg cursor-default" whileHover={{ scale: 1.1, y: -3 }}>
                <Icon size={18} style={{ color }} />
                <span className="c-heading text-xs font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practices */}
        <motion.div className="mt-10 flex flex-wrap justify-center gap-2" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}>
          {['Agile', 'Problem Solving', 'Cross-Functional Collaboration', 'UI/UX Best Practices', 'Component-Based Architecture'].map(p => (
            <span key={p} className="px-4 py-1.5 rounded-full text-xs font-medium c-heading c-border border transition-all hover:border-primary/30 hover:text-primary cursor-default">{p}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.06, y: -6 }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${skill.color}15 0%, transparent 70%)`, filter: 'blur(16px)' }} />
      <div className="relative glass-card rounded-2xl p-6 text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-xl opacity-15 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundColor: skill.color }} />
          <div className="relative w-full h-full rounded-xl flex items-center justify-center">
            <skill.icon size={30} style={{ color: skill.color }} />
          </div>
        </div>
        <p className="c-heading text-sm font-semibold">{skill.name}</p>
      </div>
    </motion.div>
  )
}
