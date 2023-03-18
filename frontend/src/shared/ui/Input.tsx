//import modules
import clsx from 'clsx'
import { ChangeEvent } from 'react'

interface InputProps {
  label?: string
  value?: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ label, value, className, onChange }: InputProps) => {
  return (
    <input defaultValue={label} value={value} className={clsx('px-1', className)} onChange={onChange} />
  )
}
