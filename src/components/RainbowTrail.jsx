import { useEffect, useRef } from 'react'

export default function RainbowTrail() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const trailsRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true

      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 2 + 0.5
        trailsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          size: Math.random() * 6 + 3,
          hue: (Date.now() / 5 + Math.random() * 60) % 360,
        })
      }

      if (trailsRef.current.length > 300) {
        trailsRef.current = trailsRef.current.slice(-300)
      }
    }

    const handleLeave = () => { mouseRef.current.active = false }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const t = Date.now() / 1000

      for (let i = trailsRef.current.length - 1; i >= 0; i--) {
        const p = trailsRef.current[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        p.life -= p.decay
        p.size *= 0.99

        if (p.life <= 0) {
          trailsRef.current.splice(i, 1)
          continue
        }

        const alpha = p.life * 0.8
        const hue = (p.hue + t * 30) % 360

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, ${alpha})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 90%, 80%, ${alpha * 0.6})`
        ctx.fill()
      }

      if (mouseRef.current.active) {
        const mx = mouseRef.current.x
        const my = mouseRef.current.y
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 80)
        const hue = (t * 60) % 360
        grad.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.3)`)
        grad.addColorStop(0.5, `hsla(${hue + 60}, 80%, 60%, 0.1)`)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.fillRect(mx - 80, my - 80, 160, 160)
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
    />
  )
}
