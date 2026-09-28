import { Section, SectionEyebrow, SectionHeadline } from '@/components/layout/section'
import { Card } from '@/components/ui/card'
import { Gem, List, ListTree, LucideIcon } from 'lucide-react'

type CardProps = {
  id: string
  icon: LucideIcon
  title: string
  text: string
}

const cards: CardProps[] = [
  {
    id: 'card-1',
    icon: Gem,
    title: 'Ultranicho exclusivo',
    text: 'Atendemos apenas médicos. Isso significa que entendemos a linguagem, a ética, o comportamento do paciente e as oportunidades do mercado médico com uma profundidade que agência genérica nunca vai ter.',
  },
  {
    id: 'card-2',
    icon: ListTree,
    title: 'Metodologia própria',
    text: 'O Método\u00A0CARE não é um conjunto de serviços. É uma sequência lógica de etapas com entregas concretas e mensuráveis. Você sabe o que foi feito, o que está sendo feito e o que vem a seguir.',
  },
  {
    id: 'card-3',
    icon: List,
    title: 'Diagnóstico antes de execução',
    text: 'Antes de qualquer estratégia, entendemos o seu negócio. Porque marketing sem diagnóstico é tentativa. E tentativa não escala faturamento.',
  },
]

export function SectionWhyAKAH() {
  return (
    <Section
      className='text-foreground-secondary after:bg-linear-to-t after:from-black/70 after:to-black/30'
      gradient
    >
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow>Por que a AKAH?</SectionEyebrow>
        <SectionHeadline>
          Não somos agência genérica. Somos especialistas em autoridade médica.
        </SectionHeadline>
        <p className='text-balance'>
          Não atendemos todo tipo de médico. Essa escolha é intencional, e é o que nos permite
          entregar o que agência genérica não consegue.
        </p>
        <div className='grid md:grid-cols-3 gap-4 my-5'>
          {cards.map(card => (
            <Card icon={card.icon} key={card.id}>
              <p className='flex flex-col gap-2 text-balance'>
                <span className='block font-semibold'>{card.title}</span>
                <span className='text-foreground-primary'>{card.text}</span>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
