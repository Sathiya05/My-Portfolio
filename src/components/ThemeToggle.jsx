import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? 'rgba(148,163,184,0.1)' : 'rgba(14,165,233,0.1)',
        border: `1px solid ${isDark ? 'rgba(148,163,184,0.15)' : 'rgba(14,165,233,0.2)'}`,
      }}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FiMoon size={18} className="text-amber-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FiSun size={18} className="text-amber-500" />
      </motion.div>
    </motion.button>
  )
}
