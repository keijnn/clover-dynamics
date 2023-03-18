//improt modules
import { DragEventHandler } from 'react'

//import types
import { Card as CardType } from '@/shared/api/types/card'

//import libs
import { timeTransform } from '@/shared/lib/time-transform'


interface CardProps extends CardType {
  onDragStart: (event: any) => void
  onDragOver: (event: any) => void
  onDragEnd: (event: any) => void
}

export const Card = ({ title, date, onDragStart, onDragOver, onDragEnd }: CardProps) => {
  return (
    <div
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      className='flex justify-between m-3 border-gray-300 border-2 p-3 rounded-lg cursor-grab hover:bg-gray-400'
    >
      <h2>{title}</h2>
      <p>{timeTransform(date)}</p>
    </div>
  )
}
