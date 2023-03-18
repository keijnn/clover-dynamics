//import modules
import { useUnit } from 'effector-react'
import { useState } from 'react'

//import entities
import { Card } from '@/entities/card'

//import models
import { onDragOver, onDragStart, onDragEnd } from '@/features/drag-and-drop/model'
import { newCardCreated, tableDeleted } from './model'

//import shared
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

//import types
import { Table as TableProps } from '@/shared/api/types/table'

export const Table = ({ _id, title, cards }: TableProps) => {
  const [value, setValue] = useState('')

  //clear input and create new card
  const handleNewCardTitle = (id: string) => {
    if (value !== '') {
      newCardCreated({ id, title: value })
      setValue('')
    }
  }

  return (
    <div className='h-fit min-w-96 bg-gray-300 text-center rounded-lg '>
      <div className='px-2 h-10 flex justify-between items-center bg-gray-400'>
        <h2 className='text-xl'>{title}</h2>
        <Input value={value} onChange={(event) => setValue(event.target.value)} />
        <Button onClick={() => handleNewCardTitle(_id)}>Add new card</Button>
      </div>
      <div>
        {cards.map((card) => {
          return (
            <Card
              onDragStart={(event) => onDragStart({ event, cardId: card._id, tableId: _id })}
              onDragOver={(event) => onDragOver({ event, cardId: card._id, tableId: _id })}
              onDragEnd={(event) => onDragEnd(event)}
              _id={card._id}
              key={card._id}
              title={card.title}
              date={card.date}
            />
          )
        })}
      </div>
      <div className='px-2 h-10 flex justify-end bg-gray-400'>
        <Button onClick={() => tableDeleted(_id)}>Delete table</Button>
      </div>
    </div>
  )
}
