//import types
import { Table } from './types/table'

export const createTable = async (table: Table): Promise<Table> => {
  const url = 'http://localhost:3000/api/tables/'
  const req = await fetch(url, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(table),
  })
  if (!req.ok) throw req
  return req.json()
}
