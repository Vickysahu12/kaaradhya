import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { collectionTabs } from '../../data/content'
import { queryProducts } from '../../services/catalog'
import { ProductCard } from '../../features/product/ProductCard'
import { Button } from '../../components/ui/Button'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { cn } from '../../lib/cn'

/**
 * Best-sellers (ref), on a soft gold band. Pill tabs with a sliding ink pill; the grid
 * re-lays with a short stagger. Colour dots on each card preview the other shades.
 */
export function BestSellers() {
  const reduce = useReducedMotion()
  const [tab, setTab] = useState(collectionTabs[0].id)
  const current = collectionTabs.find((t) => t.id === tab)
  const items = useMemo(() => queryProducts({ ...current.query, limit: 8 }), [current])

  return (
    <section className="mt-20 bg-champagne/60 py-16 lg:mt-28 lg:py-24" aria-labelledby="best-title">
      <div className="shell">
        <SectionHeading id="best-title" title="Loved on" italic="repeat" sub="The pieces our customers buy again in a second colour." />
        <div role="tablist" aria-label="Collections" className="no-scrollbar mx-auto mt-8 flex max-w-max gap-1 overflow-x-auto rounded-full bg-paper p-1.5 shadow-[0_8px_24px_-18px_rgb(43_34_24/0.5)]">
          {collectionTabs.map((t) => {
            const on = t.id === tab
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setTab(t.id)}
                className={cn('relative isolate shrink-0 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors duration-300 sm:px-5', on ? 'text-paper' : 'text-ink-soft hover:text-ink')}
              >
                {on && <motion.span layoutId="best-pill" className="absolute inset-0 -z-10 rounded-full bg-ink" transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.45, bounce: 0.12 }} />}
                {t.label}
              </button>
            )
          })}
        </div>

        <ul key={tab} className="mt-10 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-4">
          {items.map((p, i) => (
            <li key={p.id} className="anim-fade-up" style={{ '--delay': `${i * 45}ms` }}>
              <ProductCard product={p} sizes="(min-width: 1024px) 23vw, 46vw" />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button to={current.query.category ? `/shop/${current.query.category}` : '/shop?bestseller=1'} variant="outline" size="lg" arrow>
            View all products
          </Button>
        </div>
      </div>
    </section>
  )
}
