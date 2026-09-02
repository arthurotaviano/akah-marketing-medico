type EyebrowProps = { children: React.ReactNode }

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className='whitespace-nowrap rounded-full px-3 py-1 bg-background/50 text-white text-xs tracking-wider uppercase'>
      {children}
    </div>
  )
}
