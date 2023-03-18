//import modules
import { Header } from '@/widgets/header'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <div style={{ height: 'calc(100% - 4rem)' }}>{children}</div>
    </div>
  )
}
