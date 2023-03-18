//import modules
import { sample, createStore, createEvent, createEffect, restore } from 'effector'
import { v4 } from 'uuid'

//import models
import { $tables } from '@/pages/tables/model'

//import api
import { updateTable } from '@/shared/api/update-table'
import { deleteTable } from '@/shared/api/delete-table'

//import types
import { Card } from '@/shared/api/types/card'

//update table data
const updateTableByIdFx = createEffect(updateTable)

//delete table data
const deleteTableByIdFx = createEffect(deleteTable)

//when create button pressed
export const newCardCreated = createEvent<{ id: string; title: string }>()

//when delete button pressed
export const tableDeleted = createEvent<string>()

//new card data
export const $newCard = createStore<Card>({
  _id: '123',
  title: '1',
  date: new Date().getTime(),
}).on(newCardCreated, (_, { title }) => {
  const card = { _id: v4(), title, date: new Date().getTime() }
  return card
})

//send data to api
sample({
  clock: tableDeleted,
  fn: (id) => id,
  target: deleteTableByIdFx,
})

//delete table from store
sample({
  source: $tables,
  clock: deleteTableByIdFx.done,
  fn: (tables, { params: id }) => {
    return tables.filter((table) => table._id !== id)
  },
  target: $tables,
})

//when card created get card data, all tables and table id
const cardCreated = sample({
  clock: newCardCreated,
  source: { newCard: $newCard, tables: $tables },
  fn: ({ newCard, tables }, { id }) => {
    return { newCard, tables, id }
  },
})

//change table local
sample({
  clock: cardCreated,
  fn: ({ newCard, tables, id }) => {
    return tables.map((table) => {
      if (table._id === id) {
        return { ...table, cards: [...table.cards, newCard] }
      }
      return table
    })
  },
  target: $tables,
})

//change table global
sample({
  clock: cardCreated,
  fn: ({ newCard, tables, id }) => {
    const tableIndex = tables.findIndex((table) => table._id === id)
    let table = tables[tableIndex]
    table = { ...table, cards: [...table.cards, newCard] }
    return { id, table }
  },
  target: updateTableByIdFx,
})
