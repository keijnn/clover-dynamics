//import types
import { Table } from "./types/table"

export const deleteTable = async (id: string): Promise<Table> => {
  const url = 'http://localhost:3000/api/tables/'
  const req = await fetch(url + id, {
    method: 'Delete',
  })
  if (!req.ok) throw req
  return req.json()
}
