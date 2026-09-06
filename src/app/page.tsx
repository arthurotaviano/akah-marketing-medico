import { SectionCARE } from '@/views/home/components/care'
import { SectionHero } from '@/views/home/components/hero'
import { SectionProblems } from '@/views/home/components/problems'

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProblems />
      <SectionCARE />
    </>
  )
}
