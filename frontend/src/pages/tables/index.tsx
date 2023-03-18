//import modules
import { useList } from 'effector-react'
import { createRoute } from 'atomic-router'
import { useState } from 'react'

//import model
import { $tables, newTableCreated } from './model'

//import widgets
import { Table } from '@/widgets/table'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

const route = createRoute()

const Page = () => {
  const [value, setValue] = useState('')

  const tablesList = useList($tables, (table) => {
    return <Table key={table._id} _id={table._id} title={table.title} cards={table.cards} />
  })

  const handleTableTitle = () => {
    if (value !== '') {
      newTableCreated(value)
      setValue('')
    }
  }
  return (
    <div className='text-center'>
      <div className='flex px-10 justify-between items-center'>
        <h1 className='text-3xl p-2'>Your Boadrd!</h1>
        <div className='bg-gray-300 px-1'>
          <Input value={value} onChange={(event) => setValue(event.target.value)} />
          <Button onClick={handleTableTitle}>Add new table!</Button>
        </div>
      </div>
      <div className='m-10 grid grid-cols-3 gap-4'>{tablesList && tablesList}</div>
    </div>
  )
}

export const TablesPage = {
  route,
  Page,
}
