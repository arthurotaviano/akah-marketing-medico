import { Section, SectionHeadline } from '@/components/layout/section'
import { LinkButton } from '@/components/ui/link-button'
import { CONTACT_LINKS } from '@/constants/contact'

export function SectionCTA() {
  return (
    <Section className='text-foreground-secondary' gradient>
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionHeadline>Seu consultório tem o potencial. A AKAH tem a estrutura.</SectionHeadline>
        <div className='flex flex-col gap-2'>
          <p className='text-balance'>
            Começamos com uma conversa de 30 minutos, sem custo e sem compromisso. Você entende como
            o Método&nbsp;CARE se aplica ao seu momento, e decide se faz sentido avançar.
          </p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <LinkButton variant='solid' href={CONTACT_LINKS.WHATSAPP} target='_blank'>
            Quero conversar com a AKAH
          </LinkButton>
          <p className='mx-auto max-w-xs text-xs text-balance'>
            Atendemos um número limitado de médicos por vez para garantir a qualidade da entrega.
          </p>
        </div>
      </div>
    </Section>
  )
}
