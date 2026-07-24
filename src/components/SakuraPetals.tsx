import { useEffect, useRef } from 'react'

type Petal = {
  x: number
  y: number
  size: number
  speed: number
  drift: number
  sway: number
  swaySpeed: number
  rotation: number
  spin: number
  opacity: number
  hue: number
}

function createPetal(width: number, height: number, fromTop = false): Petal {
  return {
    x: Math.random() * width,
    y: fromTop ? -20 : Math.random() * height,
    size: 8 + Math.random() * 14,
    speed: 0.4 + Math.random() * 1.1,
    drift: -0.4 + Math.random() * 0.8,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.01 + Math.random() * 0.02,
    rotation: Math.random() * Math.PI * 2,
    spin: (-0.02 + Math.random() * 0.04) * (Math.random() > 0.5 ? 1 : -1),
    opacity: 0.35 + Math.random() * 0.45,
    hue: Math.random() > 0.5 ? 340 : 350,
  }
}

export function SakuraPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let petals: Petal[] = []
    let raf = 0
    let width = 0
    let height = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(48, Math.floor(width / 28))
      petals = Array.from({ length: count }, () => createPetal(width, height))
    }

    const drawPetal = (p: Petal) => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.globalAlpha = p.opacity
      const r = p.size
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, r)
      gradient.addColorStop(0, `hsla(${p.hue}, 85%, 88%, 1)`)
      gradient.addColorStop(0.55, `hsla(${p.hue}, 70%, 78%, 0.95)`)
      gradient.addColorStop(1, `hsla(${p.hue}, 60%, 72%, 0.2)`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(0, -r * 0.15)
      ctx.bezierCurveTo(r * 0.55, -r * 0.9, r * 0.95, -r * 0.15, 0, r)
      ctx.bezierCurveTo(-r * 0.95, -r * 0.15, -r * 0.55, -r * 0.9, 0, -r * 0.15)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of petals) {
        p.sway += p.swaySpeed
        p.x += p.drift + Math.sin(p.sway) * 0.55
        p.y += p.speed
        p.rotation += p.spin
        if (p.y > height + 30 || p.x < -40 || p.x > width + 40) {
          Object.assign(p, createPetal(width, height, true))
        }
        drawPetal(p)
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="sakura-canvas"
      aria-hidden="true"
    />
  )
}
