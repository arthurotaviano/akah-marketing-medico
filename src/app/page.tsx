import { SectionAbout } from '@/views/home/components/about'
import { SectionCARE } from '@/views/home/components/care'
import { SectionFAQ } from '@/views/home/components/faq'
import { SectionHero } from '@/views/home/components/hero'
import { SectionProblems } from '@/views/home/components/problems'
import { SectionTargetAudience } from '@/views/home/components/target-audience'
import { SectionValue } from '@/views/home/components/value'
import { SectionWhyAKAH } from '@/views/home/components/why-akah'

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProblems />
      <SectionCARE />
      <SectionTargetAudience />
      <SectionWhyAKAH />
      <SectionAbout />
      <SectionValue />
      <SectionFAQ />
    </>
  )
}
