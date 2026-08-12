import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'
import RainbowTrail from './RainbowTrail'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <RainbowTrail />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-float" style={{ background: 'var(--hero-blur1)' }} />
        <div className="hero-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl animate-float" style={{ background: 'var(--hero-blur2)', animationDelay: '2s' }} />
        <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'var(--hero-blur3)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass-card"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium c-heading">Open to opportunities</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="c-heading">Hi, I'm </span>
            <span className="gradient-text">Sathiya Priya</span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="c-muted">I'm a </span>
            <TypeAnimation
              sequence={[
                'Frontend Developer', 2000,
                'React Developer', 2000,
                'MERN Stack Developer', 2000,
                'UI/UX Designer', 2000,

              ]}
              speed={50}
              repeat={Infinity}
              className="text-primary font-semibold"
            />
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto c-body text-base md:text-lg leading-relaxed mb-10 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Computer Science Engineer passionate about innovative problem-solving
            and engaged with emerging technologies. Committed to contributing to
            cutting-edge projects and delivering impactful solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-3.5 bg-primary text-white rounded-xl font-semibold text-base overflow-hidden shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* <motion.a
              href="/Sathiya Priya S Resume.pdf"
              download="Sathiya_Priya_Resume.pdf"
              className="group flex items-center gap-2 px-8 py-3.5 border-2 border-primary/30 text-primary rounded-xl font-semibold text-base hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={18} className="group-hover:animate-bounce" />
              Download Resume
            </motion.a> */}

            <motion.a
              href="#projects"
              className="px-8 py-3.5 c-border border rounded-xl font-semibold text-base c-heading hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { icon: FiGithub, href: 'https://github.com/Sathiya05', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sathiya-priya-s-3179b8257/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:sathiyasekar05112003@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl c-border border c-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 c-muted hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >

        </motion.a>
      </div>
    </section>
  )
}
