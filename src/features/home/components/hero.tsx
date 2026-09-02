import { Eyebrow } from '@/components/eyebrow'
import { Headline } from '@/components/headline'
import { LinkButton } from '@/components/link-button'
import { CONTACT_LINKS } from '@/constants/contact'
import Image from 'next/image'

export function Hero() {
  return (
    <section className='pt-19 bg-linear-to-tr from-accent-1 to-accent-2'>
      <div className='content flex flex-col md:grid md:grid-cols-2 gap-8 py-10'>
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
        <div className='flex flex-col items-start gap-4 md:order-1 text-foreground-secondary'>
          <Eyebrow>Especialistas em Marketing Médico</Eyebrow>
          <Headline>Transformamos autoridade médica em crescimento sustentável.</Headline>
          <p className='text-balance'>
            A AKAH é uma agência de marketing especializada em médicos. Não fazemos post. Fazemos
            crescimento, com metodologia, estratégia e resultado mensurável.
          </p>
          <LinkButton variant='solid' href={CONTACT_LINKS.WHATSAPP} target='_blank'>
            Quero conhecer o Método CARE
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
