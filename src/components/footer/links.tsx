import { links } from '@/data/footer'

export function Links() {
  return (
    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-6'>
      {links.map(link => (
        <a
          key={link.name}
          className='group flex items-center gap-1.5'
          href={link.href}
          target='_blank'
        >
          <span>
            <span aria-hidden='true'>
              <link.icon className='size-3 md:size-3.5 fill-accent-2' />
            </span>
            <span className='sr-only'>{link.name}</span>
          </span>
          <span className='text-foreground-secondary group-hover:underline'>{link.label}</span>
        </a>
      ))}
    </div>
  )
}
