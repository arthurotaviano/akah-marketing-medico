import { Section, SectionEyebrow, SectionHeadline } from '@/components/layout/section'
import { Card } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/link-button'
import { CONTACT_LINKS } from '@/constants/contact'
import { Crown, Database, Expand, HeartHandshake, LucideIcon } from 'lucide-react'

type CardProps = {
  icon: LucideIcon
  letter: string
  title: string
  text: string
}

const cards: CardProps[] = [
  {
    icon: Database,
    letter: 'C',
    title: 'Coleta de Dados',
    text: 'Antes de qualquer estratégia, entendemos o seu negócio. Quem é o paciente lucrativo, qual procedimento priorizar e onde estão os gargalos de crescimento que você ainda não consegue ver.',
  },
  {
    icon: Crown,
    letter: 'A',
    title: 'Autoridade Digital',
    text: 'Construímos sua presença digital para que o paciente particular chegue na consulta já tendo decidido. Com percepção de valor formada, antes de você abrir a boca.',
  },
  {
    icon: HeartHandshake,
    letter: 'R',
    title: 'Relacionamento e Recorrência',
    text: 'Estruturamos cada ponto de contato entre o interesse e o agendamento. E entre o agendamento e a recorrência. Porque faturamento previsível não é só sobre captar, é sobre reter.',
  },
  {
    icon: Expand,
    letter: 'E',
    title: 'Expansão',
    text: 'Com diagnóstico, autoridade e relacionamento funcionando, chegou a hora de escalar. Metas claras, estratégia de aquisição de particulares e crescimento que não depende de sorte.',
  },
]

export function SectionCARE() {
  return (
    <Section
      className='text-foreground-secondary after:bg-linear-to-t after:from-black/70 after:to-black/30'
      gradient
    >
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow dark>Método CARE™</SectionEyebrow>
        <SectionHeadline>
          A metodologia exclusiva da AKAH para crescimento médico sustentável.
        </SectionHeadline>
        <p className='text-balance'>
          O Método CARE organiza o crescimento do consultório em quatro etapas sequenciais. A ordem
          importa, porque crescimento real é construído em sequência, não com ações isoladas.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
          {cards.map(card => (
            <Card icon={card.icon} key={card.letter}>
              <h3 className='flex flex-col'>
                <span className='font-serif font-semibold text-7xl bg-linear-to-t from-accent-1 to-accent-2 bg-clip-text text-transparent'>
                  {card.letter}
                </span>
                <span className='font-semibold text-foreground-secondary'>{card.title}</span>
              </h3>
              <p className='text-foreground-primary text-balance'>{card.text}</p>
            </Card>
          ))}
        </div>
        <p className='text-balance'>Quatro etapas. Uma sequência lógica. Resultado mensurável.</p>
        <LinkButton variant='solid' href={CONTACT_LINKS.WHATSAPP} target='_blank'>
          Quero entender como o Método CARE se aplica ao meu consultório
        </LinkButton>
      </div>
    </Section>
  )
}
