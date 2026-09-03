import { Section, SectionEyebrow, SectionHeadline } from '@/components/layout/section'
import { LinkButton } from '@/components/ui/link-button'
import { CONTACT_LINKS } from '@/constants/contact'
import Image from 'next/image'

export function SectionHero() {
  return (
    <Section className='pt-26 md:pt-32 lg:pt-38' gradient>
      <div className='content relative z-2 flex flex-col md:grid md:grid-cols-2 gap-8'>
        <div className='max-md:flex max-md:justify-center md:order-2'>
          <Image
            className='block md:w-full md:h-auto'
            src='https://placehold.net/400x400.png'
            width={400}
            height={400}
            alt=''
            loading='eager'
          />
        </div>
        <div className='flex flex-col items-center md:items-start gap-4 md:gap-8 md:order-1 text-foreground-secondary max-md:text-center'>
          <SectionEyebrow dark>Especialistas em Marketing Médico</SectionEyebrow>
          <SectionHeadline>
            Transformamos autoridade médica em crescimento sustentável.
          </SectionHeadline>
          <p className='text-balance'>
            A AKAH é uma agência de marketing especializada em médicos. Não fazemos post. Fazemos
            crescimento, com metodologia, estratégia e resultado mensurável.
          </p>
          <LinkButton variant='solid' href={CONTACT_LINKS.WHATSAPP} target='_blank'>
            Quero conhecer o Método CARE
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}
