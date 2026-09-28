import {
  Section,
  SectionEyebrow,
  SectionHeadline,
  SectionHeadlineHighlight,
} from '@/components/layout/section'
import Image from 'next/image'

export function SectionAbout() {
  return (
    <Section>
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow>Quem somos</SectionEyebrow>
        <SectionHeadline>
          A AKAH nasceu de uma percepção simples:{' '}
          <SectionHeadlineHighlight>
            médicos excelentes merecem um marketing à altura do que entregam.
          </SectionHeadlineHighlight>
        </SectionHeadline>
        <div className='mx-auto max-w-2xl' aria-label='Depoimento de Kelly Grandis'>
          <figure>
            <blockquote className='rounded-2xl p-6 pb-16 bg-white'>
              <p className='text-black text-balance before:content-[open-quote] after:content-[close-quote]'>
                Depois de estudar profundamente o mercado médico, chegamos a uma conclusão que guia
                tudo que fazemos: o problema do médico não é falta de marketing. É falta de
                estrutura. Foi a partir dessa percepção que criamos o Método&nbsp;CARE™, uma
                metodologia exclusiva que transforma autoridade médica em crescimento sustentável.
                Trabalhamos com médicos porque acreditamos que profundidade gera resultado, e
                generalismo gera mediocridade.
              </p>
            </blockquote>
            <figcaption className='flex flex-col items-center gap-3 -mt-14'>
              <Image
                className='rounded-full border-2 border-white w-25 h-25'
                src='/images/kelly-grandis.jpg'
                width={100}
                height={100}
                alt='Kelly Grandis'
              />
              <div>
                <cite className='text-foreground-secondary font-semibold not-italic'>
                  Kelly Grandis
                </cite>
                <div>Sócia-fundadora e criadora do Método&nbsp;CARE™</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  )
}
