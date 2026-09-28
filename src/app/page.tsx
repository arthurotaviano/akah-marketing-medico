import { SectionCARE } from '@/views/home/components/care'
import { SectionHero } from '@/views/home/components/hero'
import { SectionProblems } from '@/views/home/components/problems'
import { SectionTargetAudience } from '@/views/home/components/target-audience'

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProblems />
      <SectionCARE />
      <SectionTargetAudience />
    </>
  )
}
