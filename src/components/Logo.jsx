export default function Logo({ size = 'sm', className = '' }) {
  const outer = size === 'lg' ? 'h-10 w-10' : 'h-7 w-7'
  const inner = size === 'lg' ? 'h-5 w-5' : 'h-3 w-3'

  return (
    <span className={`relative inline-flex items-center justify-center ${outer} ${className}`}>
      <span className={`absolute inset-0 rounded-full border-2 border-foreground/60`} />
      <span className={`${inner} rounded-full border border-foreground/60`} />
    </span>
  )
}
