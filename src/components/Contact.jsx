import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_kgzs8ds'
const TEMPLATE_ID = 'template_qrzutcs'
const PUBLIC_KEY = '__EU79BLB15gMb6pS'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(''); setSending(true)
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      }, PUBLIC_KEY)
      setSubmitted(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError('Failed to send message. Please try again later.')
    } finally { setSending(false) }
  }
  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value })

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'sathiyasekar05112003@gmail.com', href: 'mailto:sathiyasekar05112003@gmail.com', color: '#0ea5e9' },
    { icon: FiPhone, label: 'Phone', value: '+91 78128 41311', href: 'tel:+917812841311', color: '#6366f1' },
    { icon: FiMapPin, label: 'Location', value: 'Bargur, Krishnagiri, Tamil Nadu', href: null, color: '#06b6d4' },
  ]
  const inputClass = "w-full px-4 py-3 c-input border c-border rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:c-muted"

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Get In Touch</h2>
          <p className="c-muted mt-6 max-w-xl mx-auto">I'm open to opportunities and collaborations. Let's build something great together!</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold c-heading mb-1">Let's work together</h3>
              <p className="c-body text-sm mb-6">Whether you have a project in mind or want to discuss opportunities, I'd love to hear from you.</p>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15`, color }}><Icon size={18} /></div>
                    <div>
                      <p className="text-xs c-muted">{label}</p>
                      {href ? <a href={href} className="c-heading text-sm hover:text-primary transition-colors">{value}</a> : <p className="c-heading text-sm">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6 pt-6 border-t c-border-subtle">
                <a href="https://www.linkedin.com/in/sathiya-priya-s-3179b8257/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl c-tag flex items-center justify-center c-muted hover:text-primary hover:bg-primary/10 transition-all"><FiLinkedin size={18} /></a>
                <a href="https://github.com/Sathiya05" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl c-tag flex items-center justify-center c-muted hover:text-primary hover:bg-primary/10 transition-all"><FiGithub size={18} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div><label className="block text-xs c-muted mb-1.5 font-medium">Name</label><input type="text" name="name" value={formState.name} onChange={handleChange} required className={inputClass} placeholder="Your name" /></div>
                <div><label className="block text-xs c-muted mb-1.5 font-medium">Email</label><input type="email" name="email" value={formState.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" /></div>
              </div>
              <div className="mb-4"><label className="block text-xs c-muted mb-1.5 font-medium">Subject</label><input type="text" name="subject" value={formState.subject} onChange={handleChange} required className={inputClass} placeholder="What's this about?" /></div>
              <div className="mb-6"><label className="block text-xs c-muted mb-1.5 font-medium">Message</label><textarea name="message" value={formState.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Type something..." /></div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <motion.button type="submit" disabled={sending}
                className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)' }} whileTap={{ scale: 0.98 }}>
                {sending ? 'Sending...' : submitted ? <>Sent Successfully! ✓</> : <>Send Message <FiSend size={16} /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
