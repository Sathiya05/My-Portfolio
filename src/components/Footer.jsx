import { motion } from 'framer-motion'
import { FiHeart, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative border-t c-border-subtle py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold font-mono">
              <span className="text-primary">&lt;</span><span className="gradient-text">SP</span><span className="text-primary">/&gt;</span>
            </a>
            <p className="c-muted text-xs mt-1">Building the web, one component at a time.</p>
          </div>
          <p className="c-muted text-xs flex items-center gap-1">
            Designed & Built with <FiHeart className="text-red-500" size={12} /> by Sathiya Priya S
          </p>
          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
