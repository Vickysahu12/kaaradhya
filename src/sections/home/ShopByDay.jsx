import { Link } from 'react-router'
import { collections } from '../../data/content'
import { queryProducts } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { SectionHeading } from '../../components/ui/SectionHeading'

const count = (c) => (c.id === 'u499' ? queryProducts({ price: ['u499'] }).length : queryProducts({ occasion: [c.id] }).length)

/**
 * Shop by your day (the reference's "Shop by category"): four tall photos. On hover the photo
 * lifts and eases in, and a note in the gold pen is written under the name.
 */
export function ShopByDay() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-20 lg:pt-28" aria-labelledby="day-title">
      <SectionHeading id="day-title" title="Shop by" italic="your day" />
      <ul className="no-scrollbar -mx-4 mt-10 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {collections.map((c, i) => (
          <li key={c.id} className="w-[64vw] shrink-0 snap-start sm:w-auto" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
            <Link to={c.to} className="group block">
              <span className="relative block overflow-hidden rounded-[20px] bg-mist transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1.5 group-hover:shadow-lift">
                <Img id={c.image} alt="" sizes="(min-width: 1024px) 23vw, 64vw" className="aspect-[3/4]" position="50% 18%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
                <span className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-paper text-ink opacity-0 shadow-float transition-[opacity,transform] duration-300 ease-[var(--ease-out)] group-hover:rotate-[-45deg] group-hover:opacity-100">
                  <Icon name="arrow" size={18} />
                </span>
              </span>
              <span className="mt-4 flex items-baseline justify-between gap-3">
                <span className="text-[18px] font-semibold text-ink transition-colors group-hover:text-gold">{c.label}</span>
                <span className="text-[13px] text-ink-soft tabular-nums">{count(c)} styles</span>
              </span>
              <span className="hand mt-1 block h-7 text-[22px] text-gold transition-[opacity,transform,clip-path] duration-500 ease-[var(--ease-out)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] max-sm:[clip-path:none]">
                {c.note}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
