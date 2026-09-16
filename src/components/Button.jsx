import { motion } from 'framer-motion'

export default function Button({ href, children, shape = 'full', className = '' }) {
  const shapeClass = shape === 'full' ? 'rounded-full' : 'rounded-lg'

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase ${shapeClass} ${className}`}
    >
      {children}
    </motion.a>
  )
}
