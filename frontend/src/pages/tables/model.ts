//import modules
import { restore, createEvent, createEffect, sample } from 'effector'
import { v4 } from 'uuid'

//import api
import { getTablesList } from '@/shared/api/get-tables-list'
import { createTable } from '@/shared/api/create-table'

//import types
import { Table } from '@/shared/api/types/table'

//get all tables from api
export const getTablesListFx = createEffect(getTablesList)

//send new table to api
const newTableCreatedFx = createEffect((table: Table) => {
  return createTable(table)
})

//create new table button
export const newTableCreated = createEvent<string>()

//create store with all tables
export const $tables = restore(getTablesListFx.doneData, [])

sample({
  clock: newTableCreated,
  fn: (newTableTitle) => {
    const newTable = {
      _id: v4(),
      title: newTableTitle,
      cards: [],
    }
    return newTable
  },
  target: newTableCreatedFx,
})

sample({
  clock: newTableCreatedFx.doneData,
  source: $tables,
  fn: (tables, newTable) => tables.concat(newTable),
  target: $tables,
})

getTablesListFx()
