import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { planner } from '../../data/content'
import { products } from '../../data/products'
import { useCart } from '../../features/cart/CartContext'
import { useToast } from '../../features/toast/Toast'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { CopyCode } from '../../components/ui/CopyCode'
import { cn } from '../../lib/cn'

const shelf = products.filter((p) => p.category === 'short-kurtis' || p.family === 'everyday-shirt')
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

/**
 * Plan your week: a planner page with Monday to Saturday. Tap a piece on the shelf and it is
 * written into the next empty day; tap a day to clear it. One size for the whole week (you
 * can change it). With five or more planned, WEEKLY20 takes 20% off.
 */
export function PlanWeek() {
  const reduce = useReducedMotion()
  const { add, setOpen } = useCart()
  const { show } = useToast()
  const [week, setWeek] = useState(() => Array(planner.days.length).fill(null))
  const [size, setSize] = useState('M')
  const filled = week.filter(Boolean)
  const total = filled.reduce((s, id) => s + products.find((p) => p.id === id).price, 0)
  const ready = filled.length >= planner.min
  const planned = useMemo(() => new Set(filled), [filled])

  const put = (id) =>
    setWeek((w) => {
      const i = w.indexOf(null)
      if (i === -1) return w
      const next = [...w]
      next[i] = id
      return next
    })
  const clear = (i) => setWeek((w) => w.map((x, k) => (k === i ? null : x)))

  const addWeek = () => {
    filled.forEach((id) => add(id, size))
    show({ title: `${filled.length} pieces added`, body: ready ? `Use ${planner.code} at checkout for 20% off` : 'Plan five for 20% off', action: { label: 'View bag', onClick: () => setOpen(true) } })
    setWeek(Array(planner.days.length).fill(null))
  }

  return (
    <section className="shell pt-20 lg:pt-28" aria-labelledby="week-title">
      <div className="overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_30px_70px_-50px_rgb(43_34_24/0.5)]">
        <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14 lg:p-12">
          <div>
            <p className="flex items-center gap-2 text-[13px] font-semibold text-ink-soft">
              <Icon name="calendar" size={18} className="text-gold" /> The weekly planner
            </p>
            <h2 id="week-title" className="display mt-4 text-[34px] text-ink sm:text-[38px]">
              Plan your <span className="hand text-[1.12em] normal-case text-gold">week</span>
            </h2>
            <p className="mt-4 max-w-[40ch] text-[15.5px] leading-relaxed text-ink-soft">Pick a kurti for every day. Plan five or more and the week is 20% off.</p>

            <div className="mt-7 rounded-[18px] bg-studio p-4">
              <p className="flex items-baseline justify-between text-[14px] text-ink-soft">
                {filled.length} of {planner.days.length} days
                <span key={total} className="anim-fade-in text-[22px] font-semibold text-ink tabular-nums">
                  {formatPrice(ready ? Math.round(total * 0.8) : total)}
                </span>
              </p>
              {ready && <p className="mt-1 text-right text-[13px] text-gold">{formatPrice(total)} before {planner.code}</p>}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-mist">
                <span className="block h-full origin-left rounded-full bg-gold transition-transform duration-500 ease-[var(--ease-out)]" style={{ transform: `scaleX(${filled.length / planner.days.length})` }} />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <label htmlFor="week-size" className="text-[13.5px] text-ink-soft">
                  Size for the week
                </label>
                <select id="week-size" value={size} onChange={(e) => setSize(e.target.value)} className="h-9 rounded-full border border-line-strong bg-paper px-3 text-[13.5px] font-semibold text-ink outline-none focus:border-gold">
                  {SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button onClick={addWeek} disabled={!filled.length} variant="gold" className="flex-1">
                  Add the week to bag
                </Button>
                {ready && <CopyCode code={planner.code} />}
              </div>
            </div>
          </div>

          <div>
            {/* The days */}
            <ol className="ruled grid grid-cols-3 gap-2.5 sm:grid-cols-6">
              {planner.days.map((d, i) => {
                const p = week[i] && products.find((x) => x.id === week[i])
                return (
                  <li key={d}>
                    <p className="hand text-[24px] text-gold">{d}</p>
                    <div className="relative mt-1 aspect-[3/4] overflow-hidden rounded-[14px] border-[1.5px] border-dashed border-gold/35 bg-studio/60">
                      <AnimatePresence>
                        {p ? (
                          <motion.button
                            key={p.id}
                            type="button"
                            onClick={() => clear(i)}
                            aria-label={`Clear ${d}: ${p.name}`}
                            className="group absolute inset-0"
                            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24, rotate: -4, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                          >
                            <Img id={p.images[0]} alt="" sizes="140px" className="h-full w-full" position="50% 15%" />
                            <span className="absolute top-1.5 right-1.5 grid size-7 place-items-center rounded-full bg-paper/95 text-ink shadow-float transition-colors group-hover:bg-danger group-hover:text-paper">
                              <Icon name="close" size={13} weight="bold" />
                            </span>
                            <span className="absolute inset-x-1.5 bottom-1.5 truncate rounded-full bg-paper/95 px-2 py-1 text-[11px] font-semibold text-ink">{p.color}</span>
                          </motion.button>
                        ) : (
                          <motion.span key="empty" className="absolute inset-0 grid place-items-center text-gold/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Icon name="plus" size={22} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                )
              })}
            </ol>

            {/* The shelf */}
            <p className="mt-8 text-[13.5px] font-semibold text-ink-soft">Tap to plan</p>
            <ul className="no-scrollbar mt-3 flex snap-x gap-2.5 overflow-x-auto pb-1">
              {shelf.map((p) => {
                const on = planned.has(p.id)
                const full = filled.length >= planner.days.length
                return (
                  <li key={p.id} className="w-[92px] shrink-0 snap-start">
                    <button type="button" onClick={() => put(p.id)} disabled={full} aria-label={`Plan ${p.name}`} className="group block w-full text-left disabled:opacity-40">
                      <span className={cn('relative block overflow-hidden rounded-[12px] bg-mist ring-offset-2 ring-offset-paper transition-[transform,box-shadow] duration-300 group-enabled:group-hover:-translate-y-1', on && 'ring-2 ring-gold')}>
                        <Img id={p.images[0]} alt="" sizes="92px" className="aspect-[3/4]" position="50% 15%" />
                      </span>
                      <span className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-medium text-ink">
                        <span className="size-2.5 shrink-0 rounded-full ring-1 ring-line-strong" style={{ backgroundColor: p.hex }} />
                        <span className="truncate">{p.color}</span>
                      </span>
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
