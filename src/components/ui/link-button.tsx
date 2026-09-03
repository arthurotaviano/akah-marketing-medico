import { ArrowUpRight } from 'lucide-react'

type LinkButtonProps = {
  variant?: 'gradient' | 'solid'
  href: string
  target?: '_blank'
  children: React.ReactNode
}

const variants = {
  gradient:
    'bg-linear-to-bl from-accent-1 hover:from-accent-2 to-accent-2 hover:to-accent-1 text-white',
  solid: 'bg-white hover:bg-white/90 text-background',
}

export function LinkButton({ variant = 'gradient', href, target, children }: LinkButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-5 py-2 text-sm md:text-base font-medium ${variants[variant]}`}
      href={href}
      target={target}
    >
      {children}
      <ArrowUpRight size={16} />
    </a>
  )
}
