import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { heroShades, searchHints } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useCart } from '../../features/cart/CartContext'
import { useToast } from '../../features/toast/Toast'
import { flyToCart } from '../../lib/flyToCart'
import { formatPrice } from '../../lib/format'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const DURATION = 3200
const ease = [0.23, 1, 0.32, 1]
const QUICK_SIZES = ['S', 'M', 'L', 'XL']
const DAY = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' }

/** Search pill with a placeholder that cycles through real searches. */
function HeroSearch() {
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const [q, setQ] = useState('')
  const [hint, setHint] = useState(0)
  useEffect(() => {
    if (reduce || q) return
    const id = setInterval(() => setHint((h) => (h + 1) % searchHints.length), 2400)
    return () => clearInterval(id)
  }, [reduce, q])

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/shop?q=${encodeURIComponent(q.trim() || searchHints[hint])}`)
      }}
      className="group relative flex h-14 w-full max-w-[460px] items-center rounded-full border border-line-strong bg-paper pr-1.5 pl-5 shadow-[0_10px_30px_-22px_rgb(43_34_24/0.5)] transition-[border-color,box-shadow] duration-300 focus-within:border-gold focus-within:shadow-[0_0_0_4px_rgb(140_109_51/0.14)]"
    >
      <Icon name="search" size={20} className="shrink-0 text-ink-soft transition-colors group-focus-within:text-gold" />
      <label htmlFor="hero-q" className="sr-only">
        Search kurtis
      </label>
      <input id="hero-q" value={q} onChange={(e) => setQ(e.target.value)} className="peer h-full min-w-0 flex-1 bg-transparent px-3 text-[15.5px] text-ink outline-none" autoComplete="off" />
      {!q && (
        <span className="pointer-events-none absolute left-[52px] flex h-full items-center overflow-hidden text-[15.5px] text-ink-soft" aria-hidden="true">
          Try&nbsp;
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={hint} initial={reduce ? { opacity: 0 } : { y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduce ? { opacity: 0 } : { y: -14, opacity: 0 }} transition={{ duration: 0.3, ease }}>
              ‘{searchHints[hint]}’
            </motion.span>
          </AnimatePresence>
        </span>
      )}
      <button type="submit" aria-label="Search" className="press grid size-11 shrink-0 place-items-center rounded-full bg-gold text-paper transition-colors hover:bg-ink">
        <Icon name="arrow" size={18} />
      </button>
    </form>
  )
}

/**
 * The opening: the Everyday Kurti in ten shades, the week planned in colour. The model stands
 * on the page (the page is the studio she was shot in) with the shade's name written huge
 * behind her. Shades take turns, Monday to Sunday and on; the active dot's ring is the timer.
 * Hovering a dot shows that shade and holds the turn; the planner card adds it to the bag
 * in one tap. A real search sits under the headline, as in the reference.
 */
export function HeroShades() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [held, setHeld] = useState(false)
  const [size, setSize] = useState('M')
  const card = useRef(null)
  const { add, setOpen } = useCart()
  const { show } = useToast()
  const shade = heroShades[index]
  const product = getProductSync(`k${String(shade.n).padStart(2, '0')}`)
  const go = (i) => setIndex((i + heroShades.length) % heroShades.length)

  // Warm the cut-outs so a shade change never shows an empty stage.
  useEffect(() => {
    heroShades.forEach((s) => {
      const img = new Image()
      img.src = `/media/hero/k${String(s.n).padStart(2, '0')}.webp`
    })
  }, [])

  const addShade = () => {
    add(product.id, size)
    flyToCart(card.current, `/media/products/${product.images[0]}-s.webp`)
    show({ title: 'Added to bag', body: `${product.name}, size ${size}`, image: product.images[0], action: { label: 'View bag', onClick: () => setOpen(true) } })
  }

  return (
    <section className="relative overflow-hidden bg-studio" aria-labelledby="hero-title">
      <div className="shell grid items-center gap-6 pt-8 lg:min-h-[clamp(640px,calc(100svh-116px),860px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-4 lg:pt-0">
        {/* Words */}
        <div className="relative z-10 lg:pb-10">
          <p className="hand text-[24px] text-gold">your week, sorted</p>
          <h1 id="hero-title" className="display mt-2 text-[38px] leading-[1.08] text-ink sm:text-[54px] lg:text-[clamp(50px,4.9vw,74px)]">
            Everyday kurtis,
            <br />
            on <span className="swash text-gold">repeat.</span>
          </h1>
          <p className="mt-6 max-w-[40ch] text-[16.5px] leading-relaxed text-ink-soft">Soft cotton, one perfect cut, ten shades. Wear a different one every day of the week, from ₹499.</p>
          <div className="mt-8">
            <HeroSearch />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button to="/shop/short-kurtis" size="lg" arrow>
              Shop short kurtis
            </Button>
            <Button to="/shop/kurtas" variant="ghost" size="lg" className="max-sm:hidden">
              Long kurtas
            </Button>
          </div>
        </div>

        {/* Stage */}
        <div className="relative h-[520px] sm:h-[600px] lg:h-full lg:min-h-[640px]" onMouseLeave={() => setHeld(false)}>
          {/* The shade's name, huge, behind her */}
          <div className="pointer-events-none absolute inset-x-0 top-[6%] flex justify-center overflow-hidden lg:top-[10%]" aria-hidden="true">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={shade.name}
                className="display block text-[clamp(84px,12vw,190px)] leading-none tracking-[0.06em] whitespace-nowrap"
                style={{ color: shade.ink, opacity: 0.16 }}
                initial={reduce ? { opacity: 0 } : { y: '40%', opacity: 0 }}
                animate={{ y: '0%', opacity: 0.16 }}
                exit={reduce ? { opacity: 0 } : { y: '-30%', opacity: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                {shade.name}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Her */}
          <div className="absolute inset-x-0 bottom-0 top-[4%] flex justify-center">
            <AnimatePresence initial={false}>
              <motion.img
                key={shade.n}
                src={`/media/hero/k${String(shade.n).padStart(2, '0')}.webp`}
                alt={`The Everyday Kurti in ${shade.name}`}
                width={900}
                height={1200}
                fetchPriority={index === 0 ? 'high' : undefined}
                draggable={false}
                className="absolute bottom-0 h-full w-auto max-w-none object-contain object-bottom"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)', transition: { duration: 0.45 } }}
                transition={{ duration: 0.7, ease }}
              />
            </AnimatePresence>
          </div>

          {/* The planner note, written in the margin */}
          <div className="pointer-events-none absolute top-[30%] left-[2%] hidden text-gold sm:block" aria-hidden="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={shade.name} className="hand text-[30px]" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                {shade.day ? `${shade.day} → ${shade.name}` : `+ ${shade.name}`}
              </motion.p>
            </AnimatePresence>
            <svg width="92" height="46" viewBox="0 0 92 46" fill="none" className="mt-1 ml-10">
              <path d="M3 4c18 10 40 26 78 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M70 26l12 8-13 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Planner card */}
          <div ref={card} className="absolute right-0 bottom-[19%] z-10 hidden w-[250px] rounded-[18px] border border-line bg-paper p-5 shadow-lift sm:block lg:right-[2%]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={shade.n} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3, ease }}>
                <p className="flex items-center gap-2 text-[12.5px] font-medium text-ink-soft">
                  <span className="size-3.5 rounded-full ring-1 ring-line-strong" style={{ backgroundColor: shade.hex }} />
                  {shade.day ? `${DAY[shade.day]} plan` : 'One more shade'}
                </p>
                <p className="mt-2 text-[17px] leading-snug font-semibold text-ink">{product.name}</p>
                <p className="mt-0.5 text-[15px] text-ink tabular-nums">
                  {formatPrice(product.price)} {product.compareAt && <span className="text-[13px] text-ink-soft line-through">{formatPrice(product.compareAt)}</span>}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 grid grid-cols-4 gap-1" role="group" aria-label="Size">
              {QUICK_SIZES.map((s) => (
                <button key={s} type="button" onClick={() => setSize(s)} aria-pressed={size === s} className={cn('press h-9 rounded-full text-[13px] font-semibold transition-colors', size === s ? 'bg-ink text-paper' : 'bg-studio text-ink hover:bg-champagne')}>
                  {s}
                </button>
              ))}
            </div>
            <Button onClick={addShade} variant="gold" size="sm" className="mt-3 w-full">
              <Icon name="bag" size={17} /> Add to bag
            </Button>
          </div>

          {/* Shade rail: the week, then the extras. The active ring is the timer. */}
          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center">
            <ul className="no-scrollbar flex max-w-full items-end gap-1 overflow-x-auto rounded-full border border-line bg-paper/85 px-3 py-2 shadow-float backdrop-blur-md sm:gap-1.5" aria-label="Shades">
              {heroShades.map((s, i) => {
                const on = i === index
                return (
                  <li key={s.n} className="shrink-0">
                    <button
                      type="button"
                      onMouseEnter={() => {
                        setHeld(true)
                        go(i)
                      }}
                      onFocus={() => go(i)}
                      onClick={() => go(i)}
                      aria-label={`${s.name}${s.day ? `, ${s.day}` : ''}`}
                      aria-current={on}
                      className="group/dot flex w-10 flex-col items-center gap-1"
                    >
                      <span className="relative grid size-9 place-items-center">
                        <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden="true">
                          {on && (
                            <circle
                              key={`${s.n}-${index}-${held}`}
                              cx="18"
                              cy="18"
                              r="16.5"
                              fill="none"
                              stroke="var(--color-gold)"
                              strokeWidth="1.8"
                              pathLength="100"
                              strokeDasharray="100"
                              className={held ? '' : 'ring-timer'}
                              style={reduce || held ? { strokeDashoffset: 0 } : { animationDuration: `${DURATION}ms` }}
                              onAnimationEnd={() => !held && go(index + 1)}
                            />
                          )}
                        </svg>
                        <span className={cn('size-6 rounded-full ring-1 ring-line-strong transition-transform duration-300 ease-[var(--ease-out)] group-hover/dot:scale-110', on && 'scale-110')} style={{ backgroundColor: s.hex }} />
                      </span>
                      <span className={cn('text-[10.5px] font-semibold transition-colors', on ? 'text-ink' : 'text-ink-soft')}>{s.day ?? '·'}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
