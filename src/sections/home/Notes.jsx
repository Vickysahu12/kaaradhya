import { Link } from 'react-router'
import { testimonials, offers } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { CopyCode } from '../../components/ui/CopyCode'
import { SectionHeading } from '../../components/ui/SectionHeading'

const tilt = ['-rotate-[1.2deg]', 'rotate-[0.8deg]', '-rotate-[0.5deg]', 'rotate-[1.4deg]', '-rotate-[0.9deg]']

/**
 * The close. Notes from customers (sample content), pinned like planner pages that straighten
 * when you point at them; and the three codes.
 */
export function Notes() {
  const ref = useReveal()
  return (
    <section ref={ref} className="pt-20 lg:pt-28" aria-labelledby="notes-title">
      <SectionHeading id="notes-title" title="Notes from" italic="the week" className="shell" />
      <ul className="no-scrollbar mx-auto mt-10 flex max-w-[1400px] snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pt-3 pb-4 sm:scroll-px-6 sm:px-6 lg:scroll-px-10 lg:px-10">
        {testimonials.map((t, i) => {
          const p = getProductSync(t.productId)
          return (
            <li key={t.name} className="w-[82vw] shrink-0 snap-start sm:w-[360px]" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              <figure className={`ruled flex h-full flex-col rounded-[20px] border border-line bg-paper p-6 shadow-[0_18px_40px_-30px_rgb(43_34_24/0.5)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] hover:rotate-0 hover:shadow-lift ${tilt[i % tilt.length]}`}>
                <span className="flex text-brass" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, k) => (
                    <Icon key={k} name="star" size={15} weight={k < t.rating ? 'fill' : 'regular'} />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-[16.5px] leading-[32px] text-ink">“{t.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Link to={`/product/${p.slug}`} className="group shrink-0 overflow-hidden rounded-[10px]" aria-label={p.name}>
                    <Img id={p.images[0]} alt="" sizes="48px" className="h-16 w-12" position="50% 15%" imgClassName="transition-transform duration-500 group-hover:scale-110" />
                  </Link>
                  <span className="min-w-0">
                    <span className="hand block text-[22px] text-gold">{t.name}</span>
                    <span className="block text-[12.5px] text-ink-soft">
                      {t.role}, {t.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          )
        })}
      </ul>

      <ul className="shell mt-16 grid gap-3 sm:grid-cols-3">
        {offers.map((o) => (
          <li key={o.code} className="flex items-center justify-between gap-3 rounded-[16px] border border-dashed border-gold/40 bg-paper px-5 py-4">
            <p className="text-[15px] font-semibold text-ink">{o.title}</p>
            <CopyCode code={o.code} />
          </li>
        ))}
      </ul>
    </section>
  )
}
