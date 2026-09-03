import { LucideIcon } from 'lucide-react'

type CardProps = {
  icon: LucideIcon
  children: React.ReactNode
}

export function Card({ icon: Icon, children }: CardProps) {
  return (
    <div className='flex flex-col gap-4 rounded-2xl border border-border-card max-md:mx-auto p-6 w-full max-md:max-w-93.75 bg-background-card text-left'>
      <div
        className='flex justify-center items-center rounded-full w-10 h-10 bg-linear-to-tr from-accent-1 to-accent-2 text-foreground-secondary'
        aria-hidden='true'
      >
        <Icon size={20} />
      </div>
      <div>{children}</div>
    </div>
  )
}
