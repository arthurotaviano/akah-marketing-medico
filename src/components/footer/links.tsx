import { CONTACT_INFO, CONTACT_LINKS } from '@/constants/contact'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'

type LinkProps = {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

const links: LinkProps[] = [
  {
    name: 'Instagram',
    icon: SiInstagram,
    href: CONTACT_LINKS.INSTAGRAM,
    label: `@${CONTACT_INFO.INSTAGRAM_USER}`,
  },
  {
    name: 'WhatsApp',
    href: CONTACT_LINKS.WHATSAPP,
    icon: SiWhatsapp,
    label: CONTACT_INFO.WHATSAPP,
  },
]

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
