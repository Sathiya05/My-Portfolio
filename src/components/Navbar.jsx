import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Presentations', href: '#presentations' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.substring(1))
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s)
        if (el && window.scrollY >= el.offsetTop - 150) { setActiveSection(s); break }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'c-nav backdrop-blur-xl shadow-lg border-b c-nav-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a href="#home" className="text-xl font-bold font-mono" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="text-primary">&lt;</span>
            <span className="gradient-text">SP</span>
            <span className="text-primary">/&gt;</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <motion.a
                key={link.name} href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-primary/10'
                    : 'c-muted hover:text-primary hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href="/Sathiya Priya S Resume.pdf" download="Sathiya_Priya_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 border-2 border-primary/30 text-primary rounded-lg text-sm font-semibold hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={14} /> Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="c-muted hover:text-primary p-2">
              {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden c-nav backdrop-blur-xl border-b c-nav-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a key={link.name} href={link.href} onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1) ? 'text-primary bg-primary/10' : 'c-muted hover:text-primary hover:bg-primary/5'
                  }`}
                >{link.name}</motion.a>
              ))}
              <a href="/Sathiya Priya S Resume.pdf" download="Sathiya_Priya_Resume.pdf" onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary/30 text-primary rounded-lg text-sm font-semibold mt-2">
                <FiDownload size={14} /> Download Resume
              </a>
              <a href="#contact" onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 bg-primary text-white rounded-lg text-sm font-semibold text-center mt-1">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
