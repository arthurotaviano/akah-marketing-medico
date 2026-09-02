type HeadlineProps = { children: React.ReactNode }

export function Headline({ children }: HeadlineProps) {
  return (
    <h2 className='font-serif font-semibold text-balance text-3xl md:text-4xl lg:text-6xl leading-none'>
      {children}
    </h2>
  )
}
