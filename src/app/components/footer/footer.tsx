import { FooterBrand } from './footer-brand'
import { FooterFoot } from './footer-foot'
import { FooterLinks } from './footer-links'
import { FooterWatermark } from './footer-watermark'

export function Footer() {
  return (
    <footer className='py-10 text-center text-xs md:text-sm'>
      <div className='content relative flex flex-col items-center gap-8 md:gap-10'>
        <FooterBrand />
        <FooterLinks />
        <FooterFoot />
        <FooterWatermark />
      </div>
    </footer>
  )
}
