import { WHATSAPP_URL } from '@/lib/constants'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'

interface LinksProps {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

const links: LinksProps[] = [
  {
    name: 'Instagram',
    icon: SiInstagram,
    href: 'https://www.instagram.com/akahmarketingmedico',
    label: '@akahmarketingmedico',
  },
  {
    name: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: SiWhatsapp,
    label: '(47) 98823-4913',
  },
]

export function FooterLinks() {
  return (
    <div className='flex flex-col items-center gap-2'>
      {links.map(link => (
        <a key={link.name} className='flex items-center gap-1.5 md:gap-2' href={link.href} target='_blank'>
          <span>
            <span aria-hidden='true'>
              <link.icon className='size-3 md:size-3.5 fill-accent-2' />
            </span>
            <span className='sr-only'>{link.name}</span>
          </span>
          <span className='text-foreground-secondary'>{link.label}</span>
        </a>
      ))}
    </div>
  )
}
