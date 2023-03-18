//import modules
import clsx from 'clsx'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}


export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx('bg-gray-500 p-1 rounded-lg cursor-pointer hover:bg-gray-600', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
