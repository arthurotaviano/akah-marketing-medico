import { Section, SectionEyebrow, SectionHeadline } from '@/components/layout/section'
import { LinkButton } from '@/components/ui/link-button'
import { CONTACT_LINKS } from '@/constants/contact'

export function SectionValue() {
  return (
    <Section className='text-foreground-secondary' gradient>
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow dark>Perspectiva de valor</SectionEyebrow>
        <SectionHeadline>
          Montar uma equipe interna para entregar o que o Método&nbsp;CARE entrega custaria entre R$
          8.000 e R$ 12.000 por mês.
        </SectionHeadline>
        <div className='flex flex-col gap-2'>
          <p className='text-balance'>
            A aplicação completa do Método&nbsp;CARE, com os quatro pilares, metodologia
            proprietária e acompanhamento contínuo, custa R$ 3.200 por mês.
          </p>
          <p className='font-semibold text-balance'>
            Uma fração do custo. Com a vantagem de uma equipe especializada exclusivamente em
            autoridade médica.
          </p>
        </div>
        <LinkButton variant='solid' href={CONTACT_LINKS.WHATSAPP} target='_blank'>
          Quero começar
        </LinkButton>
      </div>
    </Section>
  )
}
