//import modules
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link as LinkModule } from 'atomic-router-react'

interface LinkProps {
  children: ReactNode
  className?: string
  url: string
}

export const Link = ({ children, className, url }: LinkProps) => {
  return (
    <LinkModule
      className={clsx('bg-green-300 p-2 rounded-lg cursor-pointer mx-3', className)}
      to={url}
    >
      {children}
    </LinkModule>
  )
}
