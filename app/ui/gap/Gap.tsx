import cn from 'classnames'
import { GapSizes } from 'entities/sizes'

interface GapProps {
  size: GapSizes
  direction?: 'vertical' | 'horizontal'
  className?: string
}

export const Gap = ({ size, direction = 'vertical', className }: GapProps) => {
  const gapClass = cn(
    direction === 'vertical'
      ? `h-${size} w-full overflow-hidden`
      : `w-${size} h-full`,
    className,
    'block flex-shrink-0'
  )

  return <div className={gapClass} aria-hidden="true" />
}
