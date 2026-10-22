import { useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

const shades = products.filter((p) => p.family === 'classic-long')

/**
 * The Classic Kurta as a paint shade card: every colour it comes in, as named chips. Pointing
 * at a chip (or tabbing to it) shows her in that shade on the left; clicking opens it.
 * Light chips get dark labels and dark chips light ones, worked out from the colour itself.
 */
export function ShadeCard() {
  const ref = useReveal()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(shades[0])

  const isDark = (hex) => {
    const n = parseInt(hex.slice(1), 16)
    const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255]
    return 0.299 * r + 0.587 * g + 0.114 * b < 150
  }

  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-labelledby="shade-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden rounded-[22px] bg-mist">
            <AnimatePresence initial={false}>
              <motion.div key={active.id} className="absolute inset-0" initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
                <Img id={active.images[0]} alt={active.name} sizes="(min-width: 1024px) 38vw, 100vw" className="h-full w-full" position="50% 15%" />
              </motion.div>
            </AnimatePresence>
            <div className="aspect-[3/4]" />
            <Link to={`/product/${active.slug}`} className="group absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full bg-paper/95 py-2 pr-2 pl-5 shadow-float backdrop-blur-md">
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-semibold text-ink">{active.name}</span>
                <span className="block text-[13px] text-ink-soft tabular-nums">{formatPrice(active.price)}</span>
              </span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-colors group-hover:bg-gold group-hover:text-plum">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <p className="hand text-[26px] text-gold-deep">one cut, {shades.length} shades</p>
          <h2 id="shade-title" className="display mt-2 text-[34px] text-ink sm:text-[38px] lg:text-[44px]">
            The Classic Kurta shade card
          </h2>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-ink-soft">Calf length, a mandarin collar and a placket that buttons properly, in cotton flax that breathes. Pick a colour the way you would pick a wall paint.</p>
          <ul className="mt-9 grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {shades.map((p) => {
              const on = p.id === active.id
              const dark = isDark(p.hex)
              return (
                <li key={p.id}>
                  <Link
                    to={`/product/${p.slug}`}
                    onMouseEnter={() => setActive(p)}
                    onFocus={() => setActive(p)}
                    aria-label={p.name}
                    className={cn(
                      'group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[14px] p-2.5 ring-offset-2 ring-offset-studio transition-[transform,box-shadow] duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-float',
                      on ? 'ring-2 ring-ink' : 'ring-1 ring-line',
                    )}
                    style={{ backgroundColor: p.hex }}
                  >
                    <span className={cn('text-[12.5px] leading-tight font-semibold', dark ? 'text-paper' : 'text-ink')}>{p.color}</span>
                    <span className={cn('text-[10.5px] tabular-nums', dark ? 'text-paper/70' : 'text-ink/60')}>KA-{p.id.slice(1)}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
