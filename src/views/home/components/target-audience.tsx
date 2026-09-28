import {
  Section,
  SectionEyebrow,
  SectionHeadline,
  SectionHeadlineHighlight,
} from '@/components/layout/section'
import { Card } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
import { CONTACT_LINKS } from '@/constants/contact'
import { BanknoteArrowDown, ChartNoAxesCombined, LucideIcon, ThumbsUp } from 'lucide-react'

type CardProps = {
  id: string
  icon: LucideIcon
  text: string
}

const cards: CardProps[] = [
  {
    id: 'card-1',
    icon: ThumbsUp,
    text: 'Tem técnica diferenciada ou protocolos únicos.',
  },
  {
    id: 'card-2',
    icon: BanknoteArrowDown,
    text: 'Já investe em marketing ou gera conteúdo, mas não vê o resultado refletido no faturamento.',
  },
  {
    id: 'card-3',
    icon: ChartNoAxesCombined,
    text: 'Quer crescimento previsível e parar de depender de indicação para fechar o mês.',
  },
]

export function SectionTargetAudience() {
  return (
    <Section>
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow>Para quem faz sentido</SectionEyebrow>
        <SectionHeadline>
          O Método CARE foi criado para um{' '}
          <SectionHeadlineHighlight>perfil específico de médico.</SectionHeadlineHighlight>
        </SectionHeadline>
        <p className='text-balance'>
          Não atendemos todo tipo de médico. Essa escolha é intencional, e é o que nos permite
          entregar o que agência genérica não consegue.
        </p>
        <div className='grid md:grid-cols-3 gap-4 my-5'>
          {cards.map(card => (
            <Card icon={card.icon} key={card.id}>
              <p className='text-balance'>{card.text}</p>
            </Card>
          ))}
        </div>
        <p className='text-balance'>
          Se você se reconheceu aqui, a conversa começa pelo botão abaixo.
        </p>
        <LinkButton variant='solid' href={CONTACT_LINKS.WHATSAPP} target='_blank'>
          Quero uma análise do meu&nbsp;consultório
        </LinkButton>
      </div>
    </Section>
  )
}
