import type { ReactNode, ElementType } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  delay?: 1 | 2 | 3 | 4
  className?: string
}

export default function Reveal({ children, as: Tag = 'div', delay, className = '' }: RevealProps) {
  const ref = useReveal<HTMLElement>()
  const delayClass = delay ? ` reveal-delay-${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`}>
      {children}
    </Tag>
  )
}
