import { Link } from 'react-router'
import { categories, perks } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useReveal } from '../hooks/useReveal'
import { Img } from '../components/ui/Img'
import { Icon } from '../components/ui/Icon'
import { Button } from '../components/ui/Button'

const CHAPTERS = [
  { title: 'One cut,', hand: 'made right', body: 'We spent a year on one pattern: the mandarin collar that does not flop, the placket that opens wide enough, sleeves that end where they should. Then we made it in every colour you asked for.', image: 'k13-2' },
  { title: 'Cotton that', hand: 'breathes', body: 'Slub, flax and poplin cottons, chosen for Indian summers and tested through a hundred washes for colour, shrinkage and softness.', image: 'k46-2' },
  { title: 'Priced to', hand: 'repeat', body: 'Everything sits between ₹449 and ₹1,499, so you can own the shade you love and the one you are still thinking about.', image: 'k27-2' },
]

export function AboutPage() {
  useDocumentTitle('Our Story')
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="shell grid items-center gap-12 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <p className="hand text-[28px] text-gold-deep">our story</p>
          <h1 className="display mt-2 text-[46px] leading-[0.98] text-ink sm:text-[72px]">
            Made for the
            <br />
            <span className="swash">everyday</span> you.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft">
            Kaaradhya started with a simple frustration: the kurti you love most is never available in a second colour. So we made one perfect cut and dyed it in every shade you might want, Monday to Sunday.
          </p>
          <Button to="/shop" size="lg" className="mt-8" arrow>
            Shop the collection
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Img id="k16-1" alt="The Everyday Kurti in gold" sizes="(min-width: 1024px) 22vw, 50vw" className="aspect-[3/4] rounded-[22px]" position="50% 15%" />
          <Img id="k11-1" alt="The Classic Kurta in gold" sizes="(min-width: 1024px) 22vw, 50vw" className="mt-14 aspect-[3/4] rounded-[22px]" position="50% 15%" />
        </div>
      </section>

      <section id="fabric" className="shell scroll-mt-40 pt-24 lg:pt-32">
        <ul className="space-y-16 lg:space-y-24">
          {CHAPTERS.map((c, i) => (
            <li key={c.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 ? 'lg:order-2' : ''} data-reveal-frame>
                <Img id={c.image} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] rounded-[24px]" position="50% 30%" />
              </div>
              <div data-reveal>
                <h2 className="display text-[34px] text-ink sm:text-[38px]">
                  {c.title} <span className="hand text-[1.12em] normal-case text-gold-deep">{c.hand}</span>
                </h2>
                <p className="mt-5 max-w-[48ch] text-[16.5px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-24 lg:pt-32">
        <ul className="grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <li key={p.title} className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-champagne text-gold-deep">
                <Icon name={p.icon} size={22} />
              </span>
              <span>
                <span className="block text-[16px] font-semibold text-ink">{p.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{p.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-20 lg:pt-28">
        <h2 className="display text-[30px] text-ink sm:text-[38px]">Where to begin</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c.id}>
              <Link to={c.to} className="press group inline-flex h-12 items-center gap-3 rounded-full border border-line-strong bg-paper pr-2 pl-5 text-[15px] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper">
                {c.label}
                <span className="grid size-8 place-items-center rounded-full bg-studio text-ink transition-transform duration-300 group-hover:-rotate-45">
                  <Icon name="arrow" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
