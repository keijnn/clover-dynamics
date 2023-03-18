//import types
import { Table } from './types/table'

export const updateTable = async ({id, table} : {id: string, table: Table}): Promise<Table> => {
  const url = 'http://localhost:3000/api/tables/'
  const req = await fetch(url + id, {
    method: 'Put',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(table),
  })
  if (!req.ok) throw req
  return req.json()
}
