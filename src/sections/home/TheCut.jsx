import { useState } from 'react'
import { Link } from 'react-router'
import { theCut } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

/**
 * The cut, annotated like a tailor's note. Numbered pins sit on the photo; pointing at a pin
 * or its line in the list lights up both and writes the note out. Works with keyboard and
 * touch (tap a pin).
 */
export function TheCut() {
  const ref = useReveal()
  const product = getProductSync(theCut.productId)
  const [active, setActive] = useState(theCut.notes[0].id)

  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-labelledby="cut-title">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[24px] bg-mist" data-reveal-frame>
          <Img id={theCut.image} alt={product.name} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[3/4]" position="50% 10%" />
          {theCut.notes.map((n, i) => {
            const on = n.id === active
            return (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setActive(n.id)}
                onFocus={() => setActive(n.id)}
                onClick={() => setActive(n.id)}
                aria-label={n.title}
                aria-pressed={on}
                className="absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {on && <span className="ping-soft absolute inset-0 rounded-full bg-gold/40" aria-hidden="true" />}
                <span className={cn('relative grid size-7 place-items-center rounded-full text-[12px] font-bold shadow-float transition-[background-color,color,transform] duration-300', on ? 'scale-110 bg-gold text-plum' : 'bg-paper text-ink')}>{i + 1}</span>
              </button>
            )
          })}
        </div>

        <div>
          <p className="hand text-[26px] text-gold-deep">a tailor’s notes</p>
          <h2 id="cut-title" className="display mt-2 text-[34px] text-ink sm:text-[38px] lg:text-[44px]">
            Every detail, on purpose
          </h2>
          <ol className="mt-8 border-t border-line">
            {theCut.notes.map((n, i) => {
              const on = n.id === active
              return (
                <li key={n.id} className="border-b border-line">
                  <button type="button" onMouseEnter={() => setActive(n.id)} onFocus={() => setActive(n.id)} onClick={() => setActive(n.id)} aria-expanded={on} className="flex w-full items-start gap-4 py-4 text-left">
                    <span className={cn('mt-0.5 grid size-7 shrink-0 place-items-center rounded-full text-[12px] font-bold transition-colors duration-300', on ? 'bg-gold text-plum' : 'bg-mist text-ink')}>{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className={cn('block text-[17px] font-semibold transition-colors', on ? 'text-ink' : 'text-ink-soft')}>{n.title}</span>
                      <span className={cn('grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out)]', on ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]')}>
                        <span className="overflow-hidden">
                          <span className="block pt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{n.body}</span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
          <Link to={`/product/${product.slug}`} className="group mt-8 inline-flex items-center gap-3 text-[15.5px] font-semibold text-ink">
            <span className="link-under">Shop {product.name}</span>
            <span className="text-ink-soft tabular-nums">{formatPrice(product.price)}</span>
            <Icon name="arrow" size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
