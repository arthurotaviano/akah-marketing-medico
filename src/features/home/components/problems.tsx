import {
  Section,
  SectionEyebrow,
  SectionHeadline,
  SectionHeadlineHighlight,
} from '@/components/layout/section'
import { Card } from '@/components/ui/card'
import { BanknoteArrowUp, CircleOff, HandCoins } from 'lucide-react'

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
          <Card icon={HandCoins}>
            <p className='text-balance'>
              <span className='font-semibold text-foreground-secondary'>
                Você já investiu em agência e não viu o faturamento mudar.
              </span>{' '}
              Posts bonitos, calendário cheio, agenda igual.
            </p>
          </Card>
          <Card icon={CircleOff}>
            <p className='text-balance'>
              <span className='font-semibold text-foreground-secondary'>
                Você depende de indicação para crescer.
              </span>{' '}
              Quando ela para, o crescimento para junto.
            </p>
          </Card>
          <Card icon={BanknoteArrowUp}>
            <p className='text-balance'>
              <span className='font-semibold text-foreground-secondary'>
                Você sabe que pode atender mais particulares e cobrar mais.
              </span>{' '}
              Mas não sabe por onde começar.
            </p>
          </Card>
        </div>
        <p className='text-balance'>
          Esses três problemas têm uma raiz comum: falta de estrutura. E é exatamente isso que o
          Método CARE resolve.
        </p>
      </div>
    </Section>
  )
}
