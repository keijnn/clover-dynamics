//import modules
import { restore, sample, createEvent, createEffect } from 'effector'

//import models
import { $tables } from '@/pages/tables/model'

//import api
import { updateTable } from '@/shared/api/update-table'

const updateTableFx = createEffect(updateTable)

export const onDragStart = createEvent<{
  event?: any
  cardId: string
  tableId: string
}>()
export const onDragOver = createEvent<{
  event?: any
  cardId: string
  tableId: string
}>()
export const onDragEnd = createEvent<any>()

const $overData = restore<{
  event?: any
  cardId: string
  tableId: string
}>(onDragOver, { cardId: '1', tableId: '1' })
const $startData = restore<{
  event?: any
  cardId: string
  tableId: string
}>(onDragStart, { cardId: '1', tableId: '1' })

//DragEventDrop
const dragEventEnd = sample({
  clock: onDragEnd,
  source: { overData: $overData, startData: $startData, tables: $tables },
  fn: ({ overData, startData, tables }) => {
    const tableIndexStart = tables.findIndex((table) => table._id === startData.tableId)
    const tableIndexOver = tables.findIndex((table) => table._id === overData.tableId)
    const findCard = tables[tableIndexStart].cards.find((card) => card._id === startData.cardId)
    const filteredTables = tables.map((table) => {
      if (table._id === overData.tableId) {
        if (findCard !== undefined) {
          return { ...table, cards: [...table.cards, findCard] }
        }
      }
      return table
    })
    return { filteredTables, id: overData.tableId, table: filteredTables[tableIndexOver] }
  },
})

//change table global
sample({
  clock: dragEventEnd,
  fn: ({ id, table }) => {
    const newTable = { id, table }
    return newTable
  },
  target: updateTableFx,
})

//change table local
sample({
  clock: dragEventEnd,
  fn: ({ filteredTables }) => {
    return filteredTables
  },
  target: $tables,
})

//DragEventStart
const dragEventStart = sample({
  clock: onDragEnd,
  source: { startData: $startData, tables: $tables },
  fn: ({ startData, tables }) => {
    const tableIndexStart = tables.findIndex((table) => table._id === startData.tableId)
    let newTable = tables[tableIndexStart]
    const newTableCards = newTable.cards.filter((card) => card._id !== startData.cardId)
    newTable = { ...newTable, cards: newTableCards }
    const filteredTables = tables.map((table) => {
      if (table._id === startData.tableId) {
        return { ...table, cards: table.cards.filter((card) => card._id !== startData.cardId) }
      }
      return table
    })
    return { filteredTables, id: startData.tableId, table: newTable }
  },
})

//change table global
sample({
  clock: dragEventStart,
  fn: ({ id, table }) => {
    const newTable = { id, table }
    return newTable
  },
  target: updateTableFx,
})

//change table local
sample({
  clock: dragEventStart,
  fn: ({ filteredTables }) => {
    return filteredTables
  },
  target: $tables,
})
