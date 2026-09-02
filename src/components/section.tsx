import { twMerge } from 'tailwind-merge'

type SectionProps = {
  gradient?: boolean
  className?: string
  children: React.ReactNode
}

type EyebrowSectionProps = {
  dark?: boolean
  children: React.ReactNode
}

export function Section({ gradient, className, children }: SectionProps) {
  return (
    <section
      className={twMerge(
        `py-18 md:py-24 lg:py-30 ${gradient ? 'relative bg-linear-to-tr from-accent-1 to-accent-2 after:content-[] after:absolute after:inset-0 after:z-1 after:w-full after:h-full after:bg-black/15' : null}`,
        className
      )}
    >
      {children}
    </section>
  )
}

export function SectionEyebrow({ dark, children }: EyebrowSectionProps) {
  return (
    <div
      className={`whitespace-nowrap rounded-full px-3 py-1 ${dark ? 'bg-background/50' : 'bg-white/15'} text-white text-xs tracking-wider uppercase`}
    >
      {children}
    </div>
  )
}

export function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='font-serif font-semibold text-balance text-3xl md:text-4xl lg:text-6xl leading-none'>
      {children}
    </h2>
  )
}

export function SectionHeadlineHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      className='bg-linear-to-tr from-accent-1 to-accent-2
      bg-clip-text text-transparent'
    >
      {children}
    </span>
  )
}
