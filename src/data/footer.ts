import { CONTACT_INFO, CONTACT_LINKS } from '@/constants/contact'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'

type LinkProps = {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}

export const links: LinkProps[] = [
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
