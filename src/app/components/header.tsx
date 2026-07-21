import { ArrowUpRight } from 'lucide-react'

export function Header() {
  return (
    <header className='absolute top-0 right-0 left-0 z-9999 py-5 w-full min-w-[320px]'>
      <div className='content flex justify-between items-center gap-5'>
        <div className='flex items-center gap-4'>
          <div className='flex justify-center items-center w-8 h-8 bg-white'>
            <svg width='21' height='22' viewBox='0 0 21 22' fill='none' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Logotipo da AKAH'>
              <path fillRule='evenodd' clipRule='evenodd' d='M0 21.9852L3.46988 14.4933L9.37933 17.5257L0 21.9852Z' fill='url(#paint0_linear_47_125)' />
              <path fillRule='evenodd' clipRule='evenodd' d='M3.92419 13.5122L10.1824 0L12.4418 4.87568L9.27561 11.6541L17.6297 15.9649L20.454 22L10.5986 16.9459L3.92419 13.5122Z' fill='#201E1E' />
              <defs>
                <linearGradient id='paint0_linear_47_125' x1='8.43561' y1='14.4933' x2='0.943721' y2='21.9852' gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#CF2948' />
                  <stop offset='1' stopColor='#F37A45' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className='text-xs tracking-wider uppercase'>
            AKAH<span className='max-[425px]:sr-only'> • Marketing Médico</span>
          </h1>
        </div>
        <a href='https://wa.me/+5547988234913' target='_blank' className='inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 md:px-5 py-1.5 md:py-2 bg-white hover:bg-white/90 transition-colors ease-in text-background text-sm font-medium'>
          Fale conosco
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  )
}
