//import modules
import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common'

//import service
import { TableService } from './table.service'

//import types
import { Table } from './interfaces/table.interface'
import { CreateTableDto } from './dto/create-table.dto'
import { UpdateTableDto } from './dto/update-table.dto'

@Controller('tables')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  findAll(): Promise<Table[]> {
    return this.tableService.findAll()
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
    return this.tableService.create(createTableDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.tableService.update(id, updateTableDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tableService.delete(id)
  }
}
