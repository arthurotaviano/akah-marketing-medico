export function FooterWatermark() {
  return (
    <div className='absolute right-0 -bottom-10 left-0 z-[-1] w-full pointer-events-none select-none' aria-hidden='true'>
      <svg className='w-full h-auto' width='1240' height='264' viewBox='0 0 1240 264' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_52_21)'>
          <rect width='1240' height='263.584' fill='#201E1E' />
          <path fillRule='evenodd' clipRule='evenodd' d='M24.0496 328.999L74.9412 219.333L161.614 263.722L24.0496 328.999Z' fill='url(#paint0_linear_52_21)' />
          <path fillRule='evenodd' clipRule='evenodd' d='M81.7688 204.794L173.375 7.06566L206.449 78.4131L160.102 177.603L282.388 240.685L323.731 328.999L179.468 255.042L81.7688 204.794Z' fill='white' />
          <path d='M1143.23 191.108H1044.81V145.263H1143.23V191.108ZM972.671 328.644V7.72673H1018.02V328.644H972.671ZM1171.05 7.72673H1216.91V328.644H1171.05V191.108H1170.02V145.263H1171.05V7.72673Z' fill='white' />
          <path d='M776.793 0L929.315 328.644H879.848L848.932 259.619H848.416L776.793 101.478L704.654 259.619L673.737 328.644H624.271L776.793 0Z' fill='white' />
          <path d='M460.453 164.837L609.368 328.644H548.05L418.2 186.987V328.644H372.855V7.72673H418.2V148.869L540.321 7.72673H601.639L460.453 164.837Z' fill='white' />
          <rect width='1240' height='329' fill='url(#paint1_linear_52_21)' />
        </g>
        <defs>
          <linearGradient id='paint0_linear_52_21' x1='147.772' y1='219.333' x2='38.1061' y2='329.214' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#CF2948' />
            <stop offset='1' stopColor='#F37A45' />
          </linearGradient>
          <linearGradient id='paint1_linear_52_21' x1='620' y1='63.9722' x2='620' y2='329' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#201E1E' />
            <stop offset='0.440421' stopColor='#201E1E' stopOpacity='0.9' />
            <stop offset='1' stopColor='#201E1E' stopOpacity='0.9' />
          </linearGradient>
          <clipPath id='clip0_52_21'>
            <rect width='1240' height='263.584' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
