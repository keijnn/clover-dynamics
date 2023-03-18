//import types
import { Table } from "./types/table"

export const getTablesList = async (): Promise<Table[]> => {
  const url = 'http://localhost:3000/api/tables/'
  const req = await fetch(url)
  if (!req.ok) throw req
  return req.json()
}
