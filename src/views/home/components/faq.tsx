import {
  Section,
  SectionEyebrow,
  SectionHeadline,
  SectionHeadlineHighlight,
} from '@/components/layout/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    value: 'question-1',
    trigger: 'A AKAH atende médicos de qualquer especialidade?',
    content:
      'Sim. Trabalhamos com médicos de diferentes especialidades, desde que se encaixem no perfil do nosso ICP: consultório estruturado, técnica diferenciada e objetivo de crescimento previsível.',
  },
  {
    value: 'question-2',
    trigger: 'Quanto tempo leva para ver resultado?',
    content:
      'Depende do ponto de partida do consultório. Os primeiros resultados mensuráveis costumam aparecer entre o segundo e o terceiro mês, especialmente nos pilares de autoridade digital e relacionamento.',
  },
  {
    value: 'question-3',
    trigger: 'Como funciona o início do trabalho?',
    content:
      'Começamos com a Coleta de Dados, a primeira etapa do Método\u00A0CARE. A gente mergulha no seu consultório antes de qualquer estratégia. É a partir desse diagnóstico que tudo começa.',
  },
]

export function SectionFAQ() {
  return (
    <Section>
      <div className='content relative z-2 flex flex-col items-center gap-4 md:gap-8 text-center'>
        <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
        <SectionHeadline>
          <SectionHeadlineHighlight>Dúvidas comuns</SectionHeadlineHighlight> antes de começar.
        </SectionHeadline>
        <Accordion className='max-w-2xl text-left' multiple>
          {items.map(item => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
