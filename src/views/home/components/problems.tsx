import {
  Section,
  SectionEyebrow,
  SectionHeadline,
  SectionHeadlineHighlight,
} from '@/components/layout/section'
import { Card } from '@/components/ui/card'
import { BanknoteArrowUp, CircleOff, HandCoins, LucideIcon } from 'lucide-react'

type CardProps = {
  id: string
  icon: LucideIcon
  highlight: string
  text: string
}

const cards: CardProps[] = [
  {
    id: 'card-1',
    icon: HandCoins,
    highlight: 'Você já investiu em agência e não viu o faturamento mudar.',
    text: 'Posts bonitos, calendário cheio, agenda igual.',
  },
  {
    id: 'card-2',
    icon: CircleOff,
    highlight: 'Você depende de indicação para crescer.',
    text: 'Quando ela para, o crescimento para junto.',
  },
  {
    id: 'card-3',
    icon: BanknoteArrowUp,
    highlight: 'Você sabe que pode atender mais particulares e cobrar mais.',
    text: 'Mas não sabe por onde começar.',
  },
]

export function SectionProblems() {
  return (
    <Section>
      <div className='content flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow>Você se reconhece nessa situação?</SectionEyebrow>
        <SectionHeadline>
          Você é um médico excelente. O problema é que o mercado{' '}
          <SectionHeadlineHighlight>ainda não percebe isso.</SectionHeadlineHighlight>
        </SectionHeadline>
        <div className='grid md:grid-cols-3 gap-4 my-5'>
          {cards.map(card => (
            <Card icon={card.icon} key={card.id}>
              <p className='text-balance'>
                <span className='font-semibold text-foreground-secondary'>{card.highlight}</span>{' '}
                {card.text}
              </p>
            </Card>
          ))}
        </div>
        <p className='text-balance'>
          Esses três problemas têm uma raiz comum: falta de estrutura. E é exatamente isso que o
          Método&nbsp;CARE resolve.
        </p>
      </div>
    </Section>
  )
}
