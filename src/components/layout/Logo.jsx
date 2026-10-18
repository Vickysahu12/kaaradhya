import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's brass paisley crest beside the serif wordmark (public/brand). The crest turns a
// few degrees on hover. `light` swaps to the ivory versions for dark grounds; `stacked` puts
// the wordmark under the crest, as on the original artwork.
export function Logo({ className, light, stacked, size = 'md' }) {
  const v = light ? '-light' : ''
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group inline-flex items-center', stacked ? 'flex-col gap-3' : 'gap-2.5', className)}>
      <img
        src={`/brand/crest${v}.png`}
        alt=""
        width={135}
        height={174}
        draggable={false}
        className={cn('w-auto transition-transform duration-700 ease-[var(--ease-out)] group-hover:-rotate-[8deg]', stacked ? 'h-16 lg:h-20' : size === 'sm' ? 'h-8' : 'h-9 lg:h-10')}
      />
      <img
        src={`/brand/wordmark${v}.png`}
        alt={site.name}
        width={374}
        height={45}
        draggable={false}
        className={cn('w-auto', stacked ? 'h-6 lg:h-7' : size === 'sm' ? 'h-[15px]' : 'h-[17px] lg:h-5')}
      />
    </Link>
  )
}
