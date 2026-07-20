import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBookOpen, FiMic, FiStar, FiCalendar } from 'react-icons/fi'

const presentations = [
  {
    title: 'InterCollege Symposium EUREKHA 2K21',
    event: 'Paper Presentation',
    result: '1st Place',
    place: 1,
    college: 'PMC TECH',
    year: '2021',
    color: '#f59e0b',
    icon: FiAward,
    description: 'Secured first place in paper presentation at EUREKHA, a prestigious inter-college symposium hosted by PMC TECH.',
  },
  {
    title: 'Science Club Event 2K21',
    event: 'Paper Presentation',
    result: '1st Place',
    place: 1,
    college: 'PMC TECH',
    year: '2021',
    color: '#f59e0b',
    icon: FiStar,
    description: 'Won first place in the paper presentation at the Science Club Event, demonstrating strong research and communication skills.',
  },
  {
    title: 'InterCollege Symposium Events',
    event: 'Paper Presentations',
    result: '2nd Place & Participation',
    place: 2,
    college: 'PSV College, MGR College, Podhigai College',
    year: '2021',
    color: '#6366f1',
    icon: FiMic,
    details: [
      { result: '2nd Place', college: 'PSV College' },
      { result: 'Participation', college: 'MGR College' },
      { result: 'Participation', college: 'Podhigai College' },
    ],
    description: 'Presented papers at multiple inter-college symposiums, earning 2nd place at PSV College and gaining valuable experience at MGR and Podhigai Colleges.',
  },
  {
    title: 'National Conference TECHSYNERGY 2025',
    event: 'Project Paper Presentation',
    result: 'Participant',
    place: 3,
    college: 'PMC TECH',
    year: '2025',
    color: '#06b6d4',
    icon: FiBookOpen,
    description: 'Presented the MINDSCAPE AI/ML project paper at the national-level conference TECHSYNERGY 2025, sharing research on mental health analysis using social media and wearable data.',
  },
]

function getMedalGradient(place) {
  if (place === 1) return 'from-amber-400/30 to-yellow-500/30'
  if (place === 2) return 'from-gray-300/20 to-gray-400/20'
  return 'from-cyan-400/20 to-teal-500/20'
}

export default function Presentations() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="presentations" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Presentations</h2>
          <p className="c-muted mt-6 max-w-xl mx-auto">Academic achievements and paper presentations across symposiums and national conferences</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-purple-500/50 to-cyan-500/50 md:-translate-x-px" />

          {presentations.map((pres, i) => (
            <motion.div key={pres.title}
              className={`relative mb-12 last:mb-0 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-[calc(50%+30px)]' : 'md:pl-[calc(50%+30px)]'}`}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.2 }}>

              <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-2 md:-translate-x-1/2 z-10 flex items-center justify-center"
                style={{ borderColor: pres.color, backgroundColor: 'var(--bg)', boxShadow: `0 0 24px ${pres.color}50` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pres.color }} />
              </div>

              <div className={`glass-card rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 group`}>
                <div className={`h-1.5 bg-gradient-to-r ${getMedalGradient(pres.place)}`} />

                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${pres.color}15`, border: `1px solid ${pres.color}30` }}>
                        <pres.icon size={22} style={{ color: pres.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold c-heading group-hover:text-primary transition-colors">{pres.title}</h3>
                        <p className="text-sm font-medium mt-0.5" style={{ color: pres.color }}>{pres.event}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {pres.place === 1 && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                          <FiAward size={12} /> 1st Place
                        </span>
                      )}
                      {pres.place === 2 && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center gap-1">
                          <FiAward size={12} /> 2nd Place
                        </span>
                      )}
                      {pres.place === 3 && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                          <FiBookOpen size={12} /> National Level
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs c-muted mb-4">
                    <span className="flex items-center gap-1.5"><FiCalendar size={12} /> {pres.year}</span>
                    <span className="flex items-center gap-1.5">📍 {pres.college}</span>
                  </div>

                  <p className="c-body text-sm leading-relaxed mb-4">{pres.description}</p>

                  {pres.details && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pres.details.map((d, j) => (
                        <span key={j} className="px-2.5 py-1 c-tag rounded-md text-xs font-medium">
                          {d.result} — {d.college}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
