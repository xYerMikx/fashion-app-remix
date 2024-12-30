import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  rightAddons?: ReactNode
  variant: 'primary'
}

export const Button = ({
  text,
  variant,
  rightAddons,
  className,
  ...buttonProps
}: ButtonProps) => {
  return (
    <div>
      <button
        className={cn(
          `bg-${variant}`,
          'text-white tracking-wider text-2xl p-6',
          className
        )}
        {...buttonProps}
      >
        {text}
      </button>
      {rightAddons}
    </div>
  )
}
