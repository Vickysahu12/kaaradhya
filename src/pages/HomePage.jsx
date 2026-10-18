import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeroShades } from '../sections/home/HeroShades'
import { Perks } from '../sections/home/Perks'
import { ShopByDay } from '../sections/home/ShopByDay'
import { BestSellers } from '../sections/home/BestSellers'
import { ShadeCard } from '../sections/home/ShadeCard'
import { PlanWeek } from '../sections/home/PlanWeek'
import { TheCut } from '../sections/home/TheCut'
import { Notes } from '../sections/home/Notes'

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroShades />
      <Perks />
      <ShopByDay />
      <BestSellers />
      <ShadeCard />
      <PlanWeek />
      <TheCut />
      <Notes />
    </>
  )
}
