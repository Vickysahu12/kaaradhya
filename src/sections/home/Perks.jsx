import { perks } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import { Icon } from '../../components/ui/Icon'

// "Why choose Kaaradhya?" from the reference: four promises, each in a ring that fills gold
// on hover while the icon turns.
export function Perks() {
  const ref = useReveal()
  return (
    <section ref={ref} className="border-y border-line bg-paper py-14 lg:py-16" aria-labelledby="why-title">
      <div className="shell">
        <h2 id="why-title" className="display text-center text-[28px] text-ink sm:text-[34px]">
          Why choose <span className="hand text-[1.12em] normal-case text-gold-deep">Kaaradhya?</span>
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {perks.map((p, i) => (
            <li key={p.title} className="group flex flex-col items-center text-center" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
              <span className="grid size-16 place-items-center rounded-full border border-line-strong text-gold-deep transition-[background-color,color,border-color,transform] duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:border-gold group-hover:bg-gold group-hover:text-plum">
                <Icon name={p.icon} size={26} className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:-rotate-12" />
              </span>
              <span className="mt-4 text-[16px] font-semibold text-ink">{p.title}</span>
              <span className="mt-1 max-w-[26ch] text-[13.5px] leading-relaxed text-ink-soft">{p.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
