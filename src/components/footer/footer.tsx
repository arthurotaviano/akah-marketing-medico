import { Brand } from './brand'
import { Foot } from './foot'
import { Links } from './links'
import { Watermark } from './watermark'

export function Footer() {
  return (
    <footer className='py-10 text-center text-xs md:text-sm'>
      <div className='content relative flex flex-col items-center gap-8 md:gap-10'>
        <Brand />
        <Links />
        <Foot />
        <Watermark />
      </div>
    </footer>
  )
}
