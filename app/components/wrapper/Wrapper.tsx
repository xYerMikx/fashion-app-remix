import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="px-10">{children}</div>
}
